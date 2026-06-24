import { CoursePhase, Lesson } from "@/types"

export const courseMap: CoursePhase[] = [
  {
    id: "python-foundations",
    title: "Python Foundations",
    lessons: [
      { id: "variables", title: "Variables & References", icon: "⊡" },
      { id: "data-types", title: "Data Types", icon: "#" },
      { id: "strings", title: "Strings", icon: "S" },
      { id: "lists", title: "Lists", icon: "↕" },
      { id: "tuples", title: "Tuples", icon: "()" },
      { id: "sets", title: "Sets", icon: "{}" },
      { id: "dictionaries", title: "Dictionaries", icon: "📖" },
      { id: "functions", title: "Functions", icon: "ƒ" },
      { id: "recursion", title: "Recursion", icon: "↻" },
      { id: "classes", title: "Classes & OOP", icon: "◈" },
      { id: "decorators", title: "Decorators", icon: "@" },
      { id: "generators", title: "Generators", icon: "▶" },
      { id: "iterators", title: "Iterators", icon: "⟳" },
      { id: "context-managers", title: "Context Managers", icon: "📋" },
    ],
  },
  {
    id: "complexity-analysis",
    title: "Complexity Analysis",
    lessons: [
      { id: "big-o", title: "Big O Notation", icon: "O" },
      { id: "space-complexity", title: "Space Complexity", icon: "💾" },
      { id: "amortized-analysis", title: "Amortized Analysis", icon: "⚖" },
    ],
  },
  {
    id: "linear-structures",
    title: "Arrays & Linear Structures",
    lessons: [
      { id: "arrays", title: "Arrays", icon: "⊞" },
      { id: "dynamic-arrays", title: "Dynamic Arrays", icon: "↔" },
      { id: "stack", title: "Stack", icon: "▤" },
      { id: "queue", title: "Queue", icon: "▥" },
      { id: "deque", title: "Deque", icon: "▦" },
      { id: "linked-list", title: "Linked List", icon: "⛓" },
    ],
  },
  {
    id: "hashing",
    title: "Hashing",
    lessons: [
      { id: "hash-table", title: "Hash Table", icon: "🔗" },
      { id: "sets-deep", title: "Sets Under the Hood", icon: "{}" },
      { id: "dicts-deep", title: "Dicts Under the Hood", icon: "📖" },
    ],
  },
  {
    id: "recursion-backtracking",
    title: "Recursion & Backtracking",
    lessons: [
      { id: "recursion-deep", title: "Recursion Deep Dive", icon: "↻" },
      { id: "backtracking", title: "Backtracking", icon: "↩" },
      { id: "subsets-permutations", title: "Subsets & Permutations", icon: "⊂" },
      { id: "n-queens", title: "N-Queens", icon: "♛" },
    ],
  },
  {
    id: "trees",
    title: "Trees",
    lessons: [
      { id: "trees", title: "Binary Trees", icon: "🌳" },
      { id: "bst", title: "Binary Search Trees", icon: "🌲" },
      { id: "avl", title: "AVL Trees", icon: "⚖" },
      { id: "red-black-tree", title: "Red-Black Trees", icon: "🔴" },
      { id: "heap", title: "Heaps", icon: "📊" },
      { id: "trie", title: "Trie", icon: "🔤" },
      { id: "segment-tree", title: "Segment Tree", icon: "📐" },
      { id: "fenwick-tree", title: "Fenwick Tree", icon: "📈" },
    ],
  },
  {
    id: "graphs",
    title: "Graphs",
    lessons: [
      { id: "graph", title: "Graph Basics", icon: "🔷" },
      { id: "dfs", title: "Depth-First Search", icon: "⬇" },
      { id: "bfs", title: "Breadth-First Search", icon: "➡" },
      { id: "shortest-path", title: "Shortest Path", icon: "🛤" },
      { id: "mst", title: "Minimum Spanning Tree", icon: "🌉" },
      { id: "topological-sort", title: "Topological Sort", icon: "📋" },
      { id: "union-find", title: "Union Find", icon: "🔗" },
    ],
  },
  {
    id: "searching",
    title: "Searching",
    lessons: [
      { id: "linear-search", title: "Linear Search", icon: "🔎" },
      { id: "binary-search", title: "Binary Search", icon: "🔍" },
    ],
  },
  {
    id: "sorting",
    title: "Sorting",
    lessons: [
      { id: "sorting", title: "Comparison Sorting", icon: "⇕" },
      { id: "linear-sorting", title: "Linear-Time Sorting", icon: "⚡" },
    ],
  },
  {
    id: "greedy",
    title: "Greedy Algorithms",
    lessons: [
      { id: "greedy", title: "Greedy Algorithms", icon: "💰" },
    ],
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    lessons: [
      { id: "dynamic-programming", title: "Dynamic Programming", icon: "🧩" },
    ],
  },
  {
    id: "bit-manipulation",
    title: "Bit Manipulation",
    lessons: [
      { id: "bit-manipulation", title: "Bit Manipulation", icon: "011" },
    ],
  },
  {
    id: "sliding-window",
    title: "Sliding Window",
    lessons: [
      { id: "sliding-window", title: "Sliding Window", icon: "⊞" },
    ],
  },
  {
    id: "two-pointers",
    title: "Two Pointers",
    lessons: [
      { id: "two-pointers", title: "Two Pointers", icon: "↔" },
    ],
  },
  {
    id: "prefix-sum",
    title: "Prefix Sum",
    lessons: [
      { id: "prefix-sum", title: "Prefix Sum", icon: "∑" },
    ],
  },
  {
    id: "monotonic-stack",
    title: "Monotonic Stack",
    lessons: [
      { id: "monotonic-stack", title: "Monotonic Stack", icon: "📊" },
    ],
  },
  {
    id: "advanced-graphs",
    title: "Advanced Graphs",
    lessons: [
      { id: "advanced-graphs", title: "Advanced Graph Algorithms", icon: "🔷" },
      { id: "a-star", title: "A* Search", icon: "★" },
    ],
  },
  {
    id: "advanced-ds",
    title: "Advanced Data Structures",
    lessons: [
      { id: "advanced-trees", title: "B-Trees & Skip Lists", icon: "🌲" },
      { id: "sparse-table", title: "Sparse Table", icon: "📊" },
    ],
  },
  {
    id: "string-algorithms",
    title: "String Algorithms",
    lessons: [
      { id: "string-matching", title: "String Matching", icon: "🔤" },
      { id: "suffix-array", title: "Suffix Array", icon: "📝" },
    ],
  },
  {
    id: "mathematical",
    title: "Mathematical Algorithms",
    lessons: [
      { id: "mathematical", title: "Math for DSA", icon: "π" },
    ],
  },
  {
    id: "problem-patterns",
    title: "Problem Patterns",
    lessons: [
      { id: "problem-patterns", title: "Interview Problem Patterns", icon: "🎯" },
    ],
  },
]

const baseSections = [
  { id: "intro", title: "What is it?", component: "Intro" },
  { id: "analogy", title: "Real-World Analogy", component: "Analogy" },
  { id: "memory", title: "Inside Memory", component: "MemoryVisualization" },
  { id: "playground", title: "Interactive Playground", component: "Playground" },
  { id: "complexity", title: "Complexity", component: "Complexity" },
  { id: "code", title: "Code in Action", component: "CodeSync" },
  { id: "quiz", title: "Quick Quiz", component: "Quiz" },
  { id: "challenge", title: "Challenge Mode", component: "Challenge" },
]

