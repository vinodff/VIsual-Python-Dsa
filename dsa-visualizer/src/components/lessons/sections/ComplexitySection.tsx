"use client"

import { motion } from "framer-motion"
import { Lesson } from "@/types"

type Props = { lesson: Lesson }

const data: Record<string, { title: string; desc: string; ops: { op: string; time: string; desc: string; color: string }[] }> = {
  "a-star": {
    title: "A* Search Costs",
    desc: "A* combines actual cost with a heuristic estimate for optimal pathfinding.",
    ops: [
      { op: "Best case", time: "O(V+E)", desc: "Perfect heuristic guides straight to goal", color: "var(--el-success)" },
      { op: "Average case", time: "O(bᵈ)", desc: "b = branching factor, d = solution depth", color: "var(--el-muted)" },
      { op: "Worst case", time: "O(V²)", desc: "Poor heuristic expands many nodes", color: "var(--el-error)" },
      { op: "Memory", time: "O(V)", desc: "Stores all generated nodes in open set", color: "var(--el-muted)" },
    ],
  },
  "advanced-graphs": {
    title: "Advanced Graph Costs",
    desc: "Advanced graph algorithms solve complex connectivity, flow, and matching problems.",
    ops: [
      { op: "Bellman-Ford", time: "O(V·E)", desc: "Handles negative edge weights", color: "var(--el-muted)" },
      { op: "Floyd-Warshall", time: "O(V³)", desc: "All-pairs shortest paths", color: "var(--el-error)" },
      { op: "Tarjan's SCC", time: "O(V+E)", desc: "Strongly connected components", color: "var(--el-muted)" },
      { op: "Max flow (Dinic)", time: "O(E·V²)", desc: "Augmenting paths in levels", color: "var(--el-muted)" },
    ],
  },
  "advanced-trees": {
    title: "Advanced Tree Costs",
    desc: "Self-balancing and specialized trees maintain performance guarantees through restructuring.",
    ops: [
      { op: "AVL lookup", time: "O(log n)", desc: "Height-balanced guarantee", color: "var(--el-success)" },
      { op: "AVL rotation", time: "O(1)", desc: "Single or double rotation to rebalance", color: "var(--el-success)" },
      { op: "B-Tree search", time: "O(log n)", desc: "Wide branching reduces height", color: "var(--el-success)" },
      { op: "Treap operations", time: "O(log n)", desc: "Randomized BST with heap property", color: "var(--el-muted)" },
    ],
  },
  "amortized-analysis": {
    title: "Amortized Analysis",
    desc: "Amortized analysis spreads the cost of rare expensive operations across many cheap ones.",
    ops: [
      { op: "Dynamic array push", time: "O(1)*", desc: "Amortized — occasional O(n) resize", color: "var(--el-success)" },
      { op: "Binary counter inc", time: "O(log n)*", desc: "Amortized — not all bits flip each time", color: "var(--el-muted)" },
      { op: "Splay tree access", time: "O(log n)*", desc: "Amortized over all operations", color: "var(--el-muted)" },
      { op: "Union-Find (union)", time: "O(α(n))*", desc: "Inverse Ackermann — practically O(1)", color: "var(--el-success)" },
    ],
  },
  arrays: {
    title: "Array Operation Costs",
    desc: "Arrays excel at indexed access but struggle with resizing.",
    ops: [
      { op: "Index [i]", time: "O(1)", desc: "Base + offset calculation", color: "var(--el-success)" },
      { op: "Assign [i] = v", time: "O(1)", desc: "Direct memory write", color: "var(--el-success)" },
      { op: "Append", time: "O(1)", desc: "If capacity available", color: "var(--el-muted)" },
      { op: "Insert at 0", time: "O(n)", desc: "Shift all elements right", color: "var(--el-error)" },
      { op: "Search (in)", time: "O(n)", desc: "Linear scan required", color: "var(--el-error)" },
    ],
  },
  backtracking: {
    title: "Backtracking Costs",
    desc: "Backtracking is exponential in the worst case. Pruning helps but doesn't change the asymptotic bound.",
    ops: [
      { op: "N-Queens", time: "O(n!)", desc: "n! possible placements", color: "var(--el-error)" },
      { op: "Sudoku", time: "O(9ⁿ²)", desc: "Each cell has 9 options", color: "var(--el-error)" },
      { op: "Subset generation", time: "O(2ⁿ)", desc: "Each element choose or skip", color: "var(--el-error)" },
      { op: "Pruning effect", time: "varies", desc: "Good constraints reduce branches", color: "var(--el-muted)" },
    ],
  },
  bfs: {
    title: "BFS Costs",
    desc: "BFS guarantees shortest path in unweighted graphs. Same complexity as DFS.",
    ops: [
      { op: "Time", time: "O(V+E)", desc: "Visit all vertices and edges", color: "var(--el-muted)" },
      { op: "Space", time: "O(V)", desc: "Queue may hold all vertices at once", color: "var(--el-muted)" },
      { op: "Shortest path", time: "O(V+E)", desc: "Unweighted graph guarantee", color: "var(--el-success)" },
    ],
  },
  "big-o": {
    title: "Big O Notation",
    desc: "Big O describes how runtime grows with input size, ignoring constants and lower terms.",
    ops: [
      { op: "O(1) — Constant", time: "O(1)", desc: "Same time regardless of input size", color: "var(--el-success)" },
      { op: "O(log n) — Logarithmic", time: "O(log n)", desc: "Halves the problem each step", color: "var(--el-muted)" },
      { op: "O(n) — Linear", time: "O(n)", desc: "Proportional to input size", color: "var(--el-muted)" },
      { op: "O(n²) — Quadratic", time: "O(n²)", desc: "Nested iterations over input", color: "var(--el-error)" },
      { op: "O(2ⁿ) — Exponential", time: "O(2ⁿ)", desc: "Doubles with each input addition", color: "var(--el-error)" },
    ],
  },
  "binary-search": {
    title: "Binary Search Costs",
    desc: "O(log n) makes binary search exponentially faster than linear search.",
    ops: [
      { op: "Search", time: "O(log n)", desc: "Halve each step", color: "var(--el-success)" },
      { op: "Space", time: "O(1)", desc: "In-place, no extra memory", color: "var(--el-success)" },
      { op: "Linear vs Binary", time: "O(n) vs O(log n)", desc: "1M items: 1M vs 20 steps", color: "var(--el-muted)" },
    ],
  },
  "bit-manipulation": {
    title: "Bit Manipulation Costs",
    desc: "Bit operations are the fastest CPU instructions — single-cycle operations.",
    ops: [
      { op: "AND / OR / XOR", time: "O(1)", desc: "Single CPU instruction", color: "var(--el-success)" },
      { op: "Left / Right shift", time: "O(1)", desc: "Bit shift in one cycle", color: "var(--el-success)" },
      { op: "Population count", time: "O(1)", desc: "Built-in CPU instruction on modern chips", color: "var(--el-success)" },
      { op: "Iterate bits", time: "O(b)", desc: "b = number of bits (usually 32 or 64)", color: "var(--el-muted)" },
    ],
  },
  classes: {
    title: "OOP Costs",
    desc: "OOP adds minimal overhead for enormous organizational benefits.",
    ops: [
      { op: "Attribute access", time: "O(1)", desc: "Dict lookup on instance", color: "var(--el-success)" },
      { op: "Method call", time: "O(1)", desc: "Method lookup + function call", color: "var(--el-success)" },
      { op: "Instance creation", time: "O(k)", desc: "k attributes to initialize", color: "var(--el-muted)" },
      { op: "Inheritance lookup", time: "O(depth)", desc: "MRO walk up the chain", color: "var(--el-muted)" },
    ],
  },
  "context-managers": {
    title: "Context Manager Costs",
    desc: "Context managers add minimal overhead for guaranteed resource cleanup.",
    ops: [
      { op: "__enter__ call", time: "O(1)", desc: "Setup on entering context", color: "var(--el-success)" },
      { op: "__exit__ call", time: "O(1)", desc: "Teardown on exit (always runs)", color: "var(--el-success)" },
      { op: "Nested managers", time: "O(k)", desc: "k = depth of nesting", color: "var(--el-muted)" },
      { op: "with statement", time: "O(1)", desc: "Syntactic sugar — minimal overhead", color: "var(--el-success)" },
    ],
  },
  "data-types": {
    title: "Type Operation Costs",
    desc: "Different type operations have different costs. Some are instant, some take work.",
    ops: [
      { op: "int + int", time: "O(1)", desc: "Single CPU instruction", color: "var(--el-success)" },
      { op: "float + float", time: "O(1)", desc: "One floating-point op", color: "var(--el-success)" },
      { op: "str + str", time: "O(n)", desc: "Must copy both strings", color: "var(--el-error)" },
      { op: "len(str)", time: "O(1)", desc: "Length is precomputed", color: "var(--el-success)" },
    ],
  },
  decorators: {
    title: "Decorator Costs",
    desc: "Decorators add a thin layer of overhead for each wrapped call.",
    ops: [
      { op: "Wrapped call", time: "O(1) extra", desc: "One extra function call", color: "var(--el-muted)" },
      { op: "Stacked decorators", time: "O(d)", desc: "d = number of decorators", color: "var(--el-muted)" },
      { op: "Decoration (setup)", time: "O(1)", desc: "Run once at definition", color: "var(--el-success)" },
      { op: "Introspection", time: "O(1)", desc: "functools.wraps fixes metadata", color: "var(--el-success)" },
    ],
  },
  deque: {
    title: "Deque Operation Costs",
    desc: "All end operations are O(1) — the main advantage over a list.",
    ops: [
      { op: "append / appendleft", time: "O(1)", desc: "Add to either end", color: "var(--el-success)" },
      { op: "pop / popleft", time: "O(1)", desc: "Remove from either end", color: "var(--el-success)" },
      { op: "Index [i]", time: "O(n)", desc: "Must walk from nearest end", color: "var(--el-muted)" },
      { op: "rotate", time: "O(k)", desc: "Shift elements in bulk", color: "var(--el-muted)" },
    ],
  },
  dfs: {
    title: "DFS Costs",
    desc: "DFS visits every vertex and edge exactly once in a connected graph.",
    ops: [
      { op: "Time", time: "O(V+E)", desc: "Visit all vertices and edges", color: "var(--el-muted)" },
      { op: "Space (recursive)", time: "O(h)", desc: "h = max depth of graph", color: "var(--el-muted)" },
      { op: "Space (iterative)", time: "O(V)", desc: "Stack could hold all vertices", color: "var(--el-muted)" },
    ],
  },
  dictionaries: {
    title: "Dict Operation Costs",
    desc: "Dictionary operations are incredibly fast thanks to hash tables.",
    ops: [
      { op: "Get [key]", time: "O(1)*", desc: "Hash key, lookup bucket", color: "var(--el-success)" },
      { op: "Set [key] = val", time: "O(1)*", desc: "Hash key, insert/update", color: "var(--el-success)" },
      { op: "Delete del", time: "O(1)*", desc: "Hash key, remove bucket", color: "var(--el-success)" },
      { op: "Membership in", time: "O(1)*", desc: "Hash key, check bucket", color: "var(--el-success)" },
      { op: "Iteration", time: "O(n)", desc: "Visit all entries", color: "var(--el-muted)" },
      { op: "Copy", time: "O(n)", desc: "Shallow copy all entries", color: "var(--el-muted)" },
    ],
  },
  "dicts-deep": {
    title: "Deep Dict Costs",
    desc: "Advanced dictionary operations including views, ordering, and specialized variants.",
    ops: [
      { op: "dict.keys() / .values()", time: "O(1)", desc: "Returns a view object (no copy)", color: "var(--el-success)" },
      { op: "dict.items()", time: "O(1)", desc: "View of (key, value) pairs", color: "var(--el-success)" },
      { op: "OrderedDict move", time: "O(1)", desc: "Doubly-linked list reordering", color: "var(--el-muted)" },
      { op: "defaultdict access", time: "O(1)*", desc: "Same hash, with default fallback", color: "var(--el-success)" },
      { op: "dict merging |", time: "O(n+m)", desc: "Creates new dict from both", color: "var(--el-muted)" },
    ],
  },
  "dynamic-arrays": {
    title: "Dynamic Array Costs",
    desc: "Amortized analysis: the rare O(n) resize is spread across all O(1) appends.",
    ops: [
      { op: "Append (typical)", time: "O(1)", desc: "Space available, direct write", color: "var(--el-success)" },
      { op: "Append (resize)", time: "O(n)", desc: "Copy all elements to new block", color: "var(--el-muted)" },
      { op: "Index [i]", time: "O(1)", desc: "Base + offset", color: "var(--el-success)" },
      { op: "Insert at 0", time: "O(n)", desc: "Shift elements right", color: "var(--el-error)" },
      { op: "Pop from end", time: "O(1)", desc: "Decrement length", color: "var(--el-success)" },
      { op: "Pop from start", time: "O(n)", desc: "Shift elements left", color: "var(--el-error)" },
    ],
  },
  "dynamic-programming": {
    title: "DP Costs",
    desc: "DP trades memory for speed. Exponential → polynomial is the typical gain.",
    ops: [
      { op: "Memoization (top-down)", time: "O(states)", desc: "Each state computed once", color: "var(--el-success)" },
      { op: "Tabulation (bottom-up)", time: "O(states)", desc: "Iterate through all states", color: "var(--el-success)" },
      { op: "Space (memo/tab)", time: "O(states)", desc: "Store all computed states", color: "var(--el-muted)" },
      { op: "Naive recursive fib", time: "O(2ⁿ)", desc: "vs O(n) with DP", color: "var(--el-error)" },
    ],
  },
  "fenwick-tree": {
    title: "Fenwick Tree (BIT) Costs",
    desc: "Fenwick trees handle prefix sum queries and point updates in logarithmic time.",
    ops: [
      { op: "Prefix sum query", time: "O(log n)", desc: "Walk the binary index tree", color: "var(--el-success)" },
      { op: "Point update", time: "O(log n)", desc: "Propagate change up the tree", color: "var(--el-success)" },
      { op: "Range sum", time: "O(log n)", desc: "Two prefix queries subtracted", color: "var(--el-muted)" },
      { op: "Build", time: "O(n log n)", desc: "Or O(n) with linear construction", color: "var(--el-muted)" },
      { op: "Space", time: "O(n)", desc: "Single array of size n+1", color: "var(--el-muted)" },
    ],
  },
  functions: {
    title: "Function Costs",
    desc: "Function call overhead is minimal. What matters is what's inside.",
    ops: [
      { op: "Call (no body)", time: "O(1)", desc: "Frame setup overhead", color: "var(--el-success)" },
      { op: "Return", time: "O(1)", desc: "Return value to caller", color: "var(--el-success)" },
      { op: "Argument passing", time: "O(k)", desc: "k arguments passed by reference", color: "var(--el-muted)" },
      { op: "Recursive call", time: "O(depth)", desc: "Stack grows with each call", color: "var(--el-muted)" },
    ],
  },
  generators: {
    title: "Generator Costs",
    desc: "Generators trade slight overhead per item for massive memory savings.",
    ops: [
      { op: "next() call", time: "O(1)", desc: "Resume, yield, pause", color: "var(--el-success)" },
      { op: "Yield", time: "O(1)", desc: "Return value and pause", color: "var(--el-success)" },
      { op: "Memory per item", time: "O(1)", desc: "Only one item in memory at a time", color: "var(--el-success)" },
      { op: "Full iteration", time: "O(n)", desc: "n next() calls total", color: "var(--el-muted)" },
    ],
  },
  graph: {
    title: "Graph Operation Costs",
    desc: "Graph algorithms trade space for time. Adjacency lists are most common.",
    ops: [
      { op: "DFS / BFS", time: "O(V+E)", desc: "Visit all vertices and edges", color: "var(--el-muted)" },
      { op: "Add vertex", time: "O(1)", desc: "Insert in dict", color: "var(--el-success)" },
      { op: "Add edge", time: "O(1)", desc: "Append to adjacency list", color: "var(--el-success)" },
      { op: "Check edge", time: "O(deg(V))", desc: "Scan neighbor list", color: "var(--el-muted)" },
      { op: "Adjacency matrix", time: "O(V²)", desc: "Memory for dense graphs", color: "var(--el-error)" },
    ],
  },
  greedy: {
    title: "Greedy Costs",
    desc: "Greedy algorithms are typically simple and fast, but may not find the global optimum.",
    ops: [
      { op: "Coin change", time: "O(n)", desc: "n = coin types, linear scan", color: "var(--el-success)" },
      { op: "Dijkstra's algorithm", time: "O((V+E) log V)", desc: "Priority queue", color: "var(--el-muted)" },
      { op: "Huffman coding", time: "O(n log n)", desc: "Priority queue build", color: "var(--el-muted)" },
      { op: "Kruskal's MST", time: "O(E log V)", desc: "Sort edges by weight", color: "var(--el-muted)" },
    ],
  },
  "hash-table": {
    title: "Hash Table Costs",
    desc: "Average case is O(1) — worst case is O(n) with many collisions.",
    ops: [
      { op: "Get [key]", time: "O(1)*", desc: "Hash + bucket lookup", color: "var(--el-success)" },
      { op: "Set [key] = val", time: "O(1)*", desc: "Hash + insert/update", color: "var(--el-success)" },
      { op: "Delete", time: "O(1)*", desc: "Hash + mark deleted", color: "var(--el-success)" },
      { op: "Resize", time: "O(n)", desc: "Rehash all entries", color: "var(--el-muted)" },
      { op: "Worst-case search", time: "O(n)", desc: "All keys collide", color: "var(--el-error)" },
    ],
  },
  iterators: {
    title: "Iterator Costs",
    desc: "Iterators provide lazy traversal with constant overhead per element.",
    ops: [
      { op: "Iterator creation", time: "O(1)", desc: "Create iterator object", color: "var(--el-success)" },
      { op: "next() call", time: "O(1)", desc: "Yield one element at a time", color: "var(--el-success)" },
      { op: "Full iteration", time: "O(n)", desc: "n total next() calls", color: "var(--el-muted)" },
      { op: "Iterator chain", time: "O(1) per step", desc: "Delegates to wrapped iterator", color: "var(--el-muted)" },
    ],
  },
  "linear-search": {
    title: "Linear Search Costs",
    desc: "Linear search checks every element until a match is found — simple but slow on large data.",
    ops: [
      { op: "Best case", time: "O(1)", desc: "Target is the first element", color: "var(--el-success)" },
      { op: "Average case", time: "O(n)", desc: "Check half the elements on average", color: "var(--el-muted)" },
      { op: "Worst case", time: "O(n)", desc: "Target is last or not present", color: "var(--el-error)" },
      { op: "Space", time: "O(1)", desc: "No additional memory needed", color: "var(--el-success)" },
    ],
  },
  "linear-sorting": {
    title: "Linear Sorting Costs",
    desc: "Non-comparison sorts achieve O(n) by exploiting special properties of the data.",
    ops: [
      { op: "Counting sort", time: "O(n + k)", desc: "k = range of input values", color: "var(--el-muted)" },
      { op: "Radix sort", time: "O(d × (n + k))", desc: "d = digits, k = base size", color: "var(--el-muted)" },
      { op: "Bucket sort", time: "O(n + k)", desc: "Uniformly distributed buckets", color: "var(--el-muted)" },
      { op: "Space (Counting)", time: "O(k)", desc: "Count array of size k", color: "var(--el-muted)" },
    ],
  },
  "linked-list": {
    title: "Linked List Costs",
    desc: "Insertions/deletions are fast once you're at the right spot. Search is slow.",
    ops: [
      { op: "Access [i]", time: "O(n)", desc: "Must walk from head", color: "var(--el-error)" },
      { op: "Insert after node", time: "O(1)", desc: "Rewire pointers", color: "var(--el-success)" },
      { op: "Delete after node", time: "O(1)", desc: "Skip the node", color: "var(--el-success)" },
      { op: "Search (find)", time: "O(n)", desc: "Linear walk", color: "var(--el-error)" },
      { op: "Insert at head", time: "O(1)", desc: "New node → old head", color: "var(--el-success)" },
      { op: "Insert at tail", time: "O(n)", desc: "Walk to end (no tail ptr)", color: "var(--el-muted)" },
    ],
  },
  lists: {
    title: "List Operation Costs",
    desc: "List operations vary. Indexing is instant, but insert/delete may require shifting elements.",
    ops: [
      { op: "Index [i]", time: "O(1)", desc: "Direct element access", color: "var(--el-success)" },
      { op: "Append", time: "O(1)*", desc: "Amortized — occasional resize", color: "var(--el-success)" },
      { op: "Pop from end", time: "O(1)", desc: "Remove last element", color: "var(--el-success)" },
      { op: "Insert/Delete at start", time: "O(n)", desc: "Shifts all elements", color: "var(--el-error)" },
      { op: "Search (in)", time: "O(n)", desc: "Linear search", color: "var(--el-error)" },
      { op: "Sort", time: "O(n log n)", desc: "Timsort algorithm", color: "var(--el-muted)" },
    ],
  },
  mathematical: {
    title: "Mathematical Operation Costs",
    desc: "Common mathematical operations used in algorithm design and analysis.",
    ops: [
      { op: "GCD (Euclidean)", time: "O(log min(a,b))", desc: "Repeated modulo operations", color: "var(--el-success)" },
      { op: "Modular exponentiation", time: "O(log n)", desc: "Exponentiation by squaring", color: "var(--el-muted)" },
      { op: "Sieve of Eratosthenes", time: "O(n log log n)", desc: "Find all primes up to n", color: "var(--el-muted)" },
      { op: "Matrix multiplication", time: "O(n³)", desc: "Naive — Strassen is O(n^2.81)", color: "var(--el-error)" },
    ],
  },
  "monotonic-stack": {
    title: "Monotonic Stack Costs",
    desc: "Maintains a sorted stack for nearest greater/smaller element queries in linear time.",
    ops: [
      { op: "Push / Pop", time: "O(1)", desc: "Standard stack operations", color: "var(--el-success)" },
      { op: "Full algorithm", time: "O(n)", desc: "Each element pushed/popped once", color: "var(--el-muted)" },
      { op: "Next greater element", time: "O(n)", desc: "Single linear pass", color: "var(--el-muted)" },
      { op: "Space", time: "O(n)", desc: "Stack may hold n elements worst case", color: "var(--el-muted)" },
    ],
  },
  mst: {
    title: "MST Costs",
    desc: "Minimum spanning tree algorithms find the cheapest set of edges connecting all vertices.",
    ops: [
      { op: "Kruskal's algorithm", time: "O(E log V)", desc: "Sort edges + union-find", color: "var(--el-muted)" },
      { op: "Prim's algorithm", time: "O(E log V)", desc: "Priority queue of edges", color: "var(--el-muted)" },
      { op: "Prim's (dense graph)", time: "O(V²)", desc: "Array-based priority queue", color: "var(--el-error)" },
      { op: "Space", time: "O(V+E)", desc: "Store all edges and vertices", color: "var(--el-muted)" },
    ],
  },
  "n-queens": {
    title: "N-Queens Costs",
    desc: "The classic N-Queens backtracking problem explores placements column by column.",
    ops: [
      { op: "Naive backtracking", time: "O(n!)", desc: "n! possible placements", color: "var(--el-error)" },
      { op: "With pruning", time: "O(n!)", desc: "Still factorial in worst case", color: "var(--el-error)" },
      { op: "Optimized (branch & bound)", time: "O(n!)", desc: "Early conflict detection helps", color: "var(--el-muted)" },
      { op: "Space", time: "O(n)", desc: "Board state and recursion stack", color: "var(--el-muted)" },
    ],
  },
  "prefix-sum": {
    title: "Prefix Sum Costs",
    desc: "Prefix sums enable O(1) range sum queries after an O(n) preprocessing step.",
    ops: [
      { op: "Build array", time: "O(n)", desc: "Single linear pass", color: "var(--el-muted)" },
      { op: "Range sum query", time: "O(1)", desc: "prefix[r] - prefix[l-1]", color: "var(--el-success)" },
      { op: "2D prefix sum build", time: "O(m×n)", desc: "Double-loop construction", color: "var(--el-muted)" },
      { op: "2D range sum query", time: "O(1)", desc: "Inclusion-exclusion formula", color: "var(--el-success)" },
    ],
  },
  "problem-patterns": {
    title: "Problem Pattern Costs",
    desc: "Common problem-solving patterns each carry distinct time and space trade-offs.",
    ops: [
      { op: "Two-pass algorithm", time: "O(n)", desc: "Two linear scans, O(1) space", color: "var(--el-muted)" },
      { op: "Boyer-Moore majority", time: "O(n)", desc: "Single pass, O(1) space", color: "var(--el-muted)" },
      { op: "Cycle detection (tortoise-hare)", time: "O(n)", desc: "Two pointers, one fast one slow", color: "var(--el-muted)" },
      { op: "In-place reversal", time: "O(n)", desc: "Reverse in O(1) extra space", color: "var(--el-muted)" },
    ],
  },
  queue: {
    title: "Queue Operation Costs",
    desc: "Using collections.deque, all queue operations are O(1).",
    ops: [
      { op: "Enqueue", time: "O(1)", desc: "Append to right", color: "var(--el-success)" },
      { op: "Dequeue", time: "O(1)", desc: "Pop from left", color: "var(--el-success)" },
      { op: "Peek front", time: "O(1)", desc: "Read first element", color: "var(--el-success)" },
      { op: "Is Empty", time: "O(1)", desc: "Check length", color: "var(--el-success)" },
    ],
  },
  recursion: {
    title: "Recursion Costs",
    desc: "Recursion trades simplicity for memory. Every call adds a stack frame.",
    ops: [
      { op: "Factorial (n calls)", time: "O(n)", desc: "One call per step", color: "var(--el-muted)" },
      { op: "Fib (naive)", time: "O(2ⁿ)", desc: "Exponential — each call branches", color: "var(--el-error)" },
      { op: "Memory per call", time: "O(n) stack", desc: "n frames on the call stack", color: "var(--el-muted)" },
      { op: "Tail recursion", time: "O(n)", desc: "No Python optimization", color: "var(--el-muted)" },
    ],
  },
  "recursion-deep": {
    title: "Recursion Deep Costs",
    desc: "Deep recursion explores multiple branches. Memoization can drastically reduce costs.",
    ops: [
      { op: "Fibonacci (memoized)", time: "O(n)", desc: "Each subproblem solved once", color: "var(--el-success)" },
      { op: "Tree recursion", time: "O(branchesᵈ)", desc: "d = depth, branches = branching factor", color: "var(--el-error)" },
      { op: "Divide and conquer", time: "O(n log n)", desc: "Split, recurse, combine", color: "var(--el-muted)" },
      { op: "Stack depth cost", time: "O(d)", desc: "d = max recursion depth", color: "var(--el-muted)" },
    ],
  },
  "red-black-tree": {
    title: "Red-Black Tree Costs",
    desc: "Red-black trees guarantee O(log n) operations with only 1 bit of extra metadata per node.",
    ops: [
      { op: "Search", time: "O(log n)", desc: "Standard BST traversal", color: "var(--el-success)" },
      { op: "Insert", time: "O(log n)", desc: "BST insert + recolor + rotate", color: "var(--el-muted)" },
      { op: "Delete", time: "O(log n)", desc: "BST delete + fix-up rotations", color: "var(--el-muted)" },
      { op: "Rotation", time: "O(1)", desc: "Pointer rewiring to maintain balance", color: "var(--el-success)" },
    ],
  },
  "segment-tree": {
    title: "Segment Tree Costs",
    desc: "Segment trees support range queries and point/range updates all in O(log n).",
    ops: [
      { op: "Build", time: "O(n)", desc: "Bottom-up or recursive construction", color: "var(--el-muted)" },
      { op: "Range query", time: "O(log n)", desc: "Query over arbitrary range", color: "var(--el-success)" },
      { op: "Point update", time: "O(log n)", desc: "Update single element", color: "var(--el-success)" },
      { op: "Range update (lazy)", time: "O(log n)", desc: "Lazy propagation defers work", color: "var(--el-muted)" },
      { op: "Space", time: "O(4n)", desc: "~4x input size for array representation", color: "var(--el-muted)" },
    ],
  },
  sets: {
    title: "Set Operation Costs",
    desc: "Sets excel at membership tests and mathematical set operations.",
    ops: [
      { op: "Add", time: "O(1)*", desc: "Hash then insert", color: "var(--el-success)" },
      { op: "Remove", time: "O(1)*", desc: "Hash then delete", color: "var(--el-success)" },
      { op: "Membership in", time: "O(1)*", desc: "Hash and check bucket", color: "var(--el-success)" },
      { op: "Union |", time: "O(n+m)", desc: "Iterate both sets", color: "var(--el-muted)" },
      { op: "Intersection &", time: "O(min(n,m))", desc: "Iterate smaller set", color: "var(--el-muted)" },
      { op: "Difference -", time: "O(n)", desc: "Iterate first set", color: "var(--el-muted)" },
    ],
  },
  "sets-deep": {
    title: "Deep Set Costs",
    desc: "Advanced set operations including frozenset, symmetric difference, and set comparisons.",
    ops: [
      { op: "Symmetric diff ^", time: "O(n+m)", desc: "Elements in one but not both", color: "var(--el-muted)" },
      { op: "Issubset / Issuperset", time: "O(n)", desc: "Check containment of all elements", color: "var(--el-muted)" },
      { op: "Frozenset hash", time: "O(n)", desc: "Hash computed once on creation", color: "var(--el-muted)" },
      { op: "Update / Intersection update", time: "O(n+m)", desc: "In-place set modifications", color: "var(--el-muted)" },
    ],
  },
  "shortest-path": {
    title: "Shortest Path Costs",
    desc: "Shortest path algorithms handle different graph types with varying guarantees.",
    ops: [
      { op: "Dijkstra (binary heap)", time: "O((V+E) log V)", desc: "All positive weights", color: "var(--el-muted)" },
      { op: "Bellman-Ford", time: "O(V·E)", desc: "Handles negative weights, detects cycles", color: "var(--el-muted)" },
      { op: "Dijkstra (Fibonacci heap)", time: "O(E + V log V)", desc: "Theoretical improvement", color: "var(--el-muted)" },
      { op: "DAG shortest path", time: "O(V+E)", desc: "Topological order + relaxation", color: "var(--el-muted)" },
    ],
  },
  "sliding-window": {
    title: "Sliding Window Costs",
    desc: "Sliding window maintains a subset of elements as a window moves across the data.",
    ops: [
      { op: "Fixed window", time: "O(n)", desc: "Window slides one element at a time", color: "var(--el-muted)" },
      { op: "Variable window", time: "O(n)", desc: "Expand/shrink based on condition", color: "var(--el-muted)" },
      { op: "Window update", time: "O(1)", desc: "Add new, remove old in constant time", color: "var(--el-success)" },
      { op: "Space", time: "O(k)", desc: "k = window size", color: "var(--el-muted)" },
    ],
  },
  sorting: {
    title: "Sorting Costs",
    desc: "O(n log n) is the theoretical best for comparison-based sorting.",
    ops: [
      { op: "Bubble / Selection", time: "O(n²)", desc: "Simple but slow", color: "var(--el-error)" },
      { op: "Merge / Quick / Heap", time: "O(n log n)", desc: "Optimal for general sorting", color: "var(--el-success)" },
      { op: "Counting / Radix", time: "O(n+k)", desc: "Non-comparison, special cases", color: "var(--el-muted)" },
      { op: "Space (Merge sort)", time: "O(n)", desc: "Auxiliary array needed", color: "var(--el-muted)" },
    ],
  },
  "space-complexity": {
    title: "Space Complexity",
    desc: "Space complexity measures how much extra memory an algorithm needs beyond the input.",
    ops: [
      { op: "In-place", time: "O(1) extra", desc: "Modifies input directly, no extra memory", color: "var(--el-success)" },
      { op: "Auxiliary array", time: "O(n)", desc: "Copy of size n", color: "var(--el-muted)" },
      { op: "Recursion stack", time: "O(depth)", desc: "Call frames on the stack", color: "var(--el-muted)" },
      { op: "DP table", time: "O(m×n)", desc: "2D table for subproblem results", color: "var(--el-muted)" },
    ],
  },
  "sparse-table": {
    title: "Sparse Table Costs",
    desc: "Sparse tables answer range queries in O(1) after O(n log n) preprocessing.",
    ops: [
      { op: "Preprocessing", time: "O(n log n)", desc: "Build table with powers of two", color: "var(--el-muted)" },
      { op: "Range min/max query", time: "O(1)", desc: "Combine two overlapping intervals", color: "var(--el-success)" },
      { op: "Point update", time: "O(n log n)", desc: "Must rebuild table — not dynamic", color: "var(--el-error)" },
      { op: "Space", time: "O(n log n)", desc: "Table with log n rows of size n", color: "var(--el-muted)" },
    ],
  },
  stack: {
    title: "Stack Operation Costs",
    desc: "All stack operations are O(1) when backed by a dynamic array.",
    ops: [
      { op: "Push", time: "O(1)*", desc: "Append to end", color: "var(--el-success)" },
      { op: "Pop", time: "O(1)", desc: "Remove from end", color: "var(--el-success)" },
      { op: "Peek", time: "O(1)", desc: "Read last element", color: "var(--el-success)" },
      { op: "Is Empty", time: "O(1)", desc: "Check length == 0", color: "var(--el-success)" },
    ],
  },
  "string-matching": {
    title: "String Matching Costs",
    desc: "String pattern matching ranges from naive O(n·m) to linear-time optimal algorithms.",
    ops: [
      { op: "Naive matching", time: "O(n·m)", desc: "Check every position, worst case", color: "var(--el-error)" },
      { op: "KMP algorithm", time: "O(n+m)", desc: "Prefix function avoids backtracking", color: "var(--el-muted)" },
      { op: "Rabin-Karp", time: "O(n+m)", desc: "Rolling hash, average case linear", color: "var(--el-muted)" },
      { op: "Z-algorithm", time: "O(n)", desc: "Z-array computed in one pass", color: "var(--el-muted)" },
    ],
  },
  strings: {
    title: "String Operation Costs",
    desc: "Some string operations are instant. Others require scanning every character.",
    ops: [
      { op: "Index [i]", time: "O(1)", desc: "Direct character access", color: "var(--el-success)" },
      { op: "len(s)", time: "O(1)", desc: "Length is precomputed", color: "var(--el-success)" },
      { op: "Concatenation (+)", time: "O(n)", desc: "Creates a new copy", color: "var(--geist-warning)" },
      { op: "Slice [i:j]", time: "O(k)", desc: "Copies k characters", color: "var(--geist-warning)" },
      { op: "in (contains)", time: "O(n)", desc: "Scans each character", color: "var(--el-error)" },
      { op: "find / index", time: "O(n)", desc: "Linear search", color: "var(--el-error)" },
    ],
  },
  "subsets-permutations": {
    title: "Subset & Permutation Costs",
    desc: "Generating subsets (2ⁿ) and permutations (n!) are inherently exponential problems.",
    ops: [
      { op: "Subsets via bitmask", time: "O(n·2ⁿ)", desc: "Each subset built from bit pattern", color: "var(--el-error)" },
      { op: "Subsets via recursion", time: "O(n·2ⁿ)", desc: "Include/exclude each element", color: "var(--el-error)" },
      { op: "Permutations (backtrack)", time: "O(n·n!)", desc: "Swap and recurse", color: "var(--el-error)" },
      { op: "Next permutation", time: "O(n)", desc: "Lexicographical next (C++ style)", color: "var(--el-muted)" },
    ],
  },
  "suffix-array": {
    title: "Suffix Array Costs",
    desc: "Suffix arrays enable fast string search and substring queries after O(n log n) construction.",
    ops: [
      { op: "Construction (naive)", time: "O(n² log n)", desc: "Sort all suffixes naively", color: "var(--el-error)" },
      { op: "Manber-Myers (prefix-doubling)", time: "O(n log n)", desc: "Sort by 2ᵏ-length prefixes", color: "var(--el-muted)" },
      { op: "Kasai LCP array", time: "O(n)", desc: "Longest common prefix array", color: "var(--el-muted)" },
      { op: "Pattern search", time: "O(m log n)", desc: "Binary search on suffix array", color: "var(--el-muted)" },
    ],
  },
  "topological-sort": {
    title: "Topological Sort Costs",
    desc: "Topological ordering of a DAG places vertices in dependency order.",
    ops: [
      { op: "Kahn's algorithm", time: "O(V+E)", desc: "BFS with in-degree tracking", color: "var(--el-muted)" },
      { op: "DFS-based", time: "O(V+E)", desc: "Post-order traversal with stack", color: "var(--el-muted)" },
      { op: "Cycle detection", time: "O(V+E)", desc: "Detect if topological order exists", color: "var(--el-muted)" },
      { op: "Space", time: "O(V)", desc: "In-degree array or visited set", color: "var(--el-muted)" },
    ],
  },
  trie: {
    title: "Trie Operation Costs",
    desc: "Operations depend on word length, not number of stored words.",
    ops: [
      { op: "Insert", time: "O(L)", desc: "L = word length", color: "var(--el-success)" },
      { op: "Search", time: "O(L)", desc: "Walk L nodes", color: "var(--el-success)" },
      { op: "Prefix query", time: "O(L)", desc: "Navigate to prefix node", color: "var(--el-success)" },
      { op: "Memory per node", time: "O(A)", desc: "A = alphabet size", color: "var(--el-muted)" },
    ],
  },
  tuples: {
    title: "Tuple Operation Costs",
    desc: "Tuples support the same read operations as lists, but no mutation.",
    ops: [
      { op: "Index [i]", time: "O(1)", desc: "Direct element access", color: "var(--el-success)" },
      { op: "len()", time: "O(1)", desc: "Precomputed length", color: "var(--el-success)" },
      { op: "in (search)", time: "O(n)", desc: "Linear search required", color: "var(--el-error)" },
      { op: "Count/Index", time: "O(n)", desc: "Linear scan", color: "var(--el-error)" },
      { op: "Slicing [:]", time: "O(k)", desc: "Creates new tuple with k items", color: "var(--el-muted)" },
      { op: "Concatenation +", time: "O(n+m)", desc: "Creates new tuple", color: "var(--el-muted)" },
    ],
  },
  "two-pointers": {
    title: "Two Pointers Costs",
    desc: "Two pointers traverse from opposite ends or different speeds to solve problems in-place.",
    ops: [
      { op: "Opposite ends", time: "O(n)", desc: "Move toward center in one pass", color: "var(--el-muted)" },
      { op: "Same direction (slow-fast)", time: "O(n)", desc: "One fast, one slow pointer", color: "var(--el-muted)" },
      { op: "Subarray/Substring check", time: "O(n)", desc: "Expand/contract window", color: "var(--el-muted)" },
      { op: "Space", time: "O(1)", desc: "No extra memory needed", color: "var(--el-success)" },
    ],
  },
  "union-find": {
    title: "Union-Find (DSU) Costs",
    desc: "Union-Find tracks connected components with near-constant time operations.",
    ops: [
      { op: "Find (path compression)", time: "O(α(n))", desc: "Inverse Ackermann — practically constant", color: "var(--el-success)" },
      { op: "Union (by rank/size)", time: "O(α(n))", desc: "Attach smaller tree under larger", color: "var(--el-success)" },
      { op: "Connected check", time: "O(α(n))", desc: "Same root means connected", color: "var(--el-success)" },
      { op: "Build", time: "O(n)", desc: "Initialize n parent pointers", color: "var(--el-muted)" },
    ],
  },
  variables: {
    title: "Time Complexity",
    desc: "Variable operations are the fastest things in Python — direct memory lookups.",
    ops: [
      { op: "Assignment (=)", time: "O(1)", desc: "One direct write", color: "var(--el-success)" },
      { op: "Read (use name)", time: "O(1)", desc: "Direct lookup by name", color: "var(--el-success)" },
      { op: "Reassignment", time: "O(1)", desc: "Overwrite reference", color: "var(--el-success)" },
      { op: "Delete (del)", time: "O(1)", desc: "Remove name from table", color: "var(--el-success)" },
    ],
  },
}

