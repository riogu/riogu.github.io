+++
date = '2026-09-13T08:13:06+01:00'
draft = true
title = "Henceforth: SSA compiler for a stack-based language"
tags = [ 'Rust', 'SSA', 'Compiler Optimizations', 'Henceforth']
summary = """Notes on implementing a statically typed stack-based language with an optimizing SSA middle
end, IR infrastructure that prints and parses from a single grammar, and more."""
+++

## Intro

After working on this compiler on and off for around 1 year, me and my friend [João
Novo](https://github.com/joao-novo) have released a v1.0 for the Henceforth compiler.\
Since the project has enough work to be somewhat interesting at this point, we thought it made sense to
show what was done and have people try it, so we organized our work and released a first version.

Henceforth is a stack-based language where stack semantics (as well as types) are verified statically
rather than relying on interpreted semantics, which are commonly present in stack-based languages in
order to resolve some challenges that arise with the paradigm.

The project provides an interpreter, but it was written with the goal of compiling to executable code.
This decision was quite central to how a lot of things were implemented, and resulted in interesting
challenges with how the compiler handles stack logic internally, and also guided decisions around what
language features to support.

One of the main goals for the project was writing a full compiler with scalable and modular
infrastructure, rather than solely focusing on frontend features. This meant simplifying the frontend
language in some places, and leaving interesting features for later releases in order to actually
complete an initial minimal version (which, well, still took a year).

I wanted to start Henceforth after finishing my first compiler, [fumo-compiler](). A lot was learned from it,
but it was a very "hands on" experience, so many early decisions proved to cause various challenges and
technical debt as I pushed towards the conclusion of that project. I will briefly showcase that compiler
as well in a later section.

Overall, the project splits into 3 main sub-projects:
- The frontend language (Henceforth) with its AST and type/semantic analysis
- The middle end optimization and SSA IR infrastructure
- The testing infrastructure and what it implements to support our SSA IR

The middle end isn't really tied to the frontend language.\
While the features it supports were
choosed in order to be compatible with the goals of the frontend language, it can naturally be used for
other frontends if we choose to write them later on, which was a big goal as well.
It doesn't assume any stack semantics when targetted by a frontend.

## The language
Do a showcase and also talk about lang design ideas, before any implementation. `@(...)`,
`@dup`/`@pop`/`@depth`, `&=`/`:=`, function-scoped stacks, the `(params) -> (returns)` signature. 

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
