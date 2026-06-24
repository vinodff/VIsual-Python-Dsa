"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lesson } from "@/types"

type Props = { lesson: Lesson }

const challengesMap: Record<string, { title: string; prompt: string; template: string; hint: string; check: (code: string) => boolean }[]> = {
  variables: [
    { title: "Swap two variables", prompt: "a = 5 and b = 10. Swap them so a becomes 10 and b becomes 5.", template: "a = 5\nb = 10\n\n# Write your swap code\n", hint: "a, b = b, a", check: (c) => c.includes("a, b = b, a") },
    { title: "Type conversion", prompt: "Create '42', convert to int, add 8.", template: 'text = "42"\n# Convert and add\n', hint: "int() converts strings to ints", check: (c) => c.includes("int(") },
  ],
  "data-types": [
    { title: "Find the types", prompt: "Create int, float, str, bool — print their types with type().", template: "my_int = 10\nmy_float = 3.14\nmy_str = \"hello\"\nmy_bool = True\n\nprint(type(my_int))\nprint(type(my_float))\nprint(type(my_str))\nprint(type(my_bool))\n", hint: "type() tells you the type", check: (c) => c.includes("type(") },
    { title: "Fixed vs dynamic", prompt: "Create a string, find its length with len().", template: 'name = "YourName"\n# Find length\nlength = len(name)\nprint(length)\n', hint: "len() returns character count", check: (c) => c.includes("len(") },
  ],
  strings: [
    { title: "Extract initials", prompt: "Create 'firstName' and 'lastName', then print the first character of each as initials.", template: 'first = "John"\nlast = "Doe"\n# Get initials and print them\n', hint: "Use [0] to get the first character of each string", check: (c) => c.includes("first[0]") || c.includes("[0]") },
    { title: "Palindrome check", prompt: "Create a string, reverse it, and check if it reads the same forwards and backwards.", template: 'word = "radar"\n# Reverse and compare\n', hint: "word[::-1] reverses a string. Use == to compare.", check: (c) => c.includes("::-1") || c.includes("reversed") },
  ],
  lists: [
    { title: "List from scratch", prompt: "Create a list of 3 numbers, add a 4th with append(), then print the list.", template: "numbers = [1, 2, 3]\n# Add 4 and print\n", hint: "Use .append() to add, print() to display", check: (c) => c.includes("append") },
    { title: "Reverse a list", prompt: "Create a list [1, 2, 3, 4, 5] and print it reversed without using .reverse().", template: "items = [1, 2, 3, 4, 5]\n# Reverse and print\n", hint: "Use slicing: items[::-1]", check: (c) => c.includes("::-1") || c.includes("reversed(") },
  ],
  tuples: [
    { title: "Swap without temp", prompt: "Use tuple unpacking to swap the values of a and b in one line.", template: "a = 5\nb = 10\n# Swap a and b in one line\n", hint: "Use a, b = b, a", check: (c) => c.includes("a, b =") || c.includes("a,b=") },
    { title: "Named coordinates", prompt: "Create a tuple (x, y, z) and unpack it into three variables. Print them.", template: "# Create a 3D point tuple and unpack it\n", hint: "point = (1, 2, 3); x, y, z = point", check: (c) => c.includes("=") && c.includes(",") },
  ],
  sets: [
    { title: "Remove duplicates", prompt: "Given a list with duplicates, convert it to a set then back to a list.", template: "items = [1, 2, 2, 3, 3, 3, 4]\n# Convert to set, then back to list\n", hint: "Use set(items) then list()", check: (c) => c.includes("set(") && c.includes("list(") },
    { title: "Find common elements", prompt: "Find the intersection of two lists using sets.", template: "a = [1, 2, 3, 4]\nb = [3, 4, 5, 6]\n# Find common elements\n", hint: "Convert to sets and use &", check: (c) => c.includes("&") || c.includes("intersection") },
  ],
  dictionaries: [
    { title: "Word counter", prompt: "Count how many times each word appears in a sentence using a dict.", template: "sentence = 'the cat in the hat'\n# Count word frequencies\n", hint: "Split the sentence, loop, use dict.get(word, 0) + 1", check: (c) => c.includes("get(") || c.includes("Counter") },
    { title: "Phonebook", prompt: "Create a phonebook dict, add 3 entries, then look up and print one.", template: "# Create phonebook with 3 entries\n# Print one entry\n", hint: "phonebook = {'Alice': '1234'}; print(phonebook['Alice'])", check: (c) => c.includes("[") && c.includes("]") && c.includes("print") },
  ],
  functions: [
    { title: "Temperature converter", prompt: "Write a function that converts Fahrenheit to Celsius.", template: "def f_to_c(f):\n    # Convert and return\n", hint: "Formula: (f - 32) * 5/9", check: (c) => c.includes("return") },
    { title: "is_even", prompt: "Write a function that returns True if a number is even, False otherwise.", template: "def is_even(n):\n    # Return True if even\n", hint: "Use n % 2 == 0", check: (c) => c.includes("return") && (c.includes("% 2") || c.includes("& 1")) },
  ],
  recursion: [
    { title: "Factorial function", prompt: "Write a recursive factorial function.", template: "def factorial(n):\n    # recursive\n", hint: "Base case: n <= 1 returns 1", check: (c) => c.includes("return") && c.includes("factorial(") },
    { title: "Sum a list", prompt: "Write a recursive function to sum all numbers in a list.", template: "def sum_list(nums):\n    # recursive sum\n", hint: "Base case: empty list returns 0", check: (c) => c.includes("return") && c.includes("[") },
  ],
  classes: [
    { title: "Bank account", prompt: "Create a BankAccount class with deposit, withdraw, and balance.", template: "class BankAccount:\n    def __init__(self):\n        self.balance = 0\n    # add deposit and withdraw methods\n", hint: "deposit adds to balance, withdraw subtracts (check for insufficient funds)", check: (c) => c.includes("class") && c.includes("def") },
    { title: "Inherit a shape", prompt: "Create a Rectangle class and a Square subclass that inherits from it.", template: "class Rectangle:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def area(self):\n        return self.w * self.h\n\n# Create Square that inherits from Rectangle\n", hint: "class Square(Rectangle): pass", check: (c) => c.includes("class Square") && c.includes("(") },
  ],
  decorators: [
    { title: "Logging decorator", prompt: "Write a decorator that prints 'Calling function_name' before each call.", template: "def log_calls(func):\n    # define wrapper\n", hint: "Use *args, **kwargs and print(func.__name__)", check: (c) => c.includes("def wrapper") || c.includes("def inner") },
    { title: "Double results", prompt: "Write a decorator that doubles the return value of any function.", template: "def double(func):\n    # return wrapper that doubles result\n", hint: "Call func, then multiply result by 2", check: (c) => c.includes("return") && c.includes("* 2") },
  ],
  generators: [
    { title: "Even numbers", prompt: "Write a generator that yields even numbers up to n.", template: "def evens(n):\n    # yield even numbers up to n\n", hint: "Loop with range(0, n+1, 2) and yield each", check: (c) => c.includes("yield") && c.includes("even") },
    { title: "Fibonacci generator", prompt: "Write a generator that yields Fibonacci numbers forever.", template: "def fib():\n    # infinite Fibonacci generator\n", hint: "a, b = 0, 1; while True: yield a; a, b = b, a+b", check: (c) => c.includes("yield") && c.includes("while") },
  ],
  iterators: [
    { title: "Custom range iterator", prompt: "Create a class MyRange that implements __iter__ and __next__ to yield numbers from 0 to n-1.", template: "class MyRange:\n    def __init__(self, n):\n        self.n = n\n        self.current = 0\n    def __iter__(self):\n        return self\n    def __next__(self):\n        # return next value or raise StopIteration\n", hint: "If self.current >= self.n, raise StopIteration. Otherwise increment and return.", check: (c) => c.includes("__next__") && c.includes("StopIteration") },
    { title: "Generator expression", prompt: "Create a generator expression that yields squares of numbers 0..9, then sum them.", template: "squares = (x*x for x in range(10))\n# Sum the squares\nresult = sum(squares)\nprint(result)\n", hint: "sum() consumes the generator. You can also write it as sum(x*x for x in range(10)).", check: (c) => c.includes("sum(") && c.includes("for") },
  ],
  "context-managers": [
    { title: "Timer context manager", prompt: "Write a context manager that prints how long a block took to execute.", template: "import time\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    def __exit__(self, *args):\n        elapsed = time.time() - self.start\n        print(f\"Elapsed: {elapsed:.3f}s\")\n\nwith Timer():\n    sum(range(1000000))\n", hint: "__enter__ saves start time, __exit__ computes and prints the difference.", check: (c) => c.includes("__enter__") && c.includes("__exit__") },
    { title: "File line counter", prompt: "Create a context manager that opens a file and counts lines in the body.", template: 'class LineCounter:\n    def __enter__(self):\n        self.file = open("data.txt")\n        return self.file\n    def __exit__(self, *args):\n        self.file.close()\n\nwith LineCounter() as f:\n    lines = len(f.readlines())\n    print(f"Lines: {lines}")\n', hint: "__enter__ opens and returns the file handle; __exit__ closes it.", check: (c) => c.includes("with") && (c.includes("__enter__") || c.includes("open(")) },
  ],
  arrays: [
    { title: "Reverse an array", prompt: "Reverse the elements of an array in-place.", template: "from array import array\nnums = array('i', [1, 2, 3, 4, 5])\n# Reverse nums in-place\n", hint: "Swap first and last, move inward", check: (c) => c.includes("reverse") || (c.includes("[") && c.includes("]") && c.includes("=")) },
    { title: "Find max", prompt: "Find the maximum value in an array without using max().", template: "from array import array\nnums = array('i', [3, 7, 2, 9, 1])\n# Find max\n", hint: "Loop and track the largest seen", check: (c) => c.includes("for") || c.includes("while") },
  ],
  "dynamic-arrays": [
    { title: "Simulate resize", prompt: "Track the capacity changes as you append 9 items to an empty list.", template: "nums = []\nfor i in range(9):\n    nums.append(i)\n    # show capacity?\n", hint: "Python doesn't expose capacity. Use sys.getsizeof() to estimate.", check: (c) => c.includes("append") && c.includes("range") },
    { title: "Preallocate", prompt: "Create a list of 100 zeros using [0] * 100, then fill it. Does this avoid resizes?", template: "size = 100\nnums = [0] * size  # preallocate\n# Fill with values 0..99\n", hint: "Preallocation avoids resizes. Compare with appending in a loop.", check: (c) => c.includes("[0]") && c.includes("*") },
  ],
  deque: [
    { title: "Palindrome checker", prompt: "Use a deque to check if a string is a palindrome.", template: "from collections import deque\ndef is_palindrome(s):\n    dq = deque(s)\n    # check front vs back\n", hint: "While len > 1: pop() and popleft() must match", check: (c) => c.includes("popleft") && c.includes("pop") },
    { title: "Sliding window max", prompt: "Given a list and k, find the max in each sliding window of size k.", template: "from collections import deque\ndef max_sliding(nums, k):\n    # use deque for O(n) solution\n", hint: "Maintain indices in deque, remove out-of-window and smaller values", check: (c) => c.includes("deque") },
  ],
  "linked-list": [
    { title: "Find middle", prompt: "Find the middle node of a linked list in one pass.", template: "class Node:\n    def __init__(self, v):\n        self.val = v\n        self.next = None\n\ndef find_middle(head):\n    # return middle node\n", hint: "Use slow and fast pointers. Slow moves 1 step, fast moves 2 steps.", check: (c) => c.includes("while") && (c.includes("fast") || c.includes(".next.next")) },
    { title: "Has cycle", prompt: "Detect if a linked list has a cycle.", template: "def has_cycle(head):\n    # return True if cycle exists\n", hint: "Floyd's algorithm: slow and fast pointers. If they meet, there's a cycle.", check: (c) => c.includes("while") && (c.includes("fast") || c.includes(".next")) },
  ],
  stack: [
    { title: "Balanced brackets", prompt: "Use a stack to check if brackets are balanced: '([])' is valid, '([)]' is not.", template: "def is_balanced(s):\n    stack = []\n    # check brackets\n", hint: "Push opening brackets, pop and match on closing", check: (c) => c.includes("stack") && c.includes("pop") },
    { title: "Reverse a string", prompt: "Use a stack to reverse a string.", template: "def reverse_str(s):\n    stack = []\n    # push chars, then pop\n", hint: "Push each char, then pop all into a new string", check: (c) => c.includes("stack") && c.includes("pop") },
  ],
  queue: [
    { title: "Simulate a line", prompt: "Simulate a queue: 3 people join, 2 are served, 1 more joins.", template: "from collections import deque\nq = deque()\n# 3 join, 2 served, 1 joins\n", hint: "Use append() for joining, popleft() for serving", check: (c) => c.includes("append") && c.includes("popleft") },
    { title: "Hot potato", prompt: "Simulate a hot potato game. Pass the potato by dequeueing and re-enqueueing.", template: "def hot_potato(names, num):\n    q = deque(names)\n    # pass the potato num times, then remove\n", hint: "For each pass: q.append(q.popleft()). Then popleft() removes the loser.", check: (c) => c.includes("popleft") && c.includes("append") },
  ],
  trie: [
    { title: "Autocomplete", prompt: "Write a function that returns all words in a trie with a given prefix.", template: "def autocomplete(trie, prefix):\n    # return list of words\n", hint: "Navigate to prefix node, then DFS to collect all words", check: (c) => c.includes("dfs") || c.includes("stack") || c.includes("collect") },
    { title: "Longest prefix", prompt: "Find the longest common prefix of two strings using a trie.", template: "def longest_common_prefix(s1, s2):\n    # build trie and find shared prefix\n", hint: "Insert both, walk until characters differ", check: (c) => c.includes("prefix") || c.includes("trie") },
  ],
  "hash-table": [
    { title: "Two sum", prompt: "Given a list and target, find two indices that sum to the target using a hash map.", template: "def two_sum(nums, target):\n    # return [i, j] where nums[i]+nums[j]=target\n", hint: "Store each value's index as you iterate. Check if target - curr exists.", check: (c) => c.includes("{}") || c.includes("dict") || c.includes("in ") },
    { title: "First non-repeating", prompt: "Find the first non-repeating character in a string using a hash map.", template: "def first_unique(s):\n    # return first non-repeating char\n", hint: "Count frequencies in one pass, then find first with count 1", check: (c) => c.includes("in ") || c.includes("Counter") },
  ],
  graph: [
    { title: "Has path", prompt: "Check if there's a path between two nodes in a graph.", template: "def has_path(graph, start, end):\n    # return True if path exists\n", hint: "Use DFS or BFS. Track visited to avoid cycles.", check: (c) => c.includes("visited") && (c.includes("stack") || c.includes("queue") || c.includes("dfs") || c.includes("bfs")) },
    { title: "Detect cycle", prompt: "Detect if an undirected graph has a cycle.", template: "def has_cycle(graph):\n    # return True if cycle exists\n", hint: "DFS with parent tracking. If neighbor visited and not parent, there's a cycle.", check: (c) => c.includes("visited") && c.includes("parent") },
  ],

  trees: [
    { title: "Tree height", prompt: "Write a recursive function to find the height of a binary tree.", template: "def tree_height(root):\n    # return height\n", hint: "Height = 1 + max(left_height, right_height)", check: (c) => c.includes("return") && c.includes("tree_height") },
    { title: "Count leaves", prompt: "Count the number of leaf nodes in a binary tree.", template: "def count_leaves(root):\n    # return leaf count\n", hint: "Leaf = node with no left and no right child", check: (c) => c.includes("return") },
  ],

  bst: [
    { title: "Validate BST", prompt: "Write a function to check if a binary tree is a valid BST.", template: "def is_valid_bst(root):\n    # return True if valid BST\n", hint: "Pass min/max bounds down the recursion", check: (c) => c.includes("return") && (c.includes("min") || c.includes("max") || c.includes("float")) },
    { title: "Find kth smallest", prompt: "Find the kth smallest element in a BST.", template: "def kth_smallest(root, k):\n    # return kth smallest value\n", hint: "In-order traversal gives sorted order. Stop at kth element.", check: (c) => c.includes("inorder") || c.includes("stack") },
  ],

  avl: [
    { title: "Detect imbalance", prompt: "Write a function that returns the balance factor of a node.", template: "def balance_factor(node):\n    # return height(left) - height(right)\n", hint: "helper: height(node) returns subtree height or 0 if None", check: (c) => c.includes("height") && c.includes("return") },
    { title: "Right rotate", prompt: "Implement a right rotation on a node.", template: "def right_rotate(y):\n    # x = y.left, T2 = x.right\n    # perform rotation\n", hint: "x = y.left; y.left = x.right; x.right = y; return x", check: (c) => c.includes("left") && c.includes("right") && c.includes("return") },
  ],

  heap: [
    { title: "K largest", prompt: "Find the k largest elements in a list using a heap.", template: "import heapq\ndef k_largest(nums, k):\n    # return k largest\n", hint: "Use nlargest from heapq or maintain a min-heap of size k", check: (c) => c.includes("heap") || c.includes("nlargest") },
    { title: "Merge sorted lists", prompt: "Merge k sorted lists using a heap.", template: "import heapq\ndef merge_sorted(lists):\n    # return merged list\n", hint: "Push (value, list_index, element_index) tuples", check: (c) => c.includes("heap") },
  ],
  greedy: [
    { title: "Activity selection", prompt: "Given start/end times, select the maximum number of non-overlapping activities.", template: "def activity_selection(activities):\n    # activities = [(s1,e1), (s2,e2), ...]\n    # return max count\n", hint: "Sort by end time. Pick activities that start after the last selected ends.", check: (c) => c.includes("sort") || c.includes("sorted") },
    { title: "Fractional knapsack", prompt: "Given items with weights and values, maximize value with a weight limit (can take fractions).", template: "def fractional_knapsack(items, capacity):\n    # items = [(value, weight), ...]\n    # return max value\n", hint: "Sort by value/weight ratio descending. Take as much as possible of the best items.", check: (c) => c.includes("sort") && c.includes("weight") },
  ],
  backtracking: [
    { title: "Generate permutations", prompt: "Generate all permutations of a list using backtracking.", template: "def permute(nums):\n    # return all permutations\n", hint: "Choose an element, recurse on remaining, undo the choice", check: (c) => c.includes("backtrack") || c.includes("pop(") || c.includes("remove(") },
    { title: "Sudoku solver", prompt: "Write a backtracking Sudoku solver.", template: "def solve_sudoku(board):\n    # modify board in-place\n", hint: "Find empty cell, try 1-9, check validity, recurse, backtrack if stuck", check: (c) => c.includes("backtrack") || c.includes("solve") },
  ],
  "dynamic-programming": [
    { title: "Climbing stairs", prompt: "You can climb 1 or 2 steps at a time. Count ways to reach the n-th step.", template: "def climb_stairs(n):\n    # return number of ways\n", hint: "dp[i] = dp[i-1] + dp[i-2]. It's Fibonacci!", check: (c) => c.includes("dp[") || c.includes("memo") },
    { title: "Rod cutting", prompt: "Given a rod of length n and prices for each length, maximize profit.", template: "def rod_cut(n, prices):\n    # prices[i] = price for length i+1\n    # return max profit\n", hint: "dp[i] = max(prices[j] + dp[i-j-1] for j in range(i))", check: (c) => c.includes("dp[") && c.includes("max(") },
  ],
  "binary-search": [
    { title: "Find first occurrence", prompt: "Implement binary search that returns the FIRST occurrence of a target (handles duplicates).", template: "def first_occurrence(arr, target):\n    # return index of first occurrence\n", hint: "When arr[mid]==target, don't return yet — set right=mid-1 and keep going", check: (c) => c.includes("while") && c.includes("mid") },
    { title: "Search in rotated array", prompt: "Search for a target in a rotated sorted array (e.g., [4,5,6,1,2,3]).", template: "def search_rotated(nums, target):\n    # return index or -1\n", hint: "Find which half is sorted, then check if target is in it", check: (c) => c.includes("mid") && c.includes("while") },
  ],
  sorting: [
    { title: "Implement selection sort", prompt: "Implement selection sort: find the minimum and swap it to the front.", template: "def selection_sort(arr):\n    # implement selection sort\n", hint: "For each i, find min in arr[i:] and swap with arr[i]", check: (c) => c.includes("min") && c.includes("swap") || c.includes("arr[") },
    { title: "Merge two sorted lists", prompt: "Write a function to merge two sorted lists into one sorted list.", template: "def merge(a, b):\n    # merge sorted lists a and b\n", hint: "Two pointers: compare, take smaller, advance", check: (c) => c.includes("while") && (c.includes("a[") || c.includes("b[")) },
  ],
  dfs: [
    { title: "Detect a cycle", prompt: "Use DFS to detect a cycle in a directed graph.", template: "def has_cycle(graph):\n    # return True if cycle exists\n", hint: "Track nodes in current recursion stack (path) separately from fully visited", check: (c) => c.includes("visited") && c.includes("stack") || c.includes("rec") },
    { title: "Topological sort", prompt: "Return a topological ordering of a directed acyclic graph using DFS.", template: "def topo_sort(graph):\n    # return list in topological order\n", hint: "DFS with post-order (add to result after exploring all neighbors)", check: (c) => c.includes("visited") && (c.includes("append") || c.includes("insert")) },
  ],
  bfs: [
    { title: "Shortest path", prompt: "Use BFS to find the shortest path between two nodes in an unweighted graph.", template: "def shortest_path(graph, start, end):\n    # return list of nodes\n", hint: "Track parent pointers. BFS from start, stop when end is found, reconstruct path.", check: (c) => c.includes("parent") || c.includes("prev") || c.includes("came_from") },
    { title: "Word ladder", prompt: "Given two words and a dictionary, transform one to another one letter at a time using BFS.", template: "def word_ladder(start, end, words):\n    # return shortest transformation sequence\n", hint: "Each word is a node. Edges connect words differing by 1 letter. BFS finds shortest path.", check: (c) => c.includes("queue") || c.includes("deque") || c.includes("bfs") },
  ],
  "big-o": [
    { title: "Classify complexity", prompt: "Given n = 10 and code that runs 100 ops, compute Big O.", template: "def classify(n, ops):\n    # return 'O(1)', 'O(n)', or 'O(n^2)' based on ops\n", hint: "ops = 100 when n = 10 suggests O(n^2). ops = 20 would be O(n). ops = 10 is O(1).", check: (c) => c.includes("return") && (c.includes("O(") || c.includes("'O'")) },
    { title: "Drop constants", prompt: "Simplify the expression 3n + 5 + 2n^2 to its Big O form.", template: "def drop_constants():\n    # return the Big O string\n    return ...\n", hint: "Drop constants and lower-order terms. Focus on the fastest-growing term.", check: (c) => c.includes("return") && c.includes("O(") },
  ],
  "space-complexity": [
    { title: "Analyze space", prompt: "Given a function that creates a list of size n, return its space complexity.", template: "def analyze_space(n):\n    arr = [0] * n\n    # return the space complexity\n", hint: "Creating an array of size n uses O(n) extra space.", check: (c) => c.includes("return") && (c.includes("O(") || c.includes("space")) },
    { title: "In-place check", prompt: "Check if swapping two variables in-place uses constant space.", template: "def in_place_check():\n    a, b = 5, 10\n    a, b = b, a\n    # return True if this uses O(1) space\n", hint: "No new data structures are created. The swap uses a fixed number of variables.", check: (c) => c.includes("return") && c.includes("True") },
  ],
  "amortized-analysis": [
    { title: "Dynamic array cost", prompt: "Compute the amortized cost of n appends starting from capacity 1, doubling each time.", template: "def amortized_append(n):\n    cost = 0\n    cap = 1\n    for i in range(1, n + 1):\n        if i > cap:\n            cost += cap  # resize cost\n            cap *= 2\n        cost += 1  # insert cost\n    return cost / n\n", hint: "Most appends cost 1. Resize costs cap but happens only log n times. Average is O(1).", check: (c) => c.includes("amortized") || (c.includes("cost") && c.includes("cap")) },
    { title: "Counter reset", prompt: "A binary counter increments n times. Each flip costs 1. Compute total cost.", template: "def count_flips(n):\n    total = 0\n    for i in range(1, n + 1):\n        # count trailing zeros in i\n        flips = (i & -i).bit_length()\n        total += flips\n    return total\n", hint: "Each increment flips all trailing 1s. The kth bit flips every 2^k increments.", check: (c) => c.includes("flip") || c.includes("total") },
  ],
  "a-star": [
    { title: "Manhattan heuristic", prompt: "Write the Manhattan distance heuristic for A* on a grid.", template: "def manhattan(a, b):\n    # a and b are (x, y) tuples\n    # return Manhattan distance\n", hint: "Manhattan = |x1 - x2| + |y1 - y2|", check: (c) => c.includes("abs(") && c.includes("+") && c.includes("return") },
    { title: "Reconstruct path", prompt: "Given a came_from dict mapping node -> previous node, reconstruct the path from start to goal.", template: "def reconstruct(came_from, start, goal):\n    # return list of nodes from start to goal\n", hint: "Start from goal and follow came_from backwards, then reverse the list.", check: (c) => c.includes("reverse") || c.includes("append") || c.includes("insert") },
  ],
  "advanced-graphs": [
    { title: "Find articulation points", prompt: "Find all articulation points in an undirected graph using DFS.", template: "def articulation_points(graph):\n    # return list of articulation points\n", hint: "Use discovery time and low-link values. A node is an articulation point if its child has low >= disc.", check: (c) => c.includes("disc") || c.includes("low") || c.includes("visited") },
    { title: "Tarjan's SCC", prompt: "Implement Tarjan's algorithm to find strongly connected components.", template: "def tarjan_scc(graph):\n    # return list of SCCs\n", hint: "Track index, low-link, and a stack. When low == index, pop an SCC.", check: (c) => c.includes("stack") && (c.includes("low") || c.includes("index")) },
  ],
  "advanced-trees": [
    { title: "LCA in BST", prompt: "Find the lowest common ancestor of two nodes in a BST.", template: "def lca_bst(root, p, q):\n    # return LCA node value\n", hint: "If root is between p and q, root is LCA. If both are smaller, go left; otherwise go right.", check: (c) => c.includes("root") && c.includes("val") && (c.includes("left") || c.includes("right")) },
    { title: "Diameter of tree", prompt: "Find the diameter (longest path between any two nodes) of a binary tree.", template: "def diameter(root):\n    # return diameter length\n", hint: "For each node, diameter through it = left_height + right_height. Track max globally.", check: (c) => c.includes("height") && c.includes("max(") },
  ],
  "bit-manipulation": [
    { title: "Count bits", prompt: "Count the number of 1 bits (population count) in an integer.", template: "def popcount(n):\n    # return number of set bits\n", hint: "n & (n - 1) removes the lowest set bit. Repeat until n == 0.", check: (c) => c.includes("&") || c.includes(">>") || c.includes("<<") },
    { title: "Power of two", prompt: "Check if a number is a power of two using bit manipulation.", template: "def is_power_of_two(n):\n    # return True if n is a power of 2\n", hint: "A power of two has exactly one bit set. n & (n - 1) == 0 for powers of two (n > 0).", check: (c) => c.includes("&") && c.includes("0") },
  ],
  "dicts-deep": [
    { title: "LRU Cache", prompt: "Implement an LRU cache using OrderedDict.", template: "from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cache = OrderedDict()\n        self.cap = capacity\n    def get(self, key):\n        # move to end and return\n    def put(self, key, val):\n        # insert; evict oldest if over capacity\n", hint: "OrderedDict.move_to_end() marks recent use. popitem(last=False) removes oldest.", check: (c) => c.includes("OrderedDict") || (c.includes("move_to_end") && c.includes("popitem")) },
    { title: "Default dict of lists", prompt: "Group words by their first letter using defaultdict.", template: "from collections import defaultdict\nwords = ['apple', 'banana', 'apricot', 'blueberry', 'cherry']\n# group by first letter\n", hint: "defaultdict(list) lets you append without checking if the key exists.", check: (c) => c.includes("defaultdict") && c.includes("append") },
  ],
  "fenwick-tree": [
    { title: "Build BIT", prompt: "Build a Fenwick tree (Binary Indexed Tree) from an array.", template: "class BIT:\n    def __init__(self, n):\n        self.n = n\n        self.tree = [0] * (n + 1)\n    def update(self, i, delta):\n        # add delta at index i (1-indexed)\n", hint: "while i <= n: tree[i] += delta; i += i & -i", check: (c) => c.includes("tree[") && (c.includes("i &") || c.includes("&-")) },
    { title: "Prefix sum query", prompt: "Implement the prefix sum query method for a Fenwick tree.", template: "def query(self, i):\n    # return sum from 1 to i\n    res = 0\n    # while loop\n", hint: "while i > 0: res += tree[i]; i -= i & -i", check: (c) => c.includes("tree[") && c.includes("res") },
  ],
  "linear-search": [
    { title: "Find first index", prompt: "Write a function that returns the first index of a target value in a list, or -1 if absent.", template: "def linear_search(arr, target):\n    # return index or -1\n", hint: "Loop through indices 0 to len(arr)-1. Return the first match.", check: (c) => c.includes("for") || c.includes("while") },
    { title: "Count occurrences", prompt: "Count how many times a target value appears in a list.", template: "def count_occurrences(arr, target):\n    # return count\n", hint: "Increment a counter each time you find the target in the loop.", check: (c) => c.includes("==") && (c.includes("for") || c.includes("while")) },
  ],
  "linear-sorting": [
    { title: "Counting sort", prompt: "Implement counting sort for non-negative integers with limited range.", template: "def counting_sort(arr, max_val):\n    # return sorted list\n", hint: "Count frequencies, then reconstruct the sorted array by iterating the counts.", check: (c) => c.includes("count") && c.includes("insert") || c.includes("extend") },
    { title: "Bucket sort", prompt: "Implement bucket sort for floats uniformly distributed in [0, 1).", template: "def bucket_sort(arr):\n    # return sorted list\n", hint: "Create n buckets, distribute elements, sort each bucket, concatenate.", check: (c) => c.includes("bucket") && c.includes("sort") || c.includes("append") },
  ],
  "mathematical": [
    { title: "Sieve of Eratosthenes", prompt: "Return all prime numbers up to n using the Sieve of Eratosthenes.", template: "def sieve(n):\n    # return list of primes up to n\n", hint: "Create boolean array of size n+1. Mark multiples of each prime starting from 2.", check: (c) => c.includes("True") || c.includes("prime") || c.includes("range(") },
    { title: "GCD with Euclid", prompt: "Implement the Euclidean algorithm to find the GCD of two numbers.", template: "def gcd(a, b):\n    # return gcd using Euclid's algorithm\n", hint: "While b: a, b = b, a % b. Return a.", check: (c) => c.includes("%") && c.includes("return") },
  ],
  "monotonic-stack": [
    { title: "Next greater element", prompt: "For each element in an array, find the next greater element to the right.", template: "def next_greater(arr):\n    # return list of next greater elements (or -1 if none)\n", hint: "Use a monotonic decreasing stack. Pop while current > stack top, assign current as answer.", check: (c) => c.includes("stack") && c.includes("while") && c.includes("pop") },
    { title: "Daily temperatures", prompt: "Given daily temps, return days until a warmer temperature for each day.", template: "def daily_temps(temps):\n    # return list of days to wait\n", hint: "Monotonic decreasing stack storing indices. When warmer temp found, pop and compute difference.", check: (c) => c.includes("stack") && c.includes("while") },
  ],
  "mst": [
    { title: "Kruskal's algorithm", prompt: "Implement Kruskal's algorithm to find MST weight.", template: "def kruskal(n, edges):\n    # n = number of nodes, edges = [(u, v, w), ...]\n    # return total MST weight\n", hint: "Sort edges by weight. Use union-find to add edges without creating cycles.", check: (c) => c.includes("sort") && (c.includes("union") || c.includes("find") || c.includes("parent")) },
    { title: "Prim's algorithm", prompt: "Implement Prim's algorithm using a heap to find MST weight.", template: "import heapq\ndef prim(n, edges):\n    # return total MST weight\n", hint: "Start from node 0. Use a min-heap of (weight, node). Track visited.", check: (c) => c.includes("heap") && (c.includes("visited") || c.includes("pop")) },
  ],
  "n-queens": [
    { title: "Check placement", prompt: "Given a board state, check if a queen at (row, col) is safe.", template: "def is_safe(board, row, col):\n    # board is list of strings 'Q' or '.'\n    # return True if safe\n", hint: "Check same column, and both diagonals (top-left, top-right) for existing queens.", check: (c) => c.includes("range(") && c.includes("Q") && c.includes("return") },
    { title: "Count solutions", prompt: "Count the number of distinct solutions to the N-Queens problem.", template: "def total_n_queens(n):\n    # return number of solutions\n", hint: "Use backtracking with sets for columns, positive diagonal (r+c), negative diagonal (r-c).", check: (c) => c.includes("def") && (c.includes("backtrack") || c.includes("cols") || c.includes("diag")) },
  ],
  "prefix-sum": [
    { title: "Build prefix array", prompt: "Given an array, build its prefix sum array where prefix[i] = sum of arr[0..i].", template: "def prefix_sums(arr):\n    # return prefix sum array\n", hint: "Start with [arr[0]] then each step: running += arr[i], append running.", check: (c) => c.includes("append") && (c.includes("prefix") || c.includes("running")) },
    { title: "Range sum query", prompt: "Given prefix sums, compute sum(arr[l..r]) in O(1).", template: "def range_sum(prefix, l, r):\n    # return sum of arr[l..r] inclusive\n", hint: "sum(l..r) = prefix[r] - prefix[l-1]. Handle l == 0 edge case.", check: (c) => c.includes("prefix") && c.includes("[") },
  ],
  "problem-patterns": [
    { title: "Two-sum variant", prompt: "Given sorted array, find if any pair sums to target (two-pointer).", template: "def has_pair_sum(nums, target):\n    # nums is sorted\n    # return True if pair exists\n", hint: "Left pointer at 0, right at end. If sum < target, left++; if sum > target, right--.", check: (c) => c.includes("while") && (c.includes("left") || c.includes("right") || c.includes("ptr")) },
    { title: "Merge intervals", prompt: "Given a list of intervals, merge all overlapping intervals.", template: "def merge_intervals(intervals):\n    # intervals = [(s1, e1), (s2, e2), ...]\n    # return merged intervals\n", hint: "Sort by start. If current.start <= last.end, merge by taking max end.", check: (c) => c.includes("sort") && c.includes("append") && c.includes("max(") },
  ],
  "recursion-deep": [
    { title: "Tower of Hanoi", prompt: "Print the moves to solve Tower of Hanoi with n disks.", template: "def hanoi(n, source, target, aux):\n    # print each move\n", hint: "Move n-1 to aux, move nth to target, move n-1 from aux to target.", check: (c) => c.includes("hanoi(") && c.includes("print") },
    { title: "Maze solver", prompt: "Find a path from top-left to bottom-right in a grid using recursion.", template: "def solve_maze(grid, r, c):\n    # return True if path exists, mark path\n", hint: "Check bounds and walls (1). Mark visited (0). Recurse in 4 directions. Backtrack if dead end.", check: (c) => c.includes("solve_maze") && (c.includes("return") || c.includes("True")) },
  ],
  "red-black-tree": [
    { title: "Rotations", prompt: "Implement a left rotation on a red-black tree node.", template: "def left_rotate(root, x):\n    # y = x.right\n    # perform left rotation\n", hint: "y = x.right; x.right = y.left; y.left = x; return y", check: (c) => c.includes("left") && c.includes("right") && c.includes("return") },
    { title: "Check red property", prompt: "Check that no red node has a red child in a red-black tree.", template: "def no_red_red(node):\n    # return True if valid\n", hint: "If node is red and either child is red, return False. Recurse on children.", check: (c) => c.includes("red") && c.includes("return") },
  ],
  "segment-tree": [
    { title: "Build segment tree", prompt: "Build a segment tree from an array for range sum queries.", template: "class SegTree:\n    def __init__(self, arr):\n        n = len(arr)\n        self.tree = [0] * (4 * n)\n        self._build(arr, 0, 0, n - 1)\n    def _build(self, arr, node, l, r):\n        # build recursively\n", hint: "Leaf: tree[node] = arr[l]. Internal: tree[node] = left + right.", check: (c) => c.includes("tree[") && c.includes("mid") && c.includes("_build") },
    { title: "Range query", prompt: "Implement the range sum query method on a segment tree.", template: "def query(self, node, l, r, ql, qr):\n    # return sum in [ql, qr]\n", hint: "If no overlap return 0. If full overlap return tree[node]. Else query both children and sum.", check: (c) => c.includes("return") && c.includes("tree[") && c.includes("mid") },
  ],
  "sets-deep": [
    { title: "Frozenset usage", prompt: "Create a frozenset of numbers 1-5 and use it as a dictionary key.", template: "fs = frozenset(range(1, 6))\nd = {fs: 'numbers 1-5'}\n# print the value\nprint(d[fs])\n", hint: "frozenset is immutable and hashable, so it can be used as a dict key.", check: (c) => c.includes("frozenset") && c.includes("print") },
    { title: "Set difference", prompt: "Find elements in set A that are NOT in set B.", template: "A = {1, 2, 3, 4, 5}\nB = {4, 5, 6, 7}\n# Find A - B\n", hint: "Use A - B or A.difference(B).", check: (c) => c.includes("-") || c.includes("difference") },
  ],
  "shortest-path": [
    { title: "Dijkstra's algorithm", prompt: "Implement Dijkstra's algorithm to find shortest distances from a source.", template: "import heapq\ndef dijkstra(graph, start):\n    # graph = {node: [(neighbor, weight), ...]}\n    # return {node: distance}\n", hint: "Use a min-heap of (dist, node). Initialize all distances as infinity except start as 0.", check: (c) => c.includes("heap") && (c.includes("dist") || c.includes("float('inf')")) },
    { title: "Bellman-Ford", prompt: "Implement Bellman-Ford to detect negative cycles.", template: "def bellman_ford(edges, n, start):\n    # edges = [(u, v, w), ...]\n    # return distances or None if negative cycle\n", hint: "Relax all edges n-1 times. If any edge still relaxes on nth pass, there's a negative cycle.", check: (c) => c.includes("range") && c.includes("dist") && c.includes("relax") || c.includes("+") },
  ],
  "sliding-window": [
    { title: "Max sum subarray", prompt: "Find the maximum sum of any contiguous subarray of length k.", template: "def max_sum_k(nums, k):\n    # return max sum\n", hint: "Sum first k elements, then slide: subtract left, add right, track max.", check: (c) => c.includes("max(") && c.includes("+") && c.includes("-") },
    { title: "Longest substring without repeats", prompt: "Find the length of the longest substring without repeating characters.", template: "def longest_unique(s):\n    # return length\n", hint: "Use a set and two pointers. Expand right, if duplicate seen, shrink left until it's gone.", check: (c) => c.includes("set") || c.includes("char)") || c.includes("left") },
  ],
  "sparse-table": [
    { title: "Build sparse table", prompt: "Build a sparse table for range minimum queries.", template: "import math\nclass SparseTable:\n    def __init__(self, arr):\n        n = len(arr)\n        k = int(math.log2(n)) + 1\n        self.st = [[0] * k for _ in range(n)]\n        # initialize\n", hint: "st[i][0] = arr[i]. st[i][j] = min(st[i][j-1], st[i+2^(j-1)][j-1])", check: (c) => c.includes("st[") && c.includes("min(") && c.includes("log") },
    { title: "RMQ query", prompt: "Query the minimum in range [l, r] using a sparse table.", template: "def query(self, l, r):\n    # return minimum in [l, r]\n", hint: "j = floor(log2(r-l+1)). Answer = min(st[l][j], st[r-2^j+1][j]).", check: (c) => c.includes("log") || c.includes("st[") && c.includes("min(") },
  ],
  "string-matching": [
    { title: "Naive pattern search", prompt: "Find all starting indices where a pattern occurs in a text (naive approach).", template: "def naive_search(text, pattern):\n    # return list of starting indices\n", hint: "Slide pattern over text, compare character by character. O(n*m).", check: (c) => c.includes("for") && c.includes("range") && (c.includes("==") || c.includes("text[")) },
    { title: "KMP prefix function", prompt: "Compute the prefix function (pi array) for the KMP algorithm.", template: "def prefix_func(pattern):\n    # return pi array\n", hint: "pi[i] = length of longest proper prefix of pattern[0..i] that is also a suffix.", check: (c) => c.includes("while") && c.includes("==") && (c.includes("pi[") || c.includes("prefix")) },
  ],
  "subsets-permutations": [
    { title: "Generate subsets", prompt: "Generate all subsets of a list using bitmask or recursion.", template: "def subsets(nums):\n    # return all subsets\n", hint: "For i in range(1 << n): include nums[j] if i & (1 << j).", check: (c) => c.includes("<<") || c.includes("1 <<") || c.includes("subset") },
    { title: "Next permutation", prompt: "Given a permutation of numbers, compute the next lexicographic permutation.", template: "def next_permutation(nums):\n    # modify nums in-place to next permutation\n", hint: "Find first decreasing element from right. Swap with next larger. Reverse suffix.", check: (c) => c.includes("reverse") || (c.includes("swap") && c.includes("while")) },
  ],
  "suffix-array": [
    { title: "Build suffix array", prompt: "Generate all suffixes of a string and return them sorted.", template: "def naive_suffix_array(s):\n    # return sorted list of suffixes\n", hint: "Generate all suffix strings starting at each index, then sort them.", check: (c) => c.includes("sort") && c.includes("s[") && c.includes("for") },
    { title: "Longest common prefix", prompt: "Find the LCP between consecutive suffixes in a suffix array.", template: "def lcp_array(s, sa):\n    # sa = suffix array (positions)\n    # return LCP array\n", hint: "Compare suffixes sa[i] and sa[i-1] char by char. Use Kasai's algorithm for O(n).", check: (c) => c.includes("while") && c.includes("==") && (c.includes("lcp") || c.includes("lcp[")) },
  ],
  "topological-sort": [
    { title: "Kahn's algorithm", prompt: "Implement Kahn's algorithm (BFS) for topological sort.", template: "from collections import deque\ndef kahn_topo(graph):\n    # graph: {node: [neighbors]}\n    # return list in topological order\n", hint: "Track in-degree of each node. Push nodes with in-degree 0. Decrement neighbors as you go.", check: (c) => c.includes("in_degree") || c.includes("indegree") || (c.includes("degree") && c.includes("deque")) },
    { title: "Course schedule", prompt: "Given n courses and prerequisites, check if all courses can be finished.", template: "def can_finish(n, prereqs):\n    # prereqs = [(a, b)] where b is prerequisite of a\n    # return True if possible\n", hint: "Build graph from prerequisites. Use Kahn's algorithm. If all nodes processed, return True.", check: (c) => c.includes("graph") && (c.includes("degree") || c.includes("queue") || c.includes("deque")) },
  ],
  "two-pointers": [
    { title: "Pair with target sum", prompt: "Given a sorted array, find if two numbers sum to target using two pointers.", template: "def pair_sum_sorted(nums, target):\n    # return (i, j) or None\n", hint: "Left at 0, right at end. If sum < target, left++. If sum > target, right--.", check: (c) => c.includes("while") && (c.includes("left") || c.includes("right") || c.includes("ptr")) },
    { title: "Three sum", prompt: "Find all unique triplets that sum to zero.", template: "def three_sum(nums):\n    # return list of triplets\n", hint: "Sort first. For each i, use two pointers on i+1..end to find pairs summing to -nums[i].", check: (c) => c.includes("sort") && (c.includes("left") || c.includes("right") || c.includes("two")) },
  ],
  "union-find": [
    { title: "Quick find", prompt: "Implement Union-Find with path compression.", template: "class UnionFind:\n    def __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [1] * n\n    def find(self, x):\n        # with path compression\n", hint: "if parent[x] != x: parent[x] = self.find(parent[x]); return parent[x]", check: (c) => c.includes("parent[") && c.includes("find(") && c.includes("return") },
    { title: "Union by rank", prompt: "Implement the union method with union by rank.", template: "def union(self, a, b):\n    # union sets containing a and b\n", hint: "Find roots. If different, attach shorter tree under taller tree. Increment rank if equal.", check: (c) => c.includes("rank") && c.includes("parent[") && c.includes("find") },
  ],
}

