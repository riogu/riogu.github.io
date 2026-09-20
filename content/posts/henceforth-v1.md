+++
date = '2026-09-13T08:13:06+01:00'
draft = true
title = "Henceforth - SSA compiler for an imperative stack-based language"
tags = [ 'Rust', 'SSA', 'Compiler Optimizations', 'Henceforth']
summary = """Notes about a statically typed stack-based language that bridges imperative
semantics with stack semantics, implements an optimizing SSA middle end, and more."""
+++

## Overview

After working on this compiler on and off for about a year, me and my friend [João
Novo](https://github.com/joao-novo) have released a v1.0 for the
[Henceforth](https://github.com/riogu/henceforth) compiler.
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

For those more used to stack-based languages, this function could also be written using stack operations:
```rust 
fn pow: (/* base */ i32 /* exp */ i32) -> (i32) {
    let i: i32; @(0) &= i; 
    @(1 @rrot)
    while @(@dup i !=) {
        @(@rrot @dup @rot * @rrot @swap)
        @(i 1 +) &= i;
    }
    @pop @pop
}
```

To showcase the language used in practice, we have also implemented Tetris, which you can find [in the
testsuite](https://github.com/riogu/henceforth/blob/main/tests/compile_tests/tetris.hfs):

<video autoplay loop muted playsinline
       style="display:block; margin:0 auto; width:32rem; max-width:100%; height:auto;">
  <source src="/videos/tetris.mp4" type="video/mp4">
</video>

With these examples, people familiar with other stack-based languages will notice a strong presence of imperative elements
here that is largely uncommon in other languages with this paradigm.
This is because there are 2 key things that dictate most of the decisions made in terms of stack-based
features:

First, we found that stack languages usually ask you to adopt the paradigm all at once, largely without
compromising with other common paradigms, and that tends to make it quite difficult to introduce a
large amount of people that come from either imperative or functional languages to stack-based languages.
Secondly, these people tend to find stack languages difficult to read and too implicit.

Given these 2 goals, we made a language that bridges the gap between an imperative language (such
as C) and something like Forth.

The language allows people to experiment with the main features of a stack language (such as explicit
data flow, multiple returns, values that don't need names) as first class features that come in a
familiar format.
Other details of the language will be better explained in the next section.

Another main goal I had for the project this time around was to try to write a scalable and modular
compiler 
{{% sidenote side="left" %}}
While implementing this compiler I went through literature like [Cooper & Torczon's Engineering a
Compiler](https://www.google.pt/books/edition/Engineering_a_Compiler/xcJrEAAAQBAJ?hl=pt-PT&gbpv=0), as I
wanted it to be a more informed and structured project than last time.
{{% /sidenote  %}}, rather than solely focusing on language features. This meant simplifying the frontend language
in some places and leaving interesting features for later releases in order to actually complete an
initial minimal version (which seems still took a year).

Overall, the project is split into 3 main sub-projects:
- The frontend language (Henceforth) with its AST and type/semantic analysis
- The middle end optimization and SSA IR infrastructure
- The testing infrastructure and what it implements to support our SSA IR

The project provides an interpreter, but it was written with the goal of compiling to executable code.
This decision was quite central to how a lot of things were implemented, and resulted in interesting
challenges with how the compiler handles stack logic internally, and also guided some decisions around
what language features to support.

It is relevant to note that the middle end isn't really tied to the frontend language.
While the features it supports were chosen in order to be compatible with the goals of the frontend
language, it can naturally be used for other frontends if we choose to write them later on, which was a
big goal as well.
It doesn't assume any stack semantics when targeted by a frontend, so it is sort of its own standalone
project in some ways.

## The language

Henceforth supports move `&` vs copy `:` operators from the stack on assignments and function calls. These decide if a
value on the stack should be copied or popped. It is the main mechanism to interact
between the imperative and the stack-based side of the language, and pass along values.

```rust
let a: i32; @(10) &= a;  // this pops `10` from the stack 
let c: i32; @(a)  := c;  // stack value is copied, the stack still has the value
let b: i32;       &= b;  //  we pop `a` from the stack (which is now empty)
```

Functions parameters specify how much of the stack of the caller we can access when calling it. The
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
  --> tests/compile_tests/pow.hfs:11:13
   |
11 |             return;   // the return keyword lets functions end early
   |             ^^^^^^
   |
error: expected a stack depth of 1, found a stack depth of 2
  --> tests/compile_tests/pow.hfs:11:9
   |
11 |         @(1 2)  // leaves one value too many
   |         ^^^^^^
   |

```

Stack keywords exist in the language to allow for stack introspection:
```rust
@(1 2 3)
@dup      // 1 2 3 3
@depth    // 1 2 3 3 4
```

Arrays are supported as well:
```rust
fn sum: ([]i32 i32) -> (i32) {
    let n: i32; &= n;

    let i: i32; @(0) &= i;
    @(0)  // the running total, unnamed
    while @(i n !=) {
        @(i 1 +) &= i;  // reads arr[i] and adds it to the total
    }
}

fn main: () -> () {
    let arr: [5]i32;
    @([0 1 2 3 4 5]) &= arr;  // create an array literal on the stack
    @(arr 5) &> sum &> print_i32;
}
```
Semantically, putting values on the `@(...)` stack will always result in "copying" them onto the stack,
so no aliasing ever happens. Internally, nothing is ever actually lowered to stack push and pop
operations, so if stack values aren't used they aren't lowered to anything (this is explained in the
[lowering section](/posts/henceforth-v1/#lowering-ast-to-cfg-to-mir)).

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

`NOTE:` Don't bother spending too long on explaining the parser and lexer.

Lexer and parser in a few paragraphs with a source link. The stack analyzer is the
centrepiece: identifier resolution, type checking, and verifying depth and type consistency across
control flow paths. maybe talk about diagnostics.

## Lowering: AST to CFG to MIR

The SlotMap arena and why stable instruction references matter across passes. How stack discipline maps
onto SSA, what was interesting about compile time stack interpretation. Maybe put the
`HFS-MIR-to-LLVM-IR-example` side-by-side here, or not (its similar enough so its probs not important).

## The IR text format

`NOTE:` João this is for you to write, claude wrote this about your code, i didn't fact check it, ill
leave it up to you. 

Start from the mundane problem (the dump format became a test API, so it must be
parseable, so printer and parser will drift), then the reframing (one grammar, two directions), then the
mechanism. `iso`, `product`, `alt` as the three primitives everything else derives from. `syntax_phi` as
the single worked example, with printer output and parsed-back input side by side. Then the honest parts:
isos are partial (spans, `array_len`, `is_move` dropped), `collect_names` is a non-invertible pre-pass
that handles forward references, error reporting only exists in the parse direction. Round-trip property
if it's actually tested.

## The middle end

Def-use chains with RAUW, dominator tree, dominance frontiers, RPO. Then mem2reg and DCE walked on the
factorial example, using `cfg.dot` renders: the CFG, the dominance frontier of the loop header, where the
phis land. Cite Cooper-Harvey-Kennedy and Cytron in a sentence each and link them, then spend the words
on what the algorithms did to your IR. Includes CleanCFG since it's implemented.

## Testing a compiler

`NOTE:` Joao you can do this if you want, otherwise ill do it later (i will at least add stuff about the
optimization tests for sure and add those before writing this part).

show hfscheck and its directives, with `CHECK-NOT` and `CHECK-COUNT` as the interesting pair.`.hfsir`
inputs isolating pass tests from the frontend. Maybe the 104 negative tests as diagnostic coverage.

## What v1.0 means and what's next

What wasn't done and why. ADCE, SCCP, GVN, LICM. What I'd do differently, what i did well. Suggest people
try it.
