+++
date = '2026-09-13T08:13:06+01:00'
draft = true
title = "Henceforth: SSA compiler for a stack-based language"
tags = [ 'Rust', 'SSA', 'Compiler Optimizations', 'Henceforth']
summary = """Henceforth v1.0 is out. Notes on implementing a statically
typed stack-based language with an optimizing SSA middle end, IR infrastructure that prints and parses from a
single grammar, and more."""
+++

## Intro

What it is, why it exists, honest scope. The hook in the first few paragraphs: a stack-based language
with statically verified stack discipline, and an SSA middle end running over it. One sentence naming
João as co-author of the project and what's his.\
Talk about how the goal was to build comprehensive, scalable compiler infrastructure rather than solely
focusing on frontend features, which meant simplifying the frontend language to allow for this kind of
project to actually be completed.

## The language

Showcase plus design argument, before any implementation. `@(...)`, `@dup`/`@pop`/`@depth`, `&=`/`:=`,
function-scoped stacks, the `(params) -> (returns)` signature. The argument: what static stack discipline
buys and what it costs. This section exists so every later code sample is readable.

## From fumo-compiler to henceforth

Two or three paragraphs, not a section. What you learned from the first compiler and what you
deliberately did differently.

## Frontend

Compressed hard. Lexer and parser in a few paragraphs with a source link. The stack analyzer is the
centrepiece: identifier resolution, type checking, and verifying depth and type consistency across
control flow paths. The diagnostics question belongs here, specifically how you point at a useful source
location when a depth mismatch is only discovered at a join point.

## Lowering: AST to CFG to MIR

The SlotMap arena and why stable instruction references matter across passes. How stack discipline maps
onto SSA. Put the `HFS-MIR-to-LLVM-IR-example` side-by-side here; it orients anyone who knows LLVM in one
figure.

## The IR text format

João's section. Start from the mundane problem (the dump format became a test API, so it must be
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

hfscheck and its directives, with `CHECK-NOT` and `CHECK-COUNT` as the interesting pair. The `10 loads
deleted` assertion and its tradeoff: robust to unrelated IR churn, blind to deleting the wrong ten.
`.hfsir` inputs isolating pass tests from the frontend. `src/hfs/builder/` and the design property that
makes mock testing possible, which is that passes take IR rather than a compiler context. The 104
negative tests as diagnostic coverage. Differential testing between the two interpreters if you add it.

## Bugs worth remembering

The `.copy()`-inside-a-`while`-condition bug, explained properly. Loop conditions are where stack
discipline, CFG lowering and block structure collide, so it's the right story to tell.

## What v1.0 means and what's next

Where you drew the line and why. ADCE, SCCP, GVN, LICM, Cranelift. What you'd do differently. Suggest
people try it.
