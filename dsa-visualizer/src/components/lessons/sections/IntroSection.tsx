"use client"

import { motion } from "framer-motion"
import { Lesson } from "@/types"

type Props = { lesson: Lesson }

const content: Record<string, { title: string; desc: string; insight: string; cards: { num: string; title: string; desc: string }[] }> = {
  "advanced-graphs": {
    title: "What are Advanced Graphs?",
    desc: "<strong>Advanced graphs</strong> extend basic graph algorithms to handle complex real-world constraints — weighted edges, negative cycles, multi-source propagation, and dynamic connectivity.",
    insight: "Once you master BFS and DFS, advanced graph algorithms like Dijkstra, Bellman-Ford, Floyd-Warshall, and Tarjan's become your tools for routing, scheduling, and dependency analysis.",
    cards: [
      { num: "01", title: "Weighted Graphs", desc: "Edges carry costs. Algorithms must find the cheapest path, not just the shortest hop count." },
      { num: "02", title: "Negative Edges", desc: "Bellman-Ford handles negative weights and detects negative cycles that break Dijkstra." },
      { num: "03", title: "All-Pairs", desc: "Floyd-Warshall computes shortest paths between every pair of vertices in O(V³)." },
    ],
  },
  "advanced-trees": {
    title: "What are Advanced Trees?",
    desc: "<strong>Advanced trees</strong> extend binary trees with balancing, multi-way splits, and specialized traversal properties to solve performance-critical problems.",
    insight: "From B-Trees that power databases to segment trees that answer range queries in O(log n), advanced trees are the backbone of efficient systems.",
    cards: [
      { num: "01", title: "Self-Balancing", desc: "Trees like AVL and Red-Black automatically maintain O(log n) height after every mutation." },
      { num: "02", title: "Multi-Way", desc: "B-Trees store multiple keys per node, reducing disk I/O for databases and file systems." },
      { num: "03", title: "Range Queries", desc: "Segment trees and Fenwick trees answer sum/min/max over any range in logarithmic time." },
    ],
  },
  "amortized-analysis": {
    title: "What is Amortized Analysis?",
    desc: "<strong>Amortized analysis</strong> averages the cost of a sequence of operations, even if individual operations are expensive, to show the overall cost is low.",
    insight: "Amortized analysis explains why Python list append is O(1) on average — the rare O(n) resize is spread across all the cheap appends before it.",
    cards: [
      { num: "01", title: "Average Over Time", desc: "Spread the cost of rare expensive operations across many cheap ones." },
      { num: "02", title: "Accounting Method", desc: "Pre-pay for future expensive operations by charging extra for cheap ones." },
      { num: "03", title: "Potential Method", desc: "Define a 'potential energy' that builds up and pays for expensive resets." },
    ],
  },
  arrays: {
    title: "What is an Array?",
    desc: "An <strong>array</strong> is a contiguous block of memory holding elements of the same type, each at a fixed offset.",
    insight: "Arrays are the simplest and most fundamental data structure. Their fixed size and contiguous layout make access instant but resizing expensive.",
    cards: [
      { num: "01", title: "Contiguous", desc: "Elements are stored in adjacent memory slots. No gaps." },
      { num: "02", title: "Fixed Size", desc: "Arrays have a fixed capacity. You set it once and it doesn't grow." },
      { num: "03", title: "Same Type", desc: "All elements share the same type (int, float, etc.), enabling compact storage." },
    ],
  },
  "a-star": {
    title: "What is A*?",
    desc: "<strong>A*</strong> is a pathfinding algorithm that combines Dijkstra's guaranteed shortest path with a heuristic to guide the search toward the goal.",
    insight: "A* is the gold standard for grid-based pathfinding — used in video games, robotics, and GPS navigation because it's both optimal and fast.",
    cards: [
      { num: "01", title: "Cost + Heuristic", desc: "A* evaluates f(n) = g(n) + h(n) where g is the known cost and h estimates the remaining cost." },
      { num: "02", title: "Admissible Heuristic", desc: "A heuristic that never overestimates guarantees A* finds the shortest path." },
      { num: "03", title: "Open & Closed Sets", desc: "The open set holds candidates to explore; the closed set holds already-evaluated nodes." },
    ],
  },
  avl: {
    title: "What is an AVL Tree?",
    desc: "An <strong>AVL tree</strong> is a self-balancing BST. After every insert/delete, it checks and fixes balance.",
    insight: "Named after Adelson-Velsky and Landis. AVL ensures O(log n) operations by keeping height difference ≤ 1.",
    cards: [
      { num: "01", title: "Balance Factor", desc: "height(left) - height(right). Must be -1, 0, or 1." },
      { num: "02", title: "Rotations", desc: "Left or right rotations rebalance the tree when needed." },
      { num: "03", title: "Strict Balance", desc: "AVL is stricter than Red-Black trees — better for search-heavy workloads." },
    ],
  },
  backtracking: {
    title: "What is Backtracking?",
    desc: "<strong>Backtracking</strong> incrementally builds candidates and abandons them (backtracks) when they can't lead to a solution.",
    insight: "Backtracking = DFS + pruning. Used for N-Queens, Sudoku, permutations, subsets, and constraint satisfaction problems.",
    cards: [
      { num: "01", title: "Incremental", desc: "Build the solution piece by piece." },
      { num: "02", title: "Pruning", desc: "Stop early when a partial solution can't work." },
      { num: "03", title: "Exhaustive", desc: "Explores all possibilities in the worst case — O(2ⁿ) or O(n!)." },
    ],
  },
  bfs: {
    title: "What is BFS?",
    desc: "<strong>Breadth-First Search</strong> explores a graph level by level — all neighbors first, then their neighbors.",
    insight: "BFS finds the SHORTEST path in unweighted graphs. It's the algorithm behind GPS navigation, social network 'degrees of separation'.",
    cards: [
      { num: "01", title: "Go Wide", desc: "Visit all neighbors before going deeper." },
      { num: "02", title: "Queue-based", desc: "Uses FIFO — first discovered, first explored." },
      { num: "03", title: "Shortest Path", desc: "BFS guarantees the shortest path in unweighted graphs." },
    ],
  },
  "big-o": {
    title: "What is Big O?",
    desc: "<strong>Big O notation</strong> describes how an algorithm's runtime or memory usage grows as the input size grows — ignoring constants and focusing on the dominant term.",
    insight: "Big O is the language of algorithm efficiency. O(1) is instant, O(log n) is fast, O(n) is linear, O(n²) gets slow fast, and O(2ⁿ) explodes.",
    cards: [
      { num: "01", title: "Upper Bound", desc: "Big O describes the worst-case growth rate as input size approaches infinity." },
      { num: "02", title: "Drop Constants", desc: "O(2n) becomes O(n). Constant factors don't change the growth curve." },
      { num: "03", title: "Dominant Term", desc: "O(n² + n) becomes O(n²). Only the fastest-growing term matters." },
    ],
  },
  "binary-search": {
    title: "What is Binary Search?",
    desc: "<strong>Binary search</strong> finds a target in a sorted array by repeatedly dividing the search space in half.",
    insight: "Binary search is the most important O(log n) algorithm. It transforms exponential search into logarithmic time.",
    cards: [
      { num: "01", title: "Sorted Required", desc: "Binary search only works on sorted data." },
      { num: "02", title: "Divide & Conquer", desc: "Compare with middle, eliminate half, repeat." },
      { num: "03", title: "O(log n)", desc: "Each step halves the search space. 1M items → 20 steps." },
    ],
  },
  "bit-manipulation": {
    title: "What is Bit Manipulation?",
    desc: "<strong>Bit manipulation</strong> operates directly on the binary representation of integers — flipping, shifting, and masking individual bits.",
    insight: "Bit operations are the fastest operations a CPU can execute. They're used in compression, cryptography, graphics, and low-level optimizations.",
    cards: [
      { num: "01", title: "Bitwise Operators", desc: "AND (&), OR (|), XOR (^), NOT (~), left shift (<<), right shift (>>)." },
      { num: "02", title: "Common Tricks", desc: "Check if a bit is set: (n >> k) & 1. Toggle: n ^ (1 << k). Power of 2: n & (n-1) == 0." },
      { num: "03", title: "Extreme Speed", desc: "Bit operations happen in one CPU cycle. Use them for flags, permissions, and fast math." },
    ],
  },
  bst: {
    title: "What is a BST?",
    desc: "A <strong>Binary Search Tree</strong> is a binary tree where left children are smaller and right children are larger.",
    insight: "BSTs enable O(log n) search, insert, and delete — but only if balanced. Worst case (sorted input) degrades to O(n).",
    cards: [
      { num: "01", title: "Ordered", desc: "Left < Root < Right. This property holds for every node." },
      { num: "02", title: "Fast Search", desc: "Compare and go left or right — halve the search space each step." },
      { num: "03", title: "Skew Risk", desc: "If data is sorted, the BST becomes a linked list — O(n)." },
    ],
  },
  classes: {
    title: "What is a Class?",
    desc: "A <strong>class</strong> is a blueprint for creating objects. It bundles data (attributes) with behavior (methods).",
    insight: "OOP lets you model real-world things as code. A Dog class produces many dog objects, each with its own name and age.",
    cards: [
      { num: "01", title: "Blueprint", desc: "The class defines what attributes and methods all instances share." },
      { num: "02", title: "Instance", desc: "An object created from a class. Each has its own attribute values." },
      { num: "03", title: "Inheritance", desc: "A class can inherit from another, reusing and extending its behavior." },
    ],
  },
  "context-managers": {
    title: "What is a Context Manager?",
    desc: "A <strong>context manager</strong> lets you allocate and release resources automatically using the <code>with</code> statement.",
    insight: "The <code>with open(file) as f</code> pattern ensures files close even if an error occurs — no manual cleanup needed.",
    cards: [
      { num: "01", title: "Enter & Exit", desc: "__enter__ runs when the block starts, __exit__ runs when it ends — even on exceptions." },
      { num: "02", title: "Resource Safety", desc: "Files, locks, database connections, and network sockets all benefit from automatic cleanup." },
      { num: "03", title: "Custom Managers", desc: "Implement __enter__ and __exit__ or use @contextmanager from contextlib for your own." },
    ],
  },
  "data-types": {
    title: "What are Data Types?",
    desc: "A <strong>data type</strong> tells Python what kind of value something is — and what you can do with it.",
    insight: "Every value has a type — <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>. The type determines what operations are allowed.",
    cards: [
      { num: "01", title: "Built-in Types", desc: "int, float, str, bool, list, dict, tuple, set, NoneType" },
      { num: "02", title: "Dynamic Typing", desc: "Python figures out the type automatically. You don't declare it." },
      { num: "03", title: "Type Checking", desc: "Use type() to ask Python: 'What type is this?'" },
    ],
  },
  decorators: {
    title: "What is a Decorator?",
    desc: "A <strong>decorator</strong> is a function that takes another function and extends its behavior without changing its code.",
    insight: "Decorators use Python's '@' syntax. Common uses: logging, timing, access control, caching (@lru_cache).",
    cards: [
      { num: "01", title: "Wrapper", desc: "The decorator wraps the original function with extra behavior." },
      { num: "02", title: "Reusable", desc: "Apply the same decorator to many functions with one @-line." },
      { num: "03", title: "Composable", desc: "Stack multiple decorators — each wraps the previous." },
    ],
  },
  deque: {
    title: "What is a Deque?",
    desc: "A <strong>deque</strong> (double-ended queue) allows fast appends and pops on both ends.",
    insight: "Pronounced 'deck'. It's a general-purpose queue that can grow/shrink from either side — O(1) for all end operations.",
    cards: [
      { num: "01", title: "Two-ended", desc: "Add or remove from both front and back in O(1)." },
      { num: "02", title: "Backed by Array", desc: "Deque uses a circular buffer for efficient growth." },
      { num: "03", title: "Versatile", desc: "Can serve as stack, queue, or both simultaneously." },
    ],
  },
  dfs: {
    title: "What is DFS?",
    desc: "<strong>Depth-First Search</strong> explores a graph by going as deep as possible along each branch before backtracking.",
    insight: "DFS uses a stack (implicitly via recursion or explicitly). It's used for topological sorting, cycle detection, and maze solving.",
    cards: [
      { num: "01", title: "Go Deep", desc: "Explore a path fully before trying alternatives." },
      { num: "02", title: "Stack-based", desc: "Uses LIFO — last discovered, first explored." },
      { num: "03", title: "Backtracking", desc: "When a dead end is hit, backtrack to the last unvisited branch." },
    ],
  },
  dictionaries: {
    title: "What is a Dictionary?",
    desc: "A <strong>dictionary</strong> stores key-value pairs. Each key maps to a value, like a real dictionary maps words to definitions.",
    insight: "Dictionaries are the most versatile data structure in Python. They power JSON, object attributes, and countless optimizations.",
    cards: [
      { num: "01", title: "Key-Value", desc: "Each key is unique and maps to exactly one value." },
      { num: "02", title: "Hash-based", desc: "Keys are hashed for O(1) average lookup, insert, and delete." },
      { num: "03", title: "Dynamic", desc: "Dicts grow and shrink as needed. Keys must be hashable (immutable)." },
    ],
  },
  "dicts-deep": {
    title: "What Are Dict Internals?",
    desc: "A <strong>dictionary deep dive</strong> explores how Python's dict actually works under the hood — hash functions, collision resolution, and dynamic resizing.",
    insight: "Python 3.6+ dicts are ordered and use a compact array layout that saves memory while preserving insertion order — a clever two-array design.",
    cards: [
      { num: "01", title: "Compact Layout", desc: "Entries are stored in insertion order in one array; indices are stored in a sparse hash table." },
      { num: "02", title: "Collision Strategy", desc: "Open addressing with pseudo-random probing resolves hash collisions without linked lists." },
      { num: "03", title: "Growth & Rehash", desc: "When two-thirds full, the dict doubles and reinserts every key — O(n) but amortized." },
    ],
  },
  "dynamic-arrays": {
    title: "What is a Dynamic Array?",
    desc: "A <strong>dynamic array</strong> is an array that grows automatically when it runs out of space.",
    insight: "Python lists ARE dynamic arrays. When full, they double in size and copy all elements. This makes appends O(1) on average.",
    cards: [
      { num: "01", title: "Grows Automatically", desc: "When capacity is reached, Python allocates a larger block." },
      { num: "02", title: "Amortized O(1)", desc: "Most appends are instant. The rare resize is O(n) but averaged out." },
      { num: "03", title: "Doubling Strategy", desc: "Capacity typically doubles (1 → 4 → 8 → 16 → ...)." },
    ],
  },
  "dynamic-programming": {
    title: "What is Dynamic Programming?",
    desc: "<strong>Dynamic Programming</strong> solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation.",
    insight: "DP = recursion + memoization. Two approaches: top-down (memoization) and bottom-up (tabulation). Think: 'can I derive state from smaller states?'",
    cards: [
      { num: "01", title: "Overlapping Subproblems", desc: "The same subproblems appear repeatedly. Store results to avoid recomputation." },
      { num: "02", title: "Optimal Substructure", desc: "The optimal solution can be built from optimal solutions of subproblems." },
      { num: "03", title: "Memoization vs Tabulation", desc: "Top-down (recursive + cache) vs bottom-up (iterative table)." },
    ],
  },
  "fenwick-tree": {
    title: "What is a Fenwick Tree?",
    desc: "A <strong>Fenwick tree</strong> (Binary Indexed Tree) maintains prefix sums of an array and supports point updates in O(log n).",
    insight: "Fenwick trees are simpler and faster than segment trees for prefix sum queries — just a single array and a bit of index trickery.",
    cards: [
      { num: "01", title: "Prefix Sums", desc: "Query the sum of elements from index 1 to i in O(log n) time." },
      { num: "02", title: "Point Updates", desc: "Update one element and propagate the change in O(log n) time." },
      { num: "03", title: "LSB Magic", desc: "The index i + (i & -i) finds the next node to update. No recursion needed." },
    ],
  },
  functions: {
    title: "What is a Function?",
    desc: "A <strong>function</strong> is a reusable block of code that takes inputs, does work, and returns outputs.",
    insight: "Functions are the building blocks of programs. They let you write code once, use it everywhere, and keep logic organized.",
    cards: [
      { num: "01", title: "Reusable", desc: "Write once, call from anywhere. Avoid repeating yourself." },
      { num: "02", title: "Input → Output", desc: "Functions take arguments and return values. Pure functions are predictable." },
      { num: "03", title: "Scope", desc: "Variables defined inside a function are local — they don't leak out." },
    ],
  },
  generators: {
    title: "What is a Generator?",
    desc: "A <strong>generator</strong> is a function that yields values one at a time, pausing between each yield.",
    insight: "Generators are lazy — they produce values on demand instead of computing everything upfront. Use them for infinite sequences and large data.",
    cards: [
      { num: "01", title: "Lazy", desc: "Values are produced only when requested. No memory wasted on unused items." },
      { num: "02", title: "Stateful", desc: "The generator remembers where it paused and resumes from there." },
      { num: "03", title: "Iterable", desc: "Generators work in for loops, list() calls, and anywhere iterables are accepted." },
    ],
  },
  graph: {
    title: "What is a Graph?",
    desc: "A <strong>graph</strong> is a collection of nodes (vertices) connected by edges. The most general data structure.",
    insight: "Graphs model social networks, maps, the web, neural networks, and dependency resolution.",
    cards: [
      { num: "01", title: "Vertices & Edges", desc: "Vertices are nodes. Edges connect pairs of vertices." },
      { num: "02", title: "Directed vs Undirected", desc: "Edges can have direction (one-way) or be bidirectional." },
      { num: "03", title: "Weighted vs Unweighted", desc: "Edges can carry weights (cost, distance, capacity)." },
    ],
  },
  greedy: {
    title: "What is Greedy?",
    desc: "A <strong>greedy</strong> algorithm makes the best local choice at each step, hoping it leads to the global optimum.",
    insight: "Greedy works when local optimum = global optimum. Examples: coin change (US), Huffman coding, Dijkstra, Kruskal's MST.",
    cards: [
      { num: "01", title: "Local Optimum", desc: "Pick the best option available right now." },
      { num: "02", title: "No Backtracking", desc: "Once a choice is made, it's never undone." },
      { num: "03", title: "Not Always Optimal", desc: "Greedy fails when local choices don't lead to the global best." },
    ],
  },
  "hash-table": {
    title: "What is a Hash Table?",
    desc: "A <strong>hash table</strong> maps keys to values using a hash function. Keys are hashed to determine where values are stored.",
    insight: "Python dicts ARE hash tables. They offer O(1) average lookup, insert, and delete — the foundation of fast databases and caches.",
    cards: [
      { num: "01", title: "Hash Function", desc: "Converts a key into an array index. Deterministic and fast." },
      { num: "02", title: "Collisions", desc: "When two keys hash to the same index. Resolved with chaining or open addressing." },
      { num: "03", title: "Dynamic Resizing", desc: "When load factor gets high, the table grows and rehashes all keys." },
    ],
  },
  heap: {
    title: "What is a Heap?",
    desc: "A <strong>heap</strong> is a complete binary tree where the parent is always smaller (min-heap) or larger (max-heap) than its children.",
    insight: "Heaps power priority queues, Dijkstra's algorithm, and heap sort. The min/max element is always at the root.",
    cards: [
      { num: "01", title: "Heap Property", desc: "Parent ≤ children (min-heap) or Parent ≥ children (max-heap)." },
      { num: "02", title: "Complete Tree", desc: "All levels filled left to right. No gaps." },
      { num: "03", title: "Array-Backed", desc: "Heaps are stored in arrays. Node i has children at 2i+1 and 2i+2." },
    ],
  },
  iterators: {
    title: "What is an Iterator?",
    desc: "An <strong>iterator</strong> is an object that produces a sequence of values one at a time using the <code>__next__</code> method.",
    insight: "Every <code>for</code> loop in Python uses iterators. Lists, files, ranges — they all implement <code>__iter__</code> and <code>__next__</code>.",
    cards: [
      { num: "01", title: "Lazy Production", desc: "Iterators produce values on demand, not all at once." },
      { num: "02", title: "Exhaustible", desc: "Once consumed, an iterator raises StopIteration. You can't rewind it." },
      { num: "03", title: "Protocol", desc: "__iter__ returns the iterator object. __next__ returns the next value." },
    ],
  },
  "linear-search": {
    title: "What is Linear Search?",
    desc: "<strong>Linear search</strong> scans every element in order until the target is found or the list ends.",
    insight: "Linear search is the simplest algorithm — no sorting needed, works on any data, but checks every element in the worst case.",
    cards: [
      { num: "01", title: "Simple", desc: "Start at the beginning and check each element one by one." },
      { num: "02", title: "No Prerequisites", desc: "Works on unsorted data. No preprocessing or special structure needed." },
      { num: "03", title: "O(n) Time", desc: "N elements = up to N checks. Fast for small lists, slow for large ones." },
    ],
  },
  "linear-sorting": {
    title: "What is Linear Sorting?",
    desc: "<strong>Linear sorting</strong> algorithms (counting sort, radix sort, bucket sort) sort in O(n) time by exploiting properties of the data rather than comparisons.",
    insight: "The O(n log n) barrier only applies to comparison-based sorts. With integer keys or bounded ranges, you can sort in linear time.",
    cards: [
      { num: "01", title: "Counting Sort", desc: "Count occurrences of each key value, then reconstruct the sorted array." },
      { num: "02", title: "Radix Sort", desc: "Sort digit by digit from least significant to most — uses counting sort as a subroutine." },
      { num: "03", title: "Bucket Sort", desc: "Distribute elements into buckets, sort each bucket, then concatenate." },
    ],
  },
  "linked-list": {
    title: "What is a Linked List?",
    desc: "A <strong>linked list</strong> is a sequence of nodes where each node points to the next. No contiguous memory needed.",
    insight: "Linked lists excel at insertions/deletions anywhere — O(1) once you're at the right node. But random access is O(n).",
    cards: [
      { num: "01", title: "Nodes", desc: "Each node holds a value and a pointer to the next node." },
      { num: "02", title: "Dynamic", desc: "Nodes are allocated individually. No resizing or copying." },
      { num: "03", title: "Sequential Access", desc: "To reach node i, you must walk from the head." },
    ],
  },
  lists: {
    title: "What is a List?",
    desc: "A <strong>list</strong> is an ordered, mutable collection of items. You can add, remove, and change elements freely.",
    insight: "Lists are the workhorse of Python. They can hold any type, grow and shrink, and support powerful operations like slicing and sorting.",
    cards: [
      { num: "01", title: "Ordered", desc: "Items have a defined order that stays consistent." },
      { num: "02", title: "Mutable", desc: "You can change, add, or remove items after creation." },
      { num: "03", title: "Mixed Types", desc: "A single list can hold int, str, float, even other lists." },
    ],
  },
  mathematical: {
    title: "What are Mathematical Algorithms?",
    desc: "<strong>Mathematical algorithms</strong> solve problems rooted in number theory, combinatorics, and arithmetic — prime testing, GCD, modular exponentiation, and more.",
    insight: "These algorithms are the oldest in computer science and still critical for cryptography, hashing, and competitive programming.",
    cards: [
      { num: "01", title: "Primality", desc: "Sieve of Eratosthenes finds all primes up to N in O(N log log N) time." },
      { num: "02", title: "Modular Arithmetic", desc: "Fast exponentiation computes a^b mod m in O(log b) — essential for RSA cryptography." },
      { num: "03", title: "GCD & LCM", desc: "Euclid's algorithm computes gcd in O(log min(a,b)) — the oldest known algorithm." },
    ],
  },
  "monotonic-stack": {
    title: "What is a Monotonic Stack?",
    desc: "A <strong>monotonic stack</strong> maintains elements in strictly increasing or decreasing order, popping violators as new elements arrive.",
    insight: "Monotonic stacks solve 'next greater element' problems in O(n) — a huge improvement over the naive O(n²) approach.",
    cards: [
      { num: "01", title: "Order Invariant", desc: "The stack always stays sorted — either increasing or decreasing." },
      { num: "02", title: "One Pass", desc: "Each element is pushed and popped at most once, giving O(n) total time." },
      { num: "03", title: "Next Greater Element", desc: "When a larger element arrives, pop smaller ones — they all found their 'next greater'." },
    ],
  },
  mst: {
    title: "What is a Minimum Spanning Tree?",
    desc: "A <strong>Minimum Spanning Tree (MST)</strong> connects all vertices in a weighted graph with the minimum total edge weight and no cycles.",
    insight: "MSTs solve network design — laying cables, building roads, connecting circuits — where you need to connect everything at minimum cost.",
    cards: [
      { num: "01", title: "Spanning Tree", desc: "A tree that includes every vertex. N vertices = N-1 edges." },
      { num: "02", title: "Kruskal's Algorithm", desc: "Sort edges by weight and add them one by one, skipping edges that create cycles (Union-Find)." },
      { num: "03", title: "Prim's Algorithm", desc: "Grow the tree from a starting vertex, always adding the cheapest edge to a new vertex." },
    ],
  },
  "n-queens": {
    title: "What is N-Queens?",
    desc: "The <strong>N-Queens</strong> problem asks: place N queens on an N×N chessboard so no two queens attack each other.",
    insight: "N-Queens is the classic backtracking problem — place a queen, check constraints, recurse, and undo if it doesn't work out.",
    cards: [
      { num: "01", title: "Constraint", desc: "No two queens share the same row, column, or diagonal." },
      { num: "02", title: "Backtracking Approach", desc: "Place queens row by row, checking validity before each placement." },
      { num: "03", title: "Pruning", desc: "Track threatened columns and diagonals with sets to check constraints in O(1)." },
    ],
  },
  "prefix-sum": {
    title: "What is a Prefix Sum?",
    desc: "A <strong>prefix sum</strong> array stores cumulative sums so that the sum of any subarray can be computed in O(1) time.",
    insight: "Prefix sums transform 'compute sum over range' from O(n) per query to O(1) — a simple idea with enormous impact.",
    cards: [
      { num: "01", title: "Precomputation", desc: "Build prefix[i] = sum of elements from 0 to i. One O(n) pass." },
      { num: "02", title: "Range Query", desc: "Sum(i, j) = prefix[j] - prefix[i-1]. Instant, regardless of range size." },
      { num: "03", title: "Multi-dimensional", desc: "2D prefix sums compute rectangle sums in O(1) for image processing and gaming." },
    ],
  },
  "problem-patterns": {
    title: "What are Problem Patterns?",
    desc: "<strong>Problem patterns</strong> are reusable solution templates — recognizing when a problem is really about sliding windows, two pointers, DP, or graphs.",
    insight: "Great engineers don't solve problems from scratch. They recognize patterns: 'This is a two-pointer problem. This is topological sort. This is DP on intervals.'",
    cards: [
      { num: "01", title: "Pattern Recognition", desc: "Learn the 20 core patterns — most LeetCode problems are variations of them." },
      { num: "02", title: "Signal Words", desc: "'Contiguous subarray' = sliding window. 'Shortest path' = BFS/Dijkstra. 'Count ways' = DP." },
      { num: "03", title: "From Pattern to Code", desc: "Once you recognize the pattern, the implementation follows a known template." },
    ],
  },
  queue: {
    title: "What is a Queue?",
    desc: "A <strong>queue</strong> is a FIFO (First-In, First-Out) data structure. The first element added is the first one removed.",
    insight: "Queues model waiting lines, task scheduling, BFS traversal, and streaming data processing.",
    cards: [
      { num: "01", title: "FIFO", desc: "First item in is the first item out. Like a line at a store." },
      { num: "02", title: "Enqueue", desc: "Add an item to the back of the queue." },
      { num: "03", title: "Dequeue", desc: "Remove and return the front item." },
    ],
  },
  recursion: {
    title: "What is Recursion?",
    desc: "A <strong>recursive</strong> function is one that calls itself. Each call solves a smaller piece until reaching a base case.",
    insight: "Recursion is everywhere — trees, filesystems, fractals. Master it and you'll think differently about problems.",
    cards: [
      { num: "01", title: "Base Case", desc: "The simplest case that stops the recursion." },
      { num: "02", title: "Recursive Case", desc: "The function calls itself with a smaller input." },
      { num: "03", title: "Call Stack", desc: "Each call is pushed onto the stack. Too deep = stack overflow." },
    ],
  },
  "recursion-deep": {
    title: "What is Deep Recursion?",
    desc: "A <strong>deep recursion</strong> deep dive explores tail recursion, mutual recursion, backtracking trees, and converting between recursive and iterative solutions.",
    insight: "Every recursive solution has an iterative twin using an explicit stack. Knowing when to use each is a mark of engineering maturity.",
    cards: [
      { num: "01", title: "Tail Recursion", desc: "When the recursive call is the last action, compilers can optimize it into a loop." },
      { num: "02", title: "Mutual Recursion", desc: "Two or more functions call each other — useful for parsing state machines." },
      { num: "03", title: "Recursion → Iteration", desc: "Replace the call stack with an explicit stack data structure to avoid stack overflow." },
    ],
  },
  "red-black-tree": {
    title: "What is a Red-Black Tree?",
    desc: "A <strong>red-black tree</strong> is a self-balancing BST where each node has a color (red or black) and balancing rules keep the tree roughly balanced.",
    insight: "Red-black trees power TreeMap, TreeSet, and the Linux kernel's Completely Fair Scheduler. They're less strictly balanced than AVL but faster for inserts/deletes.",
    cards: [
      { num: "01", title: "Color Rules", desc: "Root is black. No two reds adjacent. Every path has the same number of black nodes." },
      { num: "02", title: "Rebalancing", desc: "After insert/delete, fix violations with color flips and rotations — at most 3 rotations per operation." },
      { num: "03", title: "AVL vs Red-Black", desc: "AVL is more strictly balanced (faster lookups). Red-Black has fewer rotations (faster inserts/deletes)." },
    ],
  },
  "segment-tree": {
    title: "What is a Segment Tree?",
    desc: "A <strong>segment tree</strong> is a binary tree that stores intervals or segments of an array, enabling range queries and point updates in O(log n).",
    insight: "Segment trees are Swiss Army knives for array problems — range sum, range min, range max, range GCD, all with the same O(log n) structure.",
    cards: [
      { num: "01", title: "Tree of Segments", desc: "Each node represents a range. The root covers the whole array. Leaves cover single elements." },
      { num: "02", title: "Range Query", desc: "Traverse the tree, combining nodes that fully overlap the query range." },
      { num: "03", title: "Lazy Propagation", desc: "Delay range updates by marking nodes as 'pending'. Push changes down only when needed." },
    ],
  },
  sets: {
    title: "What is a Set?",
    desc: "A <strong>set</strong> is an unordered collection of unique elements. No duplicates allowed.",
    insight: "Sets are built on hash tables. Membership tests are blindingly fast — O(1) average. Use sets when you care about uniqueness.",
    cards: [
      { num: "01", title: "Unique", desc: "Every element appears at most once. Duplicates are automatically removed." },
      { num: "02", title: "Unordered", desc: "Sets have no index. You cannot access elements by position." },
      { num: "03", title: "Hash-based", desc: "Sets use hash tables internally for O(1) add, remove, and lookup." },
    ],
  },
  "sets-deep": {
    title: "What Are Set Internals?",
    desc: "A <strong>set deep dive</strong> explores how Python sets work under the hood — hash tables, load factors, probing strategies, and memory trade-offs.",
    insight: "Python sets are essentially dicts with keys only — same O(1) average operations, same open-addressing scheme, but more memory-efficient than storing key-value pairs.",
    cards: [
      { num: "01", title: "Hash Table Backing", desc: "Sets use the same hash table mechanism as dicts, just without values." },
      { num: "02", title: "Membership Testing", desc: "Sized up to 50M items, a set membership check takes constant time — the hash gives you the location directly." },
      { num: "03", title: "Memory Optimization", desc: "Sets use ~⅓ less memory than dicts with True values. frozenset is hashable and usable as a dict key." },
    ],
  },
  "shortest-path": {
    title: "What is Shortest Path?",
    desc: "<strong>Shortest path</strong> algorithms find the minimum-cost route between two nodes in a weighted graph.",
    insight: "Dijkstra's is the king of shortest paths for non-negative weights. Bellman-Ford handles negative edges. Both are everywhere in routing and navigation.",
    cards: [
      { num: "01", title: "Dijkstra's", desc: "Uses a priority queue to explore the closest unvisited node. O((V+E) log V)." },
      { num: "02", title: "Bellman-Ford", desc: "Relaxes all edges V-1 times. Handles negative weights and detects negative cycles." },
      { num: "03", title: "Applications", desc: "GPS navigation, network routing (OSPF/IS-IS), social network 'shortest connection'." },
    ],
  },
  "sliding-window": {
    title: "What is Sliding Window?",
    desc: "A <strong>sliding window</strong> technique maintains a subset of data that 'slides' over the input, updating incrementally instead of recalculating from scratch.",
    insight: "Sliding window converts O(nk) brute force into O(n) by reusing computations — just add the new element and remove the old one.",
    cards: [
      { num: "01", title: "Fixed Window", desc: "The window has a fixed size k. Slide one step at a time, updating the result incrementally." },
      { num: "02", title: "Dynamic Window", desc: "The window grows and shrinks based on a condition — expand right, contract left." },
      { num: "03", title: "Common Uses", desc: "Maximum sum subarray, longest substring without repeats, average of all subarrays of size k." },
    ],
  },
  sorting: {
    title: "What is Sorting?",
    desc: "<strong>Sorting</strong> arranges data in a specific order (ascending/descending). It's the foundation of many algorithms.",
    insight: "Sorting is a gateway algorithm. Master it and you understand O(n²), O(n log n), divide & conquer, and recursion trade-offs.",
    cards: [
      { num: "01", title: "Comparison-based", desc: "Compare elements to determine order." },
      { num: "02", title: "O(n²) vs O(n log n)", desc: "Bubble sort vs merge/quick sort — massive difference at scale." },
      { num: "03", title: "Stable vs Unstable", desc: "Stable sort preserves the relative order of equal elements." },
    ],
  },
  "space-complexity": {
    title: "What is Space Complexity?",
    desc: "<strong>Space complexity</strong> measures how much memory an algorithm uses relative to the input size — including the input itself, auxiliary structures, and the call stack.",
    insight: "Time isn't the only resource. An O(1) space algorithm uses constant extra memory. An O(n) space algorithm might copy the input.",
    cards: [
      { num: "01", title: "Auxiliary Space", desc: "Memory the algorithm explicitly allocates beyond the input data." },
      { num: "02", title: "Stack Space", desc: "Recursive functions use O(depth) stack space. Deep recursion can overflow." },
      { num: "03", title: "Time-Space Tradeoff", desc: "You can often trade memory for speed — caching, memoization, and prefix sums all do this." },
    ],
  },
  "sparse-table": {
    title: "What is a Sparse Table?",
    desc: "A <strong>sparse table</strong> precomputes answers for every power-of-two-length range, enabling O(1) range queries after O(n log n) preprocessing.",
    insight: "Sparse tables are the fastest way to answer range minimum/maximum queries (RMQ) — but only for immutable arrays since updates aren't supported.",
    cards: [
      { num: "01", title: "Precomputed Ranges", desc: "Store results for intervals of length 1, 2, 4, 8, ... up to n." },
      { num: "02", title: "O(1) Query", desc: "Any range [l, r] can be covered by two overlapping power-of-two intervals." },
      { num: "03", title: "Immutable Only", desc: "Sparse tables cannot handle updates. Use a segment tree if the array changes." },
    ],
  },
  stack: {
    title: "What is a Stack?",
    desc: "A <strong>stack</strong> is a LIFO (Last-In, First-Out) data structure. The last element added is the first one removed.",
    insight: "Stacks power undo/redo, bracket matching, function calls (call stack), and backtracking algorithms.",
    cards: [
      { num: "01", title: "LIFO", desc: "Last item in is the first item out. Like a stack of plates." },
      { num: "02", title: "Push", desc: "Add an item to the top of the stack." },
      { num: "03", title: "Pop", desc: "Remove and return the top item." },
    ],
  },
  "string-matching": {
    title: "What is String Matching?",
    desc: "<strong>String matching</strong> algorithms find occurrences of a pattern within a larger text — from simple brute force to sophisticated linear-time methods.",
    insight: "KMP (Knuth-Morris-Pratt) runs in O(n+m) by preprocessing the pattern to avoid re-examining characters that already matched.",
    cards: [
      { num: "01", title: "Brute Force", desc: "Try the pattern at every position. O(nm) — simple but slow for large texts." },
      { num: "02", title: "KMP", desc: "Uses a prefix function to skip re-checking matched characters. O(n+m) guaranteed." },
      { num: "03", title: "Rabin-Karp", desc: "Uses rolling hash to compare pattern with substrings in O(n+m) average, O(nm) worst case." },
    ],
  },
  strings: {
    title: "What is a String?",
    desc: "A <strong>string</strong> is a sequence of characters — letters, numbers, symbols — wrapped in quotes.",
    insight: "Strings are how Python handles text. You can create them with single quotes <code>'hello'</code>, double quotes <code>\"hello\"</code>, or triple quotes for multi-line text.",
    cards: [
      { num: "01", title: "Sequence", desc: "A string is an ordered sequence of characters, like beads on a string." },
      { num: "02", title: "Immutable", desc: "You cannot change a string's characters. You must create a new one." },
      { num: "03", title: "Indexed", desc: "Each character has a position (index). First character is at index 0." },
    ],
  },
  "subsets-permutations": {
    title: "What are Subsets & Permutations?",
    desc: "<strong>Subsets and permutations</strong> are fundamental combinatorial patterns — subsets select elements without order, permutations arrange elements in every possible order.",
    insight: "Subsets = each element is 'take or skip' (2ⁿ combinations). Permutations = reorder everything (n! arrangements). Both are bread and butter for backtracking.",
    cards: [
      { num: "01", title: "Subsets", desc: "For each element, decide: include it or not. Generates power sets — 2ⁿ possibilities." },
      { num: "02", title: "Permutations", desc: "Fix each element at position 0, then recursively permute the rest. n! possibilities." },
      { num: "03", title: "Combinations", desc: "Choose k elements from n without regard to order. C(n,k) = n!/(k!(n-k)!)." },
    ],
  },
  "suffix-array": {
    title: "What is a Suffix Array?",
    desc: "A <strong>suffix array</strong> lists all suffixes of a string in sorted order. Together with an LCP array, it's a powerful tool for string processing.",
    insight: "Suffix arrays solve complex string problems — longest repeated substring, pattern matching, and substring queries — all in O(n log n) construction and O(m log n) search.",
    cards: [
      { num: "01", title: "Sorted Suffixes", desc: "Take every suffix of a string and sort them alphabetically. Store the starting indices." },
      { num: "02", title: "LCP Array", desc: "The Longest Common Prefix array stores the shared prefix length between adjacent suffixes in the sorted order." },
      { num: "03", title: "Pattern Matching", desc: "Binary search the suffix array to find if a pattern exists — O(m log n) time." },
    ],
  },
  "topological-sort": {
    title: "What is Topological Sort?",
    desc: "<strong>Topological sort</strong> orders the vertices of a DAG so that every edge goes from earlier to later — no vertex appears before its dependencies.",
    insight: "Topological sort is how build systems (Make, Bazel) and package managers know what to compile or install first.",
    cards: [
      { num: "01", title: "DAG Only", desc: "Topological sort only works on Directed Acyclic Graphs. A cycle means no valid ordering." },
      { num: "02", title: "Kahn's Algorithm", desc: "Repeatedly remove nodes with zero in-degree. BFS-based. O(V+E)." },
      { num: "03", title: "DFS Approach", desc: "DFS with post-order: add a node to the result after visiting all its neighbors." },
    ],
  },
  trees: {
    title: "What is a Tree?",
    desc: "A <strong>tree</strong> is a hierarchical data structure with a root node and child nodes forming branches.",
    insight: "Trees power file systems, HTML DOM, JSON, organizational charts, and decision algorithms.",
    cards: [
      { num: "01", title: "Root", desc: "The topmost node. Every tree has exactly one root." },
      { num: "02", title: "Parent & Child", desc: "Nodes connect parent-to-child. A child has one parent." },
      { num: "03", title: "Leaf", desc: "A node with no children — the end of a branch." },
    ],
  },
  trie: {
    title: "What is a Trie?",
    desc: "A <strong>trie</strong> (prefix tree) is a tree where each node represents a character prefix of stored strings.",
    insight: "Tries excel at prefix matching — autocomplete, spell check, IP routing. Search is O(L) where L is the word length.",
    cards: [
      { num: "01", title: "Prefix-based", desc: "Each node is a character. A path from root to end spells a word." },
      { num: "02", title: "Search by prefix", desc: "Find all words starting with a given prefix in O(L) time." },
      { num: "03", title: "Space-heavy", desc: "Tries use memory for every character node — good for small alphabets." },
    ],
  },
  tuples: {
    title: "What is a Tuple?",
    desc: "A <strong>tuple</strong> is an ordered, immutable collection of items. Once created, it cannot change.",
    insight: "Tuples are like lists that are frozen. Use them for data that should stay constant — coordinates, RGB values, records.",
    cards: [
      { num: "01", title: "Immutable", desc: "You cannot add, remove, or change items after creation." },
      { num: "02", title: "Ordered", desc: "Items maintain the order you define them in." },
      { num: "03", title: "Hashable", desc: "Tuples can be used as dictionary keys (if all items are hashable)." },
    ],
  },
  "two-pointers": {
    title: "What is Two Pointers?",
    desc: "The <strong>two pointers</strong> technique uses two indices that move through the data simultaneously — often from both ends or at different speeds.",
    insight: "Two pointers turn O(n²) nested loops into O(n) single passes. Classic uses: pair sum in sorted array, palindrome checking, merging sorted arrays.",
    cards: [
      { num: "01", title: "Opposite Ends", desc: "One pointer starts at the beginning, one at the end. Move toward each other." },
      { num: "02", title: "Same Direction", desc: "Both pointers move forward at different speeds — the 'fast and slow' pattern." },
      { num: "03", title: "Sliding Window Relation", desc: "Two pointers often maintain a sliding window. Expand the right pointer, contract the left." },
    ],
  },
  "union-find": {
    title: "What is Union-Find?",
    desc: "A <strong>union-find</strong> (Disjoint Set Union) tracks which elements belong to which group and can merge groups efficiently.",
    insight: "Union-Find with path compression and union by rank gives nearly O(1) operations — it's the algorithm behind Kruskal's MST and social network friend groups.",
    cards: [
      { num: "01", title: "Find", desc: "Determine which group an element belongs to. Path compression flattens the tree." },
      { num: "02", title: "Union", desc: "Merge two groups into one. Union by rank keeps trees shallow." },
      { num: "03", title: "Near-Constant", desc: "With both optimizations, operations are O(α(n)) — inverse Ackermann, essentially constant." },
    ],
  },
  variables: {
    title: "What is a Variable?",
    desc: "A <strong>variable</strong> is a name that refers to a value stored in memory.",
    insight: "When you write <code>age = 25</code>, Python remembers the number 25 and calls it <strong>age</strong>.",
    cards: [
      { num: "01", title: "A Name", desc: "Every variable has a unique name you choose." },
      { num: "02", title: "A Reference", desc: "The name points to a location in memory." },
      { num: "03", title: "A Value", desc: "The actual data — a number, text, or object." },
    ],
  },
}