export function ComplexitySection({ lesson }: Props) {
  const d = data[lesson.id] || data.variables

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-primary)" }}>Section 5 of 8</p>
        <h2 className="text-2xl font-semibold tracking-tight" style={{ letterSpacing: "-0.96px" }}>{d.title}</h2>
        <p className="mt-2 text-sm" style={{ color: "var(--el-body)" }}>{d.desc}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {d.ops.map((item, i) => (
          <motion.div key={item.op} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            className="rounded-md p-4" style={{ border: "1px solid var(--el-hairline)", backgroundColor: "var(--el-surface-card)" }}>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-semibold">{item.op}</p>
              <span className="text-xs font-bold el-code px-2 py-0.5 rounded-sm"
                style={{ backgroundColor: item.color + "20", color: item.color }}>{item.time}</span>
            </div>
            <p className="text-xs" style={{ color: "var(--el-body)" }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-md p-6" style={{ border: "1px solid var(--el-hairline)", backgroundColor: "var(--el-canvas-soft)" }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--el-muted)" }}>Visual: O(1) vs O(n)</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-semibold mb-2">O(1) — Direct access</p>
            <div className="flex items-center gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: i === 3 ? "var(--el-primary)" : "var(--el-surface-strong)", color: i === 3 ? "#fff" : "var(--el-muted)" }}>
                  {i === 3 ? "●" : "○"}
                </div>
              ))}
            </div>
            <p className="text-xs mt-2" style={{ color: "var(--el-body)" }}>One step directly to the target. len(s), s[0].</p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2">O(n) — Linear scan</p>
            <div className="flex items-center gap-0">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: i === 5 ? "var(--el-error)" : "var(--el-surface-strong)", color: i === 5 ? "#fff" : "var(--el-muted)", marginLeft: i > 0 ? "-4px" : "0" }}>
                  {i === 5 ? "●" : "○"}
                </div>
              ))}
            </div>
            <p className="text-xs mt-2" style={{ color: "var(--el-body)" }}>Must check each character. &quot;text&quot; in string, find().</p>
          </div>
        </div>
      </div>
    </div>
  )
}