export function ChallengeSection({ lesson }: Props) {
  const challenges = challengesMap[lesson.id] || challengesMap.variables
  const [current, setCurrent] = useState(0)
  const [code, setCode] = useState(challenges[0].template)
  const [showHint, setShowHint] = useState(false)
  const [result, setResult] = useState<"pass" | "fail" | null>(null)
  const challenge = challenges[current]

  const checkSolution = () => setResult(challenge.check(code) ? "pass" : "fail")
  const nextChallenge = () => {
    const next = (current + 1) % challenges.length
    setCurrent(next)
    setCode(challenges[next].template)
    setShowHint(false)
    setResult(null)
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-primary)" }}>Section 8 of 8</p>
        <h2 className="text-2xl font-semibold tracking-tight" style={{ letterSpacing: "-0.96px" }}>
          {lesson.id === "strings" ? "String Challenges" : lesson.id === "data-types" ? "Type Challenges" : "Challenge Mode"}
        </h2>
        <p className="mt-2 text-sm" style={{ color: "var(--el-body)" }}>Write Python code to solve each problem.</p>
      </div>

      <div className="rounded-md overflow-hidden" style={{ border: "1px solid var(--el-hairline)", backgroundColor: "var(--el-surface-card)" }}>
        <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid var(--el-hairline)" }}>
          <div>
            <p className="text-xs font-medium" style={{ color: "var(--el-muted)" }}>Challenge {current + 1} of {challenges.length}</p>
            <p className="font-semibold mt-0.5">{challenge.title}</p>
          </div>
          {result === "pass" && <span className="text-lg">✅</span>}
        </div>

        <div className="px-5 py-3 text-sm" style={{ color: "var(--el-body)" }}>{challenge.prompt}</div>

        <div className="el-code text-sm leading-6">
          <textarea value={code} onChange={(e) => { setCode(e.target.value); setResult(null) }}
            className="w-full p-5 outline-none text-sm leading-6"
            style={{ backgroundColor: "var(--el-surface-card)", color: "var(--el-ink)", borderTop: "1px solid var(--el-hairline)", borderBottom: "1px solid var(--el-hairline)", minHeight: "150px", resize: "vertical", fontFamily: "'Geist Mono', monospace" }}
            spellCheck={false} />
        </div>

        <div className="px-5 py-3 flex flex-wrap gap-2">
          <button onClick={checkSolution} className="el-btn el-btn-primary">Check</button>
          <button onClick={() => setShowHint(!showHint)} className="el-btn el-btn-outline">{showHint ? "Hide hint" : "Hint"}</button>
          <button onClick={nextChallenge} className="el-btn el-btn-outline">Next →</button>
        </div>

        <AnimatePresence>
          {showHint && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              <div className="px-5 py-3 text-sm mx-5 mb-3 rounded-sm" style={{ backgroundColor: "var(--el-surface-strong)", color: "var(--el-body)" }}>
                💡 {challenge.hint}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="px-5 pb-4">
              <div className="rounded-sm px-4 py-2 text-sm"
                style={{ backgroundColor: result === "pass" ? "var(--el-success)20" : "var(--el-error)20", color: result === "pass" ? "var(--el-success)" : "var(--el-error)" }}>
                {result === "pass" ? "✓ Correct!" : "✗ Not quite. Check and try again."}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