export const lessons: Record<string, Lesson> = {
  variables: {
    id: "variables",
    title: "Variables & References",
    subtitle: "How Python binds names to objects in memory",
    icon: "⊡",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Variables in Python — names bound to objects
name = "Alice"   # str object created, name → it
age = 25         # int object created, age → it

# Reassigning: name now points to a new object
name = "Bob"

# Multiple references to the same object
x = [1, 2, 3]
y = x            # y references the SAME list
y.append(4)      # x sees it too!
print(x)         # [1, 2, 3, 4]

# Swapping
a, b = 1, 2
a, b = b, a
print(a, b)`,
  },
  "data-types": {
    id: "data-types",
    title: "Data Types",
    subtitle: "Every value has a type — int, float, str, bool, and more",
    icon: "#",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Data Types
age = 25          # int
price = 19.99     # float
name = "Python"   # str
is_fun = True     # bool
result = None     # NoneType
data = b"bytes"   # bytes

# Every object has a type
print(type(age))
print(type(name))
print(type(is_fun))
print(type(data))

# Dynamic typing: variables can change type
x = 42            # int
x = "hello"       # now str — perfectly fine`,
  },
  strings: {
    id: "strings",
    title: "Strings",
    subtitle: "Working with text in Python",
    icon: "S",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Strings
name = "Alice"
greeting = 'Hello'
multi = """Multi
line string"""

# Indexing
first = name[0]    # 'A'
last = name[-1]    # 'e'

# Slicing [start:end:step]
sub = name[1:4]    # 'lic'
rev = name[::-1]   # 'ecilA'

# Operations
upper = name.upper()
length = len(name)
combined = greeting + " " + name
contains = "Ali" in name  # True

print(combined)`,
  },
  lists: {
    id: "lists",
    title: "Lists",
    subtitle: "Ordered, mutable collections of values",
    icon: "↕",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Lists
fruits = ["apple", "banana", "cherry"]

# Access by index
first = fruits[0]
last = fruits[-1]

# Modify
fruits[1] = "blueberry"

# Add
fruits.append("date")
fruits.insert(0, "apricot")

# Remove
popped = fruits.pop()
fruits.remove("apple")

# Operations
count = len(fruits)
print(fruits)`,
  },
  tuples: {
    id: "tuples",
    title: "Tuples",
    subtitle: "Immutable sequences for fixed collections",
    icon: "()",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Tuples
point = (3, 4)
single = (5,)
mixed = (1, "hello", 3.14)

# Access by index
x = point[0]

# Unpacking
lat, lon = (40.7128, -74.0060)

# IMMUTABLE — cannot change
# point[0] = 5  ← TypeError!

# Useful for fixed data
colors = ("red", "green", "blue")
print(colors)`,
  },
  sets: {
    id: "sets",
    title: "Sets",
    subtitle: "Unordered collections of unique elements",
    icon: "{}",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Sets
fruits = {"apple", "banana", "cherry"}
unique = set([1, 2, 2, 3, 3, 3])

# Add / remove
fruits.add("date")
fruits.remove("banana")

# Set operations
a = {1, 2, 3}
b = {3, 4, 5}
union = a | b
inter = a & b
diff = a - b

print(union, inter, diff)`,
  },
  dictionaries: {
    id: "dictionaries",
    title: "Dictionaries",
    subtitle: "Key-value pairs for fast lookups",
    icon: "📖",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Dictionaries
person = {"name": "Alice", "age": 25, "city": "NYC"}

# Access
print(person["name"])
print(person.get("salary", 0))

# Modify
person["age"] = 26
person["job"] = "Engineer"

# Loop
for key, val in person.items():
    print(f"{key}: {val}")

# Check key
has = "name" in person`,
  },
  functions: {
    id: "functions",
    title: "Functions",
    subtitle: "Reusable blocks of code with scope",
    icon: "ƒ",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Functions
def greet(name):
    return f"Hello, {name}!"

msg = greet("Alice")
print(msg)

# Default parameters
def power(base, exp=2):
    return base ** exp

# Multiple returns
def min_max(nums):
    return min(nums), max(nums)

# Lambda
square = lambda x: x ** 2
print(square(5))

# Scope
x = 10  # global
def outer():
    x = 20  # local
    def inner():
        nonlocal x
        x = 30
    inner()
    print(x)  # 30
outer()`,
  },
  recursion: {
    id: "recursion",
    title: "Recursion",
    subtitle: "Functions that call themselves",
    icon: "↻",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Recursion
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120

def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(10))  # 55

# Stack visualization:
# fib(3) → fib(2) + fib(1)
#       → (fib(1) + fib(0)) + 1
#       → (1 + 0) + 1 = 2`,
  },
  classes: {
    id: "classes",
    title: "Classes & OOP",
    subtitle: "Objects, methods, inheritance, and more",
    icon: "◈",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Classes & OOP
class Animal:
    def __init__(self, name):
        self.name = name  # encapsulated

    def speak(self):
        raise NotImplementedError

    # abstraction: subclasses define behavior

class Dog(Animal):           # inheritance
    def speak(self):         # polymorphism
        return f"{self.name} says woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says meow!"

# Encapsulation: _private convention
class BankAccount:
    def __init__(self):
        self._balance = 0   # protected

    def deposit(self, amt):
        if amt > 0:
            self._balance += amt

    def get_balance(self):
        return self._balance

animals = [Dog("Rex"), Cat("Luna")]
for a in animals:
    print(a.speak())`,
  },
  decorators: {
    id: "decorators",
    title: "Decorators",
    subtitle: "Wrapping functions with extra behavior",
    icon: "@",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Decorators
def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        print(f"Took {time.time()-start:.4f}s")
        return result
    return wrapper

@timer
def slow_add(a, b):
    return a + b

print(slow_add(5, 3))

# Multiple decorators stack
def bold(func):
    def wrapper(*args, **kwargs):
        return f"<b>{func(*args, **kwargs)}</b>"
    return wrapper

@bold
@timer
def hello(name):
    return f"Hello {name}"

print(hello("Alice"))`,
  },
  generators: {
    id: "generators",
    title: "Generators",
    subtitle: "Lazy iterators with yield",
    icon: "▶",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Generators
def count_up_to(n):
    i = 0
    while i < n:
        yield i
        i += 1

for num in count_up_to(5):
    print(num)  # 0 1 2 3 4

# Generator expression
squares = (x*x for x in range(10))
print(list(squares))

# Memory efficient: yields one at a time
# vs list comprehension which creates all at once`,
  },
  iterators: {
    id: "iterators",
    title: "Iterators",
    subtitle: "The protocol behind every for loop",
    icon: "⟳",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Iterators — the __iter__ and __next__ protocol
class CountDown:
    def __init__(self, start):
        self.n = start

    def __iter__(self):
        return self  # iterator is itself

    def __next__(self):
        if self.n <= 0:
            raise StopIteration
        self.n -= 1
        return self.n + 1

for x in CountDown(5):
    print(x)  # 5 4 3 2 1

# Every for loop uses iter() + next() internally
nums = [1, 2, 3]
it = iter(nums)
print(next(it))  # 1
print(next(it))  # 2`,
  },
  "context-managers": {
    id: "context-managers",
    title: "Context Managers",
    subtitle: "Setup and teardown with the 'with' statement",
    icon: "📋",
    phase: "Python Foundations",
    sections: baseSections,
    pythonCode: `# Python Context Managers — with statement
# Built-in: file handling
with open("file.txt", "w") as f:
    f.write("hello")
# File auto-closes even on error

# Custom context manager (class-based)
class ManagedFile:
    def __enter__(self):
        print("Opening file...")
        return self

    def __exit__(self, exc_type, exc_val, tb):
        print("Closing file...")
        return False  # don't suppress exceptions

with ManagedFile() as mf:
    print("Working...")

# Custom (generator-based)
from contextlib import contextmanager

@contextmanager
def temp_tag(tag):
    print(f"<{tag}>", end="")
    yield
    print(f"</{tag}>", end="")

with temp_tag("b"):
    print("bold text", end="")`,
  },
  "big-o": {
    id: "big-o",
    title: "Big O Notation",
    subtitle: "How runtime grows with input size",
    icon: "O",
    phase: "Complexity Analysis",
    sections: baseSections,
    pythonCode: `# Big O Notation — visualize growth rates
# O(1) — constant
def get_first(arr):
    return arr[0]

# O(log n) — logarithmic
def binary_search(arr, target):
    l, r = 0, len(arr) - 1
    while l <= r:
        mid = (l + r) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            l = mid + 1
        else:
            r = mid - 1
    return -1

# O(n) — linear
def find_max(arr):
    max_val = arr[0]
    for x in arr:
        if x > max_val:
            max_val = x
    return max_val

# O(n²) — quadratic
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# O(2ⁿ) — exponential (fibonacci without memo)
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)`,
  },
  "space-complexity": {
    id: "space-complexity",
    title: "Space Complexity",
    subtitle: "How memory usage grows with input size",
    icon: "💾",
    phase: "Complexity Analysis",
    sections: baseSections,
    pythonCode: `# Space Complexity — memory analysis
# O(1) — constant extra space
def sum_list(arr):
    total = 0
    for x in arr:
        total += x
    return total

# O(n) — linear extra space
def duplicate(arr):
    return [x * 2 for x in arr]

# O(n²) — quadratic extra space
def matrix(n):
    return [[0] * n for _ in range(n)]

# In-place vs out-of-place
def reverse_inplace(arr):
    l, r = 0, len(arr) - 1
    while l < r:
        arr[l], arr[r] = arr[r], arr[l]
        l, r = l + 1, r - 1
    # O(1) extra space

def reverse_copy(arr):
    return arr[::-1]
    # O(n) extra space`,
  },
  "amortized-analysis": {
    id: "amortized-analysis",
    title: "Amortized Analysis",
    subtitle: "Average cost over a sequence of operations",
    icon: "⚖",
    phase: "Complexity Analysis",
    sections: baseSections,
    pythonCode: `# Amortized Analysis — the average case over many ops
# Dynamic array (list.append)
# Most appends: O(1)
# When full: O(n) to resize
# Amortized: O(1) per append

import time

def simulate_append(n):
    arr = []
    for i in range(n):
        arr.append(i)
    return len(arr)

# Python list resizing strategy:
# capacity = 0, 4, 8, 16, 32, 64...
# Each resize doubles capacity
# Cost spread across all appends = O(1) amortized

# Another example: Counter increment
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1  # Always O(1)

# Amortized ≠ average-case
# Amortized: guarantee over sequence
# Average: probabilistic`,
  },
  arrays: {
    id: "arrays",
    title: "Arrays",
    subtitle: "Fixed-size contiguous memory blocks",
    icon: "⊞",
    phase: "Arrays & Linear Structures",
    sections: baseSections,
    pythonCode: `# Python does NOT have native arrays — use array module
from array import array

nums = array('i', [10, 20, 30, 40, 50])

# Access by index — O(1)
first = nums[0]

# Modify — O(1)
nums[2] = 35

# Traversal — O(n)
for val in nums:
    print(val, end=" ")
print()

# Append — O(1) amortized
nums.append(60)

print(nums)`,
  },
  "dynamic-arrays": {
    id: "dynamic-arrays",
    title: "Dynamic Arrays",
    subtitle: "Arrays that grow automatically",
    icon: "↔",
    phase: "Arrays & Linear Structures",
    sections: baseSections,
    pythonCode: `# Python lists ARE dynamic arrays
nums = []
nums.append(10)  # capacity grows: 0 → 4
nums.append(20)
nums.append(30)
nums.append(40)  # capacity still 4
nums.append(50)  # capacity doubles: 4 → 8

print(f"Length: {len(nums)}")

# Under the hood:
# 1. When full, allocate 2x space
# 2. Copy all elements O(n)
# 3. Then append O(1)
# Amortized cost: O(1) per append`,
  },
  stack: {
    id: "stack",
    title: "Stack",
    subtitle: "Last-In, First-Out (LIFO)",
    icon: "▤",
    phase: "Arrays & Linear Structures",
    sections: baseSections,
    pythonCode: `# Stack using a list
stack = []

# Push — O(1)
stack.append(10)
stack.append(20)
stack.append(30)

# Pop — O(1)
top = stack.pop()  # 30

# Peek — O(1)
peek = stack[-1]   # 20

# Check empty
is_empty = len(stack) == 0

# Application: balanced parentheses
def is_balanced(s):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    for ch in s:
        if ch in '({[':
            stack.append(ch)
        elif ch in ')}]':
            if not stack or stack.pop() != pairs[ch]:
                return False
    return len(stack) == 0

print(is_balanced("({[]})"))  # True`,
  },
  queue: {
    id: "queue",
    title: "Queue",
    subtitle: "First-In, First-Out (FIFO)",
    icon: "▥",
    phase: "Arrays & Linear Structures",
    sections: baseSections,
    pythonCode: `# Queue using collections.deque
from collections import deque

queue = deque()

# Enqueue — O(1)
queue.append(10)
queue.append(20)
queue.append(30)

# Dequeue — O(1)
first = queue.popleft()  # 10

# Peek at front — O(1)
front = queue[0]         # 20

print(queue, first)

# Application: print queue
tasks = deque(["print1", "print2", "print3"])
while tasks:
    task = tasks.popleft()
    print(f"Processing {task}")`,
  },
  deque: {
    id: "deque",
    title: "Deque",
    subtitle: "Double-ended queue — fast at both ends",
    icon: "▦",
    phase: "Arrays & Linear Structures",
    sections: baseSections,
    pythonCode: `# Deque (pronounced "deck")
from collections import deque

dq = deque()

# Add to both ends — O(1)
dq.append(1)         # right
dq.appendleft(2)     # left

# Remove from both ends — O(1)
right = dq.pop()      # 1
left = dq.popleft()   # 2

# Rotate — O(k)
dq = deque([1, 2, 3, 4, 5])
dq.rotate(2)    # [4, 5, 1, 2, 3]
dq.rotate(-1)   # [5, 1, 2, 3, 4]

print(dq)`,
  },
  "linked-list": {
    id: "linked-list",
    title: "Linked List",
    subtitle: "Nodes connected by pointers",
    icon: "⛓",
    phase: "Arrays & Linear Structures",
    sections: baseSections,
    pythonCode: `# Singly linked list
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

# Build: 1 → 2 → 3
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)

# Traverse — O(n)
cur = head
while cur:
    print(cur.val, end=" → ")
    cur = cur.next
print("None")

# Insert at head — O(1)
new_head = Node(0)
new_head.next = head
head = new_head

# Delete a value — O(n)
cur = head
while cur.next:
    if cur.next.val == 2:
        cur.next = cur.next.next
        break
    cur = cur.next`,
  },
  "hash-table": {
    id: "hash-table",
    title: "Hash Table",
    subtitle: "Key-value with O(1) average lookup",
    icon: "🔗",
    phase: "Hashing",
    sections: baseSections,
    pythonCode: `# Python dict IS a hash table
table = {}

# Insert — O(1)*
table["name"] = "Alice"
table["age"] = 25

# Lookup — O(1)*
print(table["name"])

# Update — O(1)*
table["age"] = 26

# Delete — O(1)*
del table["age"]

# Check key
print("name" in table)

# * amortized, assuming good hash function
# Collisions handled by chaining (separate linking)
print(table)`,
  },
  "sets-deep": {
    id: "sets-deep",
    title: "Sets Under the Hood",
    subtitle: "How Python implements O(1) membership tests",
    icon: "{}",
    phase: "Hashing",
    sections: baseSections,
    pythonCode: `# Sets are hash tables without values
s = set()

# Add — O(1)*
s.add(10)
s.add(20)
s.add(30)

# Membership — O(1)*
print(10 in s)  # True
print(99 in s)  # False

# Remove — O(1)*
s.remove(20)

# Hash-based: elements must be hashable
# Lists and dicts cannot be in sets
# Tuples (if they contain only hashable items) can

# * average case with good hash distribution`,
  },
  "dicts-deep": {
    id: "dicts-deep",
    title: "Dicts Under the Hood",
    subtitle: "Hash maps with open addressing in Python",
    icon: "📖",
    phase: "Hashing",
    sections: baseSections,
    pythonCode: `# Python dict internals (since CPython 3.6+)
# Compact dict: preserves insertion order!
d = {}

d["z"] = 26
d["a"] = 1
d["m"] = 13

print(list(d.keys()))  # ['z', 'a', 'm'] — insertion order

# Hash table with open addressing
# Key → hash(key) → index in sparse array → dense array of entries
# Load factor < 2/3 for performance

# Memory efficient: indices stored separately from entries

# All keys must be hashable
# Custom hash via __hash__
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __hash__(self):
        return hash((self.x, self.y))
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y`,
  },
  "recursion-deep": {
    id: "recursion-deep",
    title: "Recursion Deep Dive",
    subtitle: "Mastering the call stack and recursive patterns",
    icon: "↻",
    phase: "Recursion & Backtracking",
    sections: baseSections,
    pythonCode: `# Deep recursion patterns

# 1. Tower of Hanoi
def hanoi(n, src, dst, aux):
    if n == 1:
        print(f"Move disk 1: {src} → {dst}")
        return
    hanoi(n-1, src, aux, dst)
    print(f"Move disk {n}: {src} → {dst}")
    hanoi(n-1, aux, dst, src)

hanoi(3, "A", "C", "B")

# 2. Head vs Tail recursion
def head_rec(n):     # work after recursive call
    if n == 0: return
    head_rec(n-1)
    print(n, end=" ")

def tail_rec(n):     # work before recursive call
    if n == 0: return
    print(n, end=" ")
    tail_rec(n-1)

head_rec(5)  # 1 2 3 4 5
tail_rec(5)  # 5 4 3 2 1`,
  },
  backtracking: {
    id: "backtracking",
    title: "Backtracking",
    subtitle: "Explore all possibilities, undo wrong paths",
    icon: "↩",
    phase: "Recursion & Backtracking",
    sections: baseSections,
    pythonCode: `# Backtracking template
def backtrack(path, choices, result):
    if goal_reached(path):
        result.append(path.copy())
        return
    for choice in choices:
        if is_valid(choice, path):
            path.append(choice)      # make choice
            backtrack(path, choices, result)
            path.pop()               # undo choice

# Generate all subsets
def subsets(nums):
    result = []
    def backtrack(start, path):
        result.append(path.copy())
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    backtrack(0, [])
    return result

print(subsets([1, 2, 3]))`,
  },
  "subsets-permutations": {
    id: "subsets-permutations",
    title: "Subsets & Permutations",
    subtitle: "Generate all combinations and arrangements",
    icon: "⊂",
    phase: "Recursion & Backtracking",
    sections: baseSections,
    pythonCode: `# Subsets (power set) — 2ⁿ possibilities
def subsets(nums):
    result = []
    def backtrack(start, cur):
        result.append(cur.copy())
        for i in range(start, len(nums)):
            cur.append(nums[i])
            backtrack(i + 1, cur)
            cur.pop()
    backtrack(0, [])
    return result

# Permutations — n! possibilities
def permutations(nums):
    result = []
    used = set()
    def backtrack(cur):
        if len(cur) == len(nums):
            result.append(cur.copy())
            return
        for i in range(len(nums)):
            if i in used: continue
            used.add(i)
            cur.append(nums[i])
            backtrack(cur)
            cur.pop()
            used.remove(i)
    backtrack([])
    return result

print(subsets([1, 2]))
print(permutations([1, 2, 3]))`,
  },
  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    subtitle: "Place queens safely on a chessboard",
    icon: "♛",
    phase: "Recursion & Backtracking",
    sections: baseSections,
    pythonCode: `# N-Queens — classic backtracking
def solve_n_queens(n):
    cols, diag1, diag2 = set(), set(), set()
    result = []

    def backtrack(row, board):
        if row == n:
            result.append(board.copy())
            return
        for col in range(n):
            d1, d2 = row - col, row + col
            if col in cols or d1 in diag1 or d2 in diag2:
                continue
            cols.add(col); diag1.add(d1); diag2.add(d2)
            board.append(col)
            backtrack(row + 1, board)
            board.pop()
            cols.remove(col); diag1.remove(d1); diag2.remove(d2)

    backtrack(0, [])
    return result

solutions = solve_n_queens(4)
for sol in solutions:
    line = ["."] * len(sol)
    for r, c in enumerate(sol):
        line[r] = "Q" if c == sol[r] else "."
    print(line)`,
  },
  trees: {
    id: "trees",
    title: "Binary Trees",
    subtitle: "Hierarchical data with parent-child nodes",
    icon: "🌳",
    phase: "Trees",
    sections: baseSections,
    pythonCode: `# Binary tree
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# Build:    1
#         / \
#        2   3
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)

# Traversals
def inorder(node):
    if not node: return
    inorder(node.left)
    print(node.val, end=" ")
    inorder(node.right)

def preorder(node):
    if not node: return
    print(node.val, end=" ")
    preorder(node.left)
    preorder(node.right)

def postorder(node):
    if not node: return
    postorder(node.left)
    postorder(node.right)
    print(node.val, end=" ")

# Height
def height(node):
    if not node: return 0
    return 1 + max(height(node.left), height(node.right))

inorder(root)  # 2 1 3`,
  },
  bst: {
    id: "bst",
    title: "Binary Search Trees",
    subtitle: "Sorted for fast lookup — O(log n)",
    icon: "🌲",
    phase: "Trees",
    sections: baseSections,
    pythonCode: `# Binary Search Tree
class BST:
    class Node:
        def __init__(self, val):
            self.val = val
            self.left = None
            self.right = None

    def __init__(self):
        self.root = None

    def insert(self, val):
        if not self.root:
            self.root = self.Node(val)
            return
        cur = self.root
        while cur:
            if val < cur.val:
                if cur.left: cur = cur.left
                else: cur.left = self.Node(val); break
            else:
                if cur.right: cur = cur.right
                else: cur.right = self.Node(val); break

    def search(self, val):
        cur = self.root
        while cur:
            if val == cur.val: return True
            cur = cur.left if val < cur.val else cur.right
        return False

    def delete(self, root, val):
        if not root: return None
        if val < root.val:
            root.left = self.delete(root.left, val)
        elif val > root.val:
            root.right = self.delete(root.right, val)
        else:
            if not root.left: return root.right
            if not root.right: return root.left
            succ = root.right
            while succ.left: succ = succ.left
            root.val = succ.val
            root.right = self.delete(root.right, succ.val)
        return root

bst = BST()
for v in [5, 3, 7, 2, 4, 8]:
    bst.insert(v)
print(bst.search(4), bst.search(9))`,
  },
  avl: {
    id: "avl",
    title: "AVL Trees",
    subtitle: "Self-balancing BST with balance factors",
    icon: "⚖",
    phase: "Trees",
    sections: baseSections,
    pythonCode: `# AVL Tree — self-balancing BST
class AVLNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.height = 1

def height(node):
    return node.height if node else 0

def balance(node):
    return height(node.left) - height(node.right)

def update_height(node):
    node.height = 1 + max(height(node.left), height(node.right))

def rotate_right(y):
    x = y.left
    T2 = x.right
    x.right = y
    y.left = T2
    update_height(y)
    update_height(x)
    return x

def rotate_left(x):
    y = x.right
    T2 = y.left
    y.left = x
    x.right = T2
    update_height(x)
    update_height(y)
    return y

# Insert with rebalancing
def insert(node, val):
    if not node: return AVLNode(val)
    if val < node.val: node.left = insert(node.left, val)
    else: node.right = insert(node.right, val)
    update_height(node)
    bf = balance(node)
    if bf > 1 and val < node.left.val: return rotate_right(node)
    if bf < -1 and val > node.right.val: return rotate_left(node)
    if bf > 1 and val > node.left.val:
        node.left = rotate_left(node.left)
        return rotate_right(node)
    if bf < -1 and val < node.right.val:
        node.right = rotate_right(node.right)
        return rotate_left(node)
    return node

print("AVL maintains O(log n) height")`,
  },
  "red-black-tree": {
    id: "red-black-tree",
    title: "Red-Black Trees",
    subtitle: "Self-balancing BST with color properties",
    icon: "🔴",
    phase: "Trees",
    sections: baseSections,
    pythonCode: `# Red-Black Tree properties:
# 1. Every node is red or black
# 2. Root is always black
# 3. Red nodes cannot have red children (no double red)
# 4. Every path has same number of black nodes
# 5. Leaves (NIL) are black

# These properties ensure max height ≤ 2 * log₂(n+1)
# Used in: TreeMap, C++ std::map, Linux kernel

class RBNode:
    RED = True
    BLACK = False

    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.color = RBNode.RED  # new nodes are red

# Insert fixes: recolor, rotate left, rotate right
# These restore Red-Black properties in O(log n)

print("Red-Black trees guarantee O(log n) operations")
print("Used in: Java TreeMap, C++ std::map, Linux CF Scheduler")`,
  },
  heap: {
    id: "heap",
    title: "Heaps",
    subtitle: "Priority queue — min or max at the top",
    icon: "📊",
    phase: "Trees",
    sections: baseSections,
    pythonCode: `# Min-heap using heapq
import heapq

heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
heapq.heappush(heap, 3)
heapq.heappush(heap, 8)

smallest = heapq.heappop(heap)  # 1
print(smallest)

# Max-heap: push negative values
max_heap = []
heapq.heappush(max_heap, -5)
heapq.heappush(max_heap, -1)
largest = -heapq.heappop(max_heap)  # 5
print(largest)

# Heapify — O(n)
arr = [3, 1, 4, 1, 5]
heapq.heapify(arr)  # min-heap in-place
print(arr[0])  # 1 (minimum)`,
  },
  trie: {
    id: "trie",
    title: "Trie",
    subtitle: "Prefix tree for fast string search",
    icon: "🔤",
    phase: "Trees",
    sections: baseSections,
    pythonCode: `# Trie (prefix tree)
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_end

    def starts_with(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return True

t = Trie()
t.insert("hello")
t.insert("help")
print(t.search("hello"))    # True
print(t.search("hel"))      # False
print(t.starts_with("hel")) # True`,
  },
  "segment-tree": {
    id: "segment-tree",
    title: "Segment Tree",
    subtitle: "Range queries and updates in O(log n)",
    icon: "📐",
    phase: "Trees",
    sections: baseSections,
    pythonCode: `# Segment Tree — range sum query (RSQ)
class SegmentTree:
    def __init__(self, arr):
        n = len(arr)
        self.n = n
        self.tree = [0] * (4 * n)
        self._build(arr, 0, 0, n - 1)

    def _build(self, arr, node, l, r):
        if l == r:
            self.tree[node] = arr[l]
            return
        m = (l + r) // 2
        self._build(arr, 2*node+1, l, m)
        self._build(arr, 2*node+2, m+1, r)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]

    def query(self, ql, qr):
        return self._query(0, 0, self.n-1, ql, qr)

    def _query(self, node, l, r, ql, qr):
        if ql > r or qr < l: return 0
        if ql <= l and r <= qr: return self.tree[node]
        m = (l + r) // 2
        left = self._query(2*node+1, l, m, ql, qr)
        right = self._query(2*node+2, m+1, r, ql, qr)
        return left + right

    def update(self, idx, val):
        self._update(0, 0, self.n-1, idx, val)

    def _update(self, node, l, r, idx, val):
        if l == r:
            self.tree[node] = val
            return
        m = (l + r) // 2
        if idx <= m:
            self._update(2*node+1, l, m, idx, val)
        else:
            self._update(2*node+2, m+1, r, idx, val)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]

st = SegmentTree([1, 3, 5, 7, 9])
print(st.query(1, 3))  # 3 + 5 + 7 = 15`,
  },
  "fenwick-tree": {
    id: "fenwick-tree",
    title: "Fenwick Tree",
    subtitle: "Prefix sums with point updates — Binary Indexed Tree",
    icon: "📈",
    phase: "Trees",
    sections: baseSections,
    pythonCode: `# Fenwick Tree (Binary Indexed Tree)
class BIT:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)

    def add(self, i, delta):
        i += 1  # 1-indexed
        while i <= self.n:
            self.tree[i] += delta
            i += i & -i

    def sum(self, i):
        i += 1
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & -i
        return s

    def range_sum(self, l, r):
        return self.sum(r) - self.sum(l - 1)

# Usage
bit = BIT(5)
for i, v in enumerate([1, 3, 5, 7, 9]):
    bit.add(i, v)

print(bit.range_sum(1, 3))  # 3 + 5 + 7 = 15
bit.add(2, 5)  # add 5 to index 2 (was 5, now 10)
print(bit.range_sum(1, 3))  # 3 + 10 + 7 = 20`,
  },
  graph: {
    id: "graph",
    title: "Graph Basics",
    subtitle: "Nodes and edges — representations and properties",
    icon: "🔷",
    phase: "Graphs",
    sections: baseSections,
    pythonCode: `# Graph representations
# Adjacency list
adj_list = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"],
}

# Adjacency matrix
adj_matrix = [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0],
]

# Degree
def degree(graph, node):
    return len(graph[node])

print(f"Degree of A: {degree(adj_list, 'A')}")
print(f"Number of nodes: {len(adj_list)}")`,
  },
  dfs: {
    id: "dfs",
    title: "Depth-First Search",
    subtitle: "Go deep before going wide",
    icon: "⬇",
    phase: "Graphs",
    sections: baseSections,
    pythonCode: `# DFS — recursive
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
}

def dfs_recursive(g, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=' ')
    for nbr in g[start]:
        if nbr not in visited:
            dfs_recursive(g, nbr, visited)

def dfs_iterative(g, start):
    visited = set()
    stack = [start]
    while stack:
        node = stack.pop()
        if node in visited: continue
        visited.add(node)
        print(node, end=' ')
        for nbr in reversed(g[node]):
            if nbr not in visited:
                stack.append(nbr)

dfs_recursive(graph, 'A')  # A B D E F C`,
  },
  bfs: {
    id: "bfs",
    title: "Breadth-First Search",
    subtitle: "Level by level — find shortest paths",
    icon: "➡",
    phase: "Graphs",
    sections: baseSections,
    pythonCode: `# BFS — level-order traversal
from collections import deque

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
}

def bfs(g, start):
    visited = {start}
    q = deque([start])
    while q:
        node = q.popleft()
        print(node, end=' ')
        for nbr in g[node]:
            if nbr not in visited:
                visited.add(nbr)
                q.append(nbr)

def bfs_shortest_path(g, start, end):
    visited = {start}
    q = deque([(start, [start])])
    while q:
        node, path = q.popleft()
        if node == end: return path
        for nbr in g[node]:
            if nbr not in visited:
                visited.add(nbr)
                q.append((nbr, path + [nbr]))
    return None

bfs(graph, 'A')  # A B C D E F
print()
print(bfs_shortest_path(graph, 'A', 'F'))  # ['A', 'C', 'F']`,
  },
  "shortest-path": {
    id: "shortest-path",
    title: "Shortest Path",
    subtitle: "Dijkstra, Bellman-Ford, Floyd-Warshall",
    icon: "🛤",
    phase: "Graphs",
    sections: baseSections,
    pythonCode: `# Dijkstra — shortest path (non-negative weights)
import heapq

def dijkstra(graph, start):
    dist = {node: float('inf') for node in graph}
    dist[start] = 0
    pq = [(0, start)]
    while pq:
        d, node = heapq.heappop(pq)
        if d > dist[node]: continue
        for nbr, w in graph[node]:
            nd = d + w
            if nd < dist[nbr]:
                dist[nbr] = nd
                heapq.heappush(pq, (nd, nbr))
    return dist

# Bellman-Ford — handles negative weights
def bellman_ford(edges, n, start):
    dist = [float('inf')] * n
    dist[start] = 0
    for _ in range(n - 1):
        for u, v, w in edges:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    # Check for negative cycles
    for u, v, w in edges:
        if dist[u] + w < dist[v]:
            return None  # Negative cycle detected
    return dist

graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('C', 1), ('D', 5)],
    'C': [('D', 8), ('E', 10)],
    'D': [('E', 2)],
    'E': [],
}
print(dijkstra(graph, 'A'))`,
  },
  mst: {
    id: "mst",
    title: "Minimum Spanning Tree",
    subtitle: "Connect all nodes with minimum total weight",
    icon: "🌉",
    phase: "Graphs",
    sections: baseSections,
    pythonCode: `# Prim's Algorithm — grow the tree
import heapq

def prim(graph, start):
    visited = {start}
    edges = [(w, start, nbr) for nbr, w in graph[start]]
    heapq.heapify(edges)
    mst = []
    while edges and len(visited) < len(graph):
        w, u, v = heapq.heappop(edges)
        if v in visited: continue
        visited.add(v)
        mst.append((u, v, w))
        for nbr, w2 in graph[v]:
            if nbr not in visited:
                heapq.heappush(edges, (w2, v, nbr))
    return mst

# Kruskal's Algorithm — union find
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py: return False
        if self.rank[px] < self.rank[py]:
            self.parent[px] = py
        elif self.rank[px] > self.rank[py]:
            self.parent[py] = px
        else:
            self.parent[py] = px
            self.rank[px] += 1
        return True

graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('A', 4), ('C', 1), ('D', 5)],
    'C': [('A', 2), ('B', 1), ('D', 8)],
    'D': [('B', 5), ('C', 8)],
}
print(prim(graph, 'A'))`,
  },
  "topological-sort": {
    id: "topological-sort",
    title: "Topological Sort",
    subtitle: "Order nodes for dependency resolution",
    icon: "📋",
    phase: "Graphs",
    sections: baseSections,
    pythonCode: `# Topological Sort — Kahn's Algorithm (BFS)
from collections import deque

def topological_sort(graph):
    in_degree = {node: 0 for node in graph}
    for node in graph:
        for nbr in graph[node]:
            in_degree[nbr] += 1

    q = deque([n for n, d in in_degree.items() if d == 0])
    result = []

    while q:
        node = q.popleft()
        result.append(node)
        for nbr in graph[node]:
            in_degree[nbr] -= 1
            if in_degree[nbr] == 0:
                q.append(nbr)

    if len(result) != len(graph):
        return []  # cycle detected
    return result

# DAG: courses with prerequisites
courses = {
    'CS101': [],
    'CS102': ['CS101'],
    'CS201': ['CS102'],
    'MATH101': [],
    'MATH201': ['MATH101'],
    'STATS': ['MATH201'],
}
print(topological_sort(courses))`,
  },
  "union-find": {
    id: "union-find",
    title: "Union Find",
    subtitle: "Disjoint Set Union with path compression",
    icon: "🔗",
    phase: "Graphs",
    sections: baseSections,
    pythonCode: `# Union-Find (Disjoint Set Union)
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.size = [1] * n

    def find(self, x):
        # Path compression
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        # Union by rank
        px, py = self.find(x), self.find(y)
        if px == py: return False
        if self.rank[px] < self.rank[py]:
            self.parent[px] = py
            self.size[py] += self.size[px]
        elif self.rank[px] > self.rank[py]:
            self.parent[py] = px
            self.size[px] += self.size[py]
        else:
            self.parent[py] = px
            self.rank[px] += 1
            self.size[px] += self.size[py]
        return True

    def connected(self, x, y):
        return self.find(x) == self.find(y)

    def component_size(self, x):
        return self.size[self.find(x)]

# Usage: detect cycle in graph
dsu = DSU(5)
dsu.union(0, 1)
dsu.union(2, 3)
print(dsu.connected(0, 1))  # True
print(dsu.connected(0, 2))  # False`,
  },
  "linear-search": {
    id: "linear-search",
    title: "Linear Search",
    subtitle: "Scan every element one by one",
    icon: "🔎",
    phase: "Searching",
    sections: baseSections,
    pythonCode: `# Linear Search — O(n)
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Find all occurrences
def find_all(arr, target):
    return [i for i, x in enumerate(arr) if x == target]

# Find maximum
def find_max(arr):
    max_val = arr[0]
    for x in arr:
        if x > max_val:
            max_val = x
    return max_val

nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(linear_search(nums, 5))  # 4
print(find_all(nums, 1))       # [1, 3]
print(find_max(nums))          # 9`,
  },
  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    subtitle: "Divide and conquer in sorted arrays",
    icon: "🔍",
    phase: "Searching",
    sections: baseSections,
    pythonCode: `# Binary search — O(log n)
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Lower bound (first ≥ target)
def lower_bound(arr, target):
    l, r = 0, len(arr)
    while l < r:
        m = (l + r) // 2
        if arr[m] < target:
            l = m + 1
        else:
            r = m
    return l

# Upper bound (first > target)
def upper_bound(arr, target):
    l, r = 0, len(arr)
    while l < r:
        m = (l + r) // 2
        if arr[m] <= target:
            l = m + 1
        else:
            r = m
    return l

nums = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(nums, 7))  # 3`,
  },
  sorting: {
    id: "sorting",
    title: "Comparison Sorting",
    subtitle: "Bubble, Selection, Insertion, Merge, Quick, Heap",
    icon: "⇕",
    phase: "Sorting",
    sections: baseSections,
    pythonCode: `# Comparison Sorting Algorithms

# Bubble Sort — O(n²)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped: break  # optimized
    return arr

# Selection Sort — O(n²)
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# Insertion Sort — O(n²)
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr

# Merge Sort — O(n log n)
def merge_sort(arr):
    if len(arr) <= 1: return arr
    m = len(arr) // 2
    left = merge_sort(arr[:m])
    right = merge_sort(arr[m:])
    return merge(left, right)

def merge(l, r):
    result = []
    i = j = 0
    while i < len(l) and j < len(r):
        if l[i] <= r[j]:
            result.append(l[i]); i += 1
        else:
            result.append(r[j]); j += 1
    return result + l[i:] + r[j:]

nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(merge_sort(nums))`,
  },
  "linear-sorting": {
    id: "linear-sorting",
    title: "Linear-Time Sorting",
    subtitle: "Counting, Radix, and Bucket Sort",
    icon: "⚡",
    phase: "Sorting",
    sections: baseSections,
    pythonCode: `# Linear-time sorting (non-comparison based)

# Counting Sort — O(n + k) for small integer range
def counting_sort(arr):
    if not arr: return arr
    k = max(arr)
    count = [0] * (k + 1)
    for x in arr:
        count[x] += 1
    for i in range(1, len(count)):
        count[i] += count[i-1]
    result = [0] * len(arr)
    for x in reversed(arr):
        count[x] -= 1
        result[count[x]] = x
    return result

# Radix Sort — O(d * n) for d-digit numbers
def counting_sort_by_digit(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    for x in arr:
        count[(x // exp) % 10] += 1
    for i in range(1, 10):
        count[i] += count[i-1]
    for x in reversed(arr):
        digit = (x // exp) % 10
        count[digit] -= 1
        output[count[digit]] = x
    return output

def radix_sort(arr):
    if not arr: return arr
    max_val = max(arr)
    exp = 1
    while max_val // exp > 0:
        arr = counting_sort_by_digit(arr, exp)
        exp *= 10
    return arr

print(counting_sort([4, 2, 2, 8, 3, 3, 1]))
print(radix_sort([170, 45, 75, 90, 802, 24, 2, 66]))`,
  },
  greedy: {
    id: "greedy",
    title: "Greedy Algorithms",
    subtitle: "Take the best option at every step",
    icon: "💰",
    phase: "Greedy Algorithms",
    sections: baseSections,
    pythonCode: `# Greedy: coin change (US coins)
def coin_change(amount, coins=[25, 10, 5, 1]):
    result = []
    for coin in coins:
        while amount >= coin:
            amount -= coin
            result.append(coin)
    return result

print(coin_change(67))  # [25, 25, 10, 5, 1, 1]

# Activity Selection
def activity_selection(activities):
    activities.sort(key=lambda x: x[1])  # sort by end time
    result = [activities[0]]
    for start, end in activities[1:]:
        if start >= result[-1][1]:
            result.append((start, end))
    return result

acts = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11)]
print(activity_selection(acts))

# Greedy works when local optimum = global optimum
# Fails for some problems (e.g., some coin systems)`,
  },
  "dynamic-programming": {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    subtitle: "Solve subproblems, remember answers",
    icon: "🧩",
    phase: "Dynamic Programming",
    sections: baseSections,
    pythonCode: `# Top-down DP (memoization)
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# Bottom-up DP (tabulation)
def fib_tab(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Knapsack 0/1
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i-1][w],
                    values[i-1] + dp[i-1][w - weights[i-1]])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][capacity]

print(fib_memo(50))   # 12586269025
print(knapsack([1, 2, 3], [60, 100, 120], 5))  # 220`,
  },
  "bit-manipulation": {
    id: "bit-manipulation",
    title: "Bit Manipulation",
    subtitle: "AND, OR, XOR, shifts — work at the bit level",
    icon: "011",
    phase: "Bit Manipulation",
    sections: baseSections,
    pythonCode: `# Bit Manipulation
a = 5   # 101
b = 3   # 011

# Basic operators
print(a & b)   # AND → 1   (001)
print(a | b)   # OR  → 7   (111)
print(a ^ b)   # XOR → 6   (110)
print(~a)      # NOT → -6
print(a << 1)  # left shift → 10 (1010)
print(a >> 1)  # right shift → 2 (010)

# Common patterns
def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

def count_bits(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count

def single_number(nums):
    result = 0
    for n in nums:
        result ^= n
    return result

print(is_power_of_two(16))  # True
print(count_bits(13))       # 3 (1101)
print(single_number([2, 2, 1]))  # 1`,
  },
  "sliding-window": {
    id: "sliding-window",
    title: "Sliding Window",
    subtitle: "A moving frame over the array",
    icon: "⊞",
    phase: "Sliding Window",
    sections: baseSections,
    pythonCode: `# Sliding Window pattern

# Fixed window: max sum of k consecutive elements
def max_sum_fixed(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

# Variable window: smallest subarray with sum ≥ target
def min_subarray_len(target, arr):
    left = total = 0
    min_len = float('inf')
    for right in range(len(arr)):
        total += arr[right]
        while total >= target:
            min_len = min(min_len, right - left + 1)
            total -= arr[left]
            left += 1
    return min_len if min_len != float('inf') else 0

# Longest substring without repeating chars
def length_of_longest_substring(s):
    seen = set()
    left = max_len = 0
    for right in range(len(s)):
        while s[right] in seen:
            seen.remove(s[left])
            left += 1
        seen.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len

print(max_sum_fixed([2, 1, 5, 1, 3, 2], 3))  # 9
print(length_of_longest_substring("abcabcbb"))  # 3`,
  },
  "two-pointers": {
    id: "two-pointers",
    title: "Two Pointers",
    subtitle: "Solve problems with left and right pointers",
    icon: "↔",
    phase: "Two Pointers",
    sections: baseSections,
    pythonCode: `# Two Pointers pattern

# Two Sum in sorted array
def two_sum_sorted(arr, target):
    l, r = 0, len(arr) - 1
    while l < r:
        s = arr[l] + arr[r]
        if s == target:
            return [l, r]
        elif s < target:
            l += 1
        else:
            r -= 1
    return [-1, -1]

# Three Sum
def three_sum(arr):
    arr.sort()
    result = []
    for i in range(len(arr) - 2):
        if i > 0 and arr[i] == arr[i-1]: continue
        l, r = i + 1, len(arr) - 1
        while l < r:
            s = arr[i] + arr[l] + arr[r]
            if s == 0:
                result.append([arr[i], arr[l], arr[r]])
                while l < r and arr[l] == arr[l+1]: l += 1
                while l < r and arr[r] == arr[r-1]: r -= 1
                l += 1; r -= 1
            elif s < 0: l += 1
            else: r -= 1
    return result

# Container with most water
def max_area(height):
    l, r = 0, len(height) - 1
    area = 0
    while l < r:
        area = max(area, (r - l) * min(height[l], height[r]))
        if height[l] < height[r]:
            l += 1
        else:
            r -= 1
    return area

print(two_sum_sorted([2, 7, 11, 15], 9))  # [0, 1]
print(three_sum([-1, 0, 1, 2, -1, -4]))`,
  },
  "prefix-sum": {
    id: "prefix-sum",
    title: "Prefix Sum",
    subtitle: "Efficient range sum queries",
    icon: "∑",
    phase: "Prefix Sum",
    sections: baseSections,
    pythonCode: `# Prefix Sum — O(1) range sum after O(n) preprocessing

def prefix_sum(arr):
    prefix = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        prefix[i+1] = prefix[i] + arr[i]
    return prefix

def range_sum(prefix, l, r):
    return prefix[r+1] - prefix[l]

# 2D Prefix Sum
class PrefixSum2D:
    def __init__(self, matrix):
        m, n = len(matrix), len(matrix[0])
        self.prefix = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m):
            for j in range(n):
                self.prefix[i+1][j+1] = (matrix[i][j]
                    + self.prefix[i][j+1]
                    + self.prefix[i+1][j]
                    - self.prefix[i][j])

    def query(self, r1, c1, r2, c2):
        return (self.prefix[r2+1][c2+1]
            - self.prefix[r1][c2+1]
            - self.prefix[r2+1][c1]
            + self.prefix[r1][c1])

arr = [1, 2, 3, 4, 5, 6]
pref = prefix_sum(arr)
print(range_sum(pref, 1, 3))  # 2+3+4 = 9`,
  },
  "monotonic-stack": {
    id: "monotonic-stack",
    title: "Monotonic Stack",
    subtitle: "Next greater/smaller element patterns",
    icon: "📊",
    phase: "Monotonic Stack",
    sections: baseSections,
    pythonCode: `# Monotonic Stack pattern

# Next Greater Element (to the right)
def next_greater_element(arr):
    result = [-1] * len(arr)
    stack = []
    for i in range(len(arr)):
        while stack and arr[i] > arr[stack[-1]]:
            result[stack.pop()] = arr[i]
        stack.append(i)
    return result

# Next Smaller Element
def next_smaller_element(arr):
    result = [-1] * len(arr)
    stack = []
    for i in range(len(arr)):
        while stack and arr[i] < arr[stack[-1]]:
            result[stack.pop()] = arr[i]
        stack.append(i)
    return result

# Largest Rectangle in Histogram
def largest_rectangle(heights):
    stack = []
    max_area = 0
    for i, h in enumerate(heights + [0]):
        while stack and heights[stack[-1]] > h:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        stack.append(i)
    return max_area

print(next_greater_element([4, 5, 2, 10, 8]))  # [5, 10, 10, -1, -1]
print(largest_rectangle([2, 1, 5, 6, 2, 3]))  # 10`,
  },
  "advanced-graphs": {
    id: "advanced-graphs",
    title: "Advanced Graph Algorithms",
    subtitle: "Bridges, articulation points, SCCs",
    icon: "🔷",
    phase: "Advanced Graphs",
    sections: baseSections,
    pythonCode: `# Advanced Graph Algorithms

# Find bridges in an undirected graph
def find_bridges(n, edges):
    graph = [[] for _ in range(n)]
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)

    visited = [False] * n
    tin = [-1] * n    # discovery time
    low = [-1] * n    # lowest reachable
    bridges = []

    def dfs(v, p, timer):
        visited[v] = True
        tin[v] = low[v] = timer[0]
        timer[0] += 1
        for to in graph[v]:
            if to == p: continue
            if visited[to]:
                low[v] = min(low[v], tin[to])
            else:
                dfs(to, v, timer)
                low[v] = min(low[v], low[to])
                if low[to] > tin[v]:
                    bridges.append((v, to))

    for i in range(n):
        if not visited[i]:
            dfs(i, -1, [0])

    return bridges

# Tarjan's algorithm for SCCs
def tarjan_scc(n, graph):
    index = [0]
    indices = [-1] * n
    low_link = [0] * n
    on_stack = [False] * n
    stack = []
    sccs = []

    def strongconnect(v):
        indices[v] = low_link[v] = index[0]
        index[0] += 1
        stack.append(v)
        on_stack[v] = True
        for to in graph[v]:
            if indices[to] == -1:
                strongconnect(to)
                low_link[v] = min(low_link[v], low_link[to])
            elif on_stack[to]:
                low_link[v] = min(low_link[v], indices[to])
        if low_link[v] == indices[v]:
            scc = []
            while True:
                w = stack.pop()
                on_stack[w] = False
                scc.append(w)
                if w == v: break
            sccs.append(scc)

    for v in range(n):
        if indices[v] == -1:
            strongconnect(v)
    return sccs

print("Bridges and SCCs found in O(V+E)")`,
  },
  "a-star": {
    id: "a-star",
    title: "A* Search",
    subtitle: "Heuristic-guided pathfinding",
    icon: "★",
    phase: "Advanced Graphs",
    sections: baseSections,
    pythonCode: `# A* Search Algorithm
import heapq

def a_star(grid, start, end):
    # grid: 0=open, 1=blocked
    rows, cols = len(grid), len(grid[0])

    def heuristic(a, b):
        return abs(a[0] - b[0]) + abs(a[1] - b[1])

    open_set = [(0, start)]
    came_from = {}
    g_score = {start: 0}
    f_score = {start: heuristic(start, end)}

    while open_set:
        current = heapq.heappop(open_set)[1]
        if current == end:
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start)
            return path[::-1]

        for dr, dc in [(0,1), (1,0), (0,-1), (-1,0)]:
            nr, nc = current[0] + dr, current[1] + dc
            neighbor = (nr, nc)
            if nr < 0 or nr >= rows or nc < 0 or nc >= cols:
                continue
            if grid[nr][nc] == 1:
                continue
            tentative_g = g_score[current] + 1
            if tentative_g < g_score.get(neighbor, float('inf')):
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g
                f_score[neighbor] = tentative_g + heuristic(neighbor, end)
                heapq.heappush(open_set, (f_score[neighbor], neighbor))
    return None  # no path

grid = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
]
print(a_star(grid, (0, 0), (3, 3)))`,
  },
  "advanced-trees": {
    id: "advanced-trees",
    title: "B-Trees & Skip Lists",
    subtitle: "Tree-based data structures for large data",
    icon: "🌲",
    phase: "Advanced Data Structures",
    sections: baseSections,
    pythonCode: `# B-Tree concepts
# - Self-balancing tree with multiple keys per node
# - Used in databases and filesystems
# - Order m: each node has ≤ m children
# - All leaves at same depth
# Properties:
#   Root: 1 to m-1 keys
#   Internal: ⌈m/2⌉-1 to m-1 keys
#   Children: ⌈m/2⌉ to m

# Skip List — probabilistic alternative to balanced BST
# Multiple layers of linked lists
# Bottom layer: all elements
# Each higher layer: subset (≈50% probability)
# Search: O(log n) average
# Insert: O(log n) average

import random

class SkipListNode:
    def __init__(self, val, level):
        self.val = val
        self.forward = [None] * (level + 1)

class SkipList:
    def __init__(self, max_level=16):
        self.max_level = max_level
        self.header = SkipListNode(-1, max_level)
        self.level = 0

    def random_level(self):
        level = 0
        while random.random() < 0.5 and level < self.max_level:
            level += 1
        return level

    def insert(self, val):
        update = [None] * (self.max_level + 1)
        cur = self.header
        for i in range(self.level, -1, -1):
            while cur.forward[i] and cur.forward[i].val < val:
                cur = cur.forward[i]
            update[i] = cur
        r_level = self.random_level()
        if r_level > self.level:
            for i in range(self.level + 1, r_level + 1):
                update[i] = self.header
            self.level = r_level
        new_node = SkipListNode(val, r_level)
        for i in range(r_level + 1):
            new_node.forward[i] = update[i].forward[i]
            update[i].forward[i] = new_node

    def search(self, val):
        cur = self.header
        for i in range(self.level, -1, -1):
            while cur.forward[i] and cur.forward[i].val < val:
                cur = cur.forward[i]
        cur = cur.forward[0]
        return cur and cur.val == val

sl = SkipList()
for v in [3, 1, 4, 1, 5, 9]:
    sl.insert(v)
print(sl.search(4))  # True
print(sl.search(2))  # False`,
  },
  "sparse-table": {
    id: "sparse-table",
    title: "Sparse Table",
    subtitle: "O(1) range queries with O(n log n) preprocessing",
    icon: "📊",
    phase: "Advanced Data Structures",
    sections: baseSections,
    pythonCode: `# Sparse Table — O(1) range minimum/maximum/GCD query
# Fixed array, no updates
import math

class SparseTable:
    def __init__(self, arr):
        n = len(arr)
        k = int(math.log2(n)) + 1
        self.st = [[0] * k for _ in range(n)]
        self.log = [0] * (n + 1)

        for i in range(n):
            self.st[i][0] = arr[i]

        for j in range(1, k):
            for i in range(n - (1 << j) + 1):
                self.st[i][j] = min(
                    self.st[i][j-1],
                    self.st[i + (1 << (j-1))][j-1]
                )

        for i in range(2, n + 1):
            self.log[i] = self.log[i // 2] + 1

    def query(self, l, r):
        j = self.log[r - l + 1]
        return min(
            self.st[l][j],
            self.st[r - (1 << j) + 1][j]
        )

arr = [4, 2, 1, 3, 7, 5, 0, 6]
st = SparseTable(arr)
print(st.query(2, 5))  # min(1, 3, 7, 5) = 1
print(st.query(0, 2))  # min(4, 2, 1) = 1`,
  },
  "string-matching": {
    id: "string-matching",
    title: "String Matching",
    subtitle: "KMP, Rabin-Karp, Z-Algorithm",
    icon: "🔤",
    phase: "String Algorithms",
    sections: baseSections,
    pythonCode: `# KMP (Knuth-Morris-Pratt) — O(n + m)
def kmp_search(text, pattern):
    n, m = len(text), len(pattern)
    if m == 0: return 0

    # Build LPS (Longest Proper Prefix which is also Suffix)
    lps = [0] * m
    j = 0
    for i in range(1, m):
        while j > 0 and pattern[i] != pattern[j]:
            j = lps[j-1]
        if pattern[i] == pattern[j]:
            j += 1
            lps[i] = j

    # Search
    j = 0
    for i in range(n):
        while j > 0 and text[i] != pattern[j]:
            j = lps[j-1]
        if text[i] == pattern[j]:
            j += 1
            if j == m:
                return i - m + 1
    return -1

# Rabin-Karp — rolling hash
def rabin_karp(text, pattern):
    n, m = len(text), len(pattern)
    if m > n: return -1
    d, q = 256, 101  # base and modulus
    h = pow(d, m-1, q)
    p_hash = t_hash = 0
    for i in range(m):
        p_hash = (d * p_hash + ord(pattern[i])) % q
        t_hash = (d * t_hash + ord(text[i])) % q
    for i in range(n - m + 1):
        if p_hash == t_hash:
            if text[i:i+m] == pattern:
                return i
        if i < n - m:
            t_hash = (d * (t_hash - ord(text[i]) * h) + ord(text[i+m])) % q
    return -1

print(kmp_search("ABABDABACDABABC", "ABABC"))  # 10
print(rabin_karp("ABCABCD", "ABCD"))  # 3`,
  },
  "suffix-array": {
    id: "suffix-array",
    title: "Suffix Array",
    subtitle: "Sorted suffixes for powerful string operations",
    icon: "📝",
    phase: "String Algorithms",
    sections: baseSections,
    pythonCode: `# Suffix Array — sorted suffixes of a string
def build_suffix_array(s):
    n = len(s)
    suffixes = [(s[i:], i) for i in range(n)]
    suffixes.sort(key=lambda x: x[0])
    return [idx for _, idx in suffixes]

# LCP array (Longest Common Prefix)
def build_lcp(s, suffix_arr):
    n = len(s)
    rank = [0] * n
    for i, idx in enumerate(suffix_arr):
        rank[idx] = i
    lcp = [0] * (n - 1)
    k = 0
    for i in range(n):
        if rank[i] == n - 1:
            k = 0
            continue
        j = suffix_arr[rank[i] + 1]
        while i + k < n and j + k < n and s[i+k] == s[j+k]:
            k += 1
        lcp[rank[i]] = k
        if k: k -= 1
    return lcp

s = "banana"
sa = build_suffix_array(s)
print(sa)  # [5, 3, 1, 0, 4, 2]
# Suffixes: a, ana, anana, banana, na, nana
# Applications: substring search, longest repeating substring`,
  },
  mathematical: {
    id: "mathematical",
    title: "Math for DSA",
    subtitle: "GCD, LCM, Sieve, Fast Exponentiation",
    icon: "π",
    phase: "Mathematical Algorithms",
    sections: baseSections,
    pythonCode: `# Mathematical Algorithms for DSA

# GCD (Euclidean Algorithm)
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    return a * b // gcd(a, b)

# Sieve of Eratosthenes — find all primes up to n
def sieve(n):
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False
    for i in range(2, int(n**0.5) + 1):
        if is_prime[i]:
            for j in range(i*i, n + 1, i):
                is_prime[j] = False
    return [i for i in range(2, n+1) if is_prime[i]]

# Prime factorization
def prime_factors(n):
    factors = []
    d = 2
    while d * d <= n:
        while n % d == 0:
            factors.append(d)
            n //= d
        d += 1
    if n > 1:
        factors.append(n)
    return factors

# Fast exponentiation (exponentiation by squaring)
def fast_pow(base, exp, mod=10**9+7):
    result = 1
    while exp > 0:
        if exp & 1:
            result = (result * base) % mod
        base = (base * base) % mod
        exp >>= 1
    return result

print(gcd(12, 18))     # 6
print(sieve(20))       # [2, 3, 5, 7, 11, 13, 17, 19]
print(fast_pow(2, 10)) # 1024`,
  },
  "problem-patterns": {
    id: "problem-patterns",
    title: "Interview Problem Patterns",
    subtitle: "Recognize patterns, solve faster",
    icon: "🎯",
    phase: "Problem Patterns",
    sections: baseSections,
    pythonCode: `# Coding Interview Patterns

# 1. Frequency Counter (use hash map)
def are_anagrams(s1, s2):
    if len(s1) != len(s2): return False
    count = {}
    for ch in s1:
        count[ch] = count.get(ch, 0) + 1
    for ch in s2:
        if ch not in count: return False
        count[ch] -= 1
        if count[ch] < 0: return False
    return True

# 2. Fast & Slow Pointers (Floyd's)
def has_cycle(head):
    if not head: return False
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast: return True
    return False

# 3. Merge Intervals
def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1] = (merged[-1][0], max(merged[-1][1], end))
        else:
            merged.append((start, end))
    return merged

# 4. In-place Linked List Reversal
def reverse_list(head):
    prev = None
    cur = head
    while cur:
        next_temp = cur.next
        cur.next = prev
        prev = cur
        cur = next_temp
    return prev

# 5. BFS on Matrix
def bfs_matrix(grid, start):
    from collections import deque
    rows, cols = len(grid), len(grid[0])
    q = deque([start])
    visited = {start}
    while q:
        r, c = q.popleft()
        for dr, dc in [(0,1),(1,0),(0,-1),(-1,0)]:
            nr, nc = r+dr, c+dc
            if 0 <= nr < rows and 0 <= nc < cols and (nr,nc) not in visited:
                if grid[nr][nc] != 1:  # not blocked
                    visited.add((nr,nc))
                    q.append((nr,nc))
    return visited

print(are_anagrams("listen", "silent"))  # True
print(merge_intervals([(1,3),(2,6),(8,10),(15,18)]))`,
  },
}
