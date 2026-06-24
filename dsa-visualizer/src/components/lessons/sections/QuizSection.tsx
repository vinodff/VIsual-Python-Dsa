"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Lesson } from "@/types"

type Props = { lesson: Lesson }

const questionsMap: Record<string, { q: string; opts: string[]; correct: number; explain: string }[]> = {
  "a-star": [
    { q: "What makes A* different from Dijkstra?", opts: ["A* is always faster", "A* uses a heuristic to guide search", "A* only works on grids", "A* doesn't need a graph"], correct: 1, explain: "A* uses f(n) = g(n) + h(n), where h(n) is a heuristic estimate to the goal, making it more directed than Dijkstra." },
    { q: "What property must a heuristic have for A* to be optimal?", opts: ["Monotonic", "Admissible", "Consistent", "Both admissible and consistent"], correct: 3, explain: "A* is optimal if the heuristic is admissible (never overestimates) and consistent (satisfies triangle inequality)." },
    { q: "What is the Manhattan distance?", opts: ["Straight-line distance", "Sum of absolute coordinate differences", "Number of diagonal steps", "Euclidean distance squared"], correct: 1, explain: "Manhattan distance = |x1-x2| + |y1-y2|, suitable for grid-based movement with 4-directional moves." },
    { q: "When does A* degenerate to Dijkstra?", opts: ["Always", "When the heuristic is 0", "When the graph is large", "When using Euclidean distance"], correct: 1, explain: "If h(n) = 0 for all nodes, A* explores exactly like Dijkstra's algorithm." },
  ],
  "advanced-graphs": [
    { q: "What is a strongly connected component?", opts: ["A subgraph with no cycles", "A maximal subgraph where every vertex is reachable from every other", "A tree inside a graph", "A component with only one vertex"], correct: 1, explain: "An SCC is a maximal subgraph where there is a path between every pair of vertices in both directions." },
    { q: "Which algorithm finds SCCs?", opts: ["Dijkstra", "Kosaraju's algorithm", "Prim's algorithm", "Kruskal's algorithm"], correct: 1, explain: "Kosaraju's algorithm uses two DFS passes — one on the original graph, one on the reversed graph — to find SCCs." },
    { q: "What is an articulation point?", opts: ["A node that makes the graph disconnected when removed", "A node with the highest degree", "A node with no edges", "A node in a cycle"], correct: 0, explain: "Removing an articulation point (cut vertex) increases the number of connected components." },
    { q: "What is a bridge in a graph?", opts: ["An edge that connects two components", "An edge whose removal disconnects the graph", "The shortest edge", "An edge in a cycle"], correct: 1, explain: "A bridge (cut edge) is an edge whose removal increases the number of connected components." },
  ],
  "advanced-trees": [
    { q: "What makes a B-tree different from a BST?", opts: ["B-trees can have multiple keys per node", "B-trees are always binary", "B-trees are faster for small data", "B-trees don't support search"], correct: 0, explain: "B-tree nodes can hold multiple keys and have more than 2 children, reducing tree height for disk-based storage." },
    { q: "What is a Treap?", opts: ["A tree + heap hybrid using random priorities", "A balanced BST", "A type of heap", "A trie variant"], correct: 0, explain: "A treap assigns random priorities to nodes and maintains both BST key order and heap priority order." },
    { q: "What is a Splay tree's key operation?", opts: ["Rotation", "Splaying — moving a node to root via rotations", "Rebalancing globally", "Recoloring"], correct: 1, explain: "Splay trees bring accessed nodes to the root through splay operations, giving amortized O(log n)." },
    { q: "What is a Cartesian tree built from?", opts: ["A sorted array", "An array based on index (inorder) and value (heap)", "A hash table", "A linked list"], correct: 1, explain: "A Cartesian tree uses array indices as inorder keys and values as heap priorities — root is the min/max value." },
  ],
  "amortized-analysis": [
    { q: "What does amortized analysis measure?", opts: ["Worst-case of a single operation", "Average cost per operation over a sequence", "Best-case performance", "Memory usage"], correct: 1, explain: "Amortized analysis averages the cost of expensive operations across a sequence, giving a realistic per-operation bound." },
    { q: "What is the accounting method?", opts: ["Tracking actual costs in a ledger", "Assigning extra 'credit' to cheap ops to pay for expensive ones", "Counting operations", "Measuring time with a stopwatch"], correct: 1, explain: "The accounting method charges more for cheap operations, storing 'credit' that later pays for expensive operations." },
    { q: "What is the amortized cost of appending to a dynamic array?", opts: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correct: 2, explain: "Although occasional resizes cost O(n), averaging over n appends gives O(1) amortized per append." },
    { q: "Which data structure has O(1) amortized per operation?", opts: ["Binary search tree", "Splay tree", "Linked list", "Array"], correct: 1, explain: "Splay trees provide O(log n) amortized per operation. The accounting method proves the amortized bound." },
  ],
  arrays: [
    { q: "What makes an array different from a list?", opts: ["Arrays are slower", "Arrays have fixed size and same type", "Arrays are mutable", "They're the same thing"], correct: 1, explain: "Arrays have a fixed capacity and store one type. Python lists are dynamic and mixed." },
    { q: "How is an array element accessed?", opts: ["By searching", "By index (offset from base)", "By key", "By popping"], correct: 1, explain: "Address = base_address + index × element_size. This is O(1)." },
    { q: "Why is inserting at the beginning slow?", opts: ["It's not slow", "All elements must shift right", "The array must be copied", "It rebuilds the index"], correct: 1, explain: "Inserting at index 0 requires shifting every element one position to the right — O(n)." },
    { q: "In Python, which module provides arrays?", opts: ["numpy", "array", "list", "collections"], correct: 1, explain: "The 'array' module provides type-coded arrays. numpy offers more advanced arrays." },
  ],
  avl: [
    { q: "What is an AVL tree's balance factor range?", opts: ["[0, 1]", "[-1, 1]", "[-2, 2]", "[1, 2]"], correct: 1, explain: "Balance factor = height(left) - height(right). Must be -1, 0, or 1." },
    { q: "What operation fixes an unbalanced AVL tree?", opts: ["Deletion", "Rotation", "Duplication", "Sorting"], correct: 1, explain: "Rotations (left or right) rewire pointers to restore balance." },
    { q: "Why use AVL over a regular BST?", opts: ["Guaranteed O(log n) operations", "Simpler code", "No rotations needed", "Faster insertion"], correct: 0, explain: "AVL guarantees O(log n) by keeping the tree balanced through rotations." },
    { q: "How many rotations are needed after an AVL insert?", opts: ["O(n)", "At most 2", "At most 1", "Always 0"], correct: 1, explain: "After inserting, AVL walks up and performs at most 2 rotations to rebalance." },
  ],
  backtracking: [
    { q: "What is backtracking?", opts: ["Optimization technique", "Systematic trial-and-error with undo", "Divide and conquer", "Dynamic programming"], correct: 1, explain: "Backtracking explores candidates incrementally and abandons (backtracks from) dead ends." },
    { q: "What is pruning in backtracking?", opts: ["Cutting branches from trees", "Abandoning partial solutions that can't work", "Speeding up the search", "Sorting the input"], correct: 1, explain: "Pruning means stopping early when a partial solution violates constraints and can never become valid." },
    { q: "What is the time complexity of N-Queens?", opts: ["O(2ⁿ)", "O(n!)", "O(n log n)", "O(n²)"], correct: 1, explain: "N-Queens places n queens on an n×n board. The worst case explores n! configurations." },
    { q: "How is backtracking different from brute force?", opts: ["It's the same", "Backtracking prunes invalid paths early", "Backtracking is always slower", "Brute force uses less memory"], correct: 1, explain: "Backtracking = brute force + pruning. It abandons paths that can't lead to a solution, unlike blind brute force." },
  ],
  bfs: [
    { q: "What data structure does BFS use?", opts: ["Stack", "Queue", "Heap", "Tree"], correct: 1, explain: "BFS uses a queue (FIFO) — the first node discovered is the first one explored." },
    { q: "What does BFS guarantee that DFS doesn't?", opts: ["Faster execution", "Shortest path in unweighted graph", "Less memory usage", "Cycle detection"], correct: 1, explain: "BFS guarantees the shortest path (fewest edges) in unweighted graphs." },
    { q: "What is the space complexity of BFS?", opts: ["O(1)", "O(log n)", "O(V)", "O(V+E)"], correct: 2, explain: "BFS's queue can hold up to O(V) nodes at the widest level." },
    { q: "In BFS, what constitutes a 'level'?", opts: ["A depth level", "All nodes at the same distance from start", "A recursive call", "A connected component"], correct: 1, explain: "A BFS level is all nodes at the same distance (edge count) from the starting node." },
  ],
  "big-o": [
    { q: "What does Big-O notation describe?", opts: ["Exact runtime in seconds", "Upper bound of growth rate", "Average-case performance", "Memory used"], correct: 1, explain: "Big-O gives the asymptotic upper bound — how runtime/memory grows as input size approaches infinity." },
    { q: "What is the Big-O of accessing an array element by index?", opts: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correct: 2, explain: "Array indexing is direct memory offset calculation — constant time regardless of array size." },
    { q: "Which grows faster: O(n²) or O(2ⁿ)?", opts: ["O(n²)", "O(2ⁿ)", "They're the same", "Depends on n"], correct: 1, explain: "Exponential O(2ⁿ) grows much faster than polynomial O(n²). For n=10: 100 vs 1024. For n=20: 400 vs 1M." },
    { q: "What does O(log n) imply about the algorithm?", opts: ["It processes all elements", "It eliminates half the data each step", "It squares the input", "It uses recursion"], correct: 1, explain: "O(log n) algorithms (binary search, balanced BST) cut the problem size by a constant factor each step." },
  ],
  "binary-search": [
    { q: "What must be true for binary search to work?", opts: ["Data must be sorted", "Data must be small", "Data must be unique", "Data must be numeric"], correct: 0, explain: "Binary search relies on the data being sorted to eliminate half the search space each time." },
    { q: "What is the time complexity of binary search?", opts: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 1, explain: "Binary search halves the search space each step → O(log n)." },
    { q: "How many steps to search 1 million items with binary search?", opts: ["~20", "~100", "~1000", "~1M"], correct: 0, explain: "log₂(1,000,000) ≈ 20. Linear search would take 1M steps." },
    { q: "What happens if data is NOT sorted?", opts: ["Binary search still works", "Binary search may return wrong results", "It returns 0", "It raises an error"], correct: 1, explain: "Binary search assumes sorted order. If data is unsorted, it will likely return incorrect results." },
  ],
  "bit-manipulation": [
    { q: "What does x & (x-1) do?", opts: ["Adds 1 to x", "Clears the lowest set bit of x", "Flips all bits", "Checks if x is odd"], correct: 1, explain: "x & (x-1) clears the rightmost 1-bit. Used to count set bits or check if x is a power of two." },
    { q: "How do you check if a number is a power of two?", opts: ["x % 2 == 0", "x & (x-1) == 0", "x | 1 == x", "x ^ x == 0"], correct: 1, explain: "Powers of two have exactly one bit set. x & (x-1) == 0 for powers of two (except x=0)." },
    { q: "What does the XOR operator (^) do?", opts: ["Sets bits where both are 1", "Sets bits where either is 1", "Sets bits where exactly one is 1", "Flips all bits"], correct: 2, explain: "XOR sets a bit to 1 only when the two bits differ. a ^ a = 0, a ^ 0 = a." },
    { q: "What is the result of x << 1?", opts: ["Divides x by 2", "Multiplies x by 2", "Reverses the bits of x", "Clears the MSB"], correct: 1, explain: "Left shift by 1 multiplies by 2. Equivalent to x * 2, but faster at the hardware level." },
  ],
  bst: [
    { q: "What property defines a BST?", opts: ["Left is larger, right is smaller", "Left is smaller, right is larger", "All nodes are equal", "Tree is balanced"], correct: 1, explain: "For every node, all left descendants are smaller, all right descendants are larger." },
    { q: "What is the best-case time for BST search?", opts: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 1, explain: "In a balanced BST, search halves the search space each step — O(log n)." },
    { q: "What happens if you insert sorted data into a BST?", opts: ["Tree stays balanced", "Tree becomes a linked list", "Tree rejects duplicates", "It doubles in size"], correct: 1, explain: "Inserting 1,2,3,4,5 creates a right-skewed tree — effectively a linked list, O(n) search." },
    { q: "Which traversal of a BST gives sorted order?", opts: ["Pre-order", "In-order", "Post-order", "Level-order"], correct: 1, explain: "In-order (left→root→right) visits nodes in ascending sorted order." },
  ],
  classes: [
    { q: "What does __init__ do?", opts: ["Creates the class", "Initializes new instances", "Destroys objects", "Prints debug info"], correct: 1, explain: "__init__ is the constructor. It runs when you create a new instance to set up attributes." },
    { q: "What does 'self' refer to in a method?", opts: ["The class", "The current instance", "The parent class", "A global variable"], correct: 1, explain: "self is the instance that the method was called on. It's always the first parameter." },
    { q: "What is inheritance?", opts: ["Copying code", "A class getting attributes/methods from another class", "Deleting a class", "Creating an instance"], correct: 1, explain: "Inheritance lets a child class reuse and extend the parent's behavior." },
    { q: "How do you check if an object is an instance of a class?", opts: ["obj.class", "isinstance(obj, Class)", "instanceof(obj, Class)", "type(obj) == Class"], correct: 1, explain: "isinstance(obj, Class) returns True if obj is an instance of Class or a subclass." },
  ],
  "context-managers": [
    { q: "What keyword is used with context managers?", opts: ["try", "with", "using", "open"], correct: 1, explain: "The 'with' statement manages a context manager, ensuring setup/cleanup happens automatically." },
    { q: "Which methods must a context manager implement?", opts: ["__init__ and __del__", "__enter__ and __exit__", "__open__ and __close__", "__start__ and __stop__"], correct: 1, explain: "__enter__ runs at the start of 'with', __exit__ runs when leaving (even on exceptions)." },
    { q: "What does contextlib.contextmanager do?", opts: ["Creates a class", "Turns a generator into a context manager via @contextmanager decorator", "Manages threads", "Handles files"], correct: 1, explain: "@contextmanager decorates a generator function that yields once — the yield separates __enter__ from __exit__." },
    { q: "When is __exit__ called?", opts: ["Only on success", "Only on exception", "Always when leaving the 'with' block", "Only when closed manually"], correct: 2, explain: "__exit__ is guaranteed to run when leaving the 'with' block, whether normally, by exception, or by return/break." },
  ],
  "data-types": [
    { q: "Type of x = 3.14?", opts: ["int", "float", "str", "decimal"], correct: 1, explain: "Any number with a decimal point is a float." },
    { q: "Type of y = '42'?", opts: ["int", "str", "float", "bool"], correct: 1, explain: "Quotes make it a string, even if it looks like a number." },
    { q: "What does type(True) return?", opts: ["<class 'int'>", "<class 'bool'>", "<class 'str'>", "<class 'NoneType'>"], correct: 1, explain: "True/False are bool type." },
    { q: "Which type is dynamically sized?", opts: ["int", "float", "str", "bool"], correct: 2, explain: "str can hold any length of text." },
  ],
  deque: [
    { q: "What makes deque better than a list for queues?", opts: ["It's faster at both ends", "It uses less memory", "It's immutable", "It's sorted automatically"], correct: 0, explain: "Deque offers O(1) operations on both ends. List.pop(0) is O(n)." },
    { q: "How do you add an element to the front of a deque?", opts: ["push()", "appendleft()", "prepend()", "insert(0)"], correct: 1, explain: "appendleft() adds an element to the left (front) in O(1)." },
    { q: "What internal structure does deque use?", opts: ["Linked list", "Circular buffer", "Hash table", "Binary tree"], correct: 1, explain: "Deque uses a circular buffer (fixed-size blocks) for efficient end operations." },
    { q: "What does rotate(2) do?", opts: ["Removes 2 elements", "Shifts elements right by 2", "Reverses the deque", "Duplicates elements"], correct: 1, explain: "rotate(k) shifts elements to the right by k positions. Items wrap around." },
  ],
  decorators: [
    { q: "What does @decorator do?", opts: ["Imports a module", "Applies a function to another function", "Creates a class", "Declares a variable"], correct: 1, explain: "@decorator is syntactic sugar for func = decorator(func)." },
    { q: "What does a decorator typically return?", opts: ["A string", "A number", "A wrapper function", "None"], correct: 2, explain: "A decorator returns a wrapper function that replaces the original." },
    { q: "Can multiple decorators be stacked?", opts: ["No", "Yes, one per line", "Only two max", "Only with classes"], correct: 1, explain: "@a @b @c stacks decorators from bottom to top. Each wraps the previous." },
    { q: "What does functools.wraps do?", opts: ["Wraps a gift", "Preserves original function metadata", "Speeds up the function", "Creates a class"], correct: 1, explain: "functools.wraps copies the original function's name, docstring, etc. to the wrapper." },
  ],
  dfs: [
    { q: "What data structure does DFS use?", opts: ["Queue", "Stack", "Heap", "Hash table"], correct: 1, explain: "DFS uses a stack (LIFO) — recursion uses the call stack, iterative uses an explicit stack." },
    { q: "What is DFS best suited for?", opts: ["Shortest path", "Topological sorting / cycle detection", "Finding connected components", "All of the above"], correct: 3, explain: "DFS is versatile: topological sort, cycle detection, connected components, maze solving." },
    { q: "What is the time complexity of DFS?", opts: ["O(V)", "O(E)", "O(V+E)", "O(V*E)"], correct: 2, explain: "DFS visits each vertex once and each edge once → O(V+E)." },
    { q: "How does DFS differ from BFS?", opts: ["DFS is faster", "DFS goes deep first, BFS goes wide", "DFS uses less memory always", "They're the same"], correct: 1, explain: "DFS explores depth-first (stack), BFS explores level-by-level (queue)." },
  ],
  "dicts-deep": [
    { q: "What determines if an object can be a dictionary key?", opts: ["It must be immutable", "It must implement __hash__ and __eq__", "It must be a string", "It must be a number"], correct: 1, explain: "Dictionary keys require __hash__() for hashing and __eq__() for equality checking. Immutability is not strictly required." },
    { q: "What happens when two keys hash to the same bucket?", opts: ["The first key is overwritten", "A collision — keys are compared with __eq__", "An error is raised", "The table resizes"], correct: 1, explain: "Python uses open addressing. If hashes collide, __eq__ distinguishes keys. Equal keys cause value replacement." },
    { q: "Does Python dict preserve insertion order?", opts: ["No", "Yes, since Python 3.7", "Only in CPython", "Only for string keys"], correct: 1, explain: "Python 3.7+ guarantees dicts maintain insertion order. This is a language spec, not just an implementation detail." },
    { q: "What is a dict view object?", opts: ["A copy of the dict", "A dynamic view returned by .keys(), .values(), .items()", "A read-only dict", "A serialized dict"], correct: 1, explain: "Dict views reflect changes to the underlying dict. They support set operations on keys/items." },
  ],
  dictionaries: [
    { q: "What happens if you access a missing key with []?", opts: ["Returns None", "Raises KeyError", "Returns 0", "Creates the key"], correct: 1, explain: "dict[key] raises KeyError if the key doesn't exist. Use .get() for safe access." },
    { q: "Which types can be dictionary keys?", opts: ["Any type", "Only strings", "Only immutable types", "Only numbers"], correct: 2, explain: "Keys must be hashable. Immutable types like str, int, tuple qualify. Lists and dicts do not." },
    { q: "What does .get(key, default) return if key is missing?", opts: ["None", "KeyError", "default", "False"], correct: 2, explain: ".get() returns the default value if the key is not found, avoiding KeyError." },
    { q: "How do you iterate over both keys and values?", opts: ["for k in d", "for k, v in d.items()", "for v in d.values()", "for k in d.keys()"], correct: 1, explain: "d.items() returns key-value pairs. You can unpack them with for k, v in d.items()." },
  ],
  "dynamic-arrays": [
    { q: "What happens when a dynamic array is full and you append?", opts: ["Error", "Element is discarded", "Array doubles capacity and copies", "Array shrinks"], correct: 2, explain: "Python allocates ~2x capacity, copies all elements, then appends the new one." },
    { q: "What is amortized O(1)?", opts: ["Every operation is O(1)", "Most ops O(1), rare O(n), averaged to O(1)", "The average is O(n)", "Only the first op is O(1)"], correct: 1, explain: "Amortized O(1) means the costly resizes are spread across many O(1) appends, averaging to O(1)." },
    { q: "By what factor does Python typically grow capacity?", opts: ["1.5x", "2x", "3x", "10x"], correct: 1, explain: "Python lists grow by ~1.125x (actually varies) — but conceptually we teach 2x doubling." },
    { q: "What is the worst-case time for a single append?", opts: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 2, explain: "When a resize happens, all n elements must be copied => O(n). But this is rare." },
  ],
  "dynamic-programming": [
    { q: "What is the key idea of DP?", opts: ["Divide and conquer", "Store subproblem results to avoid recomputation", "Always use recursion", "Use greedy choices"], correct: 1, explain: "DP stores results of overlapping subproblems, trading memory for speed." },
    { q: "What is the difference between memoization and tabulation?", opts: ["They're the same", "Memoization is top-down (recursive), tabulation is bottom-up (iterative)", "Memoization is faster", "Tabulation uses more memory"], correct: 1, explain: "Memoization = recursive + cache. Tabulation = iterative table building from base cases." },
    { q: "What problem does DP solve that recursion alone cannot?", opts: ["Sorting", "Overlapping subproblems cause exponential recomputation", "Graph traversal", "String matching"], correct: 1, explain: "Naive recursion recomputes the same subproblems. DP caches them." },
    { q: "What is the time complexity of Fibonacci with DP?", opts: ["O(2ⁿ)", "O(n log n)", "O(n)", "O(n²)"], correct: 2, explain: "DP computes fib(0) through fib(n) once each → O(n). Naive recursion is O(2ⁿ)." },
  ],
  "fenwick-tree": [
    { q: "What problem does a Fenwick tree solve?", opts: ["Shortest path", "Range sum queries with point updates", "String matching", "Graph coloring"], correct: 1, explain: "A Fenwick tree (Binary Indexed Tree) efficiently computes prefix sums and supports point updates in O(log n)." },
    { q: "What is the key operation in a Fenwick tree?", opts: ["lsb (least significant bit)", "msb (most significant bit)", "Binary search", "Rotations"], correct: 0, explain: "Fenwick trees use the least significant bit (lsb = x & -x) to navigate the tree structure." },
    { q: "How does a Fenwick tree differ from a segment tree?", opts: ["Fenwick is simpler and uses less memory", "Fenwick supports range updates", "Fenwick is faster for range queries", "They are identical"], correct: 0, explain: "Fenwick trees are simpler, use O(n) memory (vs segment tree's O(4n)), but only support prefix operations natively." },
    { q: "What is the time complexity of a Fenwick tree query and update?", opts: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explain: "Both query (prefix sum) and update (add value at index) are O(log n) using lsb traversal." },
  ],
  functions: [
    { q: "What keyword defines a function in Python?", opts: ["func", "define", "def", "function"], correct: 2, explain: "Functions are defined with 'def', followed by the name and parentheses." },
    { q: "What happens if a function has no return statement?", opts: ["Error", "Returns None", "Returns 0", "Returns False"], correct: 1, explain: "Functions without return implicitly return None." },
    { q: "Can a function return multiple values?", opts: ["No", "Yes, as a tuple", "Yes, as a list", "Only with yield"], correct: 1, explain: "return a, b returns a tuple (a, b) which can be unpacked." },
    { q: "What is a parameter's default value?", opts: ["Required argument", "Optional argument with fallback", "A constant", "A global variable"], correct: 1, explain: "Default parameters let you call a function without providing that argument." },
  ],
  generators: [
    { q: "What keyword makes a function a generator?", opts: ["return", "yield", "await", "generator"], correct: 1, explain: "Any function with 'yield' is a generator. It returns a generator object when called." },
    { q: "What happens when a generator's yield is reached?", opts: ["Function ends", "Value is returned and function pauses", "Function restarts", "Generator is deleted"], correct: 1, explain: "yield returns a value AND pauses execution. The function resumes on the next next() call." },
    { q: "What happens when a generator has no more yields?", opts: ["Returns None", "Raises StopIteration", "Restarts from beginning", "Returns 0"], correct: 1, explain: "When the function returns (implicitly or explicitly), the generator raises StopIteration." },
    { q: "What is a generator expression?", opts: ["[x for x in range(5)]", "(x for x in range(5))", "{x for x in range(5)}", "{x:x for x in range(5)}"], correct: 1, explain: "Generator expressions use parentheses. They're lazy — unlike list comprehensions which build the whole list." },
  ],
  graph: [
    { q: "What is a graph?", opts: ["A tree with cycles", "Vertices connected by edges", "A sorted list", "A hash function"], correct: 1, explain: "A graph is a set of vertices connected by edges — the most general data structure." },
    { q: "What is the difference between DFS and BFS?", opts: ["DFS uses stack, BFS uses queue", "DFS is faster", "BFS uses less memory", "They're the same"], correct: 0, explain: "DFS uses a stack (LIFO) to go deep; BFS uses a queue (FIFO) to go wide (level by level)." },
    { q: "What is an adjacency list?", opts: ["A sorted list of edges", "A dict mapping each vertex to its neighbors", "A matrix of vertices", "A linked list of nodes"], correct: 1, explain: "An adjacency list stores each vertex and a list of its adjacent (neighbor) vertices." },
    { q: "What is the time complexity of BFS/DFS?", opts: ["O(V)", "O(E)", "O(V+E)", "O(V*E)"], correct: 2, explain: "BFS and DFS visit each vertex once and each edge once — O(V+E)." },
  ],
  greedy: [
    { q: "What defines a greedy algorithm?", opts: ["Always chooses the optimal global solution", "Makes the best local choice at each step", "Explores all possibilities", "Uses divide and conquer"], correct: 1, explain: "Greedy algorithms make the best immediate choice, hoping it leads to the global optimum." },
    { q: "When does greedy fail?", opts: ["Always works", "When local optimum ≠ global optimum", "With large inputs", "With small inputs"], correct: 1, explain: "Greedy fails when local optimum choices don't add up to the global best solution." },
    { q: "What problem does Dijkstra's algorithm solve?", opts: ["Sorting", "Shortest path", "Cycle detection", "String matching"], correct: 1, explain: "Dijkstra's algorithm finds the shortest path from a source node to all others using a greedy approach." },
    { q: "Is greedy coin change always optimal?", opts: ["Yes, for all coin systems", "No, some systems need DP", "Only for US coins", "Only for small amounts"], correct: 1, explain: "Greedy coin change is optimal for canonical coin systems (like US) but fails for others like [1,3,4]." },
  ],
  "hash-table": [
    { q: "What is a hash function?", opts: ["A sorting algorithm", "Maps a key to an array index", "A encryption method", "A compression algorithm"], correct: 1, explain: "A hash function maps arbitrary keys to integer indices within the table's range." },
    { q: "What is a collision?", opts: ["Two tables merging", "Two keys hashing to the same index", "A deleted entry", "A full table"], correct: 1, explain: "Collisions occur when two different keys produce the same hash value." },
    { q: "What is the load factor?", opts: ["Number of keys / table size", "Table size / number of keys", "Hash speed", "Collision count"], correct: 0, explain: "Load factor = entries / buckets. When too high, the table resizes to reduce collisions." },
    { q: "What is chaining?", opts: ["Linking tables together", "Storing multiple items in the same bucket via linked list", "Deleting buckets", "Sorting the table"], correct: 1, explain: "Chaining stores colliding entries in a linked list at the same bucket index." },
  ],
  heap: [
    { q: "What is the time complexity of heap pop?", opts: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1, explain: "Pop removes the root (O(1)) then sifts down the replacement (O(log n))." },
    { q: "Where is the smallest element in a min-heap?", opts: ["At a leaf", "At the root (index 0)", "At the last index", "In the middle"], correct: 1, explain: "In a min-heap, the smallest element is always at the root (index 0)." },
    { q: "How are heaps typically stored?", opts: ["As a linked list", "As an array", "As a hash table", "As a graph"], correct: 1, explain: "Heaps are stored as arrays. Node at index i has children at 2i+1 and 2i+2." },
    { q: "Which Python module implements heaps?", opts: ["math", "heapq", "queue", "collections"], correct: 1, explain: "The heapq module provides min-heap operations: heappush, heappop, heapify." },
  ],
  iterators: [
    { q: "What method must an iterator implement?", opts: ["__next__", "__iter__ and __next__", "__getitem__", "__call__"], correct: 1, explain: "An iterator must implement __iter__ (return self) and __next__ (return next item or raise StopIteration)." },
    { q: "What is the difference between an iterable and an iterator?", opts: ["They are the same", "Iterable has __iter__, iterator has __iter__ and __next__", "Iterator is a subtype of iterable", "Iterable cannot be used in for loops"], correct: 1, explain: "Iterables return an iterator from __iter__. Iterators are also iterables (return self from __iter__) and support __next__." },
    { q: "What does the built-in iter() do?", opts: ["Creates a new list", "Returns an iterator for an iterable", "Reverses a sequence", "Sorts a collection"], correct: 1, explain: "iter(obj) calls obj.__iter__() to get an iterator. next(it) calls it.__next__() to advance it." },
    { q: "What happens when a for loop exhausts an iterator?", opts: ["The loop crashes", "StopIteration is caught and the loop ends", "The iterator resets", "None is yielded"], correct: 1, explain: "The for loop internally catches StopIteration and exits cleanly. Iterators are single-use." },
  ],
  "linear-search": [
    { q: "What is the time complexity of linear search?", opts: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 2, explain: "Linear search scans each element one by one — worst case visits all n elements." },
    { q: "When would you use linear search over binary search?", opts: ["When data is sorted", "When data is unsorted or small", "When data is large", "Never"], correct: 1, explain: "Linear search works on unsorted data and is simpler for small arrays. Binary search requires sorted data." },
    { q: "What is a sentinel in linear search?", opts: ["A guard variable", "Placing the target at the end to eliminate bounds check", "A recursive call", "A sorted check"], correct: 1, explain: "The sentinel linear search places the target value at the end, removing the need to check bounds in each iteration." },
    { q: "How many comparisons does linear search make on average?", opts: ["n", "n/2", "log n", "1"], correct: 1, explain: "On average, the target is found midway — roughly n/2 comparisons. Worst case is n." },
  ],
  "linear-sorting": [
    { q: "What is the time complexity of counting sort?", opts: ["O(n log n)", "O(n + k) where k is the range", "O(n²)", "O(2ⁿ)"], correct: 1, explain: "Counting sort runs in O(n + k) where k is the range of input values. It's linear when k = O(n)." },
    { q: "What is the key limitation of counting sort?", opts: ["It's unstable", "It only works with small integer ranges", "It's always O(n²)", "It requires recursion"], correct: 1, explain: "Counting sort requires the input range k to be manageable. Large ranges make it memory-inefficient." },
    { q: "How does radix sort achieve linear time?", opts: ["It compares elements directly", "It sorts digit by digit using a stable sort", "It divides and conquers", "It uses a hash table"], correct: 1, explain: "Radix sort processes digits from LSD to MSD, each pass using counting sort — O(d × (n + k)) where d is digit count." },
    { q: "When would you use bucket sort?", opts: ["When data is uniformly distributed", "When data is already sorted", "When data has few unique values", "When data is random"], correct: 0, explain: "Bucket sort distributes elements into buckets and sorts each. It's efficient when data is uniformly distributed." },
  ],
  "linked-list": [
    { q: "What is the main advantage of linked lists over arrays?", opts: ["Faster access", "O(1) insert anywhere (given node)", "Less memory", "Sorted order"], correct: 1, explain: "Once you have a reference to a node, inserting/deleting after it is O(1) pointer rewiring." },
    { q: "What is the time complexity of accessing index i?", opts: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correct: 2, explain: "You must walk from the head through i nodes. No direct indexing." },
    { q: "What does 'head' refer to?", opts: ["The last node", "The first node", "The middle node", "The node after tail"], correct: 1, explain: "The head is a reference to the first node in the list." },
    { q: "What does 'node.next = None' mean?", opts: ["The list is empty", "This is the last node", "There's an error", "The node is deleted"], correct: 1, explain: "A null/missing next pointer indicates the end (tail) of the linked list." },
  ],
  lists: [
    { q: "What is the index of the first element in a list?", opts: ["0", "1", "-1", "It depends"], correct: 0, explain: "Python uses zero-based indexing. The first element is always at index 0." },
    { q: "What does append() do?", opts: ["Adds to beginning", "Adds to end", "Removes from end", "Sorts the list"], correct: 1, explain: "append() adds an element to the end of the list." },
    { q: "What is the time complexity of pop()?", opts: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 0, explain: "pop() removes the last element in constant time." },
    { q: "Can a Python list hold different data types?", opts: ["Yes", "No", "Only numbers", "Only strings"], correct: 0, explain: "Python lists can hold any mix of types: int, str, float, bool, even other lists." },
  ],
  mathematical: [
    { q: "How do you compute GCD efficiently?", opts: ["Prime factorization", "Euclidean algorithm", "Repeated subtraction", "Multiplication"], correct: 1, explain: "Euclid's algorithm (gcd(a, b) = gcd(b, a % b)) computes GCD in O(log min(a, b)) without factorization." },
    { q: "What does fast exponentiation (exponentiation by squaring) achieve?", opts: ["O(n) time", "O(log n) time", "O(1) time", "O(n²) time"], correct: 1, explain: "Fast exponentiation computes xⁿ in O(log n) by squaring the base and halving the exponent." },
    { q: "What is the Sieve of Eratosthenes used for?", opts: ["Sorting numbers", "Finding all primes up to n", "Finding GCD", "Factoring numbers"], correct: 1, explain: "The sieve marks multiples of each prime starting from 2, finding all primes up to n in O(n log log n)." },
    { q: "What is the result of (a + b) % m?", opts: ["(a % m) + (b % m)", "(a % m + b % m) % m", "a + b", "(a + b) / m"], correct: 1, explain: "Modular arithmetic: (a + b) % m = ((a % m) + (b % m)) % m, preventing integer overflow in intermediate steps." },
  ],
  "monotonic-stack": [
    { q: "What problem does a monotonic stack solve?", opts: ["Sorting", "Finding next greater/smaller elements", "Shortest path", "Binary search"], correct: 1, explain: "A monotonic stack maintains increasing/decreasing order, efficiently solving next greater element, stock span, and histogram problems." },
    { q: "What does a monotonic increasing stack guarantee?", opts: ["Elements are in ascending order from bottom to top", "Elements are in descending order", "Elements are sorted by index", "Elements are unsorted"], correct: 0, explain: "A monotonic increasing stack stores elements with increasing values (bottom to top), popping larger values when a smaller one arrives." },
    { q: "What is the time complexity of monotonic stack problems?", opts: ["O(n²)", "O(n log n)", "O(n)", "O(2ⁿ)"], correct: 2, explain: "Each element is pushed and popped at most once → O(n) total, despite nested-looking loops." },
    { q: "What technique solves the Largest Rectangle in Histogram?", opts: ["Sliding window", "Monotonic stack", "Two pointers", "Binary search"], correct: 1, explain: "A monotonic stack tracks heights in increasing order, computing max area when a smaller height forces pops." },
  ],
  mst: [
    { q: "What is a Minimum Spanning Tree?", opts: ["A tree with minimum height", "A subset of edges connecting all vertices with minimum total weight", "The shortest path between two nodes", "A tree with maximum edges"], correct: 1, explain: "An MST connects all vertices in a weighted graph with the minimum possible total edge weight, forming a tree." },
    { q: "Which algorithm sorts edges by weight?", opts: ["Prim's algorithm", "Kruskal's algorithm", "Dijkstra's algorithm", "Floyd-Warshall"], correct: 1, explain: "Kruskal's algorithm sorts all edges by weight, then adds them greedily if they don't form a cycle (using Union-Find)." },
    { q: "How does Prim's algorithm grow the MST?", opts: ["By sorting all edges", "By expanding from a start vertex, always adding the cheapest edge to a new vertex", "By removing the heaviest edges", "By finding shortest paths"], correct: 1, explain: "Prim's algorithm starts from a vertex and repeatedly adds the minimum-weight edge connecting the tree to a new vertex." },
    { q: "What data structure speeds up Prim's algorithm?", opts: ["Hash table", "Priority queue (min-heap)", "Stack", "Queue"], correct: 1, explain: "A min-heap retrieves the minimum-weight edge to an unvisited vertex in O(log V), giving O(E log V) total." },
  ],
  "n-queens": [
    { q: "What is the constraint for the N-Queens problem?", opts: ["No two queens share the same row", "No two queens share the same column", "No two queens share the same diagonal", "All of the above"], correct: 3, explain: "N-Queens requires that no two queens share the same row, column, or diagonal — all three constraints are needed." },
    { q: "How are diagonals uniquely identified?", opts: ["By row + col and row - col", "By row * col", "By absolute difference", "By row index"], correct: 0, explain: "Each diagonal has a constant (row + col) or (row - col) value, making collision checks O(1) with sets." },
    { q: "What is the time complexity of N-Queens with pruning?", opts: ["O(2ⁿ)", "O(n!)", "O(n log n)", "O(n³)"], correct: 1, explain: "Even with pruning, N-Queens explores up to n! configurations in the worst case (first row: n choices, second: n-2, etc.)." },
    { q: "What type of algorithm is used to solve N-Queens?", opts: ["Dynamic programming", "Backtracking", "Greedy", "Divide and conquer"], correct: 1, explain: "N-Queens is classically solved with backtracking — place a queen, recurse, and undo if the placement leads to a dead end." },
  ],
  "prefix-sum": [
    { q: "What does a prefix sum array store?", opts: ["The sum of elements after each index", "The cumulative sum up to each index", "The maximum subarray sum", "The sorted values"], correct: 1, explain: "prefix[i] = sum of arr[0] through arr[i]. Range sum arr[l..r] = prefix[r] - prefix[l-1]." },
    { q: "What is the time complexity of range sum queries with prefix sums?", opts: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correct: 2, explain: "Once the prefix sum array is built (O(n) preprocessing), any range sum query is O(1): sum = prefix[r] - prefix[l-1]." },
    { q: "How do you build a 2D prefix sum?", opts: ["Sum of each row separately", "prefix[i][j] = arr[i][j] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1]", "Using a Fenwick tree", "By flattening to 1D"], correct: 1, explain: "2D prefix sum uses inclusion-exclusion: add top and left rectangles, subtract the doubly-counted top-left corner." },
    { q: "What technique pairs well with prefix sums for range updates?", opts: ["Difference array", "Stack", "Queue", "Binary search"], correct: 0, explain: "A difference array stores changes at range boundaries. Adding arr[l..r] += x becomes diff[l] += x, diff[r+1] -= x." },
  ],
  "problem-patterns": [
    { q: "What does the 'two-pointer' pattern typically require?", opts: ["Sorted or structured data", "Random access", "A hash table", "A stack"], correct: 0, explain: "Two-pointer patterns (opposite ends, same direction) usually work best on sorted arrays or linked lists." },
    { q: "When would you use the 'sliding window' pattern?", opts: ["When finding a subarray that satisfies a condition", "When sorting is needed", "When the data is a tree", "When the input is a graph"], correct: 0, explain: "Sliding window solves subarray/substring problems (max sum, smallest window, longest substring) in O(n) time." },
    { q: "What pattern is used for 'find all subsets'?", opts: ["Backtracking", "Greedy", "Sliding window", "Binary search"], correct: 0, explain: "Subset problems use backtracking to explore include/exclude decisions at each element." },
    { q: "What is the key insight for 'meet in the middle'?", opts: ["Split the input in half, solve each, combine", "Use two pointers", "Use a hash map", "Use dynamic programming"], correct: 0, explain: "Meet in the middle splits the problem, solves each half independently (often with brute force), then combines results." },
  ],
  queue: [
    { q: "What does FIFO stand for?", opts: ["Fast In, Fast Out", "First In, First Out", "Final In, Final Out", "First Item, Front Order"], correct: 1, explain: "FIFO = First-In, First-Out. The earliest element is removed first." },
    { q: "Which deque operation serves as dequeue?", opts: ["pop()", "popleft()", "append()", "appendleft()"], correct: 1, explain: "popleft() removes and returns the front (leftmost) element — that's dequeue." },
    { q: "Why not use a list for queues?", opts: ["Lists are slower", "pop(0) is O(n) — shifts all elements", "Lists don't support FIFO", "Lists are immutable"], correct: 1, explain: "list.pop(0) removes the first element, but all remaining elements shift left — O(n)." },
    { q: "Which algorithm uses a queue?", opts: ["Depth-First Search", "Binary Search", "Breadth-First Search", "QuickSort"], correct: 2, explain: "BFS (Breadth-First Search) uses a queue to visit nodes level by level." },
  ],
  recursion: [
    { q: "What must every recursive function have?", opts: ["A loop", "A base case", "A return of 1", "Two parameters"], correct: 1, explain: "Without a base case, recursion never stops and causes stack overflow." },
    { q: "What data structure does recursion use implicitly?", opts: ["Queue", "Stack", "Heap", "Tree"], correct: 1, explain: "The call stack stores each recursive call's frame. LIFO — last called, first returned." },
    { q: "What is the time complexity of naive Fibonacci?", opts: ["O(n)", "O(n²)", "O(2ⁿ)", "O(log n)"], correct: 2, explain: "Naive fib branches exponentially — each call makes two more calls." },
    { q: "Can Python optimize tail recursion?", opts: ["Yes, always", "No, never", "Only with @tail_rec", "Only in Python 3.13+"], correct: 1, explain: "Python does not optimize tail recursion. Deep recursion still overflows the stack." },
  ],
  "recursion-deep": [
    { q: "What is the maximum recursion depth in Python by default?", opts: ["100", "1000", "10000", "Unlimited"], correct: 1, explain: "Python's default recursion limit is 1000 calls. Use sys.setrecursionlimit(n) to increase it." },
    { q: "What happens when recursion exceeds the stack limit?", opts: ["Program continues slowly", "RecursionError is raised", "Memory is garbage collected", "The function restarts"], correct: 1, explain: "Python raises RecursionError when the call stack exceeds the recursion limit — a safety guard against stack overflow." },
    { q: "What is tail recursion?", opts: ["Recursion at the end of a function", "Recursion that returns the recursive call directly without extra work", "Recursion with multiple base cases", "Recursion on the last element"], correct: 1, explain: "Tail recursion has the recursive call as the final operation. Python doesn't optimize it, but some languages compile it to iteration." },
    { q: "How can you convert a recursive algorithm to iterative?", opts: ["It's impossible", "Use an explicit stack data structure", "Use a queue", "Use a hash table"], correct: 1, explain: "Any recursive algorithm can be made iterative by managing your own stack, replicating the call/return pattern." },
  ],
  "red-black-tree": [
    { q: "What color property must a Red-Black tree satisfy?", opts: ["Root is black, no two reds are adjacent", "All nodes are red", "Root is red, leaves are black", "Red nodes have exactly 2 children"], correct: 0, explain: "Red-Black tree rules: root is black, red nodes cannot have red children (no adjacent reds), black height is same for all paths." },
    { q: "How does a Red-Black tree differ from AVL?", opts: ["Red-Black is always more balanced", "Red-Black allows more imbalance but fewer rotations", "AVL has no color property", "They are the same"], correct: 1, explain: "Red-Black trees allow up to 2x height difference, requiring fewer rotations during insert/delete compared to AVL's strict balance." },
    { q: "What is a black-height?", opts: ["Height of the tree", "Number of black nodes on any path from root to leaf", "Number of red nodes", "The color depth"], correct: 1, explain: "Black-height is the count of black nodes from root to any leaf. Must be equal for all paths (property 5)." },
    { q: "What operation restores Red-Black tree properties after insertion?", opts: ["Only recoloring", "Only rotations", "Recoloring and rotations", "Rebuilding the tree"], correct: 2, explain: "Red-Black tree insertion fixes violations through a combination of recoloring and rotations (left/right), similar to AVL." },
  ],
  "segment-tree": [
    { q: "What problem does a segment tree solve?", opts: ["Sorting", "Range queries with updates (e.g., range sum, min, max)", "Shortest path", "String matching"], correct: 1, explain: "A segment tree supports range queries (sum, min, max) and point/range updates in O(log n) time." },
    { q: "What is the memory usage of a segment tree?", opts: ["O(n)", "O(n log n)", "O(4n)", "O(2ⁿ)"], correct: 2, explain: "A segment tree typically uses 4× the input size for array-based implementation." },
    { q: "What is lazy propagation in a segment tree?", opts: ["Delaying execution", "Deferring range updates to avoid touching all nodes", "Caching queries", "Sorting lazily"], correct: 1, explain: "Lazy propagation stores pending range updates at internal nodes, pushing them down only when needed — enabling O(log n) range updates." },
    { q: "How does querying work in a segment tree?", opts: ["Scan all leaves", "Recursively split the range, combining node results", "Binary search on the array", "Iterate through indices"], correct: 1, explain: "A segment tree query traverses from root, splitting the query range at each node and combining results from relevant child nodes." },
  ],
  sets: [
    { q: "What happens if you create a set with duplicate values?", opts: ["Error", "Duplicates are kept", "Duplicates are removed", "Only the last duplicate is kept"], correct: 2, explain: "Sets automatically remove duplicates. {1, 2, 2} becomes {1, 2}." },
    { q: "Can you access set elements by index?", opts: ["Yes, like lists", "No, sets are unordered", "Only with .get()", "Only if using a tuple set"], correct: 1, explain: "Sets have no order and no index. You cannot do my_set[0]." },
    { q: "What is the time complexity of 'in' for a set?", opts: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correct: 2, explain: "Sets use hash tables, so membership testing is O(1) average." },
    { q: "Which operator computes set intersection?", opts: ["|", "&", "-", "^"], correct: 1, explain: "& computes intersection (elements in both sets). | is union, - is difference." },
  ],
  "sets-deep": [
    { q: "What is a frozenset?", opts: ["A mutable set", "An immutable, hashable version of a set", "A set of frozen values", "A set with fixed size"], correct: 1, explain: "frozenset is an immutable set. It's hashable and can be used as a dictionary key or in another set." },
    { q: "What must objects implement to be stored in a set?", opts: ["__str__", "__hash__ and __eq__", "__len__", "__repr__"], correct: 1, explain: "Sets use __hash__ for bucket placement and __eq__ for uniqueness checking. Objects with same hash and equal are considered duplicates." },
    { q: "How is set union different from set intersection?", opts: ["Union = elements in EITHER set, intersection = elements in BOTH sets", "Union = elements in BOTH, intersection = elements in EITHER", "They are the same", "Union is faster"], correct: 0, explain: "Union (|) combines all unique elements. Intersection (&) finds only the common elements." },
    { q: "What is the symmetric difference of two sets?", opts: ["Elements in both sets", "Elements in either set but not both", "Elements only in the first set", "All elements"], correct: 1, explain: "Symmetric difference (^) is the set of elements in exactly one of the two sets — union minus intersection." },
  ],
  "shortest-path": [
    { q: "Which algorithm finds shortest paths with negative edge weights?", opts: ["Dijkstra", "Bellman-Ford", "Prim", "Kruskal"], correct: 1, explain: "Bellman-Ford handles negative edge weights and detects negative cycles, unlike Dijkstra which requires non-negative weights." },
    { q: "What is the time complexity of Dijkstra's algorithm with a min-heap?", opts: ["O(V²)", "O(E log V)", "O(V log E)", "O(E + V log V)"], correct: 1, explain: "With a binary heap, Dijkstra runs in O((V+E) log V) = O(E log V) for connected graphs." },
    { q: "What is the Floyd-Warshall algorithm used for?", opts: ["Single-source shortest path", "All-pairs shortest path", "Minimum spanning tree", "Cycle detection"], correct: 1, explain: "Floyd-Warshall computes shortest paths between ALL pairs of vertices in O(V³) using dynamic programming." },
    { q: "What happens when Bellman-Ford detects a negative cycle?", opts: ["It returns correct distances", "It reports the negative cycle", "It enters an infinite loop", "It ignores negative edges"], correct: 1, explain: "Bellman-Ford runs V-1 relaxations, then one more pass. If any distances improve, a negative cycle exists." },
  ],
  "sliding-window": [
    { q: "What is the sliding window technique used for?", opts: ["Sorting arrays", "Finding optimal subarrays/substrings in O(n)", "Graph traversal", "Binary search"], correct: 1, explain: "Sliding window maintains a window of elements, expanding/shrinking it to find optimal subarrays or substrings in linear time." },
    { q: "When do you use a fixed-size sliding window?", opts: ["When the window size is known in advance", "When comparing adjacent elements", "When the array is sorted", "When using recursion"], correct: 0, explain: "Fixed window (size k) slides one step at a time, updating the result from the removed and added elements." },
    { q: "When do you use a variable-size sliding window?", opts: ["When looking for a subarray that meets a condition (sum >= target, all unique chars)", "When the array is sorted", "For all subarrays", "For matrix traversal"], correct: 0, explain: "Variable window expands right until the condition is met, then shrinks left to find the minimal/maximal valid window." },
    { q: "What is the time complexity of sliding window problems?", opts: ["O(n²)", "O(n log n)", "O(n)", "O(2ⁿ)"], correct: 2, explain: "Each element enters and leaves the window at most once — each is processed O(1) times, giving O(n)." },
  ],
  sorting: [
    { q: "What is the best time complexity possible for comparison-based sorting?", opts: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], correct: 1, explain: "O(n log n) is the proven lower bound for comparison-based sorting." },
    { q: "Which sorting algorithm is O(n²) in the worst case?", opts: ["Merge sort", "Quick sort", "Heap sort", "Counting sort"], correct: 1, explain: "Quick sort is O(n²) in worst case (sorted input with bad pivot). Merge and heap are always O(n log n)." },
    { q: "What is a stable sort?", opts: ["Sorts in-place", "Preserves relative order of equals", "Sorts only positive numbers", "Uses no comparisons"], correct: 1, explain: "Stable sort keeps equal elements in their original relative order." },
    { q: "What advantage does merge sort have over quick sort?", opts: ["Faster", "Always O(n log n)", "Uses less memory", "In-place"], correct: 1, explain: "Merge sort guarantees O(n log n) in all cases. Quick sort can degrade to O(n²)." },
  ],
  "space-complexity": [
    { q: "What does space complexity measure?", opts: ["Total runtime", "Maximum memory used by an algorithm", "Number of lines of code", "CPU cycles"], correct: 1, explain: "Space complexity measures the maximum memory an algorithm uses relative to input size, including input and auxiliary space." },
    { q: "What is auxiliary space?", opts: ["Total memory including input", "Extra memory needed beyond the input", "Memory used by input only", "Disk space"], correct: 1, explain: "Auxiliary space is the temporary memory an algorithm uses (stack frames, buffers, caches), excluding the input itself." },
    { q: "What is the space complexity of recursive Fibonacci?", opts: ["O(1)", "O(log n)", "O(n)", "O(2ⁿ)"], correct: 2, explain: "The call stack grows to depth n in the worst case (fib(n) calls fib(n-1), which calls fib(n-2), etc.) — O(n) space." },
    { q: "What is the space complexity of merge sort?", opts: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 2, explain: "Merge sort requires O(n) auxiliary space for merging — it allocates temporary arrays during the merge step." },
  ],
  "sparse-table": [
    { q: "What problem does a sparse table solve?", opts: ["Point updates", "Range queries on immutable arrays", "Dynamic updates", "Sorting"], correct: 1, explain: "Sparse tables support O(1) range queries (min, max, gcd) on static arrays after O(n log n) preprocessing." },
    { q: "What is the preprocessing time for a sparse table?", opts: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"], correct: 1, explain: "A sparse table builds log n layers, each of size n, for a total of O(n log n) preprocessing." },
    { q: "How does RMQ work with a sparse table?", opts: ["By scanning the range", "By overlapping two precomputed intervals that cover the range", "By binary search", "By segment tree"], correct: 1, explain: "For range minimum query, find k = floor(log2(len)) and take min(st[k][l], st[k][r-2^k+1]) — two overlapping intervals cover the range." },
    { q: "What is the main limitation of sparse tables?", opts: ["Queries are slow", "The array cannot change (no updates)", "Too much memory", "Only works with integers"], correct: 1, explain: "Sparse tables don't support updates. Any change requires rebuilding the entire table, making them unsuitable for dynamic data." },
  ],
  stack: [
    { q: "What does LIFO stand for?", opts: ["Last In, First Out", "Least Important, First Out", "Last In, Fast Out", "Large In, Fine Out"], correct: 0, explain: "LIFO = Last-In, First-Out. The most recent item is removed first." },
    { q: "Which Python list operation acts as push?", opts: ["pop()", "append()", "insert(0,v)", "remove()"], correct: 1, explain: "append() adds to the end of the list, which is the 'top' of the stack." },
    { q: "What is the time complexity of pop() on a stack?", opts: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correct: 2, explain: "pop() removes the last element in constant time." },
    { q: "Which of these uses a stack?", opts: ["Queue line", "Undo in text editor", "Priority queue", "HashMap"], correct: 1, explain: "Undo uses a stack — each action is pushed, undo pops the most recent." },
  ],
  "string-matching": [
    { q: "What is the time complexity of the naive string matching algorithm?", opts: ["O(n + m)", "O(n × m)", "O(n log m)", "O(2ⁿ)"], correct: 1, explain: "Naive matching checks the pattern at each position: O((n-m+1) × m) = O(n × m) in the worst case." },
    { q: "What makes the KMP algorithm efficient?", opts: ["It uses a hash function", "It precomputes a prefix function (LPS array) to skip unnecessary comparisons", "It sorts the pattern", "It uses binary search"], correct: 1, explain: "KMP computes the Longest Prefix Suffix (LPS) array and uses it to skip characters already matched when a mismatch occurs." },
    { q: "How does the Rabin-Karp algorithm work?", opts: ["Using a hash of the pattern compared to rolling hashes of text windows", "Using a prefix function", "Using binary search on the text", "Using a suffix tree"], correct: 0, explain: "Rabin-Karp computes a rolling hash of the pattern and each text window. Hash matches are verified with actual comparison." },
    { q: "What problem does the Z-algorithm solve?", opts: ["Pattern matching in O(n + m)", "Sorting strings", "Finding longest palindrome", "Computing edit distance"], correct: 0, explain: "The Z-algorithm computes the Z-array (longest prefix match at each position) in O(n) and uses it for pattern matching." },
  ],
  strings: [
    { q: "What is the index of 'o' in 'Hello'?", opts: ["3", "4", "5", "1"], correct: 1, explain: "Indices start at 0: H=0, e=1, l=2, l=3, o=4." },
    { q: "What does 'Python'[1:4] return?", opts: ["Pyt", "yth", "ytho", "Pyth"], correct: 1, explain: "slice starts at index 1 (y), ends before index 4 (h). So indexes 1,2,3 = 'yth'." },
    { q: "Are strings mutable in Python?", opts: ["Yes", "No", "Sometimes", "Only in Python 2"], correct: 1, explain: "Strings are immutable. Operations create new strings." },
    { q: "What is the time complexity of len(string)?", opts: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 0, explain: "Length is stored as a property. Always instant." },
  ],
  "subsets-permutations": [
    { q: "How many subsets does a set of n elements have?", opts: ["n", "2ⁿ", "n!", "n²"], correct: 1, explain: "Each element can be either included or excluded — 2 choices per element → 2ⁿ total subsets." },
    { q: "What technique generates all subsets?", opts: ["Backtracking with include/exclude choices", "Greedy selection", "Dynamic programming", "Binary search"], correct: 0, explain: "Subsets are generated by backtracking: for each element, recurse with it included and again with it excluded." },
    { q: "How many permutations of n distinct elements exist?", opts: ["2ⁿ", "n!", "n²", "n log n"], correct: 1, explain: "There are n! permutations of n distinct elements (n choices for first, n-1 for second, ...)." },
    { q: "What is the time complexity of generating all permutations?", opts: ["O(2ⁿ)", "O(n!)", "O(n log n)", "O(n³)"], correct: 1, explain: "Generating all n! permutations has O(n!) complexity, which is even worse than exponential O(2ⁿ) for large n." },
  ],
  "suffix-array": [
    { q: "What is a suffix array?", opts: ["An array of characters", "A sorted array of all suffixes of a string", "An array of prefixes", "A sorted array of substrings"], correct: 1, explain: "A suffix array lists the starting indices of all suffixes of a string, sorted lexicographically." },
    { q: "How does a suffix array help with pattern matching?", opts: ["By scanning all suffixes", "Through binary search on the sorted suffixes", "By hashing each suffix", "By building a tree"], correct: 1, explain: "Once suffixes are sorted, you can binary search the suffix array to find all occurrences of a pattern in O(m log n)." },
    { q: "What is the LCP array?", opts: ["Longest Common Prefix between adjacent suffixes in the suffix array", "Longest Common Pattern", "Least Common Prefix", "Last Character Prefix"], correct: 0, explain: "The LCP array stores the length of the longest common prefix between consecutive suffixes in the sorted suffix array." },
    { q: "What can the suffix array + LCP array solve?", opts: ["Longest repeating substring, longest palindrome, substring count", "Sorting", "Shortest path", "Minimum spanning tree"], correct: 0, explain: "Suffix arrays with LCP can solve many string problems: longest common substring, longest palindrome, and distinct substring counting." },
  ],
  "topological-sort": [
    { q: "What type of graph can be topologically sorted?", opts: ["Any graph", "Directed Acyclic Graph (DAG)", "Undirected graph", "Weighted graph"], correct: 1, explain: "Topological sort is only defined for DAGs. Cycles make topological ordering impossible." },
    { q: "What does a topological ordering represent?", opts: ["A random order of nodes", "An order where each node appears before its dependents", "A sorted order by weight", "A reversed order"], correct: 1, explain: "In a topological order, for every edge u→v, u comes before v — dependency-first ordering." },
    { q: "What is Kahn's algorithm?", opts: ["A DFS-based approach", "A BFS-based approach using in-degree counts", "A shortest path algorithm", "A sorting algorithm"], correct: 1, explain: "Kahn's algorithm repeatedly removes nodes with in-degree 0, reducing the in-degree of their neighbors — BFS-style." },
    { q: "What happens if there is a cycle during topological sort?", opts: ["The algorithm returns a partial order", "Not all nodes will have in-degree 0 at the end", "An error is raised", "Nodes are duplicated"], correct: 1, explain: "If a cycle exists, some nodes never reach in-degree 0, leaving them unprocessed — detectable by count mismatch." },
  ],
  trees: [
    { q: "What is the root of a tree?", opts: ["The largest node", "The topmost node", "A leaf", "The deepest node"], correct: 1, explain: "The root is the topmost node with no parent." },
    { q: "What is a leaf node?", opts: ["A node with many children", "A node with no children", "The root node", "A deleted node"], correct: 1, explain: "A leaf is a node with no children — the end of a branch." },
    { q: "What traversal visits left → root → right?", opts: ["Pre-order", "In-order", "Post-order", "Level-order"], correct: 1, explain: "In-order: left subtree, then root, then right subtree." },
    { q: "What is the maximum number of children in a binary tree?", opts: ["1", "2", "Unlimited", "4"], correct: 1, explain: "A binary tree node has at most 2 children: left and right." },
  ],
  trie: [
    { q: "What does a trie node typically store?", opts: ["An integer", "A character and children references", "A pointer to parent", "The full word"], correct: 1, explain: "Each trie node stores a character (as a key in children dict) and a flag for word end." },
    { q: "What is the time complexity of trie search?", opts: ["O(n) for n words", "O(L) for word length L", "O(log n)", "O(1)"], correct: 1, explain: "Search walks L nodes from root, regardless of how many words are stored." },
    { q: "What is a trie's main advantage over hash tables?", opts: ["Faster lookups", "Prefix search support", "Less memory", "Simpler implementation"], correct: 1, explain: "Tries support prefix queries (all words starting with...). Hash tables cannot do prefix search." },
    { q: "What does the is_end flag indicate?", opts: ["No more children", "This node ends a valid word", "The trie is full", "An error"], correct: 1, explain: "is_end=True marks a node as the end of a complete word in the trie." },
  ],
  tuples: [
    { q: "What makes a tuple different from a list?", opts: ["Tuples are mutable", "Tuples are immutable", "Tuples are faster", "Tuples are ordered"], correct: 1, explain: "Tuples cannot be changed after creation. Lists can." },
    { q: "How do you create a tuple with one element?", opts: ["(5)", "(5,)", "tuple(5)", "[5]"], correct: 1, explain: "A trailing comma is required: (5,) — otherwise Python sees just parentheses around an int." },
    { q: "Can tuples be used as dictionary keys?", opts: ["Yes", "No", "Only if all items are ints", "Only if they have 2 items"], correct: 0, explain: "Tuples are hashable (if all items are hashable), so they can be dictionary keys." },
    { q: "What is tuple unpacking?", opts: ["Deleting a tuple", "Assigning tuple items to multiple variables", "Converting tuple to list", "Merging two tuples"], correct: 1, explain: "Unpacking assigns each element to a variable: a, b = (1, 2)" },
  ],
  "two-pointers": [
    { q: "What is the two-pointer technique?",
 opts: ["Using two variables to track two positions in a data structure",
 "Sorting with two passes",
 "A recursive approach",
 "A hash-based approach"],
 correct: 0,
 explain: "Two pointers traverse a data structure from different positions (opposite ends or same direction) to solve problems efficiently." },
    { q: "When would you use opposite-direction two pointers?",
 opts: ["When the array is sorted and you need pairs summing to a target",
 "When finding duplicates",
 "When sorting a linked list",
 "When building a hash table"],
 correct: 0,
 explain: "Opposite-direction pointers (left=0, right=n-1) are classic for sorted array pair-sum problems like two-sum." },
    { q: "When would you use same-direction two pointers?",
 opts: ["For removing duplicates from a sorted array in-place",
 "For finding the maximum element",
 "For binary search",
 "For hashing"],
 correct: 0,
 explain: "Same-direction (slow/fast) pointers are used for in-place deduplication, partition, and linked list cycle detection." },
    { q: "What is the time complexity of the two-pointer technique?",
 opts: ["O(n²)",
 "O(n log n)",
 "O(n)",
 "O(log n)"],
 correct: 2,
 explain: "Each pointer moves at most n steps total, and each step does O(1) work — O(n) overall." },
  ],
  "union-find": [
    { q: "What problem does Union-Find solve?", opts: ["Shortest path", "Dynamic connectivity / disjoint set management", "Sorting", "String matching"], correct: 1, explain: "Union-Find (Disjoint Set Union) tracks elements partitioned into disjoint subsets, supporting union and find operations." },
    { q: "What is path compression?", opts: ["Shortening the path between two nodes", "Making each node point directly to its root during find", "Compressing the tree height", "Removing leaves"], correct: 1, explain: "Path compression makes find(x) point every visited node directly to the root, flattening the tree for near-O(1) future finds." },
    { q: "What is union by rank?", opts: ["Merging sets by their size or height", "Merging by root index", "Merging randomly", "Merging by element count"], correct: 0, explain: "Union by rank attaches the smaller tree under the larger one's root, keeping the tree depth O(log n)." },
    { q: "What is the amortized time complexity of Union-Find with both optimizations?", opts: ["O(log n)", "O(n)", "O(α(n)) — inverse Ackermann", "O(1)"], correct: 2, explain: "With path compression and union by rank, Union-Find operations run in amortized O(α(n)) time, practically constant." },
  ],
  variables: [
    { q: "What does score = 10 do?", opts: ["Creates name 'score' pointing to 10", "Prints 10", "Creates a file", "Adds 10 to a list"], correct: 0, explain: "Python binds the name 'score' to a memory object holding 10." },
    { q: "age = 25 then age = 26?", opts: ["Both kept", "25 replaced by 26 at same address", "New variable '26'", "Error"], correct: 1, explain: "Reassignment overwrites the value at the same address." },
    { q: "What does a = b do?", opts: ["Copies b's value", "Makes 'a' point to b's address", "Creates a copy", "Deletes b"], correct: 1, explain: "Both names reference the same object in memory." },
    { q: "Time complexity of reading a variable?", opts: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 0, explain: "Variable lookup is a direct hash table lookup. Always O(1)." },
  ],
}

