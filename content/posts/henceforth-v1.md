+++
date = '2026-09-23T08:13:06+01:00'
draft = false
title = "Henceforth - SSA compiler for an imperative stack-based language"
tags = [ 'Rust', 'SSA', 'Compiler Optimizations', 'Henceforth']
summary = """Notes about a statically typed stack-based language that bridges imperative
semantics with stack semantics, implements an optimizing SSA middle end, and more."""

[build]
  list = 'never'
  render = 'always'
+++

## Overview

After working on the [Henceforth](https://github.com/riogu/henceforth) compiler on and off for about a
year, my friend [João Novo](https://github.com/joao-novo) and I have released a v1.0 for it.
Since at this point the project has enough work to be quite interesting, we thought it made sense to
showcase what was done and have people try it, so we have organized our work and released a first version.

Henceforth is a [stack-based language](https://en.wikipedia.org/wiki/Stack-oriented_programming) where
stack semantics (as well as types) are verified at compile time rather than relying on interpreted
semantics, which are commonly present in stack-based languages in order to resolve some challenges{{%
sidenote side="right" %}} In Forth, for example, a loop can change the depth of the stack however it
wants, so the stack depth depends on the trip count. If you allowed that in a compiled language, you
wouldn't know how many elements to return from a function! {{% /sidenote %}} that arise with the
paradigm. A code example would look something like this:


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

With these examples, people familiar with other stack-based languages will notice a strong presence of
imperative elements here that is largely uncommon in other languages with this paradigm. This is because
there are 2 things that dictate most of the decisions made in terms of stack-based features:

First, we found that stack languages usually ask you to adopt the paradigm all at once, largely without
compromising with other common paradigms, and that tends to make it quite difficult to introduce a
large number of people that come from either imperative or functional languages to stack-based languages.
Secondly, these people tend to find stack languages difficult to read and too implicit.

From that, we decided to make a language that bridges the gap between an imperative
language (such as C) and something like Forth.

The language allows people to experiment with the main features of a stack language (such as explicit
data flow, multiple returns, values that don't need names) as first class features that come in a
familiar format.
Other details of the language will be better explained in the next section.

Personally, another goal I had for the project this time around was to try to write a scalable and modular
compiler 
{{% sidenote side="left" %}}
While implementing this compiler I went through literature like [Cooper & Torczon's Engineering a
Compiler](https://www.google.pt/books/edition/Engineering_a_Compiler/xcJrEAAAQBAJ?hl=pt-PT&gbpv=0), as I
wanted it to be a more informed and structured project than last time.
{{% /sidenote  %}}, rather than solely focusing on language features. This meant simplifying the frontend language
in some places and leaving interesting features for later releases in order to actually complete an
initial minimal version (which still took a year!).

Overall, the project is split into 3 main sub-projects:
- The frontend language (Henceforth) with its AST and type/semantic analysis
- The middle end optimization and SSA IR infrastructure
- The testing infrastructure and what it implements to support our SSA IR

The project also provides an interpreter, but it primarily targets a [Cranelift](https://cranelift.dev)
backend and was written with the goal of compiling to executable code. This decision was quite central to
how a lot of things were implemented, and resulted in interesting challenges with how the compiler
handles stack logic internally, and also guided some decisions around what language features to support.

It is relevant to note that the middle end isn't really tied to the frontend language.
While the features it supports were chosen in order to be compatible with the goals of the frontend
language, it can naturally be used for other frontends if we choose to write them later on, which was a
big goal as well.
It doesn't assume any stack semantics when targeted by a frontend, so it is sort of its own standalone
project in some ways.

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

## Frontend

The [Recursive Descent parser](https://github.com/riogu/henceforth/blob/main/src/hfs/parser.rs) is
actually quite simple compared to many other languages. One main reason for this is that the parser
doesn't need to deal with any operator precedence, since that isn't present in stack-based languages like
Henceforth.

Most of the interesting work went into the [stack
analyzer](https://github.com/riogu/henceforth/blob/main/src/hfs/stack_analyzer.rs) pass, which simulates
the stack at compile time and reconstructs the AST as an "imperative" language's AST from the stack
semantics. This is the core idea that makes it so most stack operations don't really emit any codegen.

The other half of stack simulation involves keeping track of the depth and types of each control flow
branch, as shown in [this earlier example](#stack-depth-example).

The next section showcases how the [IR
lowerer](https://github.com/riogu/henceforth/blob/main/src/hfs/ir_lowerer.rs) pass takes our AST from the
previous pass and runs another round of stack simulation, in order to output SSA IR that is agnostic to any
stack related semantics.

## Lowering to a CFG and SSA IR

In practice, Henceforth never does any "push" and "pop" from any real stack, all of these operations are
interpreted at compile time. For example:
```rust 
let foo: i32;
let bar: i32;
@(3 4 *) := foo; // reads the stack and leaves it untouched
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
why the IR doesn't have to emit any stack operations, all uses are solved during lowering.\
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
our SSA IR. It is easy to see how this extends to other examples.

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
dominance frontiers, and RPO/postorder traversal, which are built once per function and then reused
across passes. 

Dominator computation follows [Cooper, Harvey, and Kennedy's iterative
algorithm](https://www.cs.tufts.edu/comp/150FP/archive/keith-cooper/dom14.pdf), which visits blocks in
reverse postorder and sets each block's idom to the common ancestor of its processed predecessors' idoms,
repeating until nothing changes. This avoids storing explicit dominator sets. Dominance frontiers reuse
the idom map: from each predecessor of a join point, we walk up the tree until reaching the join point's
idom, adding it to the frontier of every block along the way.

Currently, the middle end implements
[DeadCodeElimination](https://github.com/riogu/henceforth/blob/7ab535fedc0f861998318bf2415476fe366b281f/src/hfs/ir_optimizations.rs#L118),
[CleanCFG](https://github.com/riogu/henceforth/blob/946bc793b6833627bc8f2bbd6dd6f85109f6bb3d/src/hfs/ir_optimizations.rs#L389)
and
[Mem2Reg](https://github.com/riogu/henceforth/blob/7ab535fedc0f861998318bf2415476fe366b281f/src/hfs/ir_optimizations.rs#L166).
The effect these optimizations have on generated IR are showcased in the following example, which is
output by Henceforth with the `--emit-cfg-dot` flag:

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

[Mem2Reg](https://github.com/riogu/henceforth/blob/7ab535fedc0f861998318bf2415476fe366b281f/src/hfs/ir_optimizations.rs#L166)
implements [Cytron et al's SSA construction](https://bernsteinbear.com/assets/img/cytron-ssa.pdf),
where phis are inserted at the iterated dominance frontier of each promotable alloca's stores, then a
single dominator-tree walk renames loads/stores to SSA values, pushing and popping per-alloca value
stacks as it recurses.

[CleanCFG](https://github.com/riogu/henceforth/blob/946bc793b6833627bc8f2bbd6dd6f85109f6bb3d/src/hfs/ir_optimizations.rs#L389)
complements DCE quite well, since it gets to do more work if it is run after it.  This pass deletes empty
blocks, merges blocks with a single predecessor, and hoists branches through empty targets.


## Infrastructure for testing the compiler

Henceforth comes with `hfscheck`, which is a small  test framework like LLVM's FileCheck or DejaGNU. You
write a `.hfs` or `.hfsir` program and annotate it with `//? CHECK` directives, then the runner asserts
those patterns show up (or don't) in the compiler's output.

One important use case is optimization tests. A test can start from lowered IR using an `.hfsir` file, so a
pass can be checked in isolation without depending on what the frontend happens to lower a given `.hfs`
program to:

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
adding more optimizations once we had a solid base to work on. The main goal was to deliver a "minimal
viable compiler" from the point of view of the APIs and the compiler's pipeline itself.

We aimed for the language itself to be quite minimal on this initial release, so complex features like
user types or pattern matching weren't added, although we did get a lot of work done on tuples and using
them as "views" of the stack. Support for pointers and the syntax for them was also added, but we
ultimately decided not to include it in this release, as they went a little bit against the patterns we
wanted to be used in the language.

Currently, development will be going on a break so I can focus on the PhD prep phase at Saarland, and
João has his Masters to work on as well. Regardless, we might return to the project in the future and
continue developing the language and the optimizations.

## Conclusion

Henceforth was a great project to work on to further improve my understanding of compilers. It was my
second full compiler implementation, and I was very happy to be able to try my hand at implementing a
compiler again, but this time spend most of my effort in designing good APIs and making the codebase
scalable. Over the year we worked on it, I always felt it was easy to return to the codebase because of
that, and I'm quite happy with the result.

I would've liked to implement more optimizations and expand the capabilities of our SSA middle end in
general, but this is what we managed to implement over the last year with the free time we had. I hope to
return to this codebase in the future to test out new optimizations in my own SSA middle end,
and I'm very happy that I have a stable project where I get to play around with compiler related ideas.

The language itself is an interesting middle ground between imperative and stack
languages, and I think it offers a good mixed approach that works surprisingly well for
writing certain kinds of programs.

For anyone interested in trying out the language or looking at the compiler, you can find it on
[Github](https://github.com/riogu/henceforth), or you can go through the
[Language Reference & Getting Started Guide](https://riogu.github.io/henceforth/).

