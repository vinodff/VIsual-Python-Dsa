"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lesson } from "@/types"

type Props = { lesson: Lesson }

const stepsMap: Record<string, { codeLines: string[]; steps: { highlight: number | null; label: string; value: string; detail: string; output: string | null }[] }> = {
  "a-star": {
    codeLines: ["import heapq", "", "def a_star(graph, start, goal, h):", "    pq = [(0 + h(start), 0, start, [start])]", "    visited = set()", "    while pq:", "        est, cost, node, path = heapq.heappop(pq)", "        if node in visited: continue", "        visited.add(node)", "        if node == goal: return path", "        for nbr, edge_cost in graph[node]:", "            new_cost = cost + edge_cost", "            heapq.heappush(pq, (new_cost + h(nbr), new_cost, nbr, path + [nbr]))", "    return None", "", "graph = {", "    'A': [('B', 1), ('C', 4)],", "    'B': [('D', 2), ('E', 5)],", "    'C': [('E', 1)],", "    'D': [('F', 3)],", "    'E': [('F', 1)],", "    'F': []", "}", "def h(node):", "    return {'A': 5, 'B': 4, 'C': 2, 'D': 2, 'E': 1, 'F': 0}[node]", "", "print(a_star(graph, 'A', 'F', h))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "a_star", value: "<function>", detail: "A* search algorithm defined", output: null },
      { highlight: 25, label: "\u2014", value: "\u2014", detail: "A* from A to F", output: "['A', 'C', 'E', 'F']" },
    ],
  },
  "advanced-graphs": {
    codeLines: ["# Tarjan's SCC algorithm", "def tarjan(g):", "    idx = 0; stack = []; on_stack = set()", "    index = {}; lowlink = {}; sccs = []", "    def strongconnect(v):", "        nonlocal idx", "        index[v] = lowlink[v] = idx; idx += 1", "        stack.append(v); on_stack.add(v)", "        for w in g[v]:", "            if w not in index:", "                strongconnect(w)", "                lowlink[v] = min(lowlink[v], lowlink[w])", "            elif w in on_stack:", "                lowlink[v] = min(lowlink[v], index[w])", "        if lowlink[v] == index[v]:", "            comp = []", "            while True:", "                w = stack.pop(); on_stack.discard(w)", "                comp.append(w)", "                if w == v: break", "            sccs.append(comp)", "    for v in g:", "        if v not in index: strongconnect(v)", "    return sccs", "", "g = {0:[1],1:[2],2:[0,3],3:[4],4:[5],5:[3]}", "print(tarjan(g))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "tarjan", value: "<function>", detail: "Tarjan's SCC algorithm", output: null },
      { highlight: 26, label: "\u2014", value: "\u2014", detail: "SCCs identified", output: "[[0, 2, 1], [4, 5, 3]]" },
    ],
  },
  "advanced-trees": {
    codeLines: ["class SplayNode:", "    def __init__(self, v):", "        self.val = v; self.l = None; self.r = None", "", "def splay(root, key):", "    if not root or root.val == key: return root", "    if key < root.val:", "        if not root.l: return root", "        if key < root.l.val:", "            root.l.l = splay(root.l.l, key)", "            root = rotate_right(root)", "        elif key > root.l.val:", "            root.l.r = splay(root.l.r, key)", "            if root.l.r: root.l = rotate_left(root.l)", "        return root if not root.l else rotate_right(root)", "    else:", "        return root", "", "print('Splay tree operations')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "SplayNode", value: "<class>", detail: "splay tree node", output: null },
      { highlight: 5, label: "splay", value: "<function>", detail: "splay operation brings key to root", output: null },
      { highlight: 19, label: "\u2014", value: "\u2014", detail: "amortized O(log n)", output: "Splay tree operations" },
    ],
  },
  "amortized-analysis": {
    codeLines: ["# Dynamic array amortized analysis", "arr = []", "total_cost = 0", "for i in range(10):", "    old_cap = len(arr)", "    arr.append(i)", "    new_cap = len(arr)", "    if new_cap > old_cap:", "        cost = new_cap + 1  # copy + insert", "    else:", "        cost = 1  # just insert", "    total_cost += cost", "    print(f'Insert {i}: cost={cost}, cap={new_cap}')", "print(f'Total cost: {total_cost}')", "print(f'Amortized cost per op: {total_cost/10}')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "\u2014", value: "\u2014", detail: "counting cost per operation", output: null },
      { highlight: 14, label: "\u2014", value: "\u2014", detail: "total vs amortized", output: "Insert 0: cost=1, cap=1\nInsert 1: cost=3, cap=2\nInsert 2: cost=3, cap=4\nInsert 3: cost=1, cap=4\nInsert 4: cost=5, cap=8\n...\nTotal cost: 19\nAmortized cost per op: 1.9" },
    ],
  },
  arrays: {
    codeLines: ["from array import array", "nums = array('i', [10, 20, 30])", "nums[1] = 25", "val = nums[0]", "nums.append(40)", "print(nums)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 2, label: "nums", value: "[10, 20, 30]", detail: "array('i', 3 slots)", output: null },
      { highlight: 3, label: "nums", value: "[10, 25, 30]", detail: "index assignment O(1)", output: null },
      { highlight: 4, label: "val", value: "10", detail: "nums[0]", output: null },
      { highlight: 6, label: "\u2014", value: "\u2014", detail: "\u2014", output: "array('i', [10, 25, 30, 40])" },
    ],
  },
  avl: {
    codeLines: ["# AVL insertion with rotation", "# Insert 1, 2, 3", "root = None", "root = avl_insert(root, 1)", "root = avl_insert(root, 2)", "root = avl_insert(root, 3)", "print(inorder(root))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 4, label: "root", value: "Node(1)", detail: "insert 1", output: null },
      { highlight: 5, label: "root", value: "Node(1)\u2192R:Node(2)", detail: "insert 2, balance OK", output: null },
      { highlight: 6, label: "root", value: "Node(2)\u2192L:1,R:3", detail: "insert 3 \u2192 right-right case \u2192 left rotate", output: null },
      { highlight: 7, label: "\u2014", value: "\u2014", detail: "in-order", output: "[1, 2, 3]" },
    ],
  },
  backtracking: {
    codeLines: ["def solve_nq(n):", "    cols, d1, d2 = set(), set(), set()", "    result = []", "    def backtrack(r, board):", "        if r == n: result.append(board.copy()); return", "        for c in range(n):", "            if c in cols or r-c in d1 or r+c in d2: continue", "            cols.add(c); d1.add(r-c); d2.add(r+c)", "            board.append(c)", "            backtrack(r+1, board)", "            board.pop()", "            cols.remove(c); d1.remove(r-c); d2.remove(r+c)", "    backtrack(0, [])", "    return result", "", "print(solve_nq(4))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "solve_nq", value: "<function>", detail: "backtracking solver", output: null },
      { highlight: 16, label: "\u2014", value: "\u2014", detail: "4-Queens solutions", output: "[[1, 3, 0, 2], [2, 0, 3, 1]]" },
    ],
  },
  bfs: {
    codeLines: ["from collections import deque", "graph = {", "    'A': ['B', 'C'],", "    'B': ['D'], 'C': ['E'],", "    'D': [], 'E': []", "}", "", "def bfs(g, s):", "    v = {s}; q = deque([s])", "    while q:", "        n = q.popleft()", "        print(n, end=' ')", "        for nb in g[n]:", "            if nb not in v:", "                v.add(nb); q.append(nb)", "", "bfs(graph, 'A')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "bfs", value: "<function>", detail: "defined", output: null },
      { highlight: 6, label: "graph", value: "<adj list>", detail: "5 vertices", output: null },
      { highlight: 17, label: "\u2014", value: "\u2014", detail: "BFS from A", output: "A B C D E" },
    ],
  },
  "big-o": {
    codeLines: ["def constant_time(arr):", "    return arr[0]  # O(1)", "", "def linear_time(arr):", "    for x in arr: print(x)  # O(n)", "", "def quadratic_time(arr):", "    for x in arr:", "        for y in arr:", "            print(x, y)  # O(n\u00b2)", "", "def logarithmic_time(n):", "    while n > 0: n //= 2  # O(log n)", "", "data = list(range(5))", "constant_time(data)", "linear_time(data)", "print('done')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "constant_time", value: "<function>", detail: "O(1) \u2014 always 1 operation", output: null },
      { highlight: 4, label: "linear_time", value: "<function>", detail: "O(n) \u2014 n operations", output: null },
      { highlight: 7, label: "quadratic_time", value: "<function>", detail: "O(n\u00b2) \u2014 n\u00b2 operations", output: null },
      { highlight: 12, label: "logarithmic_time", value: "<function>", detail: "O(log n) \u2014 halves each step", output: null },
      { highlight: 17, label: "\u2014", value: "\u2014", detail: "\u2014", output: "0\n1\n2\n3\ndone" },
    ],
  },
  "binary-search": {
    codeLines: ["def binary_search(arr, target):", "    l, r = 0, len(arr)-1", "    while l <= r:", "        mid = (l+r)//2", "        if arr[mid] == target: return mid", "        elif arr[mid] < target: l = mid+1", "        else: r = mid-1", "    return -1", "", "nums = [1, 3, 5, 7, 9, 11, 13]", "print(binary_search(nums, 7))", "print(binary_search(nums, 0))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "binary_search", value: "<function>", detail: "defined", output: null },
      { highlight: 11, label: "\u2014", value: "\u2014", detail: "search 7", output: "3" },
      { highlight: 12, label: "\u2014", value: "\u2014", detail: "search 0", output: "-1" },
    ],
  },
  "bit-manipulation": {
    codeLines: ["x = 8  # 0b1000", "print(bin(x))", "", "y = x << 1  # left shift = multiply by 2", "print(bin(y), y)", "", "z = x >> 1  # right shift = divide by 2", "print(bin(z), z)", "", "a = 12  # 0b1100", "b = 5   # 0b0101", "print(bin(a & b))  # AND", "print(bin(a | b))  # OR", "print(bin(a ^ b))  # XOR", "", "# Check if bit is set", "num = 10  # 0b1010", "for i in range(4):", "    print(f'Bit {i}: {bool(num & (1 << i))}')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "x", value: "8", detail: "0b1000", output: null },
      { highlight: 2, label: "\u2014", value: "\u2014", detail: "\u2014", output: "0b1000" },
      { highlight: 4, label: "y", value: "16", detail: "0b10000 (x << 1)", output: null },
      { highlight: 7, label: "z", value: "4", detail: "0b0100 (x >> 1)", output: null },
      { highlight: 13, label: "\u2014", value: "\u2014", detail: "a & b = 0b0100 = 4", output: "0b100" },
      { highlight: 14, label: "\u2014", value: "\u2014", detail: "a | b = 0b1101 = 13", output: "0b1101" },
      { highlight: 15, label: "\u2014", value: "\u2014", detail: "a ^ b = 0b1001 = 9", output: "0b1001" },
      { highlight: 19, label: "\u2014", value: "\u2014", detail: "bit check loop", output: "Bit 0: False\nBit 1: True\nBit 2: False\nBit 3: True" },
    ],
  },
  bst: {
    codeLines: ["class BST:", "    # (definition omitted for brevity)", "", "bst = BST()", "for v in [5, 3, 7, 2, 4, 8]:", "    bst.insert(v)", "", "print(bst.search(4))", "print(bst.search(9))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 4, label: "bst", value: "<BST>", detail: "empty tree", output: null },
      { highlight: 6, label: "bst", value: "<BST 5,3,7,2,4,8>", detail: "6 nodes inserted", output: null },
      { highlight: 8, label: "\u2014", value: "\u2014", detail: "search 4", output: "True" },
      { highlight: 9, label: "\u2014", value: "\u2014", detail: "search 9", output: "False" },
    ],
  },
  classes: {
    codeLines: ["class Dog:", "    def __init__(self, n):", "        self.name = n", "    def bark(self):", "        return f\"{self.name} says woof!\"", "", "d = Dog('Rex')", "msg = d.bark()", "print(msg)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "Dog", value: "<class Dog>", detail: "class object created", output: null },
      { highlight: 7, label: "d", value: "Dog(\"Rex\")", detail: "instance created", output: null },
      { highlight: 8, label: "msg", value: "\"Rex says woof!\"", detail: "d.bark() called", output: null },
      { highlight: 9, label: "\u2014", value: "\u2014", detail: "\u2014", output: "Rex says woof!" },
    ],
  },
  "context-managers": {
    codeLines: ["with open('example.txt', 'w') as f:", "    f.write('Hello, world!')", "", "class ManagedResource:", "    def __enter__(self):", "        print('Acquiring resource')", "        return self", "    def __exit__(self, *args):", "        print('Releasing resource')", "        return False", "", "with ManagedResource() as r:", "    print('Using resource')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "\u2014", value: "\u2014", detail: "open with context manager", output: null },
      { highlight: 4, label: "ManagedResource", value: "<class>", detail: "custom context manager", output: null },
      { highlight: 5, label: "__enter__", value: "<method>", detail: "called on with entry", output: null },
      { highlight: 8, label: "__exit__", value: "<method>", detail: "called on with exit", output: null },
      { highlight: 12, label: "\u2014", value: "\u2014", detail: "\u2014", output: "Acquiring resource\nUsing resource\nReleasing resource" },
    ],
  },
  "data-types": {
    codeLines: ["age = 25", "price = 19.99", "", "name = \"Python\"", "", "is_fun = True", "", "result = None", "", "print(type(age), type(name), type(is_fun))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "age", value: "25", detail: "int", output: null },
      { highlight: 2, label: "price", value: "19.99", detail: "float", output: null },
      { highlight: 3, label: "name", value: "\"Python\"", detail: "str", output: null },
      { highlight: 5, label: "is_fun", value: "True", detail: "bool", output: null },
      { highlight: 7, label: "result", value: "None", detail: "NoneType", output: null },
      { highlight: 9, label: "\u2014", value: "\u2014", detail: "\u2014", output: "<class 'int'>\n<class 'str'>\n<class 'bool'>" },
    ],
  },
  decorators: {
    codeLines: ["def timer(f):", "    def wrapper(*a, **kw):", "        print('start')", "        r = f(*a, **kw)", "        print('end')", "        return r", "    return wrapper", "", "@timer", "def hello():", "    return 'hi'", "", "result = hello()", "print(result)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "timer", value: "<function>", detail: "decorator defined", output: null },
      { highlight: 9, label: "hello", value: "wrapper function", detail: "@timer replaced hello with wrapper", output: null },
      { highlight: 12, label: "result", value: "'hi'", detail: "wrapper called original hello", output: null },
      { highlight: 13, label: "\u2014", value: "\u2014", detail: "\u2014", output: "start\nend\nhi" },
    ],
  },
  deque: {
    codeLines: ["from collections import deque", "dq = deque([1, 2, 3])", "dq.appendleft(0)", "dq.append(4)", "left = dq.popleft()", "right = dq.pop()", "dq.rotate(1)", "print(dq)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 2, label: "dq", value: "deque([1,2,3])", detail: "initial deque", output: null },
      { highlight: 3, label: "dq", value: "deque([0,1,2,3])", detail: "appendleft 0", output: null },
      { highlight: 4, label: "dq", value: "deque([0,1,2,3,4])", detail: "append 4", output: null },
      { highlight: 5, label: "left", value: "0", detail: "popleft()", output: null },
      { highlight: 6, label: "right", value: "4", detail: "pop()", output: null },
      { highlight: 7, label: "dq", value: "deque([3,1,2])", detail: "rotate(1) shifts right", output: null },
      { highlight: 8, label: "\u2014", value: "\u2014", detail: "\u2014", output: "deque([3, 1, 2])" },
    ],
  },
  dfs: {
    codeLines: ["graph = {", "    'A': ['B', 'C'],", "    'B': ['D'],", "    'C': ['E'],", "    'D': [], 'E': []", "}", "", "def dfs(g, n, v=None):", "    if v is None: v = set()", "    v.add(n)", "    print(n, end=' ')", "    for nb in g[n]:", "        if nb not in v: dfs(g, nb, v)", "", "dfs(graph, 'A')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "graph", value: "<adj list>", detail: "5 vertices", output: null },
      { highlight: 8, label: "dfs", value: "<function>", detail: "defined", output: null },
      { highlight: 15, label: "\u2014", value: "\u2014", detail: "DFS from A", output: "A B D C E" },
    ],
  },
  dictionaries: {
    codeLines: ["user = {\"name\": \"Alice\", \"age\": 25}", "user[\"age\"] = 26", "user[\"city\"] = \"NYC\"", "", "has = \"name\" in user", "keys = list(user.keys())", "val = user.get(\"salary\", 0)", "print(user, has, keys, val)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "user", value: "{name:Alice, age:25}", detail: "dict (2 entries)", output: null },
      { highlight: 2, label: "user", value: "{name:Alice, age:26}", detail: "age updated from 25 to 26", output: null },
      { highlight: 3, label: "user", value: "{name:Alice, age:26, city:NYC}", detail: "added new key city", output: null },
      { highlight: 5, label: "has", value: "True", detail: "'name' in user", output: null },
      { highlight: 6, label: "keys", value: "['name', 'age', 'city']", detail: "list of keys", output: null },
      { highlight: 7, label: "val", value: "0", detail: ".get() default", output: null },
      { highlight: 8, label: "\u2014", value: "\u2014", detail: "\u2014", output: "{'name': 'Alice', 'age': 26, 'city': 'NYC'} True ['name', 'age', 'city'] 0" },
    ],
  },
  "dicts-deep": {
    codeLines: ["# dict internals under the hood", "d = {} ", "d['apple'] = 1", "d['banana'] = 2", "d['cherry'] = 3", "print('hash(apple):', hash('apple'))", "print('hash(banana):', hash('banana'))", "", "# dict view objects", "print(d.keys())", "print(d.values())", "print(d.items())", "", "# dict comprehension", "squares = {x: x*x for x in range(5)}", "print(squares)", "", "# defaultdict example", "from collections import defaultdict", "dd = defaultdict(list)", "dd['group_a'].append(1)", "dd['group_a'].append(2)", "print(dd)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 2, label: "d", value: "{}", detail: "empty dict (PyDictObject)", output: null },
      { highlight: 3, label: "d", value: "{apple:1}", detail: "hash \u2192 index \u2192 insert O(1) avg", output: null },
      { highlight: 8, label: "\u2014", value: "\u2014", detail: "view objects", output: "dict_keys(['apple', 'banana', 'cherry'])" },
      { highlight: 12, label: "squares", value: "{0:0,1:1,2:4,3:9,4:16}", detail: "dict comprehension", output: null },
      { highlight: 16, label: "dd", value: "{group_a:[1,2]}", detail: "defaultdict(list) auto-creates on missing key", output: null },
      { highlight: 18, label: "\u2014", value: "\u2014", detail: "\u2014", output: "{'group_a': [1, 2]}" },
    ],
  },
  "dynamic-arrays": {
    codeLines: ["nums = []", "nums.append(10)", "nums.append(20)", "nums.append(30)", "nums.append(40)", "nums.append(50)", "print(nums)", "print(len(nums))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "nums", value: "[]", detail: "cap=0", output: null },
      { highlight: 2, label: "nums", value: "[10]", detail: "cap=4 (resize 0\u21924)", output: null },
      { highlight: 5, label: "nums", value: "[10,20,30,40]", detail: "cap=4, 4 items", output: null },
      { highlight: 6, label: "nums", value: "[10,20,30,40,50]", detail: "cap=8 (resize 4\u21928)", output: null },
      { highlight: 7, label: "\u2014", value: "\u2014", detail: "\u2014", output: "[10, 20, 30, 40, 50]" },
      { highlight: 8, label: "\u2014", value: "\u2014", detail: "\u2014", output: "5" },
    ],
  },
  "dynamic-programming": {
    codeLines: ["def fib_memo(n, memo={}):", "    if n in memo: return memo[n]", "    if n <= 1: return n", "    memo[n] = fib_memo(n-1,memo)+fib_memo(n-2,memo)", "    return memo[n]", "", "def fib_tab(n):", "    if n <= 1: return n", "    dp = [0]*(n+1); dp[1]=1", "    for i in range(2, n+1):", "        dp[i] = dp[i-1] + dp[i-2]", "    return dp[n]", "", "print(fib_memo(50))", "print(fib_tab(50))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "fib_memo", value: "<function>", detail: "top-down DP", output: null },
      { highlight: 7, label: "fib_tab", value: "<function>", detail: "bottom-up DP", output: null },
      { highlight: 14, label: "\u2014", value: "\u2014", detail: "memoized", output: "12586269025" },
      { highlight: 15, label: "\u2014", value: "\u2014", detail: "tabulated", output: "12586269025" },
    ],
  },
  "fenwick-tree": {
    codeLines: ["class FenwickTree:", "    def __init__(self, n):", "        self.n = n; self.bit = [0]*(n+1)", "    def update(self, i, delta):", "        while i <= self.n:", "            self.bit[i] += delta", "            i += i & -i", "    def query(self, i):", "        res = 0", "        while i > 0:", "            res += self.bit[i]; i -= i & -i", "        return res", "", "ft = FenwickTree(5)", "for idx, v in enumerate([1,3,2,5,4], 1):", "    ft.update(idx, v)", "print(ft.query(3))", "print(ft.query(5))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "FenwickTree", value: "<class>", detail: "BIT \u2014 point updates, prefix queries", output: null },
      { highlight: 15, label: "ft", value: "BIT(5)", detail: "internal: [0,1,4,2,11,4]", output: null },
      { highlight: 17, label: "\u2014", value: "\u2014", detail: "prefix sum up to index 3", output: "6" },
      { highlight: 18, label: "\u2014", value: "\u2014", detail: "prefix sum up to index 5", output: "15" },
    ],
  },
  functions: {
    codeLines: ["def square(x):", "    return x * x", "", "def add(a, b):", "    return a + b", "", "result = square(5)", "sum = add(3, 4)", "print(result, sum)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "square", value: "<function>", detail: "function object defined", output: null },
      { highlight: 4, label: "add", value: "<function>", detail: "function object defined", output: null },
      { highlight: 7, label: "result", value: "25", detail: "square(5) = 25", output: null },
      { highlight: 8, label: "sum", value: "7", detail: "add(3, 4) = 7", output: null },
      { highlight: 9, label: "\u2014", value: "\u2014", detail: "\u2014", output: "25 7" },
    ],
  },
  generators: {
    codeLines: ["def count_up(n):", "    i = 0", "    while i < n:", "        yield i", "        i += 1", "", "gen = count_up(3)", "val = next(gen)", "print(val)", "for v in gen:", "    print(v)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "count_up", value: "<function>", detail: "generator function defined", output: null },
      { highlight: 6, label: "gen", value: "<generator>", detail: "generator object created, body not started", output: null },
      { highlight: 7, label: "val", value: "0", detail: "first next() runs to first yield", output: null },
      { highlight: 8, label: "\u2014", value: "\u2014", detail: "\u2014", output: "0" },
      { highlight: 9, label: "\u2014", value: "\u2014", detail: "for loop iterates remaining: 1 2", output: "0\n1\n2" },
    ],
  },
  graph: {
    codeLines: ["graph = {", "    'A': ['B', 'C'],", "    'B': ['A', 'D', 'E'],", "    'C': ['A', 'F'],", "    'D': ['B'],", "    'E': ['B', 'F'],", "    'F': ['C', 'E'],", "}", "", "def bfs(g, start):", "    visited = {start}", "    q = deque([start])", "    while q:", "        node = q.popleft()", "        print(node, end=' ')", "        for nbr in g[node]:", "            if nbr not in visited:", "                visited.add(nbr)", "                q.append(nbr)", "", "bfs(graph, 'A')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "graph", value: "<adjacency list>", detail: "6 vertices, 7 edges", output: null },
      { highlight: 20, label: "\u2014", value: "\u2014", detail: "BFS from A", output: "A B C D E F" },
    ],
  },
  greedy: {
    codeLines: ["def coin_change(amt, coins=[25,10,5,1]):", "    result = []", "    for c in coins:", "        while amt >= c:", "            amt -= c", "            result.append(c)", "    return result", "", "print(coin_change(67))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "coin_change", value: "<function>", detail: "greedy algorithm", output: null },
      { highlight: 9, label: "\u2014", value: "\u2014", detail: "67 cents in US coins", output: "[25, 25, 10, 5, 1, 1]" },
    ],
  },
  "hash-table": {
    codeLines: ["table = {}", "table[\"name\"] = \"Alice\"", "table[\"age\"] = 25", "table[\"city\"] = \"NYC\"", "val = table[\"name\"]", "del table[\"city\"]", "print(table)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "table", value: "{}", detail: "empty hash table", output: null },
      { highlight: 2, label: "table", value: "{name:Alice}", detail: "hash('name') \u2192 bucket", output: null },
      { highlight: 3, label: "table", value: "{name:Alice, age:25}", detail: "hash('age') \u2192 bucket", output: null },
      { highlight: 5, label: "val", value: "'Alice'", detail: "O(1) lookup", output: null },
      { highlight: 7, label: "\u2014", value: "\u2014", detail: "\u2014", output: "{'name': 'Alice', 'age': 25}" },
    ],
  },
  heap: {
    codeLines: ["import heapq", "heap = []", "heapq.heappush(heap, 5)", "heapq.heappush(heap, 1)", "heapq.heappush(heap, 3)", "smallest = heapq.heappop(heap)", "print(smallest, heap)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 2, label: "heap", value: "[]", detail: "empty heap", output: null },
      { highlight: 3, label: "heap", value: "[5]", detail: "push 5", output: null },
      { highlight: 4, label: "heap", value: "[1,5]", detail: "push 1 \u2192 sifts up above 5", output: null },
      { highlight: 5, label: "heap", value: "[1,5,3]", detail: "push 3", output: null },
      { highlight: 6, label: "smallest", value: "1", detail: "pop root \u2192 sift down", output: null },
      { highlight: 7, label: "\u2014", value: "\u2014", detail: "\u2014", output: "1 [3, 5]" },
    ],
  },
  iterators: {
    codeLines: ["nums = [1, 2, 3]", "it = iter(nums)", "print(next(it))", "print(next(it))", "", "class Counter:", "    def __init__(self, limit):", "        self.limit = limit; self.n = 0", "    def __iter__(self):", "        return self", "    def __next__(self):", "        if self.n >= self.limit: raise StopIteration", "        self.n += 1", "        return self.n - 1", "", "c = Counter(3)", "for val in c:", "    print(val)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "nums", value: "[1,2,3]", detail: "iterable list", output: null },
      { highlight: 2, label: "it", value: "<list_iterator>", detail: "iterator object from iter()", output: null },
      { highlight: 3, label: "\u2014", value: "\u2014", detail: "next(it)", output: "1" },
      { highlight: 4, label: "\u2014", value: "\u2014", detail: "next(it)", output: "2" },
      { highlight: 6, label: "Counter", value: "<class>", detail: "custom iterator implementing __iter__ + __next__", output: null },
      { highlight: 17, label: "\u2014", value: "\u2014", detail: "for loop uses __next__ until StopIteration", output: "0\n1\n2" },
    ],
  },
  "linear-search": {
    codeLines: ["def linear_search(arr, target):", "    for i in range(len(arr)):", "        if arr[i] == target:", "            return i", "    return -1", "", "arr = [4, 2, 7, 1, 9, 3]", "idx = linear_search(arr, 7)", "print(f'Found 7 at index {idx}')", "idx = linear_search(arr, 5)", "print(f'Found 5 at index {idx}')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "linear_search", value: "<function>", detail: "O(n) \u2014 checks each element", output: null },
      { highlight: 8, label: "idx", value: "2", detail: "found 7 at index 2", output: null },
      { highlight: 11, label: "idx", value: "-1", detail: "5 not in array", output: null },
      { highlight: 10, label: "\u2014", value: "\u2014", detail: "\u2014", output: "Found 7 at index 2\nFound 5 at index -1" },
    ],
  },
  "linear-sorting": {
    codeLines: ["def counting_sort(arr, k):", "    count = [0] * (k + 1)", "    for x in arr: count[x] += 1", "    i = 0", "    for val in range(k + 1):", "        for _ in range(count[val]):", "            arr[i] = val; i += 1", "    return arr", "", "arr = [4, 2, 2, 8, 3, 3, 1]", "print('Original:', arr)", "print('Sorted:', counting_sort(arr, 8))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "counting_sort", value: "<function>", detail: "O(n+k) counting sort", output: null },
      { highlight: 9, label: "arr", value: "[4,2,2,8,3,3,1]", detail: "unsorted", output: null },
      { highlight: 11, label: "\u2014", value: "\u2014", detail: "\u2014", output: "Original: [4, 2, 2, 8, 3, 3, 1]\nSorted: [1, 2, 2, 3, 3, 4, 8]" },
    ],
  },
  "linked-list": {
    codeLines: ["class Node:", "    def __init__(self, v):", "        self.val = v", "        self.next = None", "", "n1 = Node(1)", "n2 = Node(2)", "n3 = Node(3)", "n1.next = n2", "n2.next = n3", "", "cur = n1", "while cur:", "    print(cur.val)", "    cur = cur.next"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "Node", value: "<class Node>", detail: "node blueprint", output: null },
      { highlight: 6, label: "n1", value: "Node(1)", detail: "head", output: null },
      { highlight: 7, label: "n2", value: "Node(2)", detail: "n1 \u2192 n2", output: null },
      { highlight: 8, label: "n3", value: "Node(3)", detail: "n2 \u2192 n3", output: null },
      { highlight: 12, label: "cur", value: "walks: 1\u21922\u21923", detail: "traversal", output: null },
      { highlight: 14, label: "\u2014", value: "\u2014", detail: "\u2014", output: "1\n2\n3" },
    ],
  },
  lists: {
    codeLines: ["nums = [10, 20, 30]", "nums.append(40)", "nums[1] = 25", "", "first = nums[0]", "last = nums.pop()", "length = len(nums)", "", "print(nums, last, length)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "nums", value: "[10, 20, 30]", detail: "list (3 items) @ 0x1000", output: null },
      { highlight: 2, label: "nums", value: "[10, 20, 30, 40]", detail: "append \u2192 4 items", output: null },
      { highlight: 3, label: "nums", value: "[10, 25, 30, 40]", detail: "index assignment", output: null },
      { highlight: 5, label: "first", value: "10", detail: "nums[0]", output: null },
      { highlight: 6, label: "last", value: "40", detail: "nums.pop()", output: null },
      { highlight: 7, label: "length", value: "3", detail: "len(nums)", output: null },
      { highlight: 9, label: "\u2014", value: "\u2014", detail: "\u2014", output: "[10, 25, 30] 40 3" },
    ],
  },
  mathematical: {
    codeLines: ["def gcd(a, b):", "    while b: a, b = b, a % b", "    return a", "", "def is_prime(n):", "    if n < 2: return False", "    for i in range(2, int(n**0.5)+1):", "        if n % i == 0: return False", "    return True", "", "import math", "print('GCD(48, 18):', gcd(48, 18))", "print('LCM(12, 15):', 12*15//gcd(12,15))", "print('Sieve primes under 20:', [n for n in range(20) if is_prime(n)])"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "gcd", value: "<function>", detail: "Euclidean algorithm O(log min(a,b))", output: null },
      { highlight: 5, label: "is_prime", value: "<function>", detail: "O(\u221an) primality test", output: null },
      { highlight: 12, label: "\u2014", value: "\u2014", detail: "\u2014", output: "GCD(48, 18): 6\nLCM(12, 15): 60\nSieve primes under 20: [2, 3, 5, 7, 11, 13, 17, 19]" },
    ],
  },
  "monotonic-stack": {
    codeLines: ["def next_greater_element(nums):", "    n = len(nums)", "    result = [-1] * n", "    stack = []", "    for i in range(n-1, -1, -1):", "        while stack and stack[-1] <= nums[i]:", "            stack.pop()", "        if stack: result[i] = stack[-1]", "        stack.append(nums[i])", "    return result", "", "arr = [2, 1, 5, 3, 4]", "print('Array:', arr)", "print('NGE:', next_greater_element(arr))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "next_greater_element", value: "<function>", detail: "monotonic decreasing stack O(n)", output: null },
      { highlight: 11, label: "arr", value: "[2,1,5,3,4]", detail: "input", output: null },
      { highlight: 13, label: "\u2014", value: "\u2014", detail: "each element \u2192 next greater to the right", output: "Array: [2, 1, 5, 3, 4]\nNGE: [5, 5, -1, 4, -1]" },
    ],
  },
  mst: {
    codeLines: ["from heapq import heappush, heappop", "", "def prim_mst(graph, start=0):", "    n = len(graph)", "    visited = [False] * n", "    pq = [(0, start, -1)]  # (weight, node, parent)", "    mst_cost = 0; mst_edges = []", "    while pq:", "        w, u, p = heappop(pq)", "        if visited[u]: continue", "        visited[u] = True", "        mst_cost += w", "        if p != -1: mst_edges.append((p, u, w))", "        for v, weight in graph[u]:", "            if not visited[v]: heappush(pq, (weight, v, u))", "    return mst_cost, mst_edges", "", "g = [[(1,1),(2,4),(3,3)],[(0,1),(2,2),(3,5)],[(0,4),(1,2),(3,6)],[(0,3),(1,5),(2,6)]]", "cost, edges = prim_mst(g)", "print(f'MST cost: {cost}, edges: {edges}')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 3, label: "prim_mst", value: "<function>", detail: "Prim's algorithm O(E log V)", output: null },
      { highlight: 18, label: "cost", value: "6", detail: "minimum spanning tree cost", output: null },
      { highlight: 19, label: "\u2014", value: "\u2014", detail: "\u2014", output: "MST cost: 6, edges: [(0, 1, 1), (0, 3, 3), (1, 2, 2)]" },
    ],
  },
  "n-queens": {
    codeLines: ["def solve_n_queens(n):", "    def backtrack(r, cols, diag1, diag2, board):", "        if r == n:", "            result.append([''.join(row) for row in board])", "            return", "        for c in range(n):", "            if c in cols or (r-c) in diag1 or (r+c) in diag2:", "                continue", "            board[r][c] = 'Q'", "            cols.add(c); diag1.add(r-c); diag2.add(r+c)", "            backtrack(r+1, cols, diag1, diag2, board)", "            board[r][c] = '.'", "            cols.remove(c); diag1.remove(r-c); diag2.remove(r+c)", "    result = []", "    board = [['.']*n for _ in range(n)]", "    backtrack(0, set(), set(), set(), board)", "    return result", "", "solutions = solve_n_queens(4)", "print(f'Found {len(solutions)} solutions:')", "for sol in solutions:", "    for row in sol: print(row)", "    print()"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "solve_n_queens", value: "<function>", detail: "backtracking N-Queens solver", output: null },
      { highlight: 18, label: "solutions", value: "2 solutions (4\u00d74)", detail: "N-Queens count for n=4", output: null },
      { highlight: 21, label: "\u2014", value: "\u2014", detail: "\u2014", output: "Found 2 solutions:\n.Q..\n...Q\nQ...\n..Q.\n\n..Q.\nQ...\n...Q\n.Q.." },
    ],
  },
  "prefix-sum": {
    codeLines: ["def prefix_sum(arr):", "    n = len(arr)", "    pref = [0] * n", "    pref[0] = arr[0]", "    for i in range(1, n):", "        pref[i] = pref[i-1] + arr[i]", "    return pref", "", "def range_sum(pref, l, r):", "    if l == 0: return pref[r]", "    return pref[r] - pref[l-1]", "", "arr = [3, 1, 4, 1, 5, 9, 2, 6]", "pref = prefix_sum(arr)", "print('Prefix:', pref)", "print('Sum [2,5]:', range_sum(pref, 2, 5))", "print('Sum [0,3]:', range_sum(pref, 0, 3))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "prefix_sum", value: "<function>", detail: "O(n) prefix sums", output: null },
      { highlight: 13, label: "arr", value: "[3,1,4,1,5,9,2,6]", detail: "input array", output: null },
      { highlight: 14, label: "pref", value: "[3,4,8,9,14,23,25,31]", detail: "prefix sums", output: null },
      { highlight: 15, label: "\u2014", value: "\u2014", detail: "sum arr[2]+arr[3]+arr[4]+arr[5]", output: "Prefix: [3, 4, 8, 9, 14, 23, 25, 31]\nSum [2,5]: 19\nSum [0,3]: 9" },
    ],
  },
  "problem-patterns": {
    codeLines: ["# Two-pointer: find pair summing to target", "def two_sum_sorted(arr, target):", "    l, r = 0, len(arr)-1", "    while l < r:", "        s = arr[l] + arr[r]", "        if s == target: return [l, r]", "        elif s < target: l += 1", "        else: r -= 1", "    return [-1, -1]", "", "# Sliding window: max sum subarray of size k", "def max_sum_subarray(arr, k):", "    window_sum = sum(arr[:k])", "    max_sum = window_sum", "    for i in range(k, len(arr)):", "        window_sum += arr[i] - arr[i-k]", "        max_sum = max(max_sum, window_sum)", "    return max_sum", "", "print(two_sum_sorted([1,3,5,7,9], 10))", "print(max_sum_subarray([2,1,5,1,3,2], 3))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 2, label: "two_sum_sorted", value: "<function>", detail: "two-pointer O(n)", output: null },
      { highlight: 12, label: "max_sum_subarray", value: "<function>", detail: "sliding window O(n)", output: null },
      { highlight: 20, label: "\u2014", value: "\u2014", detail: "pair summing to 10", output: "[1, 3]" },
      { highlight: 21, label: "\u2014", value: "\u2014", detail: "max sum of 3 consecutive", output: "9" },
    ],
  },
  queue: {
    codeLines: ["from collections import deque", "q = deque()", "q.append(10)", "q.append(20)", "q.append(30)", "first = q.popleft()", "print(q, first)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 2, label: "q", value: "deque([])", detail: "empty queue", output: null },
      { highlight: 3, label: "q", value: "deque([10])", detail: "enqueue 10", output: null },
      { highlight: 4, label: "q", value: "deque([10,20])", detail: "enqueue 20", output: null },
      { highlight: 5, label: "q", value: "deque([10,20,30])", detail: "enqueue 30", output: null },
      { highlight: 6, label: "first", value: "10", detail: "dequeue (popleft)", output: null },
      { highlight: 7, label: "\u2014", value: "\u2014", detail: "\u2014", output: "deque([20, 30]) 10" },
    ],
  },
  recursion: {
    codeLines: ["def fact(n):", "    if n <= 1: return 1", "    return n * fact(n - 1)", "", "result = fact(5)", "print(result)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "fact", value: "<function>", detail: "function object", output: null },
      { highlight: 4, label: "result", value: "120", detail: "fact(5) = 5*4*3*2*1", output: null },
      { highlight: 5, label: "\u2014", value: "\u2014", detail: "\u2014", output: "120" },
    ],
  },
  "recursion-deep": {
    codeLines: ["def fibonacci(n):", "    if n <= 1: return n", "    return fibonacci(n-1) + fibonacci(n-2)", "", "def tower_of_hanoi(n, src, aux, dst):", "    if n == 0: return", "    tower_of_hanoi(n-1, src, dst, aux)", "    print(f'Move disk {n} from {src} to {dst}')", "    tower_of_hanoi(n-1, aux, src, dst)", "", "print('Fibonacci(6):', fibonacci(6))", "print()", "tower_of_hanoi(3, 'A', 'B', 'C')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "fibonacci", value: "<function>", detail: "naive recursion O(2\u207f)", output: null },
      { highlight: 5, label: "tower_of_hanoi", value: "<function>", detail: "recursive Tower of Hanoi", output: null },
      { highlight: 11, label: "\u2014", value: "\u2014", detail: "fib(6) = 8", output: "Fibonacci(6): 8" },
      { highlight: 13, label: "\u2014", value: "\u2014", detail: "3 disks from A to C", output: "\nMove disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C" },
    ],
  },
  "red-black-tree": {
    codeLines: ["# Red-Black Tree properties:", "# 1) Root is black", "# 2) Red nodes have black children", "# 3) All paths have same black height", "", "class RBNode:", "    def __init__(self, val):", "        self.val = val", "        self.red = True  # new nodes are red", "        self.left = None; self.right = None; self.parent = None", "", "def rotate_left(root, x):", "    y = x.right", "    x.right = y.left", "    if y.left: y.left.parent = x", "    y.parent = x.parent", "    y.left = x; x.parent = y", "    return y", "", "print('Red-Black Tree: self-balancing BST')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 6, label: "RBNode", value: "<class>", detail: "node with color (red/black)", output: null },
      { highlight: 12, label: "rotate_left", value: "<function>", detail: "left rotation O(1)", output: null },
      { highlight: 20, label: "\u2014", value: "\u2014", detail: "\u2014", output: "Red-Black Tree: self-balancing BST" },
    ],
  },
  "segment-tree": {
    codeLines: ["class SegTree:", "    def __init__(self, arr):", "        n = len(arr)", "        self.tree = [0] * (4 * n)", "        self._build(arr, 1, 0, n-1)", "    def _build(self, arr, node, l, r):", "        if l == r: self.tree[node] = arr[l]; return", "        mid = (l + r) // 2", "        self._build(arr, node*2, l, mid)", "        self._build(arr, node*2+1, mid+1, r)", "        self.tree[node] = self.tree[node*2] + self.tree[node*2+1]", "    def query(self, node, l, r, ql, qr):", "        if ql > r or qr < l: return 0", "        if ql <= l and r <= qr: return self.tree[node]", "        mid = (l + r) // 2", "        return self.query(node*2,l,mid,ql,qr) + self.query(node*2+1,mid+1,r,ql,qr)", "", "arr = [1, 3, 5, 7, 9, 11]", "st = SegTree(arr)", "print(st.query(1, 0, 5, 1, 4))  # sum arr[1..4]"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "SegTree", value: "<class>", detail: "segment tree for range queries", output: null },
      { highlight: 18, label: "arr", value: "[1,3,5,7,9,11]", detail: "input", output: null },
      { highlight: 19, label: "st", value: "<SegTree>", detail: "tree built in O(n)", output: null },
      { highlight: 20, label: "\u2014", value: "\u2014", detail: "sum of arr[1]+arr[2]+arr[3]+arr[4] = 3+5+7+9", output: "24" },
    ],
  },
  sets: {
    codeLines: ["nums = {1, 2, 2, 3}", "nums.add(4)", "nums.add(2)", "", "has = 3 in nums", "other = {3, 4, 5}", "combined = nums | other", "print(nums, has, combined)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "nums", value: "{1, 2, 3}", detail: "set (duplicate 2 removed)", output: null },
      { highlight: 2, label: "nums", value: "{1, 2, 3, 4}", detail: "added 4", output: null },
      { highlight: 3, label: "nums", value: "{1, 2, 3, 4}", detail: "2 already there, no change", output: null },
      { highlight: 5, label: "has", value: "True", detail: "3 in nums", output: null },
      { highlight: 7, label: "combined", value: "{1, 2, 3, 4, 5}", detail: "union of nums and other", output: null },
      { highlight: 8, label: "\u2014", value: "\u2014", detail: "\u2014", output: "{1, 2, 3, 4} True {1, 2, 3, 4, 5}" },
    ],
  },
  "sets-deep": {
    codeLines: ["# Set operations in depth", "a = {1, 2, 3, 4, 5}", "b = {4, 5, 6, 7, 8}", "", "union = a | b", "inter = a & b", "diff_a = a - b", "sym_diff = a ^ b", "print(f'Union: {union}')", "print(f'Intersection: {inter}')", "print(f'Difference (a-b): {diff_a}')", "print(f'Symmetric diff: {sym_diff}')", "", "# Frozen set", "fs = frozenset([1, 2, 3])", "print(f'Frozen set: {fs}')", "", "# Set comprehensions", "squares = {x*x for x in range(-5, 6)}", "even_squares = {x*x for x in range(-5, 6) if x%2==0}", "print(f'Squares: {squares}')", "print(f'Even squares: {even_squares}')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 2, label: "a", value: "{1,2,3,4,5}", detail: "set A", output: null },
      { highlight: 3, label: "b", value: "{4,5,6,7,8}", detail: "set B", output: null },
      { highlight: 5, label: "union", value: "{1,2,3,4,5,6,7,8}", detail: "A | B \u2014 all elements", output: null },
      { highlight: 6, label: "inter", value: "{4,5}", detail: "A & B \u2014 common elements", output: null },
      { highlight: 7, label: "diff_a", value: "{1,2,3}", detail: "A - B \u2014 in A not in B", output: null },
      { highlight: 13, label: "fs", value: "frozenset({1,2,3})", detail: "immutable, hashable set", output: null },
      { highlight: 19, label: "\u2014", value: "\u2014", detail: "\u2014", output: "Union: {1, 2, 3, 4, 5, 6, 7, 8}\nIntersection: {4, 5}\nDifference (a-b): {1, 2, 3}\nSymmetric diff: {1, 2, 3, 6, 7, 8}\nFrozen set: frozenset({1, 2, 3})\nSquares: {0, 1, 4, 9, 16, 25}\nEven squares: {0, 4, 16}" },
    ],
  },
  "shortest-path": {
    codeLines: ["import heapq", "", "def dijkstra(graph, start):", "    n = len(graph)", "    dist = [float('inf')] * n", "    dist[start] = 0", "    pq = [(0, start)]", "    while pq:", "        d, u = heapq.heappop(pq)", "        if d > dist[u]: continue", "        for v, w in graph[u]:", "            nd = d + w", "            if nd < dist[v]:", "                dist[v] = nd", "                heapq.heappush(pq, (nd, v))", "    return dist", "", "graph = [[(1,4),(2,1)],[(3,1)],[(1,2),(3,5)],[(4,3)],[]]", "dist = dijkstra(graph, 0)", "print('Shortest distances from 0:', dist)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 3, label: "dijkstra", value: "<function>", detail: "Dijkstra's algorithm O((V+E) log V)", output: null },
      { highlight: 18, label: "dist", value: "[0,3,1,4,7]", detail: "shortest paths from vertex 0", output: null },
      { highlight: 19, label: "\u2014", value: "\u2014", detail: "\u2014", output: "Shortest distances from 0: [0, 3, 1, 4, 7]" },
    ],
  },
  "sliding-window": {
    codeLines: ["def max_sum_k(arr, k):", "    window_sum = sum(arr[:k])", "    max_sum = window_sum", "    for i in range(k, len(arr)):", "        window_sum += arr[i] - arr[i-k]", "        max_sum = max(max_sum, window_sum)", "    return max_sum", "", "def longest_substring_k_distinct(s, k):", "    char_count = {}", "    l = 0; max_len = 0", "    for r in range(len(s)):", "        char_count[s[r]] = char_count.get(s[r], 0) + 1", "        while len(char_count) > k:", "            char_count[s[l]] -= 1", "            if char_count[s[l]] == 0:", "                del char_count[s[l]]", "            l += 1", "        max_len = max(max_len, r - l + 1)", "    return max_len", "", "arr = [2, 1, 5, 1, 3, 2]", "print('Max sum of 3:', max_sum_k(arr, 3))", "print('Longest with 2 distinct:', longest_substring_k_distinct('eceba', 2))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "max_sum_k", value: "<function>", detail: "fixed-size sliding window O(n)", output: null },
      { highlight: 9, label: "longest_substring_k_distinct", value: "<function>", detail: "dynamic-size sliding window O(n)", output: null },
      { highlight: 22, label: "\u2014", value: "\u2014", detail: "subarray size 3 max sum", output: "Max sum of 3: 9" },
      { highlight: 23, label: "\u2014", value: "\u2014", detail: "longest substring with \u22642 distinct chars", output: "Longest with 2 distinct: 3" },
    ],
  },
  sorting: {
    codeLines: ["def bubble_sort(arr):", "    n = len(arr)", "    for i in range(n):", "        for j in range(n-i-1):", "            if arr[j] > arr[j+1]:", "                arr[j], arr[j+1] = arr[j+1], arr[j]", "    return arr", "", "nums = [3, 1, 4, 1, 5]", "print(bubble_sort(nums))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "bubble_sort", value: "<function>", detail: "defined", output: null },
      { highlight: 9, label: "nums", value: "[3,1,4,1,5]", detail: "unsorted", output: null },
      { highlight: 10, label: "\u2014", value: "\u2014", detail: "after sort", output: "[1, 1, 3, 4, 5]" },
    ],
  },
  "space-complexity": {
    codeLines: ["def constant_space(arr):", "    return sum(arr)  # O(1) space", "", "def linear_space(n):", "    return [i*i for i in range(n)]  # O(n) space", "", "def quadratic_space(n):", "    return [[i*j for j in range(n)] for i in range(n)]  # O(n\u00b2)", "", "def recursive_space(n):", "    if n <= 1: return n", "    return recursive_space(n-1) + recursive_space(n-2)  # O(n) call stack", "", "print('Space complexity analysis:')", "print('sum([1,2,3]):', constant_space([1,2,3]))", "print('len(linear):', len(linear_space(5)))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "constant_space", value: "<function>", detail: "O(1) \u2014 no extra memory proportional to input", output: null },
      { highlight: 4, label: "linear_space", value: "<function>", detail: "O(n) \u2014 stores n elements", output: null },
      { highlight: 7, label: "quadratic_space", value: "<function>", detail: "O(n\u00b2) \u2014 n\u00d7n matrix", output: null },
      { highlight: 10, label: "recursive_space", value: "<function>", detail: "O(n) \u2014 call stack depth", output: null },
      { highlight: 15, label: "\u2014", value: "\u2014", detail: "\u2014", output: "Space complexity analysis:\nsum([1,2,3]): 6\nlen(linear): 5" },
    ],
  },
  "sparse-table": {
    codeLines: ["import math", "", "class SparseTable:", "    def __init__(self, arr):", "        n = len(arr)", "        k = int(math.log2(n)) + 1", "        self.st = [[0]*k for _ in range(n)]", "        for i in range(n): self.st[i][0] = arr[i]", "        for j in range(1, k):", "            for i in range(n - (1<<j) + 1):", "                self.st[i][j] = min(self.st[i][j-1], self.st[i+(1<<(j-1))][j-1])", "    def query(self, l, r):", "        j = int(math.log2(r-l+1))", "        return min(self.st[l][j], self.st[r-(1<<j)+1][j])", "", "arr = [4, 2, 3, 7, 1, 5, 8, 6]", "st = SparseTable(arr)", "print(st.query(1, 4))  # min over arr[1..4]", "print(st.query(0, 7))  # min over entire array"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 4, label: "SparseTable", value: "<class>", detail: "RMQ in O(1) with O(n log n) preprocess", output: null },
      { highlight: 16, label: "arr", value: "[4,2,3,7,1,5,8,6]", detail: "input", output: null },
      { highlight: 18, label: "\u2014", value: "\u2014", detail: "minimum in [1..4]", output: "1" },
      { highlight: 19, label: "\u2014", value: "\u2014", detail: "minimum in [0..7]", output: "1" },
    ],
  },
  stack: {
    codeLines: ["stack = []", "stack.append(10)", "stack.append(20)", "stack.append(30)", "top = stack.pop()", "print(stack, top)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "stack", value: "[]", detail: "empty stack", output: null },
      { highlight: 2, label: "stack", value: "[10]", detail: "push 10", output: null },
      { highlight: 3, label: "stack", value: "[10,20]", detail: "push 20", output: null },
      { highlight: 4, label: "stack", value: "[10,20,30]", detail: "push 30 (top)", output: null },
      { highlight: 5, label: "top", value: "30", detail: "pop returns top", output: null },
      { highlight: 6, label: "\u2014", value: "\u2014", detail: "\u2014", output: "[10, 20] 30" },
    ],
  },
  "string-matching": {
    codeLines: ["def brute_force(text, pattern):", "    n, m = len(text), len(pattern)", "    for i in range(n - m + 1):", "        if text[i:i+m] == pattern:", "            return i", "    return -1", "", "def kmp_table(pattern):", "    lps = [0] * len(pattern)", "    j = 0", "    for i in range(1, len(pattern)):", "        while j > 0 and pattern[i] != pattern[j]:", "            j = lps[j-1]", "        if pattern[i] == pattern[j]:", "            j += 1; lps[i] = j", "    return lps", "", "text = 'ABABDABACDABABCABAB'", "pattern = 'ABABCABAB'", "print('Brute force index:', brute_force(text, pattern))", "print('KMP LPS table:', kmp_table(pattern))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "brute_force", value: "<function>", detail: "O(n\u00b7m) naive matching", output: null },
      { highlight: 7, label: "kmp_table", value: "<function>", detail: "KMP prefix function O(m)", output: null },
      { highlight: 19, label: "\u2014", value: "\u2014", detail: "pattern found at index 10", output: "Brute force index: 10" },
      { highlight: 20, label: "\u2014", value: "\u2014", detail: "longest prefix-suffix array", output: "KMP LPS table: [0, 0, 0, 0, 0, 1, 2, 3, 4]" },
    ],
  },
  strings: {
    codeLines: ["msg = \"Hello\"", "first = msg[0]", "sub = msg[1:4]", "", "length = len(msg)", "upper = msg.upper()", "", "print(first, sub, length, upper)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "msg", value: "\"Hello\"", detail: "str (5 chars) @ 0x1000", output: null },
      { highlight: 2, label: "first", value: "\"H\"", detail: "msg[0] \u2192 new str @ 0x1010", output: null },
      { highlight: 3, label: "sub", value: "\"ell\"", detail: "msg[1:4] \u2192 new str @ 0x1018", output: null },
      { highlight: 5, label: "length", value: "5", detail: "len(msg) \u2192 int @ 0x1020", output: null },
      { highlight: 6, label: "upper", value: "\"HELLO\"", detail: "msg.upper() \u2192 new str @ 0x1028", output: null },
      { highlight: 8, label: "\u2014", value: "\u2014", detail: "\u2014", output: "H ell 5 HELLO" },
    ],
  },
  "subsets-permutations": {
    codeLines: ["def subsets(nums):", "    result = []", "    def backtrack(start, path):", "        result.append(path.copy())", "        for i in range(start, len(nums)):", "            path.append(nums[i])", "            backtrack(i+1, path)", "            path.pop()", "    backtrack(0, [])", "    return result", "", "def permutations(nums):", "    result = []", "    def backtrack(path, remaining):", "        if not remaining: result.append(path.copy()); return", "        for i in range(len(remaining)):", "            path.append(remaining[i])", "            backtrack(path, remaining[:i] + remaining[i+1:])", "            path.pop()", "    backtrack([], nums)", "    return result", "", "print('Subsets of [1,2]:', subsets([1,2]))", "print('Permutations of [1,2]:', permutations([1,2]))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "subsets", value: "<function>", detail: "power set via backtracking O(2\u207f)", output: null },
      { highlight: 12, label: "permutations", value: "<function>", detail: "all permutations O(n!)", output: null },
      { highlight: 22, label: "\u2014", value: "\u2014", detail: "all subsets of [1,2]", output: "Subsets of [1,2]: [[], [1], [1, 2], [2]]" },
      { highlight: 23, label: "\u2014", value: "\u2014", detail: "all permutations of [1,2]", output: "Permutations of [1,2]: [[1, 2], [2, 1]]" },
    ],
  },
  "suffix-array": {
    codeLines: ["def build_suffix_array(s):", "    n = len(s)", "    suffixes = sorted((s[i:], i) for i in range(n))", "    return [idx for _, idx in suffixes]", "", "def build_lcp(s, sa):", "    n = len(s)", "    rank = [0]*n", "    for i, pos in enumerate(sa): rank[pos] = i", "    lcp = [0]*(n-1); k = 0", "    for i in range(n):", "        if rank[i] == n-1: k = 0; continue", "        j = sa[rank[i]+1]", "        while i+k < n and j+k < n and s[i+k] == s[j+k]: k += 1", "        lcp[rank[i]] = k", "        if k: k -= 1", "    return lcp", "", "text = 'banana'", "sa = build_suffix_array(text)", "print('Suffix array:', sa)", "print('Suffixes:')", "for i in sa: print(f'  {i}: {text[i:]}')"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "build_suffix_array", value: "<function>", detail: "O(n log n) suffix array construction", output: null },
      { highlight: 5, label: "build_lcp", value: "<function>", detail: "Kasai's LCP algorithm O(n)", output: null },
      { highlight: 19, label: "sa", value: "[5,3,1,0,4,2]", detail: "sorted suffix indices", output: null },
      { highlight: 22, label: "\u2014", value: "\u2014", detail: "sorted suffixes of 'banana'", output: "Suffix array: [5, 3, 1, 0, 4, 2]\nSuffixes:\n  5: a\n  3: ana\n  1: anana\n  0: banana\n  4: na\n  2: nana" },
    ],
  },
  "topological-sort": {
    codeLines: ["from collections import deque", "", "def topological_sort(graph):", "    n = len(graph)", "    in_degree = [0] * n", "    for u in range(n):", "        for v in graph[u]:", "            in_degree[v] += 1", "    q = deque([i for i in range(n) if in_degree[i] == 0])", "    result = []", "    while q:", "        u = q.popleft()", "        result.append(u)", "        for v in graph[u]:", "            in_degree[v] -= 1", "            if in_degree[v] == 0: q.append(v)", "    return result if len(result) == n else []  # detect cycle", "", "# DAG: 0\u21921, 0\u21922, 1\u21923, 2\u21923", "dag = [[1,2],[3],[3],[]]", "print(topological_sort(dag))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 3, label: "topological_sort", value: "<function>", detail: "Kahn's algorithm O(V+E)", output: null },
      { highlight: 19, label: "dag", value: "[[1,2],[3],[3],[]]", detail: "adjacency list", output: null },
      { highlight: 20, label: "\u2014", value: "\u2014", detail: "topological order", output: "[0, 1, 2, 3]" },
    ],
  },
  trees: {
    codeLines: ["class TreeNode:", "    def __init__(self, v):", "        self.val = v", "        self.left = None", "        self.right = None", "", "root = TreeNode(1)", "root.left = TreeNode(2)", "root.right = TreeNode(3)", "", "def inorder(node):", "    if not node: return", "    inorder(node.left)", "    print(node.val)", "    inorder(node.right)", "", "inorder(root)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "TreeNode", value: "<class>", detail: "node blueprint", output: null },
      { highlight: 7, label: "root", value: "Node(1)", detail: "root", output: null },
      { highlight: 8, label: "root.left", value: "Node(2)", detail: "left child", output: null },
      { highlight: 9, label: "root.right", value: "Node(3)", detail: "right child", output: null },
      { highlight: 17, label: "\u2014", value: "\u2014", detail: "inorder traversal", output: "2\n1\n3" },
    ],
  },
  trie: {
    codeLines: ["t = Trie()", "t.insert('hello')", "t.insert('help')", "print(t.search('hello'))", "print(t.search('hel'))", "print(t.starts_with('hel'))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "t", value: "<Trie>", detail: "empty trie", output: null },
      { highlight: 2, label: "t", value: "<Trie hello>", detail: "insert hello", output: null },
      { highlight: 3, label: "t", value: "<Trie hello, help>", detail: "insert help (shares prefix)", output: null },
      { highlight: 4, label: "\u2014", value: "\u2014", detail: "search hello", output: "True" },
      { highlight: 5, label: "\u2014", value: "\u2014", detail: "search hel (not a full word)", output: "False" },
      { highlight: 6, label: "\u2014", value: "\u2014", detail: "starts_with hel", output: "True" },
    ],
  },
  tuples: {
    codeLines: ["coords = (10, 20)", "x = coords[0]", "", "lat, lon = (40.71, -74.00)", "", "single = (5,)", "print(coords, x, lat, lon, single)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "coords", value: "(10, 20)", detail: "tuple (2 items)", output: null },
      { highlight: 2, label: "x", value: "10", detail: "coords[0]", output: null },
      { highlight: 4, label: "lat / lon", value: "40.71 / -74.00", detail: "unpacked from tuple", output: null },
      { highlight: 6, label: "single", value: "(5,)", detail: "1-item tuple (comma!)", output: null },
      { highlight: 7, label: "\u2014", value: "\u2014", detail: "\u2014", output: "(10, 20) 10 40.71 -74.0 (5,)" },
    ],
  },
  "two-pointers": {
    codeLines: ["def pair_sum(arr, target):", "    arr.sort()", "    l, r = 0, len(arr)-1", "    while l < r:", "        s = arr[l] + arr[r]", "        if s == target: return [arr[l], arr[r]]", "        elif s < target: l += 1", "        else: r -= 1", "    return []", "", "def remove_duplicates(arr):", "    if not arr: return 0", "    i = 0", "    for j in range(1, len(arr)):", "        if arr[j] != arr[i]:", "            i += 1; arr[i] = arr[j]", "    return i + 1", "", "arr = [1, 2, 3, 4, 5, 6]", "print('Pair sum 10:', pair_sum(arr, 10))", "nums = [0,0,1,1,1,2,2,3,3,4]", "print('Unique count:', remove_duplicates(nums))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "pair_sum", value: "<function>", detail: "two-pointer O(n log n) due to sort", output: null },
      { highlight: 11, label: "remove_duplicates", value: "<function>", detail: "in-place dedup O(n)", output: null },
      { highlight: 19, label: "\u2014", value: "\u2014", detail: "pair that sums to 10", output: "Pair sum 10: [4, 6]" },
      { highlight: 21, label: "\u2014", value: "\u2014", detail: "unique elements count", output: "Unique count: 5" },
    ],
  },
  "union-find": {
    codeLines: ["class UnionFind:", "    def __init__(self, n):", "        self.parent = list(range(n))", "        self.rank = [0] * n", "    def find(self, x):", "        if self.parent[x] != x:", "            self.parent[x] = self.find(self.parent[x])  # path compression", "        return self.parent[x]", "    def union(self, x, y):", "        px, py = self.find(x), self.find(y)", "        if px == py: return False", "        if self.rank[px] < self.rank[py]:", "            self.parent[px] = py", "        elif self.rank[px] > self.rank[py]:", "            self.parent[py] = px", "        else:", "            self.parent[py] = px; self.rank[px] += 1", "        return True", "", "uf = UnionFind(5)", "uf.union(0, 1); uf.union(2, 3); uf.union(1, 2)", "print('Connected(0,3):', uf.find(0) == uf.find(3))", "print('Connected(0,4):', uf.find(0) == uf.find(4))"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "UnionFind", value: "<class>", detail: "DSU with path compression + union by rank", output: null },
      { highlight: 19, label: "uf", value: "<UnionFind(5)>", detail: "5 disjoint sets initially", output: null },
      { highlight: 22, label: "\u2014", value: "\u2014", detail: "0 and 3 are in same set", output: "Connected(0,3): True" },
      { highlight: 23, label: "\u2014", value: "\u2014", detail: "0 and 4 are not connected", output: "Connected(0,4): False" },
    ],
  },
  variables: {
    codeLines: ["name = \"Alice\"", "age = 25", "height = 5.6", "is_student = True", "", "age = 26", "", "print(name, age, height, is_student)"],
    steps: [
      { highlight: null, label: "\u2014", value: "\u2014", detail: "\u2014", output: null },
      { highlight: 1, label: "name", value: "\"Alice\"", detail: "str @ 0x1000", output: null },
      { highlight: 2, label: "age", value: "25", detail: "int @ 0x1004", output: null },
      { highlight: 3, label: "height", value: "5.6", detail: "float @ 0x1008", output: null },
      { highlight: 4, label: "is_student", value: "True", detail: "bool @ 0x100C", output: null },
      { highlight: 6, label: "age", value: "26", detail: "int @ 0x1004 (reassigned)", output: null },
      { highlight: 8, label: "\u2014", value: "\u2014", detail: "\u2014", output: "Alice 26 5.6 True" },
    ],
  },
}
export function CodeSyncSection({ lesson }: Props) {
  const d = stepsMap[lesson.id] || stepsMap.variables
  const [stepIndex, setStepIndex] = useState(0)
  const step = d.steps[stepIndex]
  const isLastStep = stepIndex >= d.steps.length - 1
  const next = () => setStepIndex((s) => (isLastStep ? 0 : s + 1))

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-primary)" }}>Section 6 of 8</p>
        <h2 className="text-2xl font-semibold tracking-tight" style={{ letterSpacing: "-0.96px" }}>
          {lesson.id === "strings" ? "Strings in Action" : lesson.id === "data-types" ? "Types in Action" : "Code & Memory in Sync"}
        </h2>
        <p className="mt-2 text-sm" style={{ color: "var(--el-body)" }}>
          {lesson.id === "strings" ? "See indexing, slicing, and string methods execute line by line."
            : "Watch real Python code execute step by step."}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-muted)" }}>Code</p>
          <div className="rounded-md el-code text-sm leading-7 overflow-hidden" style={{ border: "1px solid var(--el-hairline)" }}>
            {d.codeLines.map((line, i) => {
              const isHighlighted = step.highlight === i + 1
              return (
                <div key={i} className="flex transition-colors duration-150"
                  style={{ backgroundColor: isHighlighted ? "var(--el-primary)" : "transparent", color: isHighlighted ? "#fff" : "var(--el-ink)" }}>
                  <span className="w-8 text-right pr-3 select-none" style={{ color: isHighlighted ? "rgba(255,255,255,0.6)" : "var(--el-muted)" }}>{i + 1}</span>
                  <span>{line}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-muted)" }}>Memory State</p>
          <div className="rounded-md p-5" style={{ border: "1px solid var(--el-hairline)", backgroundColor: "var(--el-surface-card)", minHeight: "200px" }}>
            <AnimatePresence mode="wait">
              {step.label === "\u2014" ? (
                <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm mt-4 text-center" style={{ color: "var(--el-muted)" }}>
                  Press &quot;Next Step&quot; to start
                </motion.p>
              ) : (
                <motion.div key={stepIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-4">
                  {step.output ? (
                    <div className="rounded-md p-4 text-sm el-code" style={{ backgroundColor: "var(--el-canvas-soft)", border: "1px solid var(--el-hairline)", color: "var(--el-success)" }}>
                      <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: "var(--el-muted)" }}>Output</p>
                      {step.output}
                    </div>
                  ) : (
                    <div className="flex items-center gap-4 rounded-md p-4" style={{ backgroundColor: "var(--el-canvas-soft)", border: "1px solid var(--el-hairline)" }}>
                      <div className="rounded-md px-4 py-2 text-center min-w-[70px]" style={{ border: "2px solid var(--el-primary)" }}>
                        <p className="text-lg font-bold el-code">{step.value}</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold el-code">{step.label}</p>
                        <p className="text-xs" style={{ color: "var(--el-muted)" }}>{step.detail}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button onClick={next} className="el-btn el-btn-primary !px-8">{isLastStep ? "\u21bb Restart" : "\u2192 Next Step"}</button>
        <span className="text-xs" style={{ color: "var(--el-muted)" }}>Step {stepIndex + 1} of {d.steps.length}</span>
      </div>
    </div>
  )
}
