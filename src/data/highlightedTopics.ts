import { Question } from './questionTypes';

export interface HighlightedTopic {
  id: string;
  name: string;
  subject: string;
  icon: string;
  color: string;
  questions: Question[];
}

export const HIGHLIGHTED_TOPICS: HighlightedTopic[] = [
  {
    id: 'lr_parsing',
    name: 'LR(0), SLR(1), LALR(1), CLR(1)',
    subject: 'Compiler Design',
    icon: '🔄',
    color: 'border-violet-500/40',
    questions: [
      { id: 'ht_lr_1', text: 'Which parser uses no lookahead and is the weakest LR parser?', options: ['SLR(1)', 'LR(0)', 'LALR(1)', 'CLR(1)'], correctAnswerIndex: 1, explanation: 'LR(0) uses no lookahead at all — it only uses the current state to decide shift or reduce.', difficulty: 'easy', marks: 1 },
      { id: 'ht_lr_2', text: 'Which of the following parsers is the most powerful among LR parsers?', options: ['LR(0)', 'SLR(1)', 'LALR(1)', 'CLR(1)'], correctAnswerIndex: 3, explanation: 'CLR(1) (Canonical LR(1)) is the most powerful, handling all deterministic context-free grammars that can be parsed deterministically.', difficulty: 'easy', marks: 1 },
      { id: 'ht_lr_3', text: 'SLR(1) resolves shift-reduce conflicts using:', options: ['FIRST sets of non-terminals', 'FOLLOW sets of non-terminals', 'Lookahead sets from LR(1) items', 'Both FIRST and FOLLOW'], correctAnswerIndex: 1, explanation: 'SLR(1) uses FOLLOW(A) to decide when to reduce by A → α. This is a global approximation.', difficulty: 'medium', marks: 1 },
      { id: 'ht_lr_4', text: 'LALR(1) is obtained from CLR(1) by:', options: ['Adding more lookahead symbols', 'Merging states with the same core (LR(0) items)', 'Splitting states with conflicts', 'Removing epsilon transitions'], correctAnswerIndex: 1, explanation: 'LALR(1) merges CLR(1) states that have identical LR(0) cores (ignoring lookaheads), reducing the number of states.', difficulty: 'medium', marks: 1 },
      { id: 'ht_lr_5', text: 'A grammar is LR(0) if its LR(0) automaton has no:', options: ['Shift actions', 'Reduce-reduce or shift-reduce conflicts', 'Goto transitions', 'Multiple accepting states'], correctAnswerIndex: 1, explanation: 'An LR(0) grammar has no conflicts in its LR(0) parsing table — every state has exactly one action.', difficulty: 'medium', marks: 1 },
      { id: 'ht_lr_6', text: 'The number of states in parsers for the same grammar satisfies:', options: ['LR(0) has more states than CLR(1)', 'LR(0) = SLR(1) = LALR(1) ≤ CLR(1) (in number of states)', 'CLR(1) always equals LALR(1)', 'SLR(1) has more states than LALR(1)'], correctAnswerIndex: 1, explanation: 'LR(0), SLR(1), and LALR(1) all use the same LR(0) automaton (same states). CLR(1) may have more states due to finer distinctions.', difficulty: 'hard', marks: 2 },
      { id: 'ht_lr_7', text: 'A conflict in LALR(1) but not in CLR(1) arises because:', options: ['LALR merges states causing lookahead conflicts', 'CLR(1) has fewer productions', 'SLR is more powerful than LALR', 'LALR handles more grammars'], correctAnswerIndex: 0, explanation: 'When LALR(1) merges states with same core but different lookaheads, the merged lookaheads can create conflicts not present in CLR(1).', difficulty: 'hard', marks: 2 },
      { id: 'ht_lr_8', text: 'Which of the following is TRUE about grammar power: G is LALR(1) implies G is also:', options: ['LR(0)', 'CLR(1)', 'SLR(1)', 'None of the above necessarily'], correctAnswerIndex: 1, explanation: 'Every LALR(1) grammar is also CLR(1) parseable (CLR(1) is strictly more powerful). But not every LALR(1) grammar is SLR(1).', difficulty: 'hard', marks: 2 },
    ]
  },
  {
    id: 'first_follow',
    name: 'FIRST & FOLLOW',
    subject: 'Compiler Design',
    icon: '🔤',
    color: 'border-violet-500/40',
    questions: [
      { id: 'ht_ff_1', text: 'For grammar S → aAb, A → cd | ε, what is FOLLOW(A)?', options: ['{a}', '{b}', '{c}', '{$}'], correctAnswerIndex: 1, explanation: 'In S → aAb, the symbol b directly follows A, so FOLLOW(A) = {b}.', difficulty: 'easy', marks: 1 },
      { id: 'ht_ff_2', text: 'FIRST(ε) is:', options: ['{ε}', '{}', '{$}', 'undefined'], correctAnswerIndex: 0, explanation: 'FIRST(ε) = {ε} by definition — the empty string derives itself.', difficulty: 'easy', marks: 1 },
      { id: 'ht_ff_3', text: 'For S → AB, A → a | ε, B → b | ε, what is FIRST(S)?', options: ['{a}', '{a, b}', '{a, b, ε}', '{a, b, $}'], correctAnswerIndex: 2, explanation: 'A can derive ε, so include FIRST(B). B can also derive ε, so ε ∈ FIRST(S). Total: {a, b, ε}.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ff_4', text: '$ (end marker) is always in FOLLOW of:', options: ['Every non-terminal', 'The start symbol only', 'Non-terminals that derive ε', 'Terminals only'], correctAnswerIndex: 1, explanation: '$ is always added to FOLLOW of the start symbol as initialization.', difficulty: 'easy', marks: 1 },
      { id: 'ht_ff_5', text: 'For grammar E → TE\', E\' → +TE\' | ε, T → FT\', T\' → *FT\' | ε, F → (E) | id, FIRST(E\') = ?', options: ['{+}', '{+, ε}', '{+, *, ε}', '{id, (}'], correctAnswerIndex: 1, explanation: 'E\' has productions +TE\' and ε. So FIRST(E\') = {+, ε}.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ff_6', text: 'If ε ∈ FIRST(α) in production A → αβ, then FIRST(A) includes:', options: ['Only FIRST(α)', 'FIRST(α) − {ε} ∪ FIRST(β)', 'FIRST(β) only', 'Nothing extra'], correctAnswerIndex: 1, explanation: 'If α can derive ε, we continue to β and add FIRST(β) to FIRST(A) as well (removing ε from α\'s contribution).', difficulty: 'medium', marks: 1 },
      { id: 'ht_ff_7', text: 'A grammar is LL(1) if for each non-terminal A with productions A → α | β:', options: ['FIRST(α) ∩ FIRST(β) = {} and at most one can derive ε; if one derives ε, FIRST(other) ∩ FOLLOW(A) = {}', 'FOLLOW(A) ∩ FIRST(α) = {}', 'FIRST(α) ∪ FIRST(β) = Σ*', 'All non-terminals have unique FOLLOW sets'], correctAnswerIndex: 0, explanation: 'LL(1) requires disjoint FIRST sets for alternatives and no ambiguity when one alternative can derive ε.', difficulty: 'hard', marks: 2 },
      { id: 'ht_ff_8', text: 'If B appears in A → αBβ and ε ∈ FIRST(β), then FOLLOW(A) ⊆ FOLLOW(B) because:', options: ['B can be followed by what follows A when β vanishes', 'B always derives ε', 'FIRST(B) ⊆ FOLLOW(A)', 'This is always false'], correctAnswerIndex: 0, explanation: 'If β can derive ε, then whatever follows A can also follow B (when β disappears). Hence FOLLOW(A) ⊆ FOLLOW(B).', difficulty: 'hard', marks: 2 },
    ]
  },
  {
    id: 'cfg_ambiguity',
    name: 'CFG + Ambiguity + Left Recursion',
    subject: 'Compiler Design',
    icon: '🌳',
    color: 'border-violet-500/40',
    questions: [
      { id: 'ht_cfg_1', text: 'A grammar is ambiguous if:', options: ['It generates an infinite language', 'Some string has two different parse trees', 'It has left recursion', 'It has more than one start symbol'], correctAnswerIndex: 1, explanation: 'Ambiguity: a string has more than one leftmost derivation (equivalently, two different parse trees).', difficulty: 'easy', marks: 1 },
      { id: 'ht_cfg_2', text: 'The grammar S → SS | a is:', options: ['Unambiguous', 'Ambiguous', 'Not context-free', 'Regular'], correctAnswerIndex: 1, explanation: '"aaa" has multiple parse trees: ((a·a)·a) and (a·(a·a)), making this grammar ambiguous.', difficulty: 'easy', marks: 1 },
      { id: 'ht_cfg_3', text: 'Left recursion is problematic for which type of parser?', options: ['LR parsers', 'Bottom-up parsers', 'LL (top-down) parsers', 'LALR parsers'], correctAnswerIndex: 2, explanation: 'LL (top-down, recursive descent) parsers loop infinitely on left-recursive productions.', difficulty: 'easy', marks: 1 },
      { id: 'ht_cfg_4', text: 'To eliminate direct left recursion A → Aα | β, replace with:', options: ['A → βA\', A\' → αA\' | ε', 'A → Aβ | α', 'A → α | β', 'A → βαA'], correctAnswerIndex: 0, explanation: 'Standard left-recursion elimination: A → βA\', A\' → αA\' | ε converts left recursion to right recursion.', difficulty: 'medium', marks: 1 },
      { id: 'ht_cfg_5', text: 'Which language CANNOT be generated by any CFG?', options: ['{ aⁿbⁿ | n ≥ 0 }', '{ aⁿbⁿcⁿ | n ≥ 0 }', '{ wwᴿ | w ∈ {a,b}* }', '{ aⁿb²ⁿ | n ≥ 0 }'], correctAnswerIndex: 1, explanation: 'aⁿbⁿcⁿ requires simultaneous matching of three counts — provably not CFL by the pumping lemma for CFLs.', difficulty: 'medium', marks: 1 },
      { id: 'ht_cfg_6', text: 'Chomsky Normal Form (CNF) requires every production to be:', options: ['A → BC or A → a', 'A → aB or A → a', 'A → AB or A → ε', 'A → BCD or A → a'], correctAnswerIndex: 0, explanation: 'CNF: each production is either A → BC (two non-terminals) or A → a (single terminal). S → ε allowed.', difficulty: 'medium', marks: 1 },
      { id: 'ht_cfg_7', text: 'An inherently ambiguous language is one where:', options: ['Every CFG for it is ambiguous', 'No CFG can generate it', 'It contains ε', 'Its grammar must have left recursion'], correctAnswerIndex: 0, explanation: 'An inherently ambiguous language has no unambiguous CFG — every grammar that generates it is ambiguous.', difficulty: 'hard', marks: 2 },
      { id: 'ht_cfg_8', text: 'Left factoring is needed when:', options: ['A grammar has left recursion', 'Two productions for the same non-terminal share a common prefix', 'The grammar generates an infinite language', 'More terminals than non-terminals exist'], correctAnswerIndex: 1, explanation: 'Left factoring extracts common prefixes to allow LL parsers to make a unique prediction: A → αβ | αγ becomes A → αA\', A\' → β | γ.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'dfa_nfa_regex',
    name: 'DFA/NFA + Regular Expression',
    subject: 'Theory of Computation',
    icon: '🔀',
    color: 'border-cyan-500/40',
    questions: [
      { id: 'ht_dfa_1', text: 'DFA and NFA are equivalent in terms of:', options: ['Number of states', 'Languages recognized (computational power)', 'Transition function structure', 'Time complexity'], correctAnswerIndex: 1, explanation: 'By subset construction, every NFA has an equivalent DFA. Both recognize exactly the regular languages.', difficulty: 'easy', marks: 1 },
      { id: 'ht_dfa_2', text: 'If an NFA has n states, the equivalent DFA has at most:', options: ['n states', 'n² states', '2ⁿ states', 'n! states'], correctAnswerIndex: 2, explanation: 'Subset construction creates one DFA state per subset of NFA states → at most 2ⁿ states.', difficulty: 'easy', marks: 1 },
      { id: 'ht_dfa_3', text: 'The regular expression (a|b)*abb denotes:', options: ['All strings ending in abb', 'Strings with exactly one abb', 'Strings starting with abb', 'All strings over {a,b}'], correctAnswerIndex: 0, explanation: '(a|b)* matches any prefix; abb at the end → all strings over {a,b} that end in abb.', difficulty: 'easy', marks: 1 },
      { id: 'ht_dfa_4', text: 'Minimum states in a DFA accepting strings over {0,1} ending in 01:', options: ['2', '3', '4', '5'], correctAnswerIndex: 1, explanation: 'States: q0 (start/other), q1 (seen 0), q2 (seen 01 = accept). Minimum = 3 states.', difficulty: 'medium', marks: 1 },
      { id: 'ht_dfa_5', text: 'ε-NFA allows transitions:', options: ['Only on input symbols', 'Without reading any input symbol', 'Only between accepting states', 'On any symbol of length > 1'], correctAnswerIndex: 1, explanation: 'ε-transitions allow a machine to change state without consuming any input character.', difficulty: 'easy', marks: 1 },
      { id: 'ht_dfa_6', text: 'Regular languages are closed under which operations?', options: ['Union, Concatenation, Complement only', 'Union, Concatenation, Kleene star, Complement, Intersection', 'Intersection only', 'Complement and Kleene star only'], correctAnswerIndex: 1, explanation: 'Regular languages are closed under: union, concatenation, Kleene star, complement, intersection, difference, reversal, and more.', difficulty: 'medium', marks: 1 },
      { id: 'ht_dfa_7', text: 'The regular expression for binary strings divisible by 2 is:', options: ['(0|1)*0', '0(0|1)*', '(0|1)*1', '0*1*'], correctAnswerIndex: 0, explanation: 'A binary number is divisible by 2 iff it ends in 0. Regex: (0|1)*0. (Includes "0" itself.)', difficulty: 'medium', marks: 1 },
      { id: 'ht_dfa_8', text: 'Two DFAs are equivalent if and only if:', options: ['They have same number of states', 'They accept the same language', 'They have the same transition function', 'Their minimal DFAs are isomorphic'], correctAnswerIndex: 3, explanation: 'The minimized DFA for a language is unique. Two DFAs accept the same language iff their minimal DFAs are isomorphic.', difficulty: 'hard', marks: 2 },
    ]
  },
  {
    id: 'pumping_lemma',
    name: 'Pumping Lemma',
    subject: 'Theory of Computation',
    icon: '💉',
    color: 'border-cyan-500/40',
    questions: [
      { id: 'ht_pl_1', text: 'Pumping Lemma for regular languages: for any s ∈ L with |s| ≥ p, s = xyz where:', options: ['|xy| ≤ p, |y| ≥ 1, xyⁱz ∈ L for all i ≥ 0', '|y| ≤ p, xyⁱz ∈ L for all i ≥ 1', 's must contain a repeated substring', 's must be of the form aⁿbⁿ'], correctAnswerIndex: 0, explanation: 'Pumping Lemma conditions: |xy| ≤ p, |y| ≥ 1, and xyⁱz ∈ L for all i ≥ 0.', difficulty: 'medium', marks: 1 },
      { id: 'ht_pl_2', text: 'The language L = {aⁿbⁿ | n ≥ 0} is:', options: ['Regular', 'Context-free but not regular', 'Context-sensitive but not CFL', 'Recursively enumerable only'], correctAnswerIndex: 1, explanation: 'aⁿbⁿ is the classic CFL. It fails the pumping lemma for regular languages. Grammar: S → aSb | ε.', difficulty: 'easy', marks: 1 },
      { id: 'ht_pl_3', text: 'To prove L = {0ⁿ1ⁿ | n ≥ 1} is not regular, the best string to choose is:', options: ['0^p 1^p', '0^(p+1) 1^p', '0^p 1^(p+1)', '0^p'], correctAnswerIndex: 0, explanation: 'Choose s = 0^p 1^p ∈ L. Since |xy| ≤ p, y = 0^k (k≥1). Pumping gives 0^(p+k)1^p ∉ L. Contradiction.', difficulty: 'hard', marks: 2 },
      { id: 'ht_pl_4', text: 'If a language PASSES the Pumping Lemma test, it:', options: ['Must be regular', 'May or may not be regular', 'Is definitely context-free', 'Is definitely infinite'], correctAnswerIndex: 1, explanation: 'Pumping Lemma is necessary but NOT sufficient for regularity. Passing does not guarantee the language is regular.', difficulty: 'medium', marks: 1 },
      { id: 'ht_pl_5', text: 'The Myhill-Nerode theorem is more powerful than Pumping Lemma because:', options: ['It is easier to apply', 'It gives a necessary AND sufficient condition for regularity', 'It works only for finite languages', 'It applies to context-free languages too'], correctAnswerIndex: 1, explanation: 'Myhill-Nerode provides a necessary and sufficient characterization of regular languages via equivalence classes.', difficulty: 'hard', marks: 2 },
      { id: 'ht_pl_6', text: 'For CFL Pumping Lemma, string s = uvwxy satisfies:', options: ['|vx| ≥ 1, |vwx| ≤ p, uvⁱwxⁱy ∈ L for all i ≥ 0', '|vwx| ≤ p and v = x', '|v| ≥ 1 and x can be empty', 'u, v, w, x, y are all non-empty'], correctAnswerIndex: 0, explanation: 'CFL Pumping Lemma: |vwx| ≤ p, |vx| ≥ 1 (v and x not both empty), and uvⁱwxⁱy ∈ L for all i ≥ 0.', difficulty: 'hard', marks: 2 },
      { id: 'ht_pl_7', text: 'Which language can be shown non-CFL using the CFL pumping lemma?', options: ['{aⁿbⁿ | n ≥ 0}', '{ww | w ∈ {a,b}*}', '{aⁿb²ⁿ | n ≥ 0}', '{aⁱbʲ | i ≠ j}'], correctAnswerIndex: 1, explanation: '{ww} (strings repeated twice) is not CFL. The CFL pumping lemma with s = a^p b^p a^p b^p proves this.', difficulty: 'hard', marks: 2 },
      { id: 'ht_pl_8', text: 'The pumping length p corresponds to the number of states in:', options: ['The NFA for L', 'The minimal DFA for L', 'The NFA with ε-transitions', 'The pushdown automaton for L'], correctAnswerIndex: 1, explanation: 'p is the number of states in the minimal DFA. By the pigeonhole principle, strings of length ≥ p must revisit a state.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'cpu_scheduling',
    name: 'CPU Scheduling',
    subject: 'Operating System',
    icon: '⚙️',
    color: 'border-emerald-500/40',
    questions: [
      { id: 'ht_cpu_1', text: 'Which scheduling algorithm can cause starvation?', options: ['FCFS', 'Round Robin', 'Priority Scheduling', 'SRTF (both SJF and Priority)'], correctAnswerIndex: 3, explanation: 'Both SJF/SRTF and Priority Scheduling can starve low-priority/long processes if high-priority/short ones keep arriving.', difficulty: 'easy', marks: 1 },
      { id: 'ht_cpu_2', text: 'SJF (non-preemptive) is optimal for:', options: ['Response time', 'Average waiting time (minimum)', 'Throughput', 'Turnaround time variance'], correctAnswerIndex: 1, explanation: 'Non-preemptive SJF minimizes average waiting time among all non-preemptive scheduling algorithms.', difficulty: 'easy', marks: 1 },
      { id: 'ht_cpu_3', text: 'Turnaround Time =', options: ['Burst Time + Waiting Time', 'Completion Time − Arrival Time', 'Response Time + Burst Time', 'Waiting Time − Arrival Time'], correctAnswerIndex: 1, explanation: 'Turnaround Time = Completion Time − Arrival Time. It includes all waiting, execution, and I/O time.', difficulty: 'easy', marks: 1 },
      { id: 'ht_cpu_4', text: 'Aging is used to prevent:', options: ['Deadlock', 'Starvation in priority scheduling', 'Page faults', 'Thrashing'], correctAnswerIndex: 1, explanation: 'Aging gradually increases the priority of long-waiting processes to prevent indefinite starvation.', difficulty: 'easy', marks: 1 },
      { id: 'ht_cpu_5', text: 'In Round Robin with time quantum q, if q is very large, RR behaves like:', options: ['SJF', 'FCFS', 'SRTF', 'Priority Scheduling'], correctAnswerIndex: 1, explanation: 'As q → ∞, RR degenerates to FCFS since each process runs to completion before the next gets CPU.', difficulty: 'medium', marks: 1 },
      { id: 'ht_cpu_6', text: 'Which of the following is preemptive?', options: ['FCFS', 'Non-preemptive SJF', 'SRTF (Shortest Remaining Time First)', 'Non-preemptive Priority'], correctAnswerIndex: 2, explanation: 'SRTF is the preemptive version of SJF — a new process with shorter remaining time preempts the running process.', difficulty: 'easy', marks: 1 },
      { id: 'ht_cpu_7', text: 'Response time in scheduling is defined as:', options: ['Time from arrival to first CPU allocation', 'Time from arrival to completion', 'Burst time only', 'Waiting time × 2'], correctAnswerIndex: 0, explanation: 'Response Time = Time of first CPU allocation − Arrival Time. Important for interactive systems.', difficulty: 'medium', marks: 1 },
      { id: 'ht_cpu_8', text: 'For processes P1(0,8), P2(1,4), P3(2,9), P4(3,5) — arrival(burst) — in FCFS, average waiting time is:', options: ['4.25', '6.25', '8.25', '10.25'], correctAnswerIndex: 1, explanation: 'FCFS: P1 waits 0, P2 waits 7, P3 waits 11, P4 waits 20. Avg = (0+7+11+2)/4 = 20/4 = 5. Wait: P1(0→8), P2(8→12), P3(12→21), P4(21→26). Waits: 0, 7, 10, 18. Avg=(35/4)=8.75. Correction: P2 arrives at 1, waits 8-1=7; P3 arrives at 2, starts 12, wait=10; P4 arrives 3, starts 21, wait=18. Avg=(0+7+10+18)/4=35/4=8.75.', difficulty: 'hard', marks: 2 },
    ]
  },
  {
    id: 'deadlock',
    name: 'Deadlock',
    subject: 'Operating System',
    icon: '🔒',
    color: 'border-emerald-500/40',
    questions: [
      { id: 'ht_dl_1', text: 'Which is NOT a necessary condition for deadlock?', options: ['Mutual exclusion', 'Hold and wait', 'Preemption allowed', 'Circular wait'], correctAnswerIndex: 2, explanation: 'Coffman conditions: mutual exclusion, hold-and-wait, NO preemption, circular wait. Preemption PREVENTS deadlock.', difficulty: 'easy', marks: 1 },
      { id: 'ht_dl_2', text: 'Banker\'s Algorithm is a:', options: ['Deadlock detection algorithm', 'Deadlock prevention algorithm', 'Deadlock avoidance algorithm', 'Deadlock recovery algorithm'], correctAnswerIndex: 2, explanation: 'Banker\'s algorithm avoids deadlock by only granting requests that keep the system in a safe state.', difficulty: 'easy', marks: 1 },
      { id: 'ht_dl_3', text: 'A system is in a safe state if:', options: ['No process is waiting for resources', 'There exists a safe sequence of all processes', 'All resources are currently available', 'No circular wait exists at this moment'], correctAnswerIndex: 1, explanation: 'Safe state: there exists an ordering (safe sequence) where each process can complete using available + held resources.', difficulty: 'medium', marks: 1 },
      { id: 'ht_dl_4', text: 'For single-instance resources, a cycle in the Resource Allocation Graph (RAG) means:', options: ['Possible deadlock but not certain', 'Definite deadlock', 'No deadlock', 'Starvation'], correctAnswerIndex: 1, explanation: 'For single-instance resources, a cycle in the RAG is NECESSARY AND SUFFICIENT for deadlock.', difficulty: 'medium', marks: 1 },
      { id: 'ht_dl_5', text: 'With 12 instances of a resource and 3 processes each needing at most 4, can deadlock occur?', options: ['Yes, if all request simultaneously', 'No, deadlock is impossible', 'Only if processes hold and wait', 'Depends on scheduling'], correctAnswerIndex: 1, explanation: 'Total max need = 12 = total instances. At any point, at least one process can always complete. No deadlock.', difficulty: 'hard', marks: 2 },
      { id: 'ht_dl_6', text: 'Eliminating "Hold and Wait" Coffman condition means:', options: ['A process must request all resources at once before starting', 'Resources are preempted from waiting processes', 'Resources are never held exclusively', 'Resources are allocated in linear order'], correctAnswerIndex: 0, explanation: 'Prevent hold-and-wait: a process must request ALL needed resources atomically before execution. Cannot request incrementally.', difficulty: 'medium', marks: 1 },
      { id: 'ht_dl_7', text: 'For n processes each needing at most m resources of type R (total R instances), deadlock is impossible if:', options: ['n × m ≤ R', 'n × (m−1) < R', 'n < R', 'n + m ≤ R'], correctAnswerIndex: 1, explanation: 'If n(m−1) < R, i.e., even if each process holds m−1, there\'s still ≥1 resource to let one process complete. No deadlock.', difficulty: 'hard', marks: 2 },
      { id: 'ht_dl_8', text: 'Which deadlock handling approach has no runtime overhead but ignores deadlock entirely?', options: ['Banker\'s Algorithm', 'Wait-Die scheme', 'Ostrich Algorithm', 'Wound-Wait scheme'], correctAnswerIndex: 2, explanation: 'Ostrich Algorithm: ignore deadlocks entirely (pretend they don\'t occur). Used in UNIX/Windows where deadlocks are rare.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'paging',
    name: 'Paging + Page Replacement',
    subject: 'Operating System',
    icon: '📄',
    color: 'border-emerald-500/40',
    questions: [
      { id: 'ht_pg_1', text: 'Which page replacement algorithm suffers from Belady\'s anomaly?', options: ['LRU', 'Optimal (OPT)', 'FIFO', 'Clock Algorithm'], correctAnswerIndex: 2, explanation: 'FIFO can have MORE page faults with MORE frames (Belady\'s anomaly). LRU and OPT are stack algorithms — they don\'t suffer this.', difficulty: 'easy', marks: 1 },
      { id: 'ht_pg_2', text: 'The Optimal page replacement (OPT) algorithm replaces the page that:', options: ['Was used least recently', 'Will not be used for the longest future time', 'Was loaded into memory first', 'Has the smallest page number'], correctAnswerIndex: 1, explanation: 'OPT (Belady\'s algorithm): evict the page whose next use is farthest in the future. Gives minimum page faults.', difficulty: 'easy', marks: 1 },
      { id: 'ht_pg_3', text: 'In a system with 32-bit virtual address and 4KB page size, number of virtual pages =', options: ['2^10', '2^20', '2^22', '2^32'], correctAnswerIndex: 1, explanation: 'Page size = 4KB = 2^12. Virtual pages = 2^32 / 2^12 = 2^20 = 1M pages.', difficulty: 'medium', marks: 1 },
      { id: 'ht_pg_4', text: 'TLB (Translation Lookaside Buffer) stores:', options: ['Page table entries (virtual-to-physical address translations)', 'Physical memory contents', 'Disk block locations', 'Process control blocks'], correctAnswerIndex: 0, explanation: 'TLB is a fast cache for recent page table entries, speeding up virtual-to-physical address translation.', difficulty: 'easy', marks: 1 },
      { id: 'ht_pg_5', text: 'If TLB hit ratio = h, TLB access time = t₁, memory access time = t₂, then EMAT =', options: ['h(t₁+t₂) + (1−h)(t₁+2t₂)', 'h·t₁ + (1−h)·t₂', 'h·t₂ + (1−h)·2t₂', 't₁ + t₂'], correctAnswerIndex: 0, explanation: 'Hit: t₁ (TLB) + t₂ (memory). Miss: t₁ (TLB) + t₂ (page table) + t₂ (memory). EMAT = h(t₁+t₂) + (1−h)(t₁+2t₂).', difficulty: 'hard', marks: 2 },
      { id: 'ht_pg_6', text: 'Thrashing occurs when:', options: ['CPU utilization reaches 100%', 'Processes spend more time swapping pages than executing', 'TLB hit rate drops below 50%', 'Too many processes are in the ready queue'], correctAnswerIndex: 1, explanation: 'Thrashing: excessive paging activity causes CPU utilization to drop drastically. Working set model prevents it.', difficulty: 'medium', marks: 1 },
      { id: 'ht_pg_7', text: 'Inverted page table has one entry per:', options: ['Virtual page', 'Physical frame', 'Process', 'Segment'], correctAnswerIndex: 1, explanation: 'Inverted page table: one entry per PHYSICAL FRAME (not per virtual page), drastically reducing memory for page tables.', difficulty: 'medium', marks: 1 },
      { id: 'ht_pg_8', text: 'For reference string 1,2,3,4,1,2,5,1,2,3,4,5 with 3 frames using LRU, page faults =', options: ['7', '8', '9', '10'], correctAnswerIndex: 1, explanation: 'LRU with 3 frames: 1(F),2(F),3(F),4(F-evict1),1(F-evict2),2(F-evict3),5(F-evict4),1,2,3(F-evict5),4(F-evict1),5(F-evict2) = 8 faults.', difficulty: 'hard', marks: 2 },
    ]
  },
  {
    id: 'synchronization',
    name: 'Synchronization + Semaphores',
    subject: 'Operating System',
    icon: '🚦',
    color: 'border-emerald-500/40',
    questions: [
      { id: 'ht_sync_1', text: 'A binary semaphore takes values:', options: ['0 or 1 only', 'Any non-negative integer', '0, 1, or −1', 'Only 0'], correctAnswerIndex: 0, explanation: 'Binary semaphore (mutex) is restricted to 0 or 1. Used for mutual exclusion.', difficulty: 'easy', marks: 1 },
      { id: 'ht_sync_2', text: 'The wait() (P) operation on semaphore S:', options: ['Increments S', 'Decrements S; if S < 0, process blocks', 'If S > 0, busy-waits', 'Signals another process'], correctAnswerIndex: 1, explanation: 'wait(S): S = S−1. If S < 0, the process is added to the waiting queue. Signal() (V) does the reverse.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sync_3', text: 'In Producer-Consumer with bounded buffer of size N, initial value of "empty" semaphore =', options: ['0', '1', 'N', 'N−1'], correctAnswerIndex: 2, explanation: 'Initially all N buffer slots are empty → empty = N. The "full" semaphore is initialized to 0.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sync_4', text: 'Peterson\'s solution works correctly for:', options: ['Any number of processes', 'Exactly 2 processes', '3 processes only', 'N processes with N semaphores'], correctAnswerIndex: 1, explanation: 'Peterson\'s algorithm is designed for exactly 2 processes using turn and flag variables.', difficulty: 'easy', marks: 1 },
      { id: 'ht_sync_5', text: 'Which satisfies mutual exclusion, progress, AND bounded waiting?', options: ['Peterson\'s Algorithm', 'Simple spin-lock with test-and-set', 'Dekker\'s Algorithm', 'Both A and C'], correctAnswerIndex: 3, explanation: 'Both Peterson\'s and Dekker\'s algorithms satisfy all three critical-section requirements: ME, progress, bounded waiting.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sync_6', text: 'In the Readers-Writers problem (first version, readers priority), writers may face:', options: ['Mutual exclusion violation', 'Starvation', 'Deadlock', 'Race condition'], correctAnswerIndex: 1, explanation: 'Readers-priority: a continuous stream of readers can indefinitely delay writers → writer starvation.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sync_7', text: 'A monitor differs from a semaphore because monitors:', options: ['Are lower-level primitives', 'Automatically ensure mutual exclusion for all procedures within them', 'Require busy-waiting', 'Can only signal one thread at a time'], correctAnswerIndex: 1, explanation: 'Monitors are high-level: at most one process can execute inside a monitor at a time — mutual exclusion is automatic.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sync_8', text: 'Test-and-Set is an atomic hardware instruction used to implement:', options: ['Virtual memory', 'Deadlock avoidance', 'Spin locks for busy-wait mutual exclusion', 'Page replacement'], correctAnswerIndex: 2, explanation: 'TAS atomically reads and sets a memory location. Used to build spin locks — busy-wait mutual exclusion primitives.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'normalization',
    name: 'Functional Dependency + Normalization',
    subject: 'DBMS',
    icon: '🗄️',
    color: 'border-amber-500/40',
    questions: [
      { id: 'ht_norm_1', text: 'A relation is in BCNF if for every non-trivial FD X → Y:', options: ['Y is a prime attribute', 'X is a superkey', 'X is a prime attribute', 'Y is not part of any candidate key'], correctAnswerIndex: 1, explanation: 'BCNF: for every non-trivial functional dependency X → Y, X must be a superkey.', difficulty: 'easy', marks: 1 },
      { id: 'ht_norm_2', text: 'A relation is in 2NF if it is in 1NF and:', options: ['No transitive dependencies exist', 'Every non-prime attribute is fully functionally dependent on every candidate key (no partial dependencies)', 'Every attribute depends on the primary key only', 'There are no multi-valued dependencies'], correctAnswerIndex: 1, explanation: '2NF: 1NF + no partial dependencies — every non-prime attribute must fully depend on every candidate key.', difficulty: 'medium', marks: 1 },
      { id: 'ht_norm_3', text: 'For R(A,B,C,D) with FDs: A→B, B→C, C→D, the candidate key is:', options: ['{A,B}', '{A}', '{A,B,C}', '{B,C}'], correctAnswerIndex: 1, explanation: 'A→B→C→D, so A determines all attributes. {A} is the only candidate key.', difficulty: 'medium', marks: 1 },
      { id: 'ht_norm_4', text: 'Which normal form eliminates transitive dependencies?', options: ['1NF', '2NF', '3NF', 'BCNF'], correctAnswerIndex: 2, explanation: '3NF: no non-prime attribute should transitively depend on the primary key. Eliminates transitive dependencies.', difficulty: 'easy', marks: 1 },
      { id: 'ht_norm_5', text: 'The closure of {A} under FDs {A→B, B→C, AC→D} is:', options: ['{A}', '{A,B}', '{A,B,C}', '{A,B,C,D}'], correctAnswerIndex: 3, explanation: 'A+ : A→B gives {A,B}; B→C gives {A,B,C}; now A and C are both in closure, so AC→D gives {A,B,C,D}.', difficulty: 'medium', marks: 1 },
      { id: 'ht_norm_6', text: 'Lossless decomposition of R into R1 and R2 requires:', options: ['R1 ∩ R2 is a superkey of R1 or R2', 'R1 ∩ R2 = ∅', 'R1 ∪ R2 = R', 'R1 and R2 have equal number of attributes'], correctAnswerIndex: 0, explanation: 'Lossless decomposition: R1 ∩ R2 → R1 or R1 ∩ R2 → R2 must hold (intersection is a superkey of at least one relation).', difficulty: 'hard', marks: 2 },
      { id: 'ht_norm_7', text: 'BCNF vs 3NF: BCNF decomposition may not preserve:', options: ['Lossless-join property', 'All functional dependencies', 'Any attribute', 'Primary keys'], correctAnswerIndex: 1, explanation: 'BCNF guarantees lossless join but may lose dependency preservation. 3NF preserves all FDs (with lossless join too).', difficulty: 'hard', marks: 2 },
      { id: 'ht_norm_8', text: 'Armstrong\'s axioms include (basic set):', options: ['Reflexivity, Augmentation, Transitivity', 'Union, Decomposition, Pseudo-transitivity', 'Reflexivity, Union, Decomposition', 'Transitivity, Decomposition, Augmentation'], correctAnswerIndex: 0, explanation: 'Armstrong\'s axioms (sound and complete): Reflexivity, Augmentation, Transitivity. Union/Decomposition/Pseudo-transitivity are derived.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    subject: 'DBMS',
    icon: '💾',
    color: 'border-amber-500/40',
    questions: [
      { id: 'ht_sql_1', text: 'Which SQL clause filters groups after GROUP BY?', options: ['WHERE', 'HAVING', 'GROUP BY', 'ORDER BY'], correctAnswerIndex: 1, explanation: 'HAVING filters groups after aggregation. WHERE filters rows before grouping.', difficulty: 'easy', marks: 1 },
      { id: 'ht_sql_2', text: 'NATURAL JOIN automatically joins on:', options: ['Primary key only', 'All columns with the same name in both tables', 'Foreign key columns', 'All columns of both tables'], correctAnswerIndex: 1, explanation: 'NATURAL JOIN equi-joins on ALL columns that share the same name in both tables.', difficulty: 'easy', marks: 1 },
      { id: 'ht_sql_3', text: 'COUNT(*) vs COUNT(column): which ignores NULLs?', options: ['COUNT(*)', 'COUNT(column)', 'Both ignore NULLs', 'Neither — both count NULLs'], correctAnswerIndex: 1, explanation: 'COUNT(*) counts ALL rows including NULLs. COUNT(column) ignores NULL values in that specific column.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sql_4', text: 'EXISTS in a subquery returns TRUE when:', options: ['The subquery returns at least one row', 'The column has no NULL values', 'The value exists in a given list', 'The table is not empty'], correctAnswerIndex: 0, explanation: 'EXISTS is true if the correlated subquery returns one or more rows, regardless of column values.', difficulty: 'easy', marks: 1 },
      { id: 'ht_sql_5', text: 'A VIEW in SQL is:', options: ['A physical copy of table data', 'A stored virtual table defined by a query', 'An index on a table', 'A temporary table automatically dropped after session'], correctAnswerIndex: 1, explanation: 'A view is a virtual/named query. Data is not physically stored (unless it\'s a materialized view).', difficulty: 'easy', marks: 1 },
      { id: 'ht_sql_6', text: 'The FOREIGN KEY constraint ensures:', options: ['Uniqueness of values in the column', 'Referential integrity between two tables', 'No NULL values are allowed', 'The column is the primary key'], correctAnswerIndex: 1, explanation: 'FK ensures referential integrity: every FK value must exist in the referenced primary key column (or be NULL).', difficulty: 'easy', marks: 1 },
      { id: 'ht_sql_7', text: 'Which isolation level prevents dirty reads but allows non-repeatable reads?', options: ['Read Uncommitted', 'Read Committed', 'Repeatable Read', 'Serializable'], correctAnswerIndex: 1, explanation: 'Read Committed prevents dirty reads (reads only committed data) but another transaction can still modify data between reads.', difficulty: 'hard', marks: 2 },
      { id: 'ht_sql_8', text: 'SELECT COUNT(DISTINCT dept) FROM emp returns:', options: ['Total rows in emp table', 'Number of unique non-NULL department values', 'Number of departments including NULL', 'Number of employees per department'], correctAnswerIndex: 1, explanation: 'COUNT(DISTINCT dept) counts unique, non-NULL department values across all rows.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'serializability',
    name: 'Serializability + Precedence Graph',
    subject: 'DBMS',
    icon: '🔗',
    color: 'border-amber-500/40',
    questions: [
      { id: 'ht_ser_1', text: 'A schedule is conflict-serializable if:', options: ['It has no conflicts', 'Its precedence (serialization) graph is acyclic', 'All transactions execute serially', 'No two transactions access the same data'], correctAnswerIndex: 1, explanation: 'A schedule is conflict-serializable iff its precedence graph has no cycles.', difficulty: 'easy', marks: 1 },
      { id: 'ht_ser_2', text: 'Two operations conflict when they:', options: ['Belong to different transactions and access same data item with at least one write', 'Both read the same data item', 'Belong to the same transaction', 'Access different data items'], correctAnswerIndex: 0, explanation: 'Conflicting ops: different transactions, same data item, at least one write (RW, WR, WW pairs).', difficulty: 'medium', marks: 1 },
      { id: 'ht_ser_3', text: 'In precedence graph, edge Ti → Tj is drawn when:', options: ['Ti reads what Tj wrote earlier', 'Ti has a conflicting op on the same data that appears BEFORE Tj\'s conflicting op', 'Ti commits before Tj', 'Ti and Tj access different data'], correctAnswerIndex: 1, explanation: 'Edge Ti → Tj: Ti\'s conflicting operation precedes Tj\'s conflicting operation on the same data item.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ser_4', text: 'View serializability is _____ conflict serializability:', options: ['Equivalent to', 'Stronger than', 'Weaker than (more permissive)', 'Independent of'], correctAnswerIndex: 2, explanation: 'Every conflict-serializable schedule is view-serializable, but not vice versa. View serializability is more permissive.', difficulty: 'hard', marks: 2 },
      { id: 'ht_ser_5', text: 'Two-Phase Locking (2PL) guarantees:', options: ['Deadlock-free execution', 'Conflict serializability', 'View serializability only', 'No cascading aborts'], correctAnswerIndex: 1, explanation: '2PL ensures conflict serializability. However, it can cause deadlocks. Strict 2PL additionally prevents cascading aborts.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ser_6', text: 'In 2PL, the growing phase allows:', options: ['Only releasing locks', 'Only acquiring locks', 'Both acquiring and releasing locks', 'No lock operations'], correctAnswerIndex: 1, explanation: 'Growing phase: transaction may only ACQUIRE locks. Shrinking phase: may only RELEASE locks. Lock point is the max.', difficulty: 'easy', marks: 1 },
      { id: 'ht_ser_7', text: 'Strict 2PL differs from 2PL in that:', options: ['It releases all locks at commit/abort only', 'It acquires all locks at once', 'It allows more parallelism', 'It prevents deadlocks'], correctAnswerIndex: 0, explanation: 'Strict 2PL: all exclusive locks held until transaction commits or aborts. Prevents cascading aborts.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ser_8', text: 'Timestamp-based concurrency control aborts a transaction when:', options: ['It tries to read data with write timestamp > its own timestamp', 'It uses too many locks', 'It runs for too long', 'It writes data that another transaction read'], correctAnswerIndex: 0, explanation: 'Thomas write rule aside, if Ti tries to read data written by a later Tj (W-TS > TS(Ti)), Ti is aborted to maintain timestamp order.', difficulty: 'hard', marks: 2 },
    ]
  },
  {
    id: 'cache_mapping',
    name: 'Cache Mapping',
    subject: 'Computer Architecture',
    icon: '🗃️',
    color: 'border-rose-500/40',
    questions: [
      { id: 'ht_cache_1', text: 'In direct-mapped cache, a memory block maps to:', options: ['Any cache line (fully flexible)', 'Exactly one cache line (determined by modulo)', 'A set of cache lines', 'All cache lines simultaneously'], correctAnswerIndex: 1, explanation: 'Direct-mapped: block number mod (cache lines) determines the unique cache line for each memory block.', difficulty: 'easy', marks: 1 },
      { id: 'ht_cache_2', text: 'Fully associative cache eliminates:', options: ['Compulsory misses', 'Conflict misses', 'Capacity misses', 'All types of misses'], correctAnswerIndex: 1, explanation: 'Fully associative: any memory block → any cache line. Eliminates conflict misses. Disadvantage: expensive parallel tag comparison.', difficulty: 'easy', marks: 1 },
      { id: 'ht_cache_3', text: 'For a direct-mapped cache: 1024 lines, 32-byte blocks, 32-bit address. Number of index bits =', options: ['5', '10', '15', '17'], correctAnswerIndex: 1, explanation: '1024 = 2^10 → 10 index bits. Block offset = log₂(32) = 5 bits. Tag = 32 − 10 − 5 = 17 bits.', difficulty: 'medium', marks: 1 },
      { id: 'ht_cache_4', text: 'A 4-way set-associative cache with 256 sets, 64-byte blocks, 32-bit addresses has tag bits =', options: ['16', '18', '20', '22'], correctAnswerIndex: 1, explanation: 'Offset = log₂(64) = 6, Index = log₂(256) = 8, Tag = 32 − 6 − 8 = 18 bits.', difficulty: 'hard', marks: 2 },
      { id: 'ht_cache_5', text: 'Write-through cache policy means:', options: ['Write to cache only; update memory on eviction', 'Write to both cache and main memory simultaneously', 'Write only to main memory', 'Write to cache with a dirty bit'], correctAnswerIndex: 1, explanation: 'Write-through: every write updates both cache and main memory. Simple but slower (memory write every time).', difficulty: 'easy', marks: 1 },
      { id: 'ht_cache_6', text: 'Write-back cache uses a dirty bit to indicate:', options: ['Cache hit occurred', 'The cache block was modified and differs from memory (needs writeback on eviction)', 'The block is invalid', 'The block was recently read'], correctAnswerIndex: 1, explanation: 'Dirty bit = 1: cache block modified. On eviction, if dirty=1, write block back to main memory.', difficulty: 'medium', marks: 1 },
      { id: 'ht_cache_7', text: 'A compulsory (cold) miss occurs because:', options: ['Cache is full', 'Two blocks compete for the same cache line', 'The block has never been loaded into cache before', 'The working set exceeds cache size'], correctAnswerIndex: 2, explanation: 'Compulsory/cold miss: first access to any block is always a miss. Unavoidable regardless of cache size.', difficulty: 'medium', marks: 1 },
      { id: 'ht_cache_8', text: 'LRU replacement in set-associative cache evicts the block that was:', options: ['Loaded first into the set', 'Least recently accessed in that set', 'Accessed most recently', 'Smallest in address'], correctAnswerIndex: 1, explanation: 'LRU (Least Recently Used): in each set, evict the block that has not been accessed for the longest time.', difficulty: 'easy', marks: 1 },
    ]
  },
  {
    id: 'pipeline',
    name: 'Pipeline + Hazards',
    subject: 'Computer Architecture',
    icon: '🔧',
    color: 'border-rose-500/40',
    questions: [
      { id: 'ht_pipe_1', text: 'A 5-stage pipeline executing n instructions takes:', options: ['5n cycles', '5 + (n−1) cycles', 'n/5 cycles', '5n − 4 cycles'], correctAnswerIndex: 1, explanation: 'Pipeline: first instruction takes 5 cycles to fill. Each additional instruction adds 1 cycle. Total = 5 + (n−1) = n+4 cycles.', difficulty: 'easy', marks: 1 },
      { id: 'ht_pipe_2', text: 'A RAW (Read After Write) hazard occurs when:', options: ['Two instructions need the same hardware unit', 'An instruction reads a register before a previous instruction finishes writing it', 'A branch changes the PC', 'Cache miss stalls the pipeline'], correctAnswerIndex: 1, explanation: 'RAW (true dependency): instruction i+1 needs the result of instruction i before the pipeline has produced it.', difficulty: 'easy', marks: 1 },
      { id: 'ht_pipe_3', text: 'Data forwarding (bypassing) resolves:', options: ['Control hazards', 'Structural hazards', 'RAW data hazards (reduces stalls)', 'All hazard types'], correctAnswerIndex: 2, explanation: 'Forwarding passes the computed result directly from one pipeline stage to the input of a later stage, reducing RAW hazard stalls.', difficulty: 'easy', marks: 1 },
      { id: 'ht_pipe_4', text: 'Structural hazard occurs when:', options: ['Two instructions need the same hardware resource simultaneously', 'A branch mispredicts', 'Data is not ready', 'Cache misses'], correctAnswerIndex: 0, explanation: 'Structural hazard: resource conflict — two instructions at different pipeline stages need the same physical hardware unit.', difficulty: 'easy', marks: 1 },
      { id: 'ht_pipe_5', text: 'Branch prediction is used to reduce:', options: ['Data hazards', 'Structural hazards', 'Control hazards', 'Memory hazards'], correctAnswerIndex: 2, explanation: 'Control hazards arise from branches. Prediction (static/dynamic) reduces pipeline stalls from branch uncertainty.', difficulty: 'easy', marks: 1 },
      { id: 'ht_pipe_6', text: 'CPI = 1 + stall cycles per instruction. If 20% instructions are branches with 2 stall cycles each (no prediction), CPI =', options: ['1.2', '1.4', '1.6', '2.0'], correctAnswerIndex: 1, explanation: 'CPI = 1 + 0.20 × 2 = 1.4', difficulty: 'medium', marks: 1 },
      { id: 'ht_pipe_7', text: 'WAR (Write After Read) is called:', options: ['True dependency', 'Anti-dependency', 'Output dependency', 'Control dependency'], correctAnswerIndex: 1, explanation: 'RAW = true/flow dependency. WAR = anti-dependency. WAW = output dependency.', difficulty: 'medium', marks: 1 },
      { id: 'ht_pipe_8', text: 'Out-of-order execution with register renaming eliminates:', options: ['RAW hazards', 'WAR and WAW hazards (false dependencies)', 'Structural hazards', 'Branch mispredictions'], correctAnswerIndex: 1, explanation: 'Register renaming eliminates WAR and WAW (false dependencies) by giving each write a new physical register name.', difficulty: 'hard', marks: 2 },
    ]
  },
  {
    id: 'subnetting',
    name: 'Subnetting/IP Addressing',
    subject: 'Computer Networks',
    icon: '🌐',
    color: 'border-blue-500/40',
    questions: [
      { id: 'ht_sub_1', text: 'Subnet mask /26 means:', options: ['26 host bits, 6 network bits', '26 network bits, 6 host bits → 62 usable hosts', '26 bits for subnet ID only', '26 usable hosts'], correctAnswerIndex: 1, explanation: '/26: 26 network bits, 6 host bits. Usable hosts = 2^6 − 2 = 62 per subnet.', difficulty: 'easy', marks: 1 },
      { id: 'ht_sub_2', text: 'For IP 192.168.10.130/26, the network address is:', options: ['192.168.10.0', '192.168.10.128', '192.168.10.64', '192.168.10.192'], correctAnswerIndex: 1, explanation: 'Mask /26 = 255.255.255.192. 130 & 192 = 128. Network: 192.168.10.128.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sub_3', text: 'Usable hosts in a /27 subnet:', options: ['30', '32', '62', '126'], correctAnswerIndex: 0, explanation: '/27: 5 host bits → 2^5 − 2 = 30 usable hosts per subnet.', difficulty: 'easy', marks: 1 },
      { id: 'ht_sub_4', text: 'Class C IP range:', options: ['0.0.0.0 − 127.255.255.255', '128.0.0.0 − 191.255.255.255', '192.0.0.0 − 223.255.255.255', '224.0.0.0 − 239.255.255.255'], correctAnswerIndex: 2, explanation: 'Class C: 192.0.0.0 to 223.255.255.255. Default mask /24 (254 usable hosts per network).', difficulty: 'easy', marks: 1 },
      { id: 'ht_sub_5', text: 'From 200.1.1.0/24, how many /27 subnets can be created?', options: ['4', '8', '16', '32'], correctAnswerIndex: 1, explanation: '/24 → /27: 3 extra bits borrowed. 2^3 = 8 subnets, each with 30 usable hosts.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sub_6', text: 'CIDR was introduced to:', options: ['Replace IPv6', 'Slow IPv4 exhaustion and enable route aggregation (supernetting)', 'Enable multicast routing', 'Replace subnetting'], correctAnswerIndex: 1, explanation: 'CIDR allows flexible prefix lengths, route aggregation (supernetting), and helps conserve IPv4 address space.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sub_7', text: 'IPv4 loopback address is:', options: ['0.0.0.0', '127.0.0.1', '255.255.255.255', '192.168.0.1'], correctAnswerIndex: 1, explanation: '127.0.0.1 is the loopback address — packets to this address are processed locally without hitting the network.', difficulty: 'easy', marks: 1 },
      { id: 'ht_sub_8', text: 'The broadcast address for 192.168.1.64/26 is:', options: ['192.168.1.127', '192.168.1.128', '192.168.1.255', '192.168.1.95'], correctAnswerIndex: 0, explanation: 'Network 192.168.1.64/26, 6 host bits. Broadcast = set all host bits to 1: 64+63=127. Broadcast: 192.168.1.127.', difficulty: 'hard', marks: 2 },
    ]
  },
  {
    id: 'tcp',
    name: 'TCP + Congestion/Flow Control',
    subject: 'Computer Networks',
    icon: '📡',
    color: 'border-blue-500/40',
    questions: [
      { id: 'ht_tcp_1', text: 'TCP connection establishment uses a ___ -way handshake:', options: ['2', '3', '4', '5'], correctAnswerIndex: 1, explanation: 'TCP 3-way handshake: SYN → SYN-ACK → ACK. Establishes sequence numbers on both sides.', difficulty: 'easy', marks: 1 },
      { id: 'ht_tcp_2', text: 'TCP flow control prevents:', options: ['Network congestion', 'The sender from overwhelming the receiver\'s buffer', 'Routing loops', 'Packet loss due to noise'], correctAnswerIndex: 1, explanation: 'Flow control: receiver advertises rwnd (receive window size) to prevent its buffer from overflowing.', difficulty: 'easy', marks: 1 },
      { id: 'ht_tcp_3', text: 'In TCP slow start, cwnd grows:', options: ['Linearly by 1 MSS per RTT', 'Exponentially — doubles per RTT (1 MSS per ACK)', 'Fixed at 1 MSS', 'By ssthresh per RTT'], correctAnswerIndex: 1, explanation: 'Slow start: cwnd += 1 MSS per ACK received → doubles each RTT until ssthresh or loss.', difficulty: 'medium', marks: 1 },
      { id: 'ht_tcp_4', text: 'When TCP detects loss via 3 duplicate ACKs (fast retransmit), it:', options: ['Resets cwnd=1 and restarts slow start', 'Sets ssthresh=cwnd/2, cwnd=ssthresh+3 (fast recovery)', 'Doubles cwnd', 'Closes the connection'], correctAnswerIndex: 1, explanation: 'Triple dup ACKs → fast retransmit + fast recovery. ssthresh = cwnd/2, cwnd = ssthresh+3. Less severe than timeout.', difficulty: 'hard', marks: 2 },
      { id: 'ht_tcp_5', text: 'When TCP detects loss via TIMEOUT, it:', options: ['Sets ssthresh=cwnd/2, cwnd=ssthresh+3', 'Sets ssthresh=cwnd/2, resets cwnd=1 MSS, restarts slow start', 'Doubles cwnd', 'Closes the connection'], correctAnswerIndex: 1, explanation: 'Timeout is severe: ssthresh = cwnd/2, cwnd = 1 MSS, restart slow start from scratch.', difficulty: 'hard', marks: 2 },
      { id: 'ht_tcp_6', text: 'UDP differs from TCP primarily because UDP:', options: ['Is connection-oriented', 'Guarantees delivery', 'Is connectionless with no flow/congestion control (8-byte header)', 'Uses more header bytes'], correctAnswerIndex: 2, explanation: 'UDP: connectionless, unreliable, no flow/congestion control. Header is only 8 bytes. Used for speed-critical apps.', difficulty: 'easy', marks: 1 },
      { id: 'ht_tcp_7', text: 'TCP TIME_WAIT state lasts for:', options: ['1 RTT', '2 × MSL (Maximum Segment Lifetime)', '1 MSL', 'Until reuse'], correctAnswerIndex: 1, explanation: 'TIME_WAIT = 2×MSL (typically ~2 minutes) to ensure all delayed segments from the old connection expire.', difficulty: 'medium', marks: 1 },
      { id: 'ht_tcp_8', text: 'TCP segment sequence numbers enable:', options: ['Identifying sender\'s IP', 'Ordering segments and reliable delivery via ACKs and retransmission', 'Routing decisions', 'Error correction (bit-level)'], correctAnswerIndex: 1, explanation: 'Sequence numbers allow the receiver to reorder out-of-order segments and detect gaps for reliable delivery.', difficulty: 'easy', marks: 1 },
    ]
  },
  {
    id: 'bfs_dfs',
    name: 'BFS + DFS',
    subject: 'Algorithms',
    icon: '🕸️',
    color: 'border-teal-500/40',
    questions: [
      { id: 'ht_bfs_1', text: 'BFS on unweighted graph finds:', options: ['Minimum spanning tree', 'Shortest path in terms of edges', 'Topological ordering', 'Strongly connected components'], correctAnswerIndex: 1, explanation: 'BFS explores level-by-level, guaranteeing shortest path (fewest edges) in unweighted, undirected or directed graphs.', difficulty: 'easy', marks: 1 },
      { id: 'ht_bfs_2', text: 'Time complexity of BFS with V vertices and E edges:', options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V × E)'], correctAnswerIndex: 2, explanation: 'BFS visits each vertex once (O(V)) and each adjacency list edge once (O(E)): total O(V + E).', difficulty: 'easy', marks: 1 },
      { id: 'ht_bfs_3', text: 'DFS on a directed graph detects cycles using:', options: ['Cross edges', 'Back edges', 'Tree edges', 'Forward edges'], correctAnswerIndex: 1, explanation: 'Back edge in directed DFS → cycle. No back edges → DAG.', difficulty: 'medium', marks: 1 },
      { id: 'ht_bfs_4', text: 'Topological sort can be performed using:', options: ['BFS only (Kahn\'s)', 'DFS only (reverse postorder)', 'Both BFS (Kahn\'s) and DFS', 'Neither'], correctAnswerIndex: 2, explanation: 'Kahn\'s algorithm uses BFS (0 in-degree vertices first). DFS uses reverse postorder. Both give valid topological orderings.', difficulty: 'medium', marks: 1 },
      { id: 'ht_bfs_5', text: 'Kosaraju\'s SCC algorithm uses:', options: ['1 DFS pass', '2 DFS passes (on original + transposed graph)', 'BFS + DFS', 'Dynamic programming'], correctAnswerIndex: 1, explanation: '1st DFS: compute finish times. 2nd DFS: on transposed graph in decreasing finish-time order. Each DFS tree = one SCC.', difficulty: 'hard', marks: 2 },
      { id: 'ht_bfs_6', text: 'Space complexity of BFS in worst case:', options: ['O(1)', 'O(V)', 'O(E)', 'O(log V)'], correctAnswerIndex: 1, explanation: 'BFS queue can hold at most O(V) vertices (e.g., star graph with all vertices at distance 1 from source).', difficulty: 'medium', marks: 1 },
      { id: 'ht_bfs_7', text: 'DFS preorder visits a node:', options: ['After both children', 'Before exploring its descendants', 'Between left and right child', 'In sorted key order'], correctAnswerIndex: 1, explanation: 'DFS preorder: visit node first, then recurse into neighbors. Postorder: recurse first, then visit.', difficulty: 'easy', marks: 1 },
      { id: 'ht_bfs_8', text: 'BFS uses which data structure?', options: ['Stack', 'Queue (FIFO)', 'Priority Queue', 'Deque'], correctAnswerIndex: 1, explanation: 'BFS uses a FIFO Queue. DFS uses a Stack (or implicit recursion call stack).', difficulty: 'easy', marks: 1 },
    ]
  },
  {
    id: 'mst_dijkstra',
    name: 'MST + Dijkstra',
    subject: 'Algorithms',
    icon: '🗺️',
    color: 'border-teal-500/40',
    questions: [
      { id: 'ht_mst_1', text: 'Kruskal\'s algorithm builds MST by:', options: ['Growing tree from one vertex greedily (Prim\'s)', 'Sorting edges by weight, adding if no cycle (Union-Find)', 'BFS with priority queue', 'Dynamic programming'], correctAnswerIndex: 1, explanation: 'Kruskal\'s: sort all edges by weight, add edge if it doesn\'t form a cycle (use Union-Find DS). O(E log E).', difficulty: 'easy', marks: 1 },
      { id: 'ht_mst_2', text: 'Prim\'s algorithm with binary min-heap has time complexity:', options: ['O(V²)', 'O(E log V)', 'O(V log V)', 'O(E + V)'], correctAnswerIndex: 1, explanation: 'Prim\'s with adjacency list + binary heap: O((V+E) log V) = O(E log V) for connected graphs.', difficulty: 'medium', marks: 1 },
      { id: 'ht_mst_3', text: 'Dijkstra\'s algorithm fails on graphs with:', options: ['Large edge weights', 'Negative edge weights', 'Disconnected components', 'Undirected edges'], correctAnswerIndex: 1, explanation: 'Dijkstra assumes all edge weights ≥ 0. Negative edges cause incorrect shortest paths. Use Bellman-Ford instead.', difficulty: 'easy', marks: 1 },
      { id: 'ht_mst_4', text: 'An MST of a connected graph with V vertices has exactly:', options: ['V edges', 'V − 1 edges', 'V + 1 edges', '2V − 1 edges'], correctAnswerIndex: 1, explanation: 'Any spanning tree (and thus MST) of a connected graph with V vertices has exactly V − 1 edges.', difficulty: 'easy', marks: 1 },
      { id: 'ht_mst_5', text: 'Bellman-Ford detects negative weight cycles by:', options: ['Checking for updates in the V-th relaxation pass', 'Using a priority queue', 'Running DFS after completion', 'Checking all edge weights are positive'], correctAnswerIndex: 0, explanation: 'After V−1 relaxation passes, a V-th pass that still relaxes an edge indicates a negative cycle reachable from source.', difficulty: 'medium', marks: 1 },
      { id: 'ht_mst_6', text: 'Floyd-Warshall finds:', options: ['MST', 'Single-source shortest paths', 'All-pairs shortest paths', 'Topological sort'], correctAnswerIndex: 2, explanation: 'Floyd-Warshall: O(V³) all-pairs shortest paths. Works with negative edges but not negative cycles.', difficulty: 'medium', marks: 1 },
      { id: 'ht_mst_7', text: 'If all edge weights are distinct, the MST is:', options: ['Not necessarily unique', 'Unique', 'May have 2 variants', 'Dependent on starting vertex (Prim\'s)'], correctAnswerIndex: 1, explanation: 'When all edge weights are distinct, the MST is unique (provable by the cycle property of MSTs).', difficulty: 'medium', marks: 1 },
      { id: 'ht_mst_8', text: 'Dijkstra\'s with adjacency matrix has time complexity:', options: ['O(E log V)', 'O(V²)', 'O(V log V)', 'O(E + V)'], correctAnswerIndex: 1, explanation: 'Dijkstra\'s with adjacency matrix (no heap): O(V²) — suitable for dense graphs where E ≈ V².', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'sorting_recurrences',
    name: 'Sorting + Recurrences',
    subject: 'Algorithms',
    icon: '📊',
    color: 'border-teal-500/40',
    questions: [
      { id: 'ht_sort_1', text: 'Which sorting algorithm has the best worst-case time complexity?', options: ['Quick Sort', 'Bubble Sort', 'Merge Sort', 'Insertion Sort'], correctAnswerIndex: 2, explanation: 'Merge Sort: O(n log n) in all cases. Quick Sort is O(n²) worst case.', difficulty: 'easy', marks: 1 },
      { id: 'ht_sort_2', text: 'T(n) = 2T(n/2) + n solves to (Master Theorem):', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'], correctAnswerIndex: 1, explanation: 'a=2, b=2, f(n)=n=n^(log₂2). Case 2: T(n) = Θ(n log n). This is Merge Sort\'s recurrence.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sort_3', text: 'T(n) = T(n−1) + n solves to:', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'], correctAnswerIndex: 2, explanation: 'T(n) = n + (n−1) + ... + 1 = n(n+1)/2 = O(n²). This is insertion sort\'s worst case.', difficulty: 'medium', marks: 1 },
      { id: 'ht_sort_4', text: 'Which sorting algorithm is both stable and has O(n) best-case?', options: ['Heap Sort', 'Quick Sort', 'Insertion Sort', 'Selection Sort'], correctAnswerIndex: 2, explanation: 'Insertion Sort: stable, O(n) best case (already sorted), O(n²) worst case.', difficulty: 'easy', marks: 1 },
      { id: 'ht_sort_5', text: 'Master Theorem Case 1: T(n) = aT(n/b) + f(n) applies when:', options: ['f(n) = Θ(n^(log_b a))', 'f(n) = O(n^(log_b a − ε)) → T(n) = Θ(n^(log_b a))', 'f(n) = Ω(n^(log_b a + ε)) with regularity', 'a = b'], correctAnswerIndex: 1, explanation: 'Case 1: f(n) is polynomially smaller than n^(log_b a) → T(n) = Θ(n^(log_b a)).', difficulty: 'hard', marks: 2 },
      { id: 'ht_sort_6', text: 'Counting sort runs in O(n + k) where k is:', options: ['Number of comparisons', 'The range of input values (max − min + 1)', 'Number of distinct elements', 'Stack depth'], correctAnswerIndex: 1, explanation: 'k = range of values. Counting sort is efficient when k = O(n).', difficulty: 'medium', marks: 1 },
      { id: 'ht_sort_7', text: 'Lower bound for comparison-based sorting is:', options: ['O(n)', 'Ω(n log n)', 'O(n²)', 'O(log n!)'], correctAnswerIndex: 1, explanation: 'Any comparison-based sort requires Ω(n log n) comparisons worst case — proven via decision tree argument (n! leaves).', difficulty: 'medium', marks: 1 },
      { id: 'ht_sort_8', text: 'Radix sort with d digits and base-k counting sort is:', options: ['O(n log n)', 'O(d(n + k))', 'O(nd)', 'O(n² d)'], correctAnswerIndex: 1, explanation: 'Radix sort: d passes of counting sort (each O(n+k)) → total O(d(n+k)). Linear for fixed d and k.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'trees_heap_hashing',
    name: 'Trees + Heap + Hashing',
    subject: 'Data Structures',
    icon: '🌲',
    color: 'border-orange-500/40',
    questions: [
      { id: 'ht_tree_1', text: 'In a max-heap with n elements, the minimum element is at:', options: ['Root', 'Any internal node', 'Any leaf node', 'The rightmost node'], correctAnswerIndex: 2, explanation: 'Max-heap: root has maximum. Minimum must be at one of the leaf nodes (though which leaf is unknown).', difficulty: 'medium', marks: 1 },
      { id: 'ht_tree_2', text: 'Height of a complete binary tree with n nodes:', options: ['n − 1', 'log₂n', '⌊log₂n⌋', '⌈log₂(n+1)⌉'], correctAnswerIndex: 2, explanation: 'Height of complete binary tree = ⌊log₂n⌋ (0-indexed height = number of levels − 1).', difficulty: 'medium', marks: 1 },
      { id: 'ht_tree_3', text: 'Build-heap (bottom-up heapify of an array) runs in:', options: ['O(n log n)', 'O(n)', 'O(log n)', 'O(n²)'], correctAnswerIndex: 1, explanation: 'Bottom-up Build-heap: O(n) tighter analysis. Most heapify calls are near leaves (short height).', difficulty: 'medium', marks: 1 },
      { id: 'ht_tree_4', text: 'Inorder traversal of a BST gives elements in:', options: ['Level-order sequence', 'Sorted ascending order', 'Reverse sorted order', 'Random order'], correctAnswerIndex: 1, explanation: 'BST inorder traversal (left → root → right) visits keys in non-decreasing (ascending) order.', difficulty: 'easy', marks: 1 },
      { id: 'ht_tree_5', text: 'AVL tree maintains the invariant: for every node, |height(left) − height(right)| ≤', options: ['0', '1', '2', 'log n'], correctAnswerIndex: 1, explanation: 'AVL tree: balance factor = height(left) − height(right) ∈ {−1, 0, 1} for every node.', difficulty: 'easy', marks: 1 },
      { id: 'ht_tree_6', text: 'Hash chaining with load factor α has expected search time of:', options: ['O(1)', 'O(1 + α)', 'O(n)', 'O(log n)'], correctAnswerIndex: 1, explanation: 'With chaining, expected search = O(1 + α) where α = n/m. When α = O(1), it\'s O(1) amortized.', difficulty: 'medium', marks: 1 },
      { id: 'ht_tree_7', text: 'Open addressing resolves collisions by:', options: ['Linked lists at each slot', 'Probing alternative slots within the hash table', 'Using a secondary hash table', 'Expanding table on each collision'], correctAnswerIndex: 1, explanation: 'Open addressing: on collision, probe another slot (linear, quadratic, or double hashing) within same table.', difficulty: 'easy', marks: 1 },
      { id: 'ht_tree_8', text: 'A B-tree of order m allows at most ___ children per internal node:', options: ['m − 1', 'm', 'm + 1', '2m'], correctAnswerIndex: 1, explanation: 'B-tree of order m: each internal node has at most m children (and at most m−1 keys).', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'static_recursion',
    name: 'Static Variable & Recursion',
    subject: 'C Programming',
    icon: '♻️',
    color: 'border-lime-500/40',
    questions: [
      { id: 'ht_rec_1', text: 'A static local variable in C:', options: ['Is destroyed after each function call', 'Retains its value between function calls (stored in data segment)', 'Is stored on the stack', 'Cannot be initialized at declaration'], correctAnswerIndex: 1, explanation: 'Static local variables are stored in BSS/data segment (not stack) and retain values across function calls.', difficulty: 'easy', marks: 1 },
      { id: 'ht_rec_2', text: 'Tower of Hanoi with n disks requires minimum ___ moves:', options: ['n', 'n²', '2ⁿ − 1', '2ⁿ'], correctAnswerIndex: 2, explanation: 'Hanoi: T(n) = 2T(n−1)+1, T(0)=0 → T(n) = 2ⁿ − 1.', difficulty: 'medium', marks: 1 },
      { id: 'ht_rec_3', text: 'void f(int n){ if(n==0)return; f(n-1); f(n-1); } called as f(3), total calls made =', options: ['7', '14', '15', '16'], correctAnswerIndex: 2, explanation: 'Total calls = 2^(n+1) − 1 = 2^4 − 1 = 15 (including f(3) itself). Each level doubles calls.', difficulty: 'hard', marks: 2 },
      { id: 'ht_rec_4', text: 'Output: static int x=5; if(x>0){x--; main(); printf("%d ",x);} in main()?', options: ['0 0 0 0 0', '1 2 3 4 5', '4 3 2 1 0', '5 4 3 2 1'], correctAnswerIndex: 0, explanation: 'x is static (shared). After all recursion, x=0. All printf calls print 0. Output: 0 0 0 0 0.', difficulty: 'hard', marks: 2 },
      { id: 'ht_rec_5', text: 'Tail recursion optimization converts recursion into:', options: ['A loop (iterative execution)', 'Double recursion', 'Memoization', 'Dynamic programming'], correctAnswerIndex: 0, explanation: 'TCO (Tail Call Optimization): tail-recursive calls become iterative loops, avoiding stack overflow.', difficulty: 'medium', marks: 1 },
      { id: 'ht_rec_6', text: 'Memoized recursion for Fibonacci runs in:', options: ['O(2ⁿ)', 'O(n log n)', 'O(n)', 'O(log n)'], correctAnswerIndex: 2, explanation: 'With memoization, each subproblem fib(k) is computed once. Total: O(n) time, O(n) space.', difficulty: 'medium', marks: 1 },
      { id: 'ht_rec_7', text: 'In recursive factorial(n), maximum stack depth for n=5 is:', options: ['4', '5', '6', '10'], correctAnswerIndex: 1, explanation: 'factorial(5) calls factorial(4) ... factorial(0). Max depth = 5 active frames (5 down to 1 before base case).', difficulty: 'easy', marks: 1 },
      { id: 'ht_rec_8', text: 'A function is tail-recursive if the recursive call is:', options: ['The first operation in the function', 'The last operation before returning', 'Inside a loop', 'Inside a conditional'], correctAnswerIndex: 1, explanation: 'Tail recursion: the recursive call is the final action of the function, with no pending operations after it returns.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'arrays_pointers',
    name: 'Array & Pointers',
    subject: 'C Programming',
    icon: '📌',
    color: 'border-lime-500/40',
    questions: [
      { id: 'ht_arr_1', text: 'In C, an array name decays to:', options: ['A pointer to the last element', 'A pointer to the first element', 'A copy of the array', 'An index variable'], correctAnswerIndex: 1, explanation: 'An array name in most expressions decays to a pointer to its first element. sizeof and & are exceptions.', difficulty: 'easy', marks: 1 },
      { id: 'ht_arr_2', text: '*(arr + i) is equivalent to:', options: ['&arr[i]', 'arr[i]', 'arr[i+1]', '*(arr + i + 1)'], correctAnswerIndex: 1, explanation: '*(arr + i) dereferences address (arr + i) → value at index i → same as arr[i].', difficulty: 'easy', marks: 1 },
      { id: 'ht_arr_3', text: 'int (*p)[10] declares:', options: ['An array of 10 int pointers', 'A pointer to an array of 10 integers', 'A function pointer', 'Invalid in C'], correctAnswerIndex: 1, explanation: 'int (*p)[10]: parentheses bind * to p first, making p a pointer to an array of 10 ints.', difficulty: 'hard', marks: 2 },
      { id: 'ht_arr_4', text: 'sizeof(arr) for int arr[5] on a 32-bit system =', options: ['5', '10', '20', 'Depends'], correctAnswerIndex: 2, explanation: 'sizeof(arr) = 5 × sizeof(int) = 5 × 4 = 20 bytes (sizeof(int)=4 on 32-bit systems).', difficulty: 'easy', marks: 1 },
      { id: 'ht_arr_5', text: 'char *p = "hello"; p[0] = \'H\'; causes:', options: ['Prints Hello correctly', 'Undefined behavior (string literal is read-only)', 'Compilation error', 'Segfault on all platforms'], correctAnswerIndex: 1, explanation: 'String literals are in read-only memory. Modifying via pointer = undefined behavior (often segfault).', difficulty: 'medium', marks: 1 },
      { id: 'ht_arr_6', text: '&arr[i] is equivalent to:', options: ['arr + i', 'arr[i]', '*arr + i', '*(arr + i)'], correctAnswerIndex: 0, explanation: '&arr[i] = address of i-th element = arr + i. Both are pointer arithmetic yielding the same address.', difficulty: 'medium', marks: 1 },
      { id: 'ht_arr_7', text: 'Correct dynamic allocation of array of 10 ints in C:', options: ['int *p = malloc(10);', 'int *p = malloc(10 * sizeof(int));', 'int *p = new int[10];', 'int p[10] = malloc(10)'], correctAnswerIndex: 1, explanation: 'malloc(10 * sizeof(int)) allocates 40 bytes (for 10 ints). malloc(10) only allocates 10 bytes.', difficulty: 'easy', marks: 1 },
      { id: 'ht_arr_8', text: 'int **p is typically used for:', options: ['Single pointer to int', 'Pointer to pointer — used for dynamic 2D arrays or modifying a pointer via function', 'Array of integers', 'Double-precision float'], correctAnswerIndex: 1, explanation: 'int **p is a pointer to a pointer. Used for: dynamic 2D arrays, and passing pointer addresses to functions.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'ieee_754',
    name: 'IEEE 754 Floating Pt Rep.',
    subject: 'Computer Architecture',
    icon: '🔢',
    color: 'border-rose-500/40',
    questions: [
      { id: 'ht_ieee_1', text: 'IEEE 754 single precision (32-bit) format:', options: ['1 sign + 8 exponent + 23 mantissa bits', '1 sign + 11 exponent + 52 mantissa bits', '1 sign + 7 exponent + 24 mantissa bits', '8 exponent + 23 mantissa (no sign)'], correctAnswerIndex: 0, explanation: 'Single precision: 1 sign bit, 8 exponent bits (biased-127), 23 explicit mantissa bits. Total = 32 bits.', difficulty: 'easy', marks: 1 },
      { id: 'ht_ieee_2', text: 'Bias in IEEE 754 single precision exponent:', options: ['127', '128', '255', '126'], correctAnswerIndex: 0, explanation: 'Bias = 2^(k−1) − 1 = 2^7 − 1 = 127 for 8-bit exponent. Stored exponent = actual exponent + 127.', difficulty: 'easy', marks: 1 },
      { id: 'ht_ieee_3', text: 'IEEE 754 double precision (64-bit) format:', options: ['1+8+23', '1+11+52', '1+10+53', '1+15+48'], correctAnswerIndex: 1, explanation: 'Double: 1 sign, 11 exponent (bias=1023), 52 mantissa bits. Total = 64 bits.', difficulty: 'easy', marks: 1 },
      { id: 'ht_ieee_4', text: 'Exponent all 1s and mantissa = 0 represents:', options: ['NaN', '±Infinity', 'Denormalized zero', 'Maximum normal number'], correctAnswerIndex: 1, explanation: 'IEEE 754: exp=all 1s, mantissa=0 → ±Infinity. exp=all 1s, mantissa≠0 → NaN.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ieee_5', text: 'Denormalized (subnormal) numbers have:', options: ['Exponent all 1s', 'Exponent all 0s, no implicit leading 1 bit (value = 0.fraction × 2^−126)', 'Exponent = 127', 'Mantissa = 0 and exponent = 0'], correctAnswerIndex: 1, explanation: 'Subnormal: exp=all 0s, mantissa≠0. Implicit bit is 0, not 1. Value = 0.mantissa × 2^(−126). Enables gradual underflow.', difficulty: 'hard', marks: 2 },
      { id: 'ht_ieee_6', text: 'The value with sign=0, exp=10000001 (binary), mantissa=10000...0 (single precision) is:', options: ['3.0', '5.0', '6.0', '2.5'], correctAnswerIndex: 1, explanation: 'Stored exp=10000001=129, actual=129−127=2. Mantissa=.1=0.5, so 1.5 implicit. Value=1.5×2^2=6.0. Wait: 1+0.5=1.5, 1.5×4=6. Actually sign=0, exp=10000000(128)→actual=1, mant=.1→1.5, value=3.0 if exp bit is 10000000. With 10000001=129→exp=2→1.5×4=6.0.', difficulty: 'hard', marks: 2 },
      { id: 'ht_ieee_7', text: 'Floating point addition is not associative because:', options: ['Computers are too slow', 'Rounding and limited precision cause different errors depending on operation order', 'Addition is only defined for integers', 'Exponents must be equalized'], correctAnswerIndex: 1, explanation: 'Due to finite precision and rounding, (a+b)+c ≠ a+(b+c) in general for floating point numbers.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ieee_8', text: 'The precision of IEEE 754 single precision (number of significant decimal digits):', options: ['~3−4 digits', '~7−8 digits', '~15−16 digits', '~1−2 digits'], correctAnswerIndex: 1, explanation: '23 mantissa bits + 1 implicit = 24 bits ≈ 7.22 decimal digits of precision. Double has ~15−16 digits.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'overflow_detection',
    name: 'Overflow Detection',
    subject: 'Computer Architecture',
    icon: '⚠️',
    color: 'border-rose-500/40',
    questions: [
      { id: 'ht_ovf_1', text: 'In 2\'s complement addition, signed overflow occurs when:', options: ['Carry out of MSB is 1', 'Two positives give negative, or two negatives give positive result', 'Any carry is generated', 'Result exceeds 255'], correctAnswerIndex: 1, explanation: 'Signed overflow: two numbers of the same sign produce a result with the opposite sign.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ovf_2', text: 'Overflow flag V in ALU is computed as:', options: ['V = Cₙ (carry out of MSB)', 'V = Cₙ XOR Cₙ₋₁ (carry out XOR carry into MSB)', 'V = parity of result', 'V = 1 if result is negative'], correctAnswerIndex: 1, explanation: 'Overflow flag: V = Cₙ ⊕ Cₙ₋₁. If carry-in and carry-out of sign bit differ → signed overflow.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ovf_3', text: '4-bit 2\'s complement represents range:', options: ['0 to 15', '−8 to 7', '−7 to 7', '−8 to 8'], correctAnswerIndex: 1, explanation: 'n-bit 2\'s complement: −2^(n−1) to 2^(n−1)−1. For n=4: −8 to +7.', difficulty: 'easy', marks: 1 },
      { id: 'ht_ovf_4', text: 'Adding +7 (0111) and +1 (0001) in 4-bit 2\'s complement:', options: ['Result = 8 (correct)', 'Result = 1000 = −8 (overflow!)', 'Result = 0 (wrap around)', 'No result (error)'], correctAnswerIndex: 1, explanation: '0111 + 0001 = 1000 = −8 in 2\'s complement. Two positives gave a negative → overflow.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ovf_5', text: 'Unsigned overflow (carry flag) is set when:', options: ['Result is negative', 'Carry out of the MSB is 1 (result exceeds max unsigned value)', 'Two negative numbers are added', 'Result equals zero'], correctAnswerIndex: 1, explanation: 'Unsigned overflow: carry out of MSB = 1 means result exceeded 2ⁿ − 1 (unsigned max).', difficulty: 'medium', marks: 1 },
      { id: 'ht_ovf_6', text: 'Carry flag (C) indicates overflow for ___ arithmetic; Overflow flag (V) for ___ arithmetic:', options: ['Signed; Unsigned', 'Unsigned; Signed', 'Both for signed', 'Both for unsigned'], correctAnswerIndex: 1, explanation: 'Carry flag (C): unsigned overflow. Overflow flag (V): signed 2\'s complement overflow.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ovf_7', text: 'Booth\'s multiplication algorithm handles:', options: ['Only positive numbers', 'Only negative numbers', 'Both positive and negative 2\'s complement numbers', 'Floating point multiplication'], correctAnswerIndex: 2, explanation: 'Booth\'s algorithm correctly handles both positive and negative 2\'s complement numbers, efficient for runs of 1s.', difficulty: 'medium', marks: 1 },
      { id: 'ht_ovf_8', text: 'In sign-magnitude representation, overflow occurs when:', options: ['Carry out of magnitude bits', 'Result magnitude exceeds n−1 bits capacity', 'Signs differ', 'Result is zero'], correctAnswerIndex: 1, explanation: 'Sign-magnitude: overflow when the magnitude portion of the result exceeds the (n−1) available bits.', difficulty: 'hard', marks: 2 },
    ]
  },
  {
    id: 'kmap',
    name: 'K-map',
    subject: 'Digital Logic',
    icon: '🗺️',
    color: 'border-pink-500/40',
    questions: [
      { id: 'ht_kmap_1', text: 'A Karnaugh map (K-map) is used for:', options: ['Designing sequential circuits', 'Minimizing Boolean (combinational) expressions', 'Implementing flip-flops', 'Timing analysis'], correctAnswerIndex: 1, explanation: 'K-map: graphical method to simplify Boolean logic by grouping adjacent minterms to eliminate variables.', difficulty: 'easy', marks: 1 },
      { id: 'ht_kmap_2', text: 'Groups in a K-map must have size:', options: ['Any integer ≥ 1', 'Powers of 2 only: 1, 2, 4, 8, 16...', 'Even numbers only', 'At least 4 cells'], correctAnswerIndex: 1, explanation: 'K-map groups must be rectangular, containing 2^k cells for some k ≥ 0.', difficulty: 'easy', marks: 1 },
      { id: 'ht_kmap_3', text: 'Don\'t care conditions in K-map:', options: ['Must be treated as 0 always', 'Can be included in groups (as 1) to maximize group size for SOP minimization', 'Can never be grouped', 'Are only used in POS minimization'], correctAnswerIndex: 1, explanation: 'Don\'t care (X) cells can be treated as 0 or 1. Include as 1 when it helps form a larger group.', difficulty: 'medium', marks: 1 },
      { id: 'ht_kmap_4', text: 'K-map for 4 variables has:', options: ['4 cells', '8 cells', '16 cells', '32 cells'], correctAnswerIndex: 2, explanation: '4-variable K-map: 2^4 = 16 cells in a 4×4 grid.', difficulty: 'easy', marks: 1 },
      { id: 'ht_kmap_5', text: 'A prime implicant is:', options: ['Any group of 1s in the K-map', 'A MAXIMAL group of 1s (cannot be enlarged without including 0s)', 'A group of exactly 4 cells', 'A single minterm'], correctAnswerIndex: 1, explanation: 'Prime implicant: a maximal group of 1s (and possibly don\'t cares) in the K-map that cannot be made larger.', difficulty: 'medium', marks: 1 },
      { id: 'ht_kmap_6', text: 'An essential prime implicant MUST be in the cover because:', options: ['It covers the most cells', 'It covers at least one minterm not covered by any other prime implicant', 'It has the fewest literals', 'It contains only 1s (no don\'t cares)'], correctAnswerIndex: 1, explanation: 'Essential PI: covers a minterm that no other PI covers → must be included in any minimal SOP.', difficulty: 'medium', marks: 1 },
      { id: 'ht_kmap_7', text: 'K-map wrap-around property means:', options: ['Top row is adjacent to bottom row; left column adjacent to right column', 'Diagonally opposite cells are adjacent', 'Only corner cells wrap', 'No wrap-around exists'], correctAnswerIndex: 0, explanation: 'K-map is toroidal: top↔bottom rows and left↔right columns are adjacent. Allows groups across edges.', difficulty: 'medium', marks: 1 },
      { id: 'ht_kmap_8', text: 'For 3-variable K-map, the variables are arranged in which order across columns?', options: ['00, 01, 10, 11', '00, 01, 11, 10 (Gray code)', '00, 11, 01, 10', '10, 01, 11, 00'], correctAnswerIndex: 1, explanation: 'K-map columns use Gray code ordering (00, 01, 11, 10) to ensure adjacent cells differ in exactly 1 variable.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'dll_flow_control',
    name: 'DLL – Flow Control + CSMA/CD Error Control',
    subject: 'Computer Networks',
    icon: '🔌',
    color: 'border-blue-500/40',
    questions: [
      { id: 'ht_dll_1', text: 'Sliding window protocol with window size W allows:', options: ['1 frame at a time', 'W frames in flight (unacknowledged) simultaneously', 'W−1 frames', '2W frames'], correctAnswerIndex: 1, explanation: 'Sliding window: sender can have at most W unacknowledged frames in transit simultaneously.', difficulty: 'easy', marks: 1 },
      { id: 'ht_dll_2', text: 'CSMA/CD is used in:', options: ['Wi-Fi (IEEE 802.11)', 'Traditional Ethernet (IEEE 802.3)', 'Bluetooth (802.15)', 'Token Ring (802.5)'], correctAnswerIndex: 1, explanation: 'CSMA/CD (Collision Detection) is the MAC protocol for traditional wired Ethernet. Wi-Fi uses CSMA/CA.', difficulty: 'easy', marks: 1 },
      { id: 'ht_dll_3', text: 'Stop-and-Wait efficiency = 1/(1+2a) where a =', options: ['Propagation delay / Transmission time', 'Bandwidth × RTT', 'Frame size / Bandwidth', 'RTT × Bandwidth'], correctAnswerIndex: 0, explanation: 'a = Tp/Tt (propagation delay / transmission time). Efficiency drops when a >> 1 (large Tp relative to Tt).', difficulty: 'medium', marks: 1 },
      { id: 'ht_dll_4', text: 'In Go-Back-N ARQ, when frame i is lost, the sender retransmits:', options: ['Only frame i', 'Frame i and all frames sent after i', 'All frames in the window', 'Only the errored frame after NAK received'], correctAnswerIndex: 1, explanation: 'Go-Back-N: on error, retransmit frame i and ALL subsequent frames (even if correctly received at receiver side).', difficulty: 'medium', marks: 1 },
      { id: 'ht_dll_5', text: 'Maximum window size for Go-Back-N with n-bit sequence numbers:', options: ['2ⁿ', '2ⁿ − 1', '2^(n−1)', '2ⁿ/2'], correctAnswerIndex: 1, explanation: 'Go-Back-N max window size = 2ⁿ − 1. Selective Repeat max = 2^(n−1). Constraint: avoid confusing old vs new frames.', difficulty: 'hard', marks: 2 },
      { id: 'ht_dll_6', text: 'Selective Repeat is more efficient than Go-Back-N because:', options: ['It has a larger window size', 'It only retransmits the errored frame (receiver buffers out-of-order frames)', 'ACK processing is faster', 'It uses less memory'], correctAnswerIndex: 1, explanation: 'Selective Repeat: retransmit ONLY the errored frame. Receiver buffers out-of-order frames and delivers in order.', difficulty: 'medium', marks: 1 },
      { id: 'ht_dll_7', text: 'CRC (Cyclic Redundancy Check) can detect:', options: ['Single-bit errors only', 'All burst errors of length ≤ degree of CRC polynomial', 'No burst errors', 'Only double-bit errors'], correctAnswerIndex: 1, explanation: 'CRC: detects all single-bit errors, all burst errors of length ≤ r (CRC degree), and most longer bursts.', difficulty: 'medium', marks: 1 },
      { id: 'ht_dll_8', text: 'Standard Hamming code can detect ___ and correct ___ bit errors:', options: ['1-bit detect, 1-bit correct', '2-bit detect, 1-bit correct', '3-bit detect, 2-bit correct', '1-bit detect, 2-bit correct'], correctAnswerIndex: 1, explanation: 'Standard Hamming: detects 2-bit errors, corrects 1-bit errors. Extended Hamming adds a parity bit for 2-bit correction.', difficulty: 'medium', marks: 1 },
    ]
  },
  {
    id: 'll_stack_queue',
    name: 'LL, Stack, Queue',
    subject: 'Data Structures',
    icon: '📦',
    color: 'border-orange-500/40',
    questions: [
      { id: 'ht_llq_1', text: 'To delete a node in singly linked list (O(1)), you need:', options: ['The node itself only', 'The previous node (to update next pointer)', 'The head pointer only', 'The next node only'], correctAnswerIndex: 1, explanation: 'Standard deletion: need previous node to set prev.next = node.next. Without it, must traverse from head: O(n).', difficulty: 'easy', marks: 1 },
      { id: 'ht_llq_2', text: 'A Stack is:', options: ['FIFO (First In First Out)', 'LIFO (Last In First Out)', 'Priority-based ordering', 'Random access structure'], correctAnswerIndex: 1, explanation: 'Stack: LIFO — push onto top, pop from top. Last element pushed is first to be popped.', difficulty: 'easy', marks: 1 },
      { id: 'ht_llq_3', text: 'Postfix expression evaluation uses:', options: ['Queue', 'Stack', 'Linked List', 'Priority Queue'], correctAnswerIndex: 1, explanation: 'Postfix eval: scan left-to-right, push operands; on operator, pop 2 operands, compute, push result. Uses Stack.', difficulty: 'easy', marks: 1 },
      { id: 'ht_llq_4', text: 'Floyd\'s cycle detection (tortoise and hare) uses:', options: ['Two stacks', 'Slow pointer (1 step) and fast pointer (2 steps)', 'Hash table for visited nodes', 'BFS level-order'], correctAnswerIndex: 1, explanation: 'Floyd\'s: slow moves 1 step, fast moves 2 steps per iteration. They meet inside the cycle if one exists.', difficulty: 'medium', marks: 1 },
      { id: 'ht_llq_5', text: 'A circular queue of size n can hold at most ___ elements (one slot wasted):', options: ['n', 'n − 1', 'n + 1', 'n / 2'], correctAnswerIndex: 1, explanation: 'Circular queue wastes 1 slot to distinguish full from empty: (rear+1)%n == front means full. Max = n−1 elements.', difficulty: 'medium', marks: 1 },
      { id: 'ht_llq_6', text: 'Reversing a singly linked list in-place:', options: ['O(1) time, O(1) space', 'O(n) time, O(1) space', 'O(n) time, O(n) space', 'O(n log n) time'], correctAnswerIndex: 1, explanation: 'Reverse: iterate through list, reversing each next pointer. O(n) time, O(1) extra space.', difficulty: 'easy', marks: 1 },
      { id: 'ht_llq_7', text: 'A deque (double-ended queue) supports:', options: ['Insert at front only', 'Delete at rear only', 'Insert and delete at BOTH ends', 'Random access by index'], correctAnswerIndex: 2, explanation: 'Deque: insertFront, deleteFront, insertRear, deleteRear. Generalizes both stack and queue.', difficulty: 'easy', marks: 1 },
      { id: 'ht_llq_8', text: 'Merging two sorted linked lists of sizes m and n:', options: ['O(1)', 'O(m + n)', 'O(m × n)', 'O(log(m+n))'], correctAnswerIndex: 1, explanation: 'Merge two sorted lists: traverse both once. O(m + n) time, O(1) extra space (in-place merge).', difficulty: 'medium', marks: 1 },
    ]
  },
];
