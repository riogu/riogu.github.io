+++
date = '2026-09-13T08:13:06+01:00'
draft = true
title = "Henceforth: SSA compiler for an imperative stack-based language"
tags = [ 'Rust', 'SSA', 'Compiler Optimizations', 'Henceforth']
summary = """Notes on implementing a statically typed stack-based language that bridges imperative
semantics with stack semantics, an optimizing SSA middle end, and more."""
+++

## Overview

After working on this compiler on and off for about a 1 year, me and my friend [João
Novo](https://github.com/joao-novo) have released a v1.0 for the
[Henceforth](https://github.com/riogu/henceforth) compiler.

Since at this point the project has enough work to be quite interesting, we thought it made sense to
showcase what was done and have people try it, so we have organized our work and released a first version.

Henceforth is an imperative [stack-based language]() where stack semantics (as well as types) are verified 
statically rather than relying on interpreted semantics, which are commonly present in stack-based languages in
order to resolve some challenges{{% sidenote side="right" %}} In Forth, for example, a loop can change the
depth of the stack however it wants, so the stack depth depends on the trip count. If you allowed that, you
wouldn't know how many elements to return from a function! {{% /sidenote %}} that arise with the
paradigm. A code example would look something like this:
```rust
fn pow: (i32 i32) -> (i32) {
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

People familiar with other stack-based languages will notice a strong presence of imperative elements
here that is largely uncommon in other languages with this paradigm.
There are 2 key design philosophies we've decided to follow in this language that dictate most of the
decisions made in terms of stack-based features:

First, we found that stack languages usually ask you to adopt the paradigm all at once, largely without
compromising with other common paradigms, and that tends to make it quite difficult to engage with a
large amount of people that come from either imperative or functional languages.
Secondly, these people tend to find stack languages difficult to read and unexplicit.

Given these 2 goals, we made a language that bridges the gap between a systems imperative language (such
as C) and something like Forth.

The language allows people to experiment with the main features of a stack language (such as explicit
data flow, multiple returns, values that don't need names) as first class features that come in a
familiar format.
Other details of the language will be better explained in the next section.

The project provides an interpreter, but it was written with the goal of compiling to executable code.
This decision was quite central to how a lot of things were implemented, and resulted in interesting
challenges with how the compiler handles stack logic internally, and also guided some decisions around
what language features to support.


As for the original motivation for this project, I decided that I wanted to start Henceforth after
finishing my [first compiler]().
A lot was learned from the hundreds of hours it took to finish, but it
was a very "hands on" experience where I wanted to figure things out by doing, so many early decisions
proved to cause various challenges as I pushed towards the conclusion of that project. I will briefly
showcase that compiler as well in a later section.

While implementing this compiler I went through literature like [Cooper & Torczon's Engineering a
Compiler](https://www.google.pt/books/edition/Engineering_a_Compiler/xcJrEAAAQBAJ?hl=pt-PT&gbpv=0), as I
wanted it to be a more informed and structured project than last time.
Another main goal I had for the project this time around was to try to write a scalable and modular
compiler, rather than solely focusing on language features. This meant simplifying the frontend language
in some places and leaving interesting features for later releases in order to actually complete an
initial minimal version (which, well, still took a year).

Overall, the project is split into 3 main sub-projects:
- The frontend language (Henceforth) with its AST and type/semantic analysis
- The middle end optimization and SSA IR infrastructure
- The testing infrastructure and what it implements to support our SSA IR

It is relevant to note that the middle end isn't really tied to the frontend language.
While the features it supports were choosen in order to be compatible with the goals of the frontend
language, it can naturally be used for other frontends if we choose to write them later on, which was a
big goal as well.
It doesn't assume any stack semantics when targetted by a frontend, so it is sort of its own standalone
project in some ways.

## The language
move vs copy
```rust
let a: i32; @(10) &= a;
let b: i32; @(a)  &= b;   // `a` moved, no longer usable
let c: i32; @(a)  :=  c;  // `a` copied, still live
```

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

a program that doesn't compile
```rust
fn f: (bool) -> (i32) {
    let cond: bool; &= cond;
    if @(cond) {
        @(1)
    } else {
        @(1 2)  // leaves one value too many
    }
}
```

stack introspection
```rust
@(1 2 3)
@dup      // 1 2 3 3
@depth    // 1 2 3 3 4
```

arrays
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
    // `[&]=` takes an index as an argument
    @(1 0) [&]= arr;  // `1` is the value, `0` is the consumed index
    @(2 1) [&]= arr;
    @(3 2) [&]= arr;
    @(4 3) [&]= arr;
    @(5 4) [&]= arr;

    @(arr 5) &> sum &> print_i32;
}
```

runtime-sized locals
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

## From fumo-compiler to henceforth

Two or three paragraphs. What was learned from the first compiler and what was deliberately done
differently, lessons learned from henceforth itself too.

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

## Bugs worth remembering

LLM suggestion:
```
The `.copy()`-inside-a-`while`-condition bug, explained properly. 
Loop conditions are where stack discipline, CFG lowering and block structure
collide, so it's the right story to tell.
```
NOTE: i might just add smth else 

## What v1.0 means and what's next

What wasn't done and why. ADCE, SCCP, GVN, LICM, Cranelift (although ill write this assuming cranelift
was implemented). What I'd do differently, what i did well. Suggest people try it.
