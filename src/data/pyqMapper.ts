import { Question } from "./questionTypes";
import { GATE_PYQ_PAPERS } from "./gatePyqData";

// Maps question from GATE_PYQ_PAPERS to its relevant chapter
function getChapterForQuestion(q: Question): string | null {
  const c = (q.concept || "").toLowerCase();
  const t = (q.text || "").toLowerCase();

  // Linear Algebra
  if (c.includes("linear algebra") || c.includes("eigen") || c.includes("matrix") || c.includes("determinant") || c.includes("rank") || t.includes("eigenvalue") || t.includes("eigenvector") || t.includes("rank of matrix")) {
    return "em-la";
  }
  // Discrete Math
  if (c.includes("graph theory") || c.includes("discrete") || c.includes("relation") || c.includes("combinatorics") || c.includes("pigeonhole") || c.includes("eulerian") || c.includes("planar") || c.includes("spanning tree") || c.includes("hamiltonian") || c.includes("chromatic") || c.includes("lattice") || c.includes("predicate") || c.includes("propositional")) {
    return "em-dm";
  }
  // Probability & Statistics
  if (c.includes("probability") || c.includes("poisson") || c.includes("bayes") || c.includes("expectation") || c.includes("binomial") || c.includes("normal distribution") || c.includes("random variable") || t.includes("probability") || t.includes("variance") || t.includes("expected value") || t.includes("dice") || t.includes("coin")) {
    return "em-prob";
  }
  // Sequential Circuits (Check this BEFORE general digital logic)
  if (c.includes("flip-flop") || c.includes("counter") || c.includes("sequential") || c.includes("shift register") || c.includes("mealy") || c.includes("moore") || t.includes("flip-flop") || t.includes("clock pulse") || t.includes("jk flip") || t.includes("d flip") || t.includes("t flip") || t.includes("mod-")) {
    return "dl-seq";
  }
  // Boolean & K-Map / Digital Logic
  if (c.includes("digital logic") || c.includes("k-map") || c.includes("multiplexer") || c.includes("adder") || c.includes("boolean") || c.includes("logic gates") || c.includes("decoder") || c.includes("minterm") || c.includes("maxterm") || c.includes("hazard") || t.includes("k-map") || t.includes("multiplexer") || t.includes("boolean")) {
    return "dl-bool";
  }
  // Pipelining
  if (c.includes("pipeline") || c.includes("pipelining") || c.includes("hazard") || c.includes("speedup") || t.includes("pipeline") || t.includes("speedup")) {
    return "coa-pipeline";
  }
  // Cache & Memory
  if (c.includes("cache") || c.includes("memory hierarchy") || c.includes("emat") || c.includes("tag") || c.includes("set associative") || c.includes("direct mapped") || t.includes("cache") || c.includes("coa – memory") || c.includes("coa – circuit") || c.includes("coa – risc") || c.includes("coa – instruction") || c.includes("coa – i/o") || c.includes("coa – floating point")) {
    return "coa-cache";
  }
  // Trees & BST
  if (c.includes("tree") || c.includes("bst") || c.includes("avl") || c.includes("heap") || c.includes("b-tree") || t.includes("binary search tree") || t.includes("inorder") || t.includes("preorder") || t.includes("postorder") || t.includes("traversal")) {
    return "ds-trees";
  }
  // Linear DS (Stack, Queue, Hash, Array, Linked List)
  if (c.includes("stack") || c.includes("queue") || c.includes("hash") || c.includes("linked list") || c.includes("array") || c.includes("c programming") || t.includes("postfix") || t.includes("infix") || t.includes("hash table") || c.includes("ds – stack") || c.includes("ds – amortized")) {
    return "ds-linear";
  }
  // Sorting & Searching
  if (c.includes("sorting") || c.includes("binary search") || c.includes("quick sort") || c.includes("merge sort") || c.includes("heap sort") || c.includes("bubble sort") || c.includes("insertion sort") || t.includes("quicksort") || t.includes("mergesort")) {
    return "algo-sort";
  }
  // Graph Algorithms
  if (c.includes("graph") || c.includes("dijkstra") || c.includes("bellman") || c.includes("floyd") || c.includes("kruskal") || c.includes("prim") || c.includes("bfs") || c.includes("dfs") || c.includes("topological") || c.includes("mst") || c.includes("shortest path")) {
    return "algo-graph";
  }
  // DP & Greedy
  if (c.includes("dp") || c.includes("dynamic programming") || c.includes("greedy") || c.includes("knapsack") || c.includes("lcs") || c.includes("matrix chain") || c.includes("optimal substructure") || c.includes("algorithms – recurrence") || c.includes("algorithms – complexity") || c.includes("algorithms – np") || c.includes("algorithms – string")) {
    return "algo-dp";
  }
  // Finite Automata
  if (c.includes("dfa") || c.includes("nfa") || c.includes("regular") || c.includes("pumping lemma") || c.includes("automata") || c.includes("finite state") || t.includes("dfa") || t.includes("nfa") || t.includes("regular expression") || c.includes("toc – re") || c.includes("toc – closure") || c.includes("toc – dfa")) {
    return "toc-fa";
  }
  // CFG & PDA
  if (c.includes("cfg") || c.includes("pda") || c.includes("context-free") || c.includes("pushdown") || c.includes("grammar") || c.includes("chomsky") || c.includes("cnf") || t.includes("context free") || t.includes("cfg") || c.includes("toc – chomsky") || c.includes("toc – cfg")) {
    return "toc-cfg";
  }
  // Turing & Decidability
  if (c.includes("turing") || c.includes("decidab") || c.includes("undecid") || c.includes("rice") || c.includes("halting") || c.includes("recursively") || t.includes("turing machine") || t.includes("halting problem") || c.includes("toc")) {
    return "toc-tm";
  }
  // CPU Scheduling
  if (c.includes("scheduling") || c.includes("fcfs") || c.includes("sjf") || c.includes("round robin") || c.includes("turnaround time") || c.includes("waiting time") || t.includes("burst time") || t.includes("gantt chart") || c.includes("os – process")) {
    return "os-sched";
  }
  // Deadlocks & Sync
  if (c.includes("deadlock") || c.includes("semaphore") || c.includes("banker") || c.includes("synchronization") || c.includes("critical section") || c.includes("mutual exclusion") || t.includes("banker's") || t.includes("semaphore") || t.includes("deadlock") || c.includes("os – semaphores") || c.includes("os – deadlock")) {
    return "os-deadlock";
  }
  // Memory Management
  if (c.includes("paging") || c.includes("virtual memory") || c.includes("page replacement") || c.includes("tlb") || c.includes("segmentation") || c.includes("belady") || t.includes("page fault") || t.includes("page table") || t.includes("lru") || c.includes("os – virtual memory") || c.includes("os – memory") || c.includes("os – protection")) {
    return "os-mem";
  }
  // DBMS SQL
  if (c.includes("sql") || c.includes("relational algebra") || c.includes("join") || c.includes("select") || c.includes("query") || c.includes("aggregate") || t.includes("select ") || t.includes(" natural join ") || c.includes("dbms – nosql") || c.includes("dbms – transactions")) {
    return "dbms-sql";
  }
  // DBMS Normalization & FDs
  if (c.includes("normal") || c.includes("functional dependenc") || c.includes("bcnf") || c.includes("3nf") || c.includes("2nf") || c.includes("lossless") || c.includes("closure") || c.includes("candidate key") || t.includes("functional dependency") || t.includes("bcnf") || c.includes("dbms – normal forms") || c.includes("dbms – er model")) {
    return "dbms-norm";
  }
  // CN Data Link Layer
  if (c.includes("data link") || c.includes("crc") || c.includes("framing") || c.includes("hamming") || c.includes("flow control") || c.includes("sliding window") || c.includes("error control") || c.includes("csma") || t.includes("sliding window") || t.includes("go-back-n") || c.includes("cn – error control")) {
    return "cn-dll";
  }
  // CN Network & Transport
  if (c.includes("network layer") || c.includes("ip") || c.includes("subnet") || c.includes("routing") || c.includes("tcp") || c.includes("udp") || c.includes("congestion") || c.includes("osi") || t.includes("ipv4") || t.includes("subnet mask") || t.includes("routing table") || t.includes("three-way handshake") || c.includes("cn – osi") || c.includes("cn – ip") || c.includes("cn – tcp") || c.includes("cn – transport") || c.includes("cn – subnetting")) {
    return "cn-net";
  }
  // Compiler Design Parsing
  if (c.includes("compiler") || c.includes("parsing") || c.includes("parser") || c.includes("ll(1)") || c.includes("lr(") || c.includes("first") || c.includes("follow") || c.includes("lexical") || t.includes("parse tree") || t.includes("shift-reduce")) {
    return "cd-parse";
  }
  // Software Engineering
  if (c.includes("software engineering") || c.includes("testing") || c.includes("coupling") || c.includes("cohesion") || c.includes("cyclomatic") || t.includes("software")) {
    return "se-testing";
  }
  // General Aptitude
  if (c.includes("ga") || c.includes("aptitude") || c.includes("ratio") || c.includes("percentage") || c.includes("direction") || c.includes("speed") || c.includes("geometry") || c.includes("analogy") || c.includes("sentence")) {
    return "ga-quant";
  }

  return null;
}

// Build precomputed map of chapter -> Question[]
function buildPyqChapterMap(): Record<string, Question[]> {
  const map: Record<string, Question[]> = {};
  for (const paper of GATE_PYQ_PAPERS) {
    for (const q of paper.questions) {
      const chId = getChapterForQuestion(q);
      if (chId) {
        if (!map[chId]) map[chId] = [];
        // Ensure unique id by prefixing with pyq- if needed, but preserve properties
        map[chId].push({
          ...q,
          id: `pyq-${paper.year}-${q.id}`,
          year: q.year || `GATE ${paper.year}`
        });
      }
    }
  }
  return map;
}

export const PYQ_BY_CHAPTER: Record<string, Question[]> = buildPyqChapterMap();
