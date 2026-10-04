import{C as e,F as t,I as n,L as r,_t as i,g as a,h as o,ot as s,y as c}from"./modules/shiki-X41ZfBfC.js";import{bt as l,it as u}from"./index-BcqdD5Le.js";var ee=`\x1B[01m\x1B[Kdevirt.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdevirt.cc:16:8:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kleak of ‘\x1B[01m\x1B[Kc\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-401\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-malloc-leak\x1B[m\x1B[K]
   16 |   \x1B[01;35m\x1B[Kb->g ()\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~^~\x1B[m\x1B[K
  ‘\x1B[01m\x1B[Kvoid test()\x1B[m\x1B[K’: events 1-2
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K   12 | void \x1B[01;36m\x1B[Ktest\x1B[m\x1B[K ()
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |      \x1B[01;36m\x1B[K^~~~\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |      \x1B[01;36m\x1B[K|\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |      \x1B[01;36m\x1B[K(1)\x1B[m\x1B[K entry to ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K   13 | {
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K   14 |   C *c = \x1B[01;36m\x1B[Kmake_c ()\x1B[m\x1B[K;
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |          \x1B[01;36m\x1B[K~~~~~~~~~\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                 \x1B[01;36m\x1B[K|\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                 \x1B[01;36m\x1B[K(2)\x1B[m\x1B[K calling ‘\x1B[01m\x1B[Kmake_c\x1B[m\x1B[K’ from ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K
    \x1B[01;36m\x1B[K└──> \x1B[m\x1B[K‘\x1B[01m\x1B[KC* make_c()\x1B[m\x1B[K’: events 3-5
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K   10 | __attribute__ ((noipa)) C *\x1B[01;36m\x1B[Kmake_c\x1B[m\x1B[K () { return new C (\x1B[01;36m\x1B[K)\x1B[m\x1B[K; }
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                            \x1B[01;36m\x1B[K^~~~~~\x1B[m\x1B[K                    \x1B[01;36m\x1B[K~\x1B[m\x1B[K
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                            \x1B[01;36m\x1B[K|\x1B[m\x1B[K                         \x1B[01;36m\x1B[K|\x1B[m\x1B[K
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                            \x1B[01;36m\x1B[K|\x1B[m\x1B[K                         \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K allocated here
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                            \x1B[01;36m\x1B[K(3)\x1B[m\x1B[K entry to ‘\x1B[01m\x1B[Kmake_c\x1B[m\x1B[K’     \x1B[01;36m\x1B[K(5)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Kfalse\x1B[m\x1B[K’ branch...\x1B[01;36m\x1B[K ─>─┐\x1B[m\x1B[K
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                                                                                         \x1B[01;36m\x1B[K│\x1B[m\x1B[K
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
         ‘\x1B[01m\x1B[KC* make_c()\x1B[m\x1B[K’: event 6
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                                                                                         \x1B[01;36m\x1B[K│\x1B[m\x1B[K
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |\x1B[01;36m\x1B[K┌\x1B[m\x1B[K\x1B[01;36m\x1B[K────────────────────────────────────────────────────────────────────────────────────────┘\x1B[m\x1B[K
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K   10 |\x1B[01;36m\x1B[K│\x1B[m\x1B[K__attribute__ ((noipa)) C *make_c () { return new C (\x1B[01;36m\x1B[K)\x1B[m\x1B[K; }
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K                                                     \x1B[01;36m\x1B[K^\x1B[m\x1B[K
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K                                                     \x1B[01;36m\x1B[K|\x1B[m\x1B[K
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |\x1B[01;36m\x1B[K└\x1B[m\x1B[K\x1B[01;36m\x1B[K────────────────────────────────────────────────────>\x1B[m\x1B[K\x1B[01;36m\x1B[K(6)\x1B[m\x1B[K ...to here
           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
    \x1B[01;36m\x1B[K<──────┘\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K
  ‘\x1B[01m\x1B[Kvoid test()\x1B[m\x1B[K’: events 7-8
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K   14 |   C *c = \x1B[01;36m\x1B[Kmake_c ()\x1B[m\x1B[K;
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |          \x1B[01;36m\x1B[K~~~~~~~^~\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                 \x1B[01;36m\x1B[K|\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                 \x1B[01;36m\x1B[K(7)\x1B[m\x1B[K returning to ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’ from ‘\x1B[01m\x1B[Kmake_c\x1B[m\x1B[K’
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K   15 |   B *\x1B[01;36m\x1B[Kb\x1B[m\x1B[K = c;
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |      \x1B[01;36m\x1B[K~\x1B[m\x1B[K           
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |      \x1B[01;36m\x1B[K|\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |      \x1B[01;36m\x1B[K(8)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch (when ‘\x1B[01m\x1B[Kc\x1B[m\x1B[K’ is non-NULL)...\x1B[01;36m\x1B[K ─>─┐\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                                                               \x1B[01;36m\x1B[K│\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K
  ‘\x1B[01m\x1B[Kvoid test()\x1B[m\x1B[K’: events 9-11
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |                                                               \x1B[01;36m\x1B[K│\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |\x1B[01;36m\x1B[K┌\x1B[m\x1B[K\x1B[01;36m\x1B[K──────────────────────────────────────────────────────────────┘\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K   15 |\x1B[01;36m\x1B[K│\x1B[m\x1B[K  B *\x1B[01;36m\x1B[Kb\x1B[m\x1B[K = c;
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K     \x1B[01;36m\x1B[K^\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K     \x1B[01;36m\x1B[K|\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |\x1B[01;36m\x1B[K└\x1B[m\x1B[K\x1B[01;36m\x1B[K────>\x1B[m\x1B[K\x1B[01;36m\x1B[K(9)\x1B[m\x1B[K ...to here
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K   16 |   \x1B[01;36m\x1B[Kb->g ()\x1B[m\x1B[K;
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |   \x1B[01;36m\x1B[K~~~~~~~\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |        \x1B[01;36m\x1B[K|\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |        \x1B[01;36m\x1B[K(10)\x1B[m\x1B[K if ‘\x1B[01m\x1B[Kvirtual void C::\x1B[01;32m\x1B[K_ZThn8_N1C1gEv\x1B[m\x1B[K()\x1B[m\x1B[K’ throws an exception...
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K      |        \x1B[01;36m\x1B[K(11)\x1B[m\x1B[K ⚠️  ‘\x1B[01m\x1B[Kc\x1B[m\x1B[K’ leaks here; was allocated at \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K
    \x1B[01;36m\x1B[K│\x1B[m\x1B[K
`,te=`\x1B[01m\x1B[Kdevirt.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdevirt.cc:16:8:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kleak of ‘\x1B[01m\x1B[Kc\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-401\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-malloc-leak\x1B[m\x1B[K]
   16 |   \x1B[01;35m\x1B[Kb->g ()\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~^~\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:12:6:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(1)\x1B[m\x1B[K entry to ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’
   12 | void \x1B[01;36m\x1B[Ktest\x1B[m\x1B[K ()
      |      \x1B[01;36m\x1B[K^~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:14:17:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(2)\x1B[m\x1B[K calling ‘\x1B[01m\x1B[Kmake_c\x1B[m\x1B[K’ from ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’
   14 |   C *c = \x1B[01;36m\x1B[Kmake_c ()\x1B[m\x1B[K;
      |          \x1B[01;36m\x1B[K~~~~~~~^~\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:10:28:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K entry to ‘\x1B[01m\x1B[Kmake_c\x1B[m\x1B[K’
   10 | __attribute__ ((noipa)) C *\x1B[01;36m\x1B[Kmake_c\x1B[m\x1B[K () { return new C (); }
      |                            \x1B[01;36m\x1B[K^~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:10:54:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(4)\x1B[m\x1B[K allocated here
   10 | __attribute__ ((noipa)) C *make_c () { return new C (\x1B[01;36m\x1B[K)\x1B[m\x1B[K; }
      |                                                      \x1B[01;36m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:10:54:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(5)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Kfalse\x1B[m\x1B[K’ branch...
   10 | __attribute__ ((noipa)) C *make_c () { return new C (\x1B[01;36m\x1B[K)\x1B[m\x1B[K; }
      |                                                      \x1B[01;36m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:10:54:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(6)\x1B[m\x1B[K ...to here
   10 | __attribute__ ((noipa)) C *make_c () { return new C (\x1B[01;36m\x1B[K)\x1B[m\x1B[K; }
      |                                                      \x1B[01;36m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:14:17:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(7)\x1B[m\x1B[K returning to ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’ from ‘\x1B[01m\x1B[Kmake_c\x1B[m\x1B[K’
   14 |   C *c = \x1B[01;36m\x1B[Kmake_c ()\x1B[m\x1B[K;
      |          \x1B[01;36m\x1B[K~~~~~~~^~\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:15:6:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(8)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch (when ‘\x1B[01m\x1B[Kc\x1B[m\x1B[K’ is non-NULL)...
   15 |   B *\x1B[01;36m\x1B[Kb\x1B[m\x1B[K = c;
      |      \x1B[01;36m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:15:6:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(9)\x1B[m\x1B[K ...to here
   15 |   B *\x1B[01;36m\x1B[Kb\x1B[m\x1B[K = c;
      |      \x1B[01;36m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:16:8:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(10)\x1B[m\x1B[K if ‘\x1B[01m\x1B[Kvirtual void C::\x1B[01;32m\x1B[K_ZThn8_N1C1gEv\x1B[m\x1B[K()\x1B[m\x1B[K’ throws an exception...
   16 |   \x1B[01;36m\x1B[Kb->g ()\x1B[m\x1B[K;
      |   \x1B[01;36m\x1B[K~~~~~^~\x1B[m\x1B[K
\x1B[01m\x1B[Kdevirt.cc:16:8:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(11)\x1B[m\x1B[K ‘\x1B[01m\x1B[Kc\x1B[m\x1B[K’ leaks here; was allocated at \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K
`,d=`\x1B[01m\x1B[Kdouble-free.c:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdouble-free.c:8:3:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kdouble-‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ of ‘\x1B[01m\x1B[Kp\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-415\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-double-free\x1B[m\x1B[K]
    8 |   \x1B[01;35m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K^~~~~~~~\x1B[m\x1B[K
  ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’: events 1-5
    5 |   void *p = \x1B[01;36m\x1B[Kmalloc (16)\x1B[m\x1B[K;
      |             \x1B[01;36m\x1B[K^~~~~~~~~~~\x1B[m\x1B[K
      |             \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |             \x1B[01;36m\x1B[K(1)\x1B[m\x1B[K allocated here
    6 |   if \x1B[01;36m\x1B[K(\x1B[m\x1B[Kflag)
      |      \x1B[01;36m\x1B[K~\x1B[m\x1B[K       
      |      \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |      \x1B[01;36m\x1B[K(2)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch (when ‘\x1B[01m\x1B[Kflag != 0\x1B[m\x1B[K’)...\x1B[01;36m\x1B[K ─>─┐\x1B[m\x1B[K
      |                                                           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
      |                                                           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K┌\x1B[m\x1B[K\x1B[01;36m\x1B[K──────────────────────────────────────────────────────────┘\x1B[m\x1B[K
    7 |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[K~~~~~~~~\x1B[m\x1B[K 
      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K└\x1B[m\x1B[K\x1B[01;36m\x1B[K───>\x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K ...to here
      |     \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here
    8 |   \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;36m\x1B[K~~~~~~~~\x1B[m\x1B[K   
      |   \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |   \x1B[01;36m\x1B[K(5)\x1B[m\x1B[K ⚠️  second ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here; first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ was at \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K
`,f=`\x1B[01m\x1B[Kdouble-free.c:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdouble-free.c:8:3:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kdouble-‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ of ‘\x1B[01m\x1B[Kp\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-415\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-double-free\x1B[m\x1B[K]
    8 |   \x1B[01;35m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdouble-free.c:5:13:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(1)\x1B[m\x1B[K allocated here
    5 |   void *p = \x1B[01;36m\x1B[Kmalloc (16)\x1B[m\x1B[K;
      |             \x1B[01;36m\x1B[K^~~~~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdouble-free.c:6:6:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(2)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch (when ‘\x1B[01m\x1B[Kflag != 0\x1B[m\x1B[K’)...
    6 |   if \x1B[01;36m\x1B[K(\x1B[m\x1B[Kflag)
      |      \x1B[01;36m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kdouble-free.c:7:5:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K ...to here
    7 |     \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |     \x1B[01;36m\x1B[K^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdouble-free.c:7:5:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(4)\x1B[m\x1B[K first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here
\x1B[01m\x1B[Kdouble-free.c:8:3:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(5)\x1B[m\x1B[K second ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here; first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ was at \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K
    8 |   \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;36m\x1B[K^~~~~~~~\x1B[m\x1B[K
`,p=`\x1B[01m\x1B[Kdouble-free.c:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdouble-free.c:8:3:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kdouble-‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ of ‘\x1B[01m\x1B[Kp\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-415\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-double-free\x1B[m\x1B[K]
    8 |   \x1B[01;35m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K^~~~~~~~\x1B[m\x1B[K
  ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’: events 1-5
    5 |   void *p = \x1B[01;36m\x1B[Kmalloc (16)\x1B[m\x1B[K;
      |             \x1B[01;36m\x1B[K^~~~~~~~~~~\x1B[m\x1B[K
      |             \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |             \x1B[01;36m\x1B[K(1)\x1B[m\x1B[K allocated here
    6 |   if \x1B[01;36m\x1B[K(\x1B[m\x1B[Kflag)
      |      \x1B[01;36m\x1B[K~\x1B[m\x1B[K       
      |      \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |      \x1B[01;36m\x1B[K(2)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch (when ‘\x1B[01m\x1B[Kflag != 0\x1B[m\x1B[K’)...\x1B[01;36m\x1B[K ─>─┐\x1B[m\x1B[K
      |                                                           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
      |                                                           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K┌\x1B[m\x1B[K\x1B[01;36m\x1B[K──────────────────────────────────────────────────────────┘\x1B[m\x1B[K
    7 |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[K~~~~~~~~\x1B[m\x1B[K 
      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K└\x1B[m\x1B[K\x1B[01;36m\x1B[K───>\x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K ...to here
      |     \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here
    8 |   \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;36m\x1B[K~~~~~~~~\x1B[m\x1B[K   
      |   \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |   \x1B[01;36m\x1B[K(5)\x1B[m\x1B[K ⚠️  second ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here; first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ was at \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K
`,m=`\x1B[01m\x1B[Kdouble-free.c:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdouble-free.c:8:3:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kdouble-‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ of ‘\x1B[01m\x1B[Kp\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-415\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-double-free\x1B[m\x1B[K]
    8 |   \x1B[01;35m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdouble-free.c:5:13:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(1)\x1B[m\x1B[K allocated here
    5 |   void *p = \x1B[01;36m\x1B[Kmalloc (16)\x1B[m\x1B[K;
      |             \x1B[01;36m\x1B[K^~~~~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdouble-free.c:6:6:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(2)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch (when ‘\x1B[01m\x1B[Kflag != 0\x1B[m\x1B[K’)...
    6 |   if \x1B[01;36m\x1B[K(\x1B[m\x1B[Kflag)
      |      \x1B[01;36m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kdouble-free.c:7:5:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K ...to here
    7 |     \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |     \x1B[01;36m\x1B[K^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdouble-free.c:7:5:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(4)\x1B[m\x1B[K first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here
\x1B[01m\x1B[Kdouble-free.c:8:3:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(5)\x1B[m\x1B[K second ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here; first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ was at \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K
    8 |   \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;36m\x1B[K^~~~~~~~\x1B[m\x1B[K
`,h=`\x1B[01m\x1B[Kdyncast-ambig.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-ambig.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (dynamic_cast<C *> (a) == NULL)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,g=`\x1B[01m\x1B[Kdyncast-ambig.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-ambig.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (dynamic_cast<C *> (a) == NULL)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,_=`\x1B[01m\x1B[Kdyncast-ambig.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-ambig.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (dynamic_cast<C *> (a) == NULL)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,v=`\x1B[01m\x1B[Kdyncast-ambig.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-ambig.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (dynamic_cast<C *> (a) == NULL)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,y=`\x1B[01m\x1B[Kdyncast-fail.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kint\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-fail.cc:10:13:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kdereference of NULL ‘\x1B[01m\x1B[Kc\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-476\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-null-dereference\x1B[m\x1B[K]
   10 |   return c->\x1B[01;35m\x1B[Km\x1B[m\x1B[K;
      |             \x1B[01;35m\x1B[K^\x1B[m\x1B[K
  ‘\x1B[01m\x1B[Kint test()\x1B[m\x1B[K’: event 1
    9 |   C *c = \x1B[01;36m\x1B[Kdynamic_cast<C *> (a)\x1B[m\x1B[K;
      |          \x1B[01;36m\x1B[K^~~~~~~~~~~~~~~~~~~~~\x1B[m\x1B[K
      |          \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |          \x1B[01;36m\x1B[K(1)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch...\x1B[01;36m\x1B[K ─>─┐\x1B[m\x1B[K
      |                                            \x1B[01;36m\x1B[K│\x1B[m\x1B[K
  ‘\x1B[01m\x1B[Kint test()\x1B[m\x1B[K’: events 2-3
      |                                            \x1B[01;36m\x1B[K│\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K┌\x1B[m\x1B[K\x1B[01;36m\x1B[K───────────────────────────────────────────┘\x1B[m\x1B[K
    9 |\x1B[01;36m\x1B[K│\x1B[m\x1B[K  C *c = \x1B[01;36m\x1B[Kdynamic_cast<C *> (a)\x1B[m\x1B[K;
      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K         \x1B[01;36m\x1B[K^~~~~~~~~~~~~~~~~~~~~\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K         \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K└\x1B[m\x1B[K\x1B[01;36m\x1B[K────────>\x1B[m\x1B[K\x1B[01;36m\x1B[K(2)\x1B[m\x1B[K ...to here
   10 |   return c->\x1B[01;36m\x1B[Km\x1B[m\x1B[K;
      |             \x1B[01;36m\x1B[K~\x1B[m\x1B[K
      |             \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |             \x1B[01;36m\x1B[K(3)\x1B[m\x1B[K ⚠️  dereference of NULL ‘\x1B[01m\x1B[Kc\x1B[m\x1B[K’
`,b=`\x1B[01m\x1B[Kdyncast-fail.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kint\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-fail.cc:10:13:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kdereference of NULL ‘\x1B[01m\x1B[Kc\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-476\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-null-dereference\x1B[m\x1B[K]
   10 |   return c->\x1B[01;35m\x1B[Km\x1B[m\x1B[K;
      |             \x1B[01;35m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kdyncast-fail.cc:9:10:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(1)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch...
    9 |   C *c = \x1B[01;36m\x1B[Kdynamic_cast<C *> (a)\x1B[m\x1B[K;
      |          \x1B[01;36m\x1B[K^~~~~~~~~~~~~~~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdyncast-fail.cc:9:10:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(2)\x1B[m\x1B[K ...to here
    9 |   C *c = \x1B[01;36m\x1B[Kdynamic_cast<C *> (a)\x1B[m\x1B[K;
      |          \x1B[01;36m\x1B[K^~~~~~~~~~~~~~~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdyncast-fail.cc:10:13:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K dereference of NULL ‘\x1B[01m\x1B[Kc\x1B[m\x1B[K’
   10 |   return c->\x1B[01;36m\x1B[Km\x1B[m\x1B[K;
      |             \x1B[01;36m\x1B[K^\x1B[m\x1B[K
`,x=`\x1B[01m\x1B[Kdyncast-precision.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-precision.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (c->m == 50)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdyncast-precision.cc:14:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   14 |   \x1B[01;35m\x1B[K__analyzer_eval (c == &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~\x1B[m\x1B[K
`,S=`\x1B[01m\x1B[Kdyncast-precision.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-precision.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (c->m == 50)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdyncast-precision.cc:14:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   14 |   \x1B[01;35m\x1B[K__analyzer_eval (c == &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~\x1B[m\x1B[K
`,C=`\x1B[01m\x1B[Kdyncast-precision.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-precision.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (c->m == 50)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdyncast-precision.cc:14:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   14 |   \x1B[01;35m\x1B[K__analyzer_eval (c == &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~\x1B[m\x1B[K
`,w=`\x1B[01m\x1B[Kdyncast-precision.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-precision.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (c->m == 50)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kdyncast-precision.cc:14:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   14 |   \x1B[01;35m\x1B[K__analyzer_eval (c == &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~\x1B[m\x1B[K
`,T=`\x1B[01m\x1B[Kdyncast-sidecast.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-sidecast.cc:12:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   12 |   \x1B[01;35m\x1B[K__analyzer_eval (s == (S *) &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,E=`\x1B[01m\x1B[Kdyncast-sidecast.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-sidecast.cc:12:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   12 |   \x1B[01;35m\x1B[K__analyzer_eval (s == (S *) &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,D=`\x1B[01m\x1B[Kdyncast-sidecast.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-sidecast.cc:12:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   12 |   \x1B[01;35m\x1B[K__analyzer_eval (s == (S *) &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,O=`\x1B[01m\x1B[Kdyncast-sidecast.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kdyncast-sidecast.cc:12:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   12 |   \x1B[01;35m\x1B[K__analyzer_eval (s == (S *) &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,k=`\x1B[01m\x1B[Kexception.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kint\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kexception.cc:11:26:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[Kpath
   11 |     \x1B[01;36m\x1B[K__analyzer_dump_path ()\x1B[m\x1B[K;
      |     \x1B[01;36m\x1B[K~~~~~~~~~~~~~~~~~~~~~^~\x1B[m\x1B[K
  ‘\x1B[01m\x1B[Kint test()\x1B[m\x1B[K’: events 1-3
    9 |     throw io_error (\x1B[01;36m\x1B[K)\x1B[m\x1B[K;
      |                     \x1B[01;36m\x1B[K^\x1B[m\x1B[K
      |                     \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |                     \x1B[01;36m\x1B[K(1)\x1B[m\x1B[K throwing exception of type ‘\x1B[01m\x1B[Kio_error\x1B[m\x1B[K’ here...
   10 |   } catch (exception &\x1B[01;36m\x1B[Kexc\x1B[m\x1B[K) {
      |                       \x1B[01;36m\x1B[K~~~\x1B[m\x1B[K
      |                       \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |                       \x1B[01;36m\x1B[K(2)\x1B[m\x1B[K ...catching exception of type ‘\x1B[01m\x1B[Kio_error\x1B[m\x1B[K’ here
   11 |     \x1B[01;36m\x1B[K__analyzer_dump_path ()\x1B[m\x1B[K;
      |     \x1B[01;36m\x1B[K~~~~~~~~~~~~~~~~~~~~~~~\x1B[m\x1B[K
      |                          \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |                          \x1B[01;36m\x1B[K(3)\x1B[m\x1B[K ⚠️  here
`,A=`\x1B[01m\x1B[Kexception.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kint\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kexception.cc:11:26:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[Kpath
   11 |     \x1B[01;36m\x1B[K__analyzer_dump_path ()\x1B[m\x1B[K;
      |     \x1B[01;36m\x1B[K~~~~~~~~~~~~~~~~~~~~~^~\x1B[m\x1B[K
\x1B[01m\x1B[Kexception.cc:9:21:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(1)\x1B[m\x1B[K throwing exception of type ‘\x1B[01m\x1B[Kio_error\x1B[m\x1B[K’ here...
    9 |     throw io_error (\x1B[01;36m\x1B[K)\x1B[m\x1B[K;
      |                     \x1B[01;36m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kexception.cc:10:23:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(2)\x1B[m\x1B[K ...catching exception of type ‘\x1B[01m\x1B[Kio_error\x1B[m\x1B[K’ here
   10 |   } catch (exception &\x1B[01;36m\x1B[Kexc\x1B[m\x1B[K) {
      |                       \x1B[01;36m\x1B[K^~~\x1B[m\x1B[K
\x1B[01m\x1B[Kexception.cc:11:26:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K here
   11 |     \x1B[01;36m\x1B[K__analyzer_dump_path ()\x1B[m\x1B[K;
      |     \x1B[01;36m\x1B[K~~~~~~~~~~~~~~~~~~~~~^~\x1B[m\x1B[K
`,j=`\x1B[01m\x1B[Kpr126510-constexpr.cc:13:18:\x1B[m\x1B[K \x1B[01;31m\x1B[Kerror: \x1B[m\x1B[Kstatic assertion failed
   13 | static_assert (\x1B[01;31m\x1B[Kf ()\x1B[m\x1B[K); // fails, should succeed
      |                \x1B[01;31m\x1B[K~~^~\x1B[m\x1B[K
`,M=`\x1B[01m\x1B[Kpr126510.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kpr126510.cc:12:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   12 |   \x1B[01;35m\x1B[K__analyzer_eval (c != 0)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kpr126510.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (c == (C *) &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,N=`\x1B[01m\x1B[Kpr126510.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kpr126510.cc:12:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   12 |   \x1B[01;35m\x1B[K__analyzer_eval (c != 0)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kpr126510.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KTRUE
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (c == (C *) &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,P=`\x1B[01m\x1B[Kpr126510.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kpr126510.cc:12:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   12 |   \x1B[01;35m\x1B[K__analyzer_eval (c != 0)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kpr126510.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (c == (C *) &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,F=`\x1B[01m\x1B[Kpr126510.cc:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Kvoid\x1B[01;32m\x1B[K test\x1B[m\x1B[K()\x1B[m\x1B[K’:
\x1B[01m\x1B[Kpr126510.cc:12:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   12 |   \x1B[01;35m\x1B[K__analyzer_eval (c != 0)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kpr126510.cc:13:19:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[KUNKNOWN
   13 |   \x1B[01;35m\x1B[K__analyzer_eval (c == (C *) &obj)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~\x1B[m\x1B[K
`,I=`rmodel:
stack depth: 1
  frame (index 0): frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
clusters within frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
  cluster for: p_4: &HEAP_ALLOCATED_REGION(14)
m_called_unknown_fn: FALSE
constraint_manager:
  equiv classes:
  constraints:
dynamic_extents:
  HEAP_ALLOCATED_REGION(14): (size_t)16
malloc: 
  0x170116b0: &HEAP_ALLOCATED_REGION(14): unchecked ({free}) (‘\x1B[01m\x1B[Kp_4\x1B[m\x1B[K’)
\x1B[01m\x1B[Kstore.c:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’:
\x1B[01m\x1B[Kstore.c:10:3:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kdouble-‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ of ‘\x1B[01m\x1B[Kp\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-415\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-double-free\x1B[m\x1B[K]
   10 |   \x1B[01;35m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K^~~~~~~~\x1B[m\x1B[K
  ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’: events 1-5
    6 |   void *p = \x1B[01;36m\x1B[Kmalloc (16)\x1B[m\x1B[K;
      |             \x1B[01;36m\x1B[K^~~~~~~~~~~\x1B[m\x1B[K
      |             \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |             \x1B[01;36m\x1B[K(1)\x1B[m\x1B[K allocated here
    7 |   __analyzer_dump ();
    8 |   if \x1B[01;36m\x1B[K(\x1B[m\x1B[Kflag)
      |      \x1B[01;36m\x1B[K~\x1B[m\x1B[K       
      |      \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |      \x1B[01;36m\x1B[K(2)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch (when ‘\x1B[01m\x1B[Kflag != 0\x1B[m\x1B[K’)...\x1B[01;36m\x1B[K ─>─┐\x1B[m\x1B[K
      |                                                           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
      |                                                           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K┌\x1B[m\x1B[K\x1B[01;36m\x1B[K──────────────────────────────────────────────────────────┘\x1B[m\x1B[K
    9 |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[K~~~~~~~~\x1B[m\x1B[K 
      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K└\x1B[m\x1B[K\x1B[01;36m\x1B[K───>\x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K ...to here
      |     \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here
   10 |   \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;36m\x1B[K~~~~~~~~\x1B[m\x1B[K   
      |   \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |   \x1B[01;36m\x1B[K(5)\x1B[m\x1B[K ⚠️  second ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here; first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ was at \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K
`,L=`rmodel:
stack depth: 1
  frame (index 0): frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
clusters within frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
  cluster for: p_4: &HEAP_ALLOCATED_REGION(14)
m_called_unknown_fn: FALSE
constraint_manager:
  equiv classes:
  constraints:
dynamic_extents:
  HEAP_ALLOCATED_REGION(14): (size_t)16
malloc: 
  0x3c42a650: &HEAP_ALLOCATED_REGION(14): unchecked ({free}) (‘\x1B[01m\x1B[Kp_4\x1B[m\x1B[K’)
\x1B[01m\x1B[Kstore.c:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’:
\x1B[01m\x1B[Kstore.c:10:3:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kdouble-‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ of ‘\x1B[01m\x1B[Kp\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-415\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-double-free\x1B[m\x1B[K]
   10 |   \x1B[01;35m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kstore.c:6:13:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(1)\x1B[m\x1B[K allocated here
    6 |   void *p = \x1B[01;36m\x1B[Kmalloc (16)\x1B[m\x1B[K;
      |             \x1B[01;36m\x1B[K^~~~~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kstore.c:8:6:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(2)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch (when ‘\x1B[01m\x1B[Kflag != 0\x1B[m\x1B[K’)...
    8 |   if \x1B[01;36m\x1B[K(\x1B[m\x1B[Kflag)
      |      \x1B[01;36m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kstore.c:9:5:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K ...to here
    9 |     \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |     \x1B[01;36m\x1B[K^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kstore.c:9:5:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(4)\x1B[m\x1B[K first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here
\x1B[01m\x1B[Kstore.c:10:3:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(5)\x1B[m\x1B[K second ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here; first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ was at \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K
   10 |   \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;36m\x1B[K^~~~~~~~\x1B[m\x1B[K
`,ne=`rmodel:
stack depth: 1
  frame (index 0): frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
clusters within frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
  cluster for: p_4: &HEAP_ALLOCATED_REGION(14)
m_called_unknown_fn: FALSE
constraint_manager:
  equiv classes:
  constraints:
dynamic_extents:
  HEAP_ALLOCATED_REGION(14): (size_t)16
malloc: 
  0x25df6210: &HEAP_ALLOCATED_REGION(14): unchecked ({free}) (‘\x1B[01m\x1B[Kp_4\x1B[m\x1B[K’)
\x1B[01m\x1B[Kstore.c:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’:
\x1B[01m\x1B[Kstore.c:10:3:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kdouble-‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ of ‘\x1B[01m\x1B[Kp\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-415\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-double-free\x1B[m\x1B[K]
   10 |   \x1B[01;35m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K^~~~~~~~\x1B[m\x1B[K
  ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’: events 1-5
    6 |   void *p = \x1B[01;36m\x1B[Kmalloc (16)\x1B[m\x1B[K;
      |             \x1B[01;36m\x1B[K^~~~~~~~~~~\x1B[m\x1B[K
      |             \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |             \x1B[01;36m\x1B[K(1)\x1B[m\x1B[K allocated here
    7 |   __analyzer_dump ();
    8 |   if \x1B[01;36m\x1B[K(\x1B[m\x1B[Kflag)
      |      \x1B[01;36m\x1B[K~\x1B[m\x1B[K       
      |      \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |      \x1B[01;36m\x1B[K(2)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch (when ‘\x1B[01m\x1B[Kflag != 0\x1B[m\x1B[K’)...\x1B[01;36m\x1B[K ─>─┐\x1B[m\x1B[K
      |                                                           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
      |                                                           \x1B[01;36m\x1B[K│\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K┌\x1B[m\x1B[K\x1B[01;36m\x1B[K──────────────────────────────────────────────────────────┘\x1B[m\x1B[K
    9 |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[K~~~~~~~~\x1B[m\x1B[K 
      |\x1B[01;36m\x1B[K│\x1B[m\x1B[K    \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |\x1B[01;36m\x1B[K└\x1B[m\x1B[K\x1B[01;36m\x1B[K───>\x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K ...to here
      |     \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here
   10 |   \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;36m\x1B[K~~~~~~~~\x1B[m\x1B[K   
      |   \x1B[01;36m\x1B[K|\x1B[m\x1B[K
      |   \x1B[01;36m\x1B[K(5)\x1B[m\x1B[K ⚠️  second ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here; first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ was at \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K
`,R=`rmodel:
stack depth: 1
  frame (index 0): frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
clusters within frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
  cluster for: p_4: &HEAP_ALLOCATED_REGION(14)
m_called_unknown_fn: FALSE
constraint_manager:
  equiv classes:
  constraints:
dynamic_extents:
  HEAP_ALLOCATED_REGION(14): (size_t)16
malloc: 
  0x3f1eb2c0: &HEAP_ALLOCATED_REGION(14): unchecked ({free}) (‘\x1B[01m\x1B[Kp_4\x1B[m\x1B[K’)
\x1B[01m\x1B[Kstore.c:\x1B[m\x1B[K In function ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’:
\x1B[01m\x1B[Kstore.c:10:3:\x1B[m\x1B[K \x1B[01;35m\x1B[Kwarning: \x1B[m\x1B[Kdouble-‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ of ‘\x1B[01m\x1B[Kp\x1B[m\x1B[K’ [\x1B[01;35m\x1B[KCWE-415\x1B[m\x1B[K] [\x1B[01;35m\x1B[K-Wanalyzer-double-free\x1B[m\x1B[K]
   10 |   \x1B[01;35m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;35m\x1B[K^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kstore.c:6:13:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(1)\x1B[m\x1B[K allocated here
    6 |   void *p = \x1B[01;36m\x1B[Kmalloc (16)\x1B[m\x1B[K;
      |             \x1B[01;36m\x1B[K^~~~~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kstore.c:8:6:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(2)\x1B[m\x1B[K following ‘\x1B[01m\x1B[Ktrue\x1B[m\x1B[K’ branch (when ‘\x1B[01m\x1B[Kflag != 0\x1B[m\x1B[K’)...
    8 |   if \x1B[01;36m\x1B[K(\x1B[m\x1B[Kflag)
      |      \x1B[01;36m\x1B[K^\x1B[m\x1B[K
\x1B[01m\x1B[Kstore.c:9:5:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(3)\x1B[m\x1B[K ...to here
    9 |     \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |     \x1B[01;36m\x1B[K^~~~~~~~\x1B[m\x1B[K
\x1B[01m\x1B[Kstore.c:9:5:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(4)\x1B[m\x1B[K first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here
\x1B[01m\x1B[Kstore.c:10:3:\x1B[m\x1B[K \x1B[01;36m\x1B[Knote: \x1B[m\x1B[K\x1B[01;36m\x1B[K(5)\x1B[m\x1B[K second ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ here; first ‘\x1B[01m\x1B[Kfree\x1B[m\x1B[K’ was at \x1B[01;36m\x1B[K(4)\x1B[m\x1B[K
   10 |   \x1B[01;36m\x1B[Kfree (p)\x1B[m\x1B[K;
      |   \x1B[01;36m\x1B[K^~~~~~~~\x1B[m\x1B[K
`,z=`rmodel:
stack depth: 1
  frame (index 0): frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
clusters within frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
  cluster for: C c
    key:   {bytes 0-7}
    value: ‘\x1B[01m\x1B[Kint (*) () *\x1B[m\x1B[K’ {(&constexpr int (* C::_ZTV1C [6])(...)+(sizetype)16)}
    key:   {bytes 16-23}
    value: ‘\x1B[01m\x1B[Kint (*) () *\x1B[m\x1B[K’ {(&constexpr int (* C::_ZTV1C [6])(...)+(sizetype)40)}
m_called_unknown_fn: FALSE
constraint_manager:
  equiv classes:
    ec0: {&constexpr int (* C::_ZTV1C [6])(...)}
    ec1: {(void *)0B == [m_constant]‘\x1B[01m\x1B[K0B\x1B[m\x1B[K’}
  constraints:
    0: ec0: {&constexpr int (* C::_ZTV1C [6])(...)} != ec1: {(void *)0B == [m_constant]‘\x1B[01m\x1B[K0B\x1B[m\x1B[K’}
`,B=`rmodel:
stack depth: 1
  frame (index 0): frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
clusters within frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
  cluster for: C c
    key:   {bytes 0-7}
    value: ‘\x1B[01m\x1B[Kint (*) () *\x1B[m\x1B[K’ {(&constexpr int (* C::_ZTV1C [6])(...)+(sizetype)16)}
    key:   {bytes 16-23}
    value: ‘\x1B[01m\x1B[Kint (*) () *\x1B[m\x1B[K’ {(&constexpr int (* C::_ZTV1C [6])(...)+(sizetype)40)}
m_called_unknown_fn: FALSE
constraint_manager:
  equiv classes:
    ec0: {&constexpr int (* C::_ZTV1C [6])(...)}
    ec1: {(void *)0B == [m_constant]‘\x1B[01m\x1B[K0B\x1B[m\x1B[K’}
  constraints:
    0: ec0: {&constexpr int (* C::_ZTV1C [6])(...)} != ec1: {(void *)0B == [m_constant]‘\x1B[01m\x1B[K0B\x1B[m\x1B[K’}
`,V=`rmodel:
stack depth: 1
  frame (index 0): frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
clusters within frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
  cluster for: C c
    key:   {bytes 0-7}
    value: ‘\x1B[01m\x1B[Kint (*) () *\x1B[m\x1B[K’ {(&constexpr int (* C::_ZTV1C [6])(...)+(sizetype)16)}
    key:   {bytes 16-23}
    value: ‘\x1B[01m\x1B[Kint (*) () *\x1B[m\x1B[K’ {(&constexpr int (* C::_ZTV1C [6])(...)+(sizetype)40)}
m_called_unknown_fn: FALSE
constraint_manager:
  equiv classes:
    ec0: {&constexpr int (* C::_ZTV1C [6])(...)}
    ec1: {(void *)0B == [m_constant]‘\x1B[01m\x1B[K0B\x1B[m\x1B[K’}
  constraints:
    0: ec0: {&constexpr int (* C::_ZTV1C [6])(...)} != ec1: {(void *)0B == [m_constant]‘\x1B[01m\x1B[K0B\x1B[m\x1B[K’}
`,H=`rmodel:
stack depth: 1
  frame (index 0): frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
clusters within frame: ‘\x1B[01m\x1B[Ktest\x1B[m\x1B[K’@1
  cluster for: C c
    key:   {bytes 0-7}
    value: ‘\x1B[01m\x1B[Kint (*) () *\x1B[m\x1B[K’ {(&constexpr int (* C::_ZTV1C [6])(...)+(sizetype)16)}
    key:   {bytes 16-23}
    value: ‘\x1B[01m\x1B[Kint (*) () *\x1B[m\x1B[K’ {(&constexpr int (* C::_ZTV1C [6])(...)+(sizetype)40)}
m_called_unknown_fn: FALSE
constraint_manager:
  equiv classes:
    ec0: {&constexpr int (* C::_ZTV1C [6])(...)}
    ec1: {(void *)0B == [m_constant]‘\x1B[01m\x1B[K0B\x1B[m\x1B[K’}
  constraints:
    0: ec0: {&constexpr int (* C::_ZTV1C [6])(...)} != ec1: {(void *)0B == [m_constant]‘\x1B[01m\x1B[K0B\x1B[m\x1B[K’}
`,U=[`innerHTML`],W=l(e({__name:`Diag`,props:{name:{},lines:{},size:{},clip:{type:Boolean}},setup(e){let{$slidev:l,$nav:W,$clicksContext:re,$clicks:ie,$page:ae,$renderContext:oe,$frontmatter:se}=u(),G=e,K=Object.assign({"../diagnostics/devirt.after.ansi":``,"../diagnostics/devirt.after.events.ansi":``,"../diagnostics/devirt.before.ansi":ee,"../diagnostics/devirt.before.events.ansi":te,"../diagnostics/double-free.after.ansi":d,"../diagnostics/double-free.after.events.ansi":f,"../diagnostics/double-free.before.ansi":p,"../diagnostics/double-free.before.events.ansi":m,"../diagnostics/dyncast-ambig.after.ansi":h,"../diagnostics/dyncast-ambig.after.events.ansi":g,"../diagnostics/dyncast-ambig.before.ansi":_,"../diagnostics/dyncast-ambig.before.events.ansi":v,"../diagnostics/dyncast-fail.after.ansi":y,"../diagnostics/dyncast-fail.after.events.ansi":b,"../diagnostics/dyncast-fail.before.ansi":``,"../diagnostics/dyncast-fail.before.events.ansi":``,"../diagnostics/dyncast-precision.after.ansi":x,"../diagnostics/dyncast-precision.after.events.ansi":S,"../diagnostics/dyncast-precision.before.ansi":C,"../diagnostics/dyncast-precision.before.events.ansi":w,"../diagnostics/dyncast-sidecast.after.ansi":T,"../diagnostics/dyncast-sidecast.after.events.ansi":E,"../diagnostics/dyncast-sidecast.before.ansi":D,"../diagnostics/dyncast-sidecast.before.events.ansi":O,"../diagnostics/exception.after.ansi":k,"../diagnostics/exception.after.events.ansi":A,"../diagnostics/exception.before.ansi":``,"../diagnostics/exception.before.events.ansi":``,"../diagnostics/pr126510-constexpr.after.ansi":j,"../diagnostics/pr126510.after.ansi":M,"../diagnostics/pr126510.after.events.ansi":N,"../diagnostics/pr126510.before.ansi":P,"../diagnostics/pr126510.before.events.ansi":F,"../diagnostics/store.after.ansi":I,"../diagnostics/store.after.events.ansi":L,"../diagnostics/store.before.ansi":ne,"../diagnostics/store.before.events.ansi":R,"../diagnostics/vptr.after.ansi":z,"../diagnostics/vptr.after.events.ansi":B,"../diagnostics/vptr.before.ansi":V,"../diagnostics/vptr.before.events.ansi":H}),q={31:`#D14A65`,32:`#5ABCAC`,33:`#FF9A5C`,34:`#86A5EC`,35:`#FCBF55`,36:`#9CD1FF`};function J(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}let Y=o(()=>{let e=K[`../diagnostics/${G.name}.ansi`];if(e!==void 0){if(G.lines){let t=e.split(`
`);e=G.lines.split(`,`).flatMap(e=>{let[n,r]=e.split(`-`).map(Number);return t.slice(n-1,r||n)}).join(`
`)}return e.replace(/\n+$/,``)}}),X=o(()=>{let e=(Y.value??``).replace(/\x1B\[[\d;]*[mK]/g,``);return Math.max(20,...e.split(`
`).map(e=>[...e].reduce((e,t)=>e+(t.codePointAt(0)>9728&&t.codePointAt(0)<10240?2:t===`️`?0:1),0)))}),Z=s(),Q=s(0),$;t(()=>{$=new ResizeObserver(()=>{Q.value=Z.value?.clientWidth??0}),$.observe(Z.value)}),n(()=>$?.disconnect());let ce=o(()=>{let e=Number.parseFloat(G.size??`12`);return G.clip||!Q.value?`${e}px`:`${Math.min(e,(Q.value-28)/(X.value*.63))}px`}),le=o(()=>{if(Y.value===void 0)return`<span style="color:#D14A65">missing diagnostics/${J(G.name)}.ansi</span>`;let e=``,t=!1,n;return Y.value.replace(/\x1B\[K/g,``).split(/\x1B\[([\d;]*)m/).forEach((r,i)=>{if(i%2==1){for(let e of(r||`0`).split(`;`).map(Number))e===0?(t=!1,n=void 0):e===1?t=!0:q[e]?n=q[e]:e===39&&(n=void 0);return}if(!r)return;let a=[n&&`color:${n}`,t&&`font-weight:700`].filter(Boolean).join(`;`);e+=a?`<span style="${a}">${J(r)}</span>`:J(r)}),e});return(e,t)=>(r(),c(`div`,{ref_key:`wrap`,ref:Z,class:`diag-wrap`},[a(`pre`,{class:`diag`,style:i({fontSize:ce.value}),innerHTML:le.value},null,12,U)],512))}}),[[`__scopeId`,`data-v-db570886`]]);export{W as t};