export function QuizSection({ lesson }: Props) {
  const questions = questionsMap[lesson.id] || questionsMap.variables
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const score = Object.entries(answers).filter(([i, a]) => questions[Number(i)].correct === a).length

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-primary)" }}>Section 7 of 8</p>
        <h2 className="text-2xl font-semibold tracking-tight" style={{ letterSpacing: "-0.96px" }}>
          {lesson.id === "strings" ? "String Quiz" : lesson.id === "data-types" ? "Type Quiz" : "Quick Quiz"}
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--el-body)" }}>{submitted ? `${score}/${questions.length}` : `${questions.length} questions`}</p>
      </div>

      <div className="space-y-4">
        {questions.map((q, qi) => {
          const selected = answers[qi]
          const isCorrect = submitted && selected === q.correct
          const isWrong = submitted && selected !== undefined && selected !== q.correct
          return (
            <motion.div key={qi} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: qi * 0.05 }}
              className="rounded-md p-5" style={{ border: `1px solid ${isCorrect ? "var(--el-success)" : isWrong ? "var(--el-error)" : "var(--el-hairline)"}` }}>
              <p className="text-sm font-semibold mb-3"><span className="mr-2" style={{ color: "var(--el-primary)" }}>{qi + 1}.</span>{q.q}</p>
              <div className="space-y-1.5">
                {q.opts.map((opt, oi) => {
                  const isSelected = selected === oi
                  const isRightAnswer = submitted && oi === q.correct
                  return (
                    <button key={oi} onClick={() => { if (!submitted) setAnswers((a) => ({ ...a, [qi]: oi })) }} disabled={submitted}
                      className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm text-left transition-all"
                      style={{
                        backgroundColor: isSelected && !submitted ? "var(--el-surface-strong)" : isRightAnswer ? "var(--el-success)20" : "transparent",
                        border: isSelected && !submitted ? "1px solid var(--el-primary)" : "1px solid transparent",
                        color: isRightAnswer ? "var(--el-success)" : "var(--el-ink)",
                      }}>
                      <span className="w-5 h-5 rounded-sm flex items-center justify-center text-xs font-bold"
                        style={{ backgroundColor: isSelected ? "var(--el-primary)" : "var(--el-surface-strong)", color: isSelected ? "#fff" : "var(--el-muted)" }}>
                        {String.fromCharCode(65 + oi)}
                      </span>
                      {opt}{isRightAnswer && isSelected && " ✓"}
                    </button>
                  )
                })}
              </div>
              {submitted && selected !== undefined && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-xs" style={{ color: isCorrect ? "var(--el-success)" : "var(--el-error)" }}>
                  {q.explain}
                </motion.p>
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="flex justify-center">
        {!submitted ? (
          <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length < questions.length} className="el-btn el-btn-primary !px-8">Submit</button>
        ) : (
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: "var(--el-primary)" }}>{score}/{questions.length}</p>
              <p className="text-xs" style={{ color: "var(--el-muted)" }}>Score</p>
            </div>
            <button onClick={() => { setAnswers({}); setSubmitted(false) }} className="el-btn el-btn-outline">Retry</button>
          </div>
        )}
      </div>
    </div>
  )
}
