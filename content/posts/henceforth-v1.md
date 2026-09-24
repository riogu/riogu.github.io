+++
date = '2026-09-23T08:13:06+01:00'
draft = false
title = "Henceforth - SSA compiler for an imperative stack-based language"
tags = [ 'Rust', 'SSA', 'Compiler Optimizations', 'Stack-based languages']
summary = """Notes about a statically typed stack-based language that bridges imperative
semantics with stack semantics, implements an optimizing SSA middle end, and more."""

[build]
  list = 'never'
  render = 'always'
+++

## Overview

After working on the [Henceforth](https://github.com/riogu/henceforth) compiler on and off for about a
year, my friend [João Novo](https://github.com/joao-novo) and I have organized our work and released a
v1.0.

Henceforth is a [stack-based language](https://en.wikipedia.org/wiki/Stack-oriented_programming) where
stack effects and types are verified at compile time rather than relying on runtime features, which are
commonly present in stack-based languages in order to resolve some challenges{{% sidenote side="right"
%}} In Forth, for example, a loop can change the depth of the stack however it wants, so the stack depth
depends on the trip count. If you allowed that in a compiled language, you wouldn't know how many
elements to return from a function! {{% /sidenote %}} that arise with the paradigm. A code example would
look something like this:

```rust
fn pow: (/* base */ i32 /* exp */ i32) -> (i32) {
    let exp: i32;  &= exp;   // `&=` pops the top of the stack, so the
    let base: i32; &= base;  // last argument binds first

    let i: i32; @(0) &= i;   // `@( ... )` is a stack expression, in postfix

    @(1)  // begin accumulating the result on the stack
    while @(i exp !=) {
        @(base *)       // consume the accumulator, multiply, push it back
        @(i 1 +) &= i;  // i += 1
    }
    // the accumulator is still sitting on the stack, and whatever
    // the body leaves behind is the return value
}

// called like:
@(2 10) &> pow;
```
{{< floatcode lang="rust" side="left" offset="-25rem"  caption="For those more used to stack-based languages, this function could also be written using stack operations:" >}}
fn pow: (i32 i32) -> (i32) {
    let i: i32; @(0) &= i; 
    @(1 @rrot)
    while @(@dup i !=) {
        @(@rrot @dup @rot *)
        @(@rrot @swap)
        @(i 1 +) &= i;
    }
    @pop @pop
}
{{< /floatcode >}}


To showcase the language used in practice, we have also implemented Tetris, which you can find [in the
testsuite](https://github.com/riogu/henceforth/blob/main/tests/compile_tests/tetris.hfs):

<video autoplay loop muted playsinline
       style="display:block; margin:0 auto; width:32rem; max-width:100%; height:auto;">
  <source src="/videos/tetris.mp4" type="video/mp4">
</video>

### Project goals

With these examples, people familiar with other stack-based languages will notice a strong presence of
imperative elements here that is largely uncommon in other languages with this paradigm. There are a
couple of reasons for that:

First, stack languages usually ask you to adopt the paradigm all at once, largely without
compromising with other common paradigms, and that makes it difficult to introduce a
large number of people that come from either imperative or functional languages to stack-based languages.
Secondly, these people tend to find stack languages difficult to read and too implicit.

From that, we decided to make a language that bridges the gap between an imperative
language (such as C) and something like Forth.
The language allows people to experiment with the main features of a stack language (such as explicit
data flow, multiple returns, values that don't need names) as first class features that come in a
familiar format.


Personally, another goal I had for the project this time around was to try to write a scalable and modular
compiler{{% sidenote side="left" %}}
While implementing this compiler I went through literature like [Cooper & Torczon's Engineering a
Compiler](https://www.google.pt/books/edition/Engineering_a_Compiler/xcJrEAAAQBAJ?hl=pt-PT&gbpv=0), as I
wanted it to be a more informed and structured project than last time.
{{% /sidenote  %}}, rather than solely focusing on language features. This meant simplifying the frontend language
in some places and leaving interesting features for later releases in order to actually complete an
initial minimal version (which still took a year!).

In my [previous compiler](https://github.com/riogu/fumo-compiler), I had to redo some sections many times
as I discovered the challenges and needs of each part of the compiler (such as semantic analysis,
lowering to a CFG, etc). The codebase itself also made a lot of assumptions about what previous phases of
the compiler did during a pass, and that meant that returning to it after a few months was very
difficult, as a lot of these assumptions weren't explicit or enforced.

<!-- Overall, the project is split into 3 main sub-projects: -->
<!-- - The frontend language (Henceforth) with its AST and type/semantic analysis -->
<!-- - The middle end optimization and SSA IR infrastructure -->
<!-- - The testing infrastructure and what it implements to support our SSA IR -->


### Why Cranelift instead of LLVM

While the project provides an interpreter (mainly for testing purposes), Henceforth primarily targets
an AOT [Cranelift](https://cranelift.dev) backend.
<!-- This decision was quite central to how a lot of things were implemented, and resulted in interesting -->
<!-- challenges with how the compiler handles stack logic internally, and also guided some decisions around -->
<!-- what language features to support. -->

Unlike last time, I chose not to use LLVM as a target. First of all, Henceforth is written in Rust, and
we were interested in using a Rust-native backend. Secondly, we wanted a minimal dependency that could
support various different targets, and wanted the project to remain small where possible. Additionally,
Henceforth implements its own optimizing SSA middle end, so we would have turned off most of LLVM's
optimizations anyway.

Cranelift acts as a convenient way to allow us to compile to multiple targets while still letting
Henceforth implement its own middle end optimizations on top of it.
In the future it would be nice to get rid of Cranelift as a dependency as well, but that would require a
lot more time and work.


## The language
{{% sidetext side="right" offset="2em" %}}
Those interested in knowing more about the language in detail can check out the [Language Reference & Getting
Started Guide](https://riogu.github.io/henceforth/).
{{% /sidetext  %}}
Henceforth supports move `&` vs copy `:` operators from the stack on assignments and function calls. These decide if a
value on the stack should be copied or popped. It is the main mechanism to interact
between the imperative and the stack-based side of the language, and pass along values.

```rust
let a: i32; @(10) &= a;  // this pops `10` from the stack 
let c: i32; @(a)  := c;  // stack value is copied, the stack still has the value
let b: i32;       &= b;  //  we pop `a` from the stack (which is now empty)
```

Function parameters specify how much of the stack of the caller we can access when calling it. The
return type specifies the state the stack has to be in after the function returns.
```rust 
fn divmod: (i32 i32) -> (i32 i32) {
    let d: i32; &= d;
    let n: i32; &= n;
    @(n d /)  // quotient
    @(n d %)  // remainder
}

fn main: () -> () {
    @(17 5) &> divmod;
    let rem: i32;  &= rem;  // top of the stack binds first
    let quot: i32; &= quot;
}
```

<a id="stack-depth-example"></a>
The following example doesn't compile: Henceforth has a lot of logic to verify at compile time
that all control flow constructs agree on what the types and length of the stack is on all paths, and it
also checks that paths that return match the function signature.
```rust
fn f: (bool bool bool) -> (i32) {
    let cond1: bool; &= cond1;
    let cond2: bool; &= cond2;
    let cond3: bool; &= cond3;
    if @(cond1) {
        @(1)
    } else if @(cond2) {
        if @(cond3) {
            @(1.5)    // leaves the wrong type, so it is invalid
            return;   // the return keyword lets functions end early
        }
        @(1)
    } else {
        @(1 2)  // leaves one value too many
    }
}
```

Output:
```j
error: expected i32 on stack for return, found f32
  --> tests/compile_tests/f.hfs:10:13
   |
10 |             return;   // the return keyword lets functions end early
   |             ^^^^^^
   |
error: expected a stack depth of 1, found a stack depth of 2
  --> tests/compile_tests/f.hfs:14:9
   |
14 |         @(1 2)  // leaves one value too many
   |         ^^^^^^
   |

```

Various stack keywords exist in the language to allow for stack introspection:
```rust
@(1 2 3)
@dup      // 1 2 3 3
@depth    // 1 2 3 3 4
```

Arrays are supported as well:
```rust
fn sum: ([]i32 i32) -> (i32) {
    let n: i32; &= n;
    let arr: [n]i32; &= arr;
    let i: i32; @(0) &= i;
    @(0)  // the running total, unnamed
    while @(i n !=) {
        @(arr i [] +)  // reads arr[i] and adds it to the total
        @(i 1 +) &= i;
    }
}

fn main: () -> () {
    let arr: [5]i32;
    @([0 1 2 3 4]) &= arr;  // create an array literal on the stack
    @(arr 5) &> sum &> print;
}
```

Semantically, putting values on the `@(...)` stack will always result in "copying" them onto the stack,
so no aliasing ever happens. Internally, nothing is ever actually lowered to stack push and pop
operations, so if stack values aren't used they aren't lowered to anything (this is explained in the
[lowering section](/posts/henceforth-v1/#lowering-to-a-cfg-and-ssa-ir)).

Henceforth also supports runtime-sized locals, and supports writing `[]i32` in functions so you don't have to
specify the size of an array in a function like `bubble_sort` (the array size is passed on the 2nd
argument).
```rust
fn bubble_sort: ([]i32 i32) -> ([]i32) {
    let N: i32; &= N;
    let arr: [N]i32; &= arr;

    let i: i32; @(0) &= i;
    while @(i N !=) {
        let j: i32; @(0) &= j;
        while @(j N 1 - i - !=) {
            if @(arr j [] arr j 1 + [] >) {
                let tmp: i32; @(arr j []) &= tmp;
                @(arr j 1 + [] j) [&]= arr;
                @(tmp j 1 +)      [&]= arr;
            }
            @(j 1 +) &= j;
        }
        @(i 1 +) &= i;
    }
    @(arr)
}
```

`NOTE (fix):` `[&]=` appears here for the first time with no explanation. Add one line on what it pops (value, then index?) or a comment on the first use.

## Frontend

The [recursive descent parser](https://github.com/riogu/henceforth/blob/main/src/hfs/parser.rs) is
actually quite simple compared to many other languages. One main reason for this is that the parser
doesn't need to deal with any operator precedence, since that isn't present in stack-based languages like
Henceforth.

Most of the interesting work went into the [stack
analyzer](https://github.com/riogu/henceforth/blob/main/src/hfs/stack_analyzer.rs) pass, which simulates
the stack at compile time and reconstructs the AST as an "imperative" language's AST from the stack
semantics. This is the core idea that makes it so most stack operations don't really emit any codegen.

The other half of stack simulation involves keeping track of the depth and types of each control flow
branch, as shown in [this earlier example](#stack-depth-example).

`NOTE (opinion):` You say most of the interesting work went into the stack analyzer, then spend two sentences on it. This is the core novelty of the compiler, so it deserves the most detail. What was hard? Reconciling stack states where branches join, loops whose bodies must be stack-neutral, `return` in the middle of nested blocks, error reporting that points at the right line? A small before/after (stack code in, reconstructed imperative AST out) would also help. It's the one transformation readers can't picture on their own.

The next section showcases how the [IR
lowerer](https://github.com/riogu/henceforth/blob/main/src/hfs/ir_lowerer.rs) pass takes our AST from the
previous pass and runs another round of stack simulation, in order to output SSA IR that is agnostic to any
stack related semantics.

`NOTE (opinion):` Why does the lowerer need a second round of simulation instead of the analyzer annotating the AST once? If that was a deliberate tradeoff (simpler passes, no stored stack state), saying so is a good design opinion. If you'd change it now, saying that is good too.

## Lowering to a CFG and SSA IR

In practice, Henceforth never does any "push" and "pop" from any real stack, all of these operations are
interpreted at compile time. For example:
```rust 
let foo: i32;
let bar: i32;
@(3 4 *) := foo; // copies the top of the stack into foo
&= bar; // pops the stack and reads the values
```

Would emit this IR:
{{% sidetext side="left" offset="3em" %}}
Note that the frontend emits memory-form IR with alloca/store pairs and
[Mem2Reg](https://github.com/riogu/henceforth/blob/7ab535fedc0f861998318bf2415476fe366b281f/src/hfs/ir_optimizations.rs#L166)
promotes it later, similarly to what LLVM does.
{{% /sidetext  %}}
```rust
start_1:
  %0 = i32 1
  %1 = i32 alloca %0 // let foo: i32;
  %2 = i32 1
  %3 = i32 alloca %2 // let bar: i32;
  %4 = i32 3
  %5 = i32 4
  %6 = i32 %4 * %5
  store %6, %1
  store %6, %3
```

The compiler simulates the stack in order to associate each usage of a stack value to its user, which is
why the IR doesn't have to emit any stack operations, all uses are solved during lowering.

Note that, since the first `:= foo` is a copy, the next `&= bar` statement will use the same result
computed for `foo` without applying any optimizations.

Additionally, if we did:
```rust
@(3 4 5) @pop @pop @pop
```

The `@pop` doesn't exist by the time we emit the IR, since the stack has already been interpreted.
The frontend will emit these constants:
```rust
start_1:
  %0 = i32 3
  %1 = i32 4
  %2 = i32 5
```
Stack operations like `@rot`, `@pop`, `@swap` and others are frontend constructs that exist purely in the
compiler, and once they are interpreted, there is no real concept of a stack by the time we are emitting
our SSA IR.

## IR as a textual format

`NOTE:` João this is for you to write, talk about your invertible syntax thing or whatever it is.

## Optimizations and middle end work

Henceforth implements its own
[optimizer](https://github.com/riogu/henceforth/blob/main/src/hfs/ir_optimizations.rs) on top of the SSA
IR generated by the frontend. The optimizer uses various constructs implemented by the 
[analysis](https://github.com/riogu/henceforth/blob/main/src/hfs/ir_analysis.rs)
part of the middle end, such as def-use chains with
[RAUW](https://github.com/riogu/henceforth/blob/7ab535fedc0f861998318bf2415476fe366b281f/src/hfs/ir_analysis.rs#L52),
a [dominator
tree](https://github.com/riogu/henceforth/blob/7ab535fedc0f861998318bf2415476fe366b281f/src/hfs/ir_analysis.rs#L149),
dominance frontiers, RPO/postorder traversal, and 
[LoopInfo](https://github.com/riogu/henceforth/blob/946bc793b6833627bc8f2bbd6dd6f85109f6bb3d/src/hfs/ir_analysis.rs#L373)
construction, which are built once per function and then reused across passes. 

It is relevant to note that the middle end isn't really tied to the frontend language. Since it doesn't
assume any stack semantics when targeted by a frontend, it works as its own standalone project, and could
be used for other frontends in the future.

### Mutable IR and def-use chains in Rust

`NOTE (opinion):` The post is tagged Rust, and a mutable graph IR with def-use chains and RAUW is a notoriously awkward thing to build in Rust. How did you represent it (arenas and indices, `Rc<RefCell>`, something else), and would you do it the same way again? Rust readers will care about this more than almost anything else in the section, and it's exactly the kind of API design you say was the focus of the project.


### Implemented optimizations

Currently, the middle end implements
[DeadCodeElimination](https://github.com/riogu/henceforth/blob/7ab535fedc0f861998318bf2415476fe366b281f/src/hfs/ir_optimizations.rs#L118),
[CleanCFG](https://github.com/riogu/henceforth/blob/946bc793b6833627bc8f2bbd6dd6f85109f6bb3d/src/hfs/ir_optimizations.rs#L389)
and
[Mem2Reg](https://github.com/riogu/henceforth/blob/7ab535fedc0f861998318bf2415476fe366b281f/src/hfs/ir_optimizations.rs#L166).
The effect these optimizations have on generated IR is showcased in the following example, which is
output by Henceforth with the `--emit-cfg-dot` flag:

`NOTE (fix):` The CleanCFG links use commit `946bc79` while the rest use `7ab535f`. Pin all permalinks to the v1.0 tag.

{{< floatcode lang="rust" side="left" caption="Input program for the generated CFG:" offset="-2.6rem" >}}
fn factorial: (i32) -> (i32) {
    let n: i32;
    let result: i32;
    &= n;
    @(1) &= result;
    while @(n 1 >) {
        @(result n *) &= result;
        @(n 1 -) &= n;
    }
    @(result);
}

fn main: () -> () {
    @(5) &> factorial;
    if @(@dup 120 ==) {
        @("factorial\n") &> print
    }
    @pop
}

{{< /floatcode >}}

![](/factorial-O0.png)
After optimizations:
![](/factorial.dot.png)

Dominators are computed with [Cooper, Harvey, and Kennedy's iterative
algorithm](https://www.cs.tufts.edu/comp/150FP/archive/keith-cooper/dom14.pdf), and dominance frontiers
are derived from the resulting idom tree.

[Mem2Reg](https://github.com/riogu/henceforth/blob/7ab535fedc0f861998318bf2415476fe366b281f/src/hfs/ir_optimizations.rs#L166)
implements [Cytron et al.'s SSA construction](https://bernsteinbear.com/assets/img/cytron-ssa.pdf),
inserting phis at the iterated dominance frontier of each promotable alloca's stores and renaming in a
single dominator tree walk.

[CleanCFG](https://github.com/riogu/henceforth/blob/946bc793b6833627bc8f2bbd6dd6f85109f6bb3d/src/hfs/ir_optimizations.rs#L389)
complements DCE quite well, since it gets to do more work if it is run after it.  This pass deletes empty
blocks, merges blocks with a single predecessor, and hoists branches through empty targets.


## Infrastructure for testing the compiler

Henceforth comes with `hfscheck`, which is a small test framework like LLVM's FileCheck or DejaGNU. You
write a `.hfs` or `.hfsir` program and annotate it with `//? CHECK` directives, then the runner asserts
those patterns show up (or don't) in the compiler's output.

Pattern-based checks are a good way to add coverage to a language implementation and to
optimizations and avoid having tests break from unrelated changes, since they assert on the shape of the
test and what it is about rather than match exact outputs. It was also something we could implement in the
scope of the project, so we decided to make `hfscheck`.

One important use case is optimization tests. A test can start from lowered IR using an
`.hfsir` file, so a pass can be checked in isolation without depending on what the frontend happens to
lower a given `.hfs` program to:

```rs
//? OPT -O0 -iterative
fn fizz_buzz: (i32) -> (str) {
    ...
}
//? CHECK FN "fizz_buzz"
//? CHECK BLOCK "start_2"
//? CHECK NOT "alloca"
```

For example, `CHECK NOT` asserts something is gone after a pass runs (such as no leftover `alloca` after
Mem2Reg), and `CHECK COUNT n` asserts an exact number of occurrences exist. Together they let a test
assert the shape of the output, which allows for better coverage of what a pass actually does.

Henceforth also has various failure tests to provide diagnostic coverage, which use the `ERROR` directive
to assert that a specific compiler error fires on a specific line:
```rust
fn main: () -> () {
    let a: i32;
    @(true) &= a; //? ERROR "expected i32 found bool"
}
```


## Future goals

The middle end only implements DCE, Mem2Reg and CleanCFG because the goal was to first make a minimal
proof of concept set of passes to test the infrastructure and the APIs of the compiler, and only work on
adding more optimizations once we had a solid base to work on. 
GVN and inlining would be interesting to work on next when I have the time. 


### Postponed features

We aimed for the language itself to be quite minimal on this initial release, so complex features like
user types or pattern matching weren't added, although we did get a lot of work done on tuples and using
them as "views" of the stack:

```rust
// add example of tuples here
```
Support for pointers and the syntax for them was also added, but we
ultimately decided not to include it in this release, as they went a little bit against the patterns we
wanted to be used in the language.

```rust
// add example of pointers here
```

`NOTE (opinion):` This is the most opinionated decision in the post and it's written the most passively. What patterns did pointers break? My guess would be the "no aliasing, stack values are always copies" property from the language section. If so, connect it back to that explicitly. Tuples as "views" of the stack also sounds interesting enough to deserve a sentence on what it means.


## Conclusion

Henceforth was a great project to work on to further improve my understanding of compilers. It was my
second full compiler implementation, and I was very happy to be able to try my hand at implementing a
compiler again, but this time spending most of my effort in designing good APIs and making the codebase
scalable.

Further development will be going on hiatus while I focus on the PhD prep phase at Saarland, and
João has his Masters to work on as well.

I would've liked to implement more optimizations and expand the capabilities of our SSA middle end in
general, but this is what we managed to implement over the last year with the free time we had. I hope to
return to this codebase in the future to test out new optimizations in my own SSA middle end,
and I'm very happy that I have a stable project where I get to play around with compiler related ideas.


### Using the language

The language itself is an interesting middle ground between imperative and stack
languages, and I think it offers a good mixed approach that works surprisingly well for
writing certain kinds of programs.

Talk about what was awkward while writing Tetris.

`NOTE (opinion):` This is your closing claim and it's the vaguest sentence in the post. Which kinds of programs? You wrote Tetris in it, so say what felt natural and what felt awkward. Also say where the hybrid approach doesn't work. Admitting a limitation makes the positive claim more believable, and it's a good note to end on.

For anyone interested in trying out the language or looking at the compiler, you can find it on
[GitHub](https://github.com/riogu/henceforth), or you can go through the
[Language Reference & Getting Started Guide](https://riogu.github.io/henceforth/).