export function IntroSection({ lesson }: Props) {
  const c = content[lesson.id] || content.variables

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-primary)" }}>
          Section 1 of 8
        </p>
        <h1 className="text-3xl font-semibold tracking-tight" style={{ letterSpacing: "-0.96px" }}>
          {c.title}
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--el-body)", maxWidth: "600px" }}
          dangerouslySetInnerHTML={{ __html: c.desc }} />
      </div>

      <div
        className="rounded-md p-6 flex items-start gap-5"
        style={{ backgroundColor: "var(--el-canvas-soft)", border: "1px solid var(--el-hairline)" }}
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-md flex items-center justify-center text-xl"
          style={{ backgroundColor: "var(--el-primary)", color: "#fff" }}>
          💡
        </div>
        <div>
          <p className="font-semibold mb-1">In one sentence</p>
          <p className="text-sm" style={{ color: "var(--el-body)" }}
            dangerouslySetInnerHTML={{ __html: c.insight }} />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {c.cards.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-md p-5"
            style={{ border: "1px solid var(--el-hairline)", backgroundColor: "var(--el-surface-card)" }}
          >
            <p className="text-xs font-mono mb-2" style={{ color: "var(--el-primary)" }}>{item.num}</p>
            <p className="font-semibold mb-1">{item.title}</p>
            <p className="text-sm" style={{ color: "var(--el-body)" }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
