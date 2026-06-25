"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Lesson } from "@/types"

type Props = { lesson: Lesson }

const initialLockers = [
  { label: "locker_01", item: "📦 Box", color: "#006bff" },
  { label: "locker_02", item: "🎒 Bag", color: "#28a948" },
  { label: "locker_03", item: "— Empty —", color: "#eaeaea", empty: true },
  { label: "locker_04", item: "🏀 Ball", color: "#fc0035" },
  { label: "locker_05", item: "— Empty —", color: "#eaeaea", empty: true },
]

const lessonData: Record<string, { title: string; desc: string; mapping: { icon: string; label: string; python: string }[] }> = {
  variables: {
    title: "The Locker Analogy",
    desc: "Imagine a huge wall of numbered lockers (memory addresses). Each locker holds one item. A variable is like writing your name on a nametag and sticking it to a locker door. Multiple nametags can point to the same locker — that's aliasing. You can even move a nametag to a different locker without touching the contents.",
    mapping: [
      { icon: "🏷", label: "Locker number", python: "Memory address (0x1000)" },
      { icon: "📦", label: "Item inside locker", python: "The actual object (25, 'hello')" },
      { icon: "✏", label: "Your name on a tag", python: "Variable name bound to reference" },
      { icon: "🔗", label: "Multiple tags, one locker", python: "Two names referencing same object (aliasing)" },
    ],
  },
  "data-types": {
    title: "Container Types",
    desc: "Different containers hold different things — just like Python's data types.",
    mapping: [
      { icon: "🔢", label: "int", python: "Whole numbers: 42, -7, 0" },
      { icon: "⚖", label: "float", python: "Decimals: 3.14, -0.5" },
      { icon: "🔤", label: "str", python: "Text: 'hello', '42'" },
      { icon: "✅", label: "bool", python: "True / False" },
    ],
  },
  strings: {
    title: "Beads on a String",
    desc: "Imagine a string of beads. Each bead is a character, and they are threaded in order. You can count them, grab one by position, or cut a section.",
    mapping: [
      { icon: "🔤", label: "Character", python: "A single letter, digit, or symbol" },
      { icon: "🔢", label: "Index", python: "Position starting from 0" },
      { icon: "✂", label: "Slice", python: "Extract a portion [start:end]" },
    ],
  },
  lists: {
    title: "Train Cars",
    desc: "A list is like a train. Each car holds one item, cars stay in order, and you can add or remove cars. Adding at the end (append) is easy — just hook on a new car. Adding at the front means uncoupling every car, shifting them one spot forward, then attaching the new one — much slower. The engine (locomotive) knows instantly where car #7 is because they're all connected in a line.",
    mapping: [
      { icon: "🚋", label: "Each car", python: "An element (object reference)" },
      { icon: "🔢", label: "Car number", python: "Index — base + offset, O(1) access" },
      { icon: "➕", label: "Hook on at the end", python: "append() — O(1) amortized" },
      { icon: "🔄", label: "Uncouple and shift", python: "insert(0) — O(n), shift all elements" },
    ],
  },
  tuples: {
    title: "Frozen in Place",
    desc: "A tuple is like a snapshot — a moment frozen in time. You can look at it, but you can't change what's inside.",
    mapping: [
      { icon: "📸", label: "Snapshot", python: "Fixed data that shouldn't change" },
      { icon: "🔐", label: "Locked", python: "No append, remove, or item assignment" },
      { icon: "📦", label: "Packed", python: "Multiple values bundled together" },
    ],
  },
  sets: {
    title: "Bag of Marbles",
    desc: "A set is like a bag of marbles. Each color can appear only once. You can check instantly if a color is in the bag.",
    mapping: [
      { icon: "👜", label: "The bag", python: "The set object" },
      { icon: "🔴", label: "Each unique marble", python: "A unique element" },
      { icon: "🔍", label: "Peek inside", python: "in operator — O(1) membership test" },
    ],
  },
  dictionaries: {
    title: "Word Dictionary",
    desc: "A real dictionary maps words (keys) to definitions (values). Python dicts work the same way — look up a key, get a value instantly.",
    mapping: [
      { icon: "📕", label: "The book", python: "The dict object" },
      { icon: "🔑", label: "Word (key)", python: "Unique key (must be hashable)" },
      { icon: "📝", label: "Definition (value)", python: "Value (can be any type)" },
    ],
  },
  functions: {
    title: "Recipe Cards",
    desc: "A function is like a recipe card. It lists ingredients (parameters) and steps (code). Follow the recipe anytime you want that dish.",
    mapping: [
      { icon: "📝", label: "Recipe card", python: "def function_name():" },
      { icon: "🥘", label: "Ingredients", python: "Parameters (inputs)" },
      { icon: "🍽", label: "Finished dish", python: "Return value (output)" },
    ],
  },
  recursion: {
    title: "Matryoshka Dolls",
    desc: "Recursion is like Russian nesting dolls. Open a doll, find a smaller doll inside. Open that, find an even smaller one. Eventually you reach the tiniest doll (base case).",
    mapping: [
      { icon: "🪆", label: "Nested dolls", python: "Function calling itself" },
      { icon: "🪆", label: "Smallest doll", python: "Base case (stops recursion)" },
      { icon: "📚", label: "Stack of dolls", python: "Call stack (LIFO)" },
    ],
  },
  classes: {
    title: "Blueprint & Houses",
    desc: "A class is like a house blueprint. The blueprint defines the layout (attributes) and what you can do (methods). Each house built from that blueprint is an object.",
    mapping: [
      { icon: "📐", label: "Blueprint", python: "The class definition" },
      { icon: "🏠", label: "Built house", python: "An instance (object)" },
      { icon: "🔨", label: "What you can do", python: "Methods (functions in the class)" },
    ],
  },
  decorators: {
    title: "Gift Wrapping",
    desc: "A function is like a gift box. A decorator is the wrapping paper — it adds decoration but doesn't change what's inside.",
    mapping: [
      { icon: "🎁", label: "Gift inside", python: "The original function" },
      { icon: "🎀", label: "Wrapping", python: "The decorator function" },
      { icon: "@", label: "Tag", python: "The @ syntax (syntactic sugar)" },
    ],
  },
  generators: {
    title: "Vending Machine",
    desc: "A generator is like a vending machine. You ask for one item (next()), it gives you one and pauses until you ask again.",
    mapping: [
      { icon: "🏪", label: "Vending machine", python: "The generator object" },
      { icon: "🍫", label: "One snack at a time", python: "yield — returns one value" },
      { icon: "👆", label: "Press a button", python: "next() — requests next value" },
    ],
  },
  arrays: {
    title: "Parking Lot",
    desc: "An array is like a parking lot. Each space has a number (index). You can instantly go to space 7, but adding a space requires rebuilding the lot.",
    mapping: [
      { icon: "🅿", label: "Parking lot", python: "The array in memory" },
      { icon: "🔢", label: "Space number", python: "Index (position)" },
      { icon: "🚗", label: "Car in space", python: "Element at that index" },
    ],
  },
  "dynamic-arrays": {
    title: "Expanding Parking Lot",
    desc: "A dynamic array is like a parking lot that builds extra spaces when it fills up. When full, a new lot with double the spaces is built and all cars move over.",
    mapping: [
      { icon: "🏗", label: "Build bigger lot", python: "Resize: allocate 2x capacity" },
      { icon: "🚗", label: "Move cars", python: "Copy all elements (O(n))" },
      { icon: "🅿", label: "Extra spaces", python: "Capacity for future appends" },
    ],
  },
  deque: {
    title: "Two-sided Line",
    desc: "A deque is like a line where people can join or leave from either end. VIPs cut to the front, latecomers go to the back.",
    mapping: [
      { icon: "🚪", label: "Leave from either end", python: "pop() or popleft()" },
      { icon: "🚶", label: "Join at either end", python: "append() or appendleft()" },
      { icon: "🔄", label: "Rotate the line", python: "rotate(k) shifts elements" },
    ],
  },
  "linked-list": {
    title: "Treasure Hunt",
    desc: "A linked list is like a treasure hunt. Each clue (node) tells you where to find the next clue. You can't skip ahead — you follow the chain.",
    mapping: [
      { icon: "🗺", label: "First clue", python: "Head (first node)" },
      { icon: "📜", label: "Clue with pointer", python: "Node (value + next reference)" },
      { icon: "📍", label: "Next clue location", python: "next pointer to next node" },
    ],
  },
  stack: {
    title: "Stack of Plates",
    desc: "A stack is like a stack of plates. You add plates to the top (push) and remove from the top (pop). The bottom plate comes out last.",
    mapping: [
      { icon: "🍽", label: "Add plate on top", python: "push (append)" },
      { icon: "✋", label: "Remove top plate", python: "pop()" },
      { icon: "👀", label: "Look at top plate", python: "peek (stack[-1])" },
    ],
  },
  queue: {
    title: "Line at a Store",
    desc: "A queue is like a checkout line. The first person in line is served first (dequeue). New people join at the back (enqueue).",
    mapping: [
      { icon: "👤", label: "Person joins back", python: "enqueue (append)" },
      { icon: "✅", label: "Front person leaves", python: "dequeue (popleft)" },
      { icon: "👀", label: "Who's at front?", python: "peek (queue[0])" },
    ],
  },
  trie: {
    title: "Dictionary by Letters",
    desc: "A trie is like organizing a dictionary by letter. Start at A, then AA, AB, etc. Each path of letters spells a word.",
    mapping: [
      { icon: "🔤", label: "Each letter is a node", python: "Character node with children dict" },
      { icon: "✅", label: "End of a word", python: "is_end = True flag" },
      { icon: "🔍", label: "Type prefix → suggestions", python: "starts_with() method" },
    ],
  },
  "hash-table": {
    title: "Library Catalog",
    desc: "A hash table is like a library catalog. The call number (hash) tells you exactly which shelf to look at. No searching through every book.",
    mapping: [
      { icon: "🔢", label: "Call number", python: "Hash of the key" },
      { icon: "📚", label: "Shelf number", python: "Bucket (array index)" },
      { icon: "📖", label: "The book", python: "Value associated with the key" },
    ],
  },
  graph: {
    title: "Social Network",
    desc: "A graph is like a social network. People are nodes, friendships are edges. You can follow (directed) or be friends (undirected).",
    mapping: [
      { icon: "👤", label: "Person", python: "Vertex / node" },
      { icon: "🤝", label: "Friendship", python: "Undirected edge" },
      { icon: "➡", label: "Follow", python: "Directed edge" },
    ],
  },

  trees: {
    title: "File System",
    desc: "A tree is like a file system. The root is /, folders are internal nodes, and files are leaves. Each folder can contain more folders.",
    mapping: [
      { icon: "📂", label: "Root folder", python: "Root node" },
      { icon: "📁", label: "Subfolders", python: "Child nodes" },
      { icon: "📄", label: "Files", python: "Leaf nodes (no children)" },
    ],
  },

  bst: {
    title: "Phone Book",
    desc: "A BST is like searching a phone book. Open to the middle — if your name comes before, go left; after, go right. Repeat until found.",
    mapping: [
      { icon: "📖", label: "Open the book", python: "Start at root" },
      { icon: "◀", label: "Go left", python: "Visit left child (smaller)" },
      { icon: "▶", label: "Go right", python: "Visit right child (larger)" },
    ],
  },

  avl: {
    title: "Balancing Scale",
    desc: "An AVL tree is like a scale that automatically rebalances when one side gets too heavy. It rotates to redistribute weight.",
    mapping: [
      { icon: "⚖", label: "Balance factor", python: "Height difference between subtrees" },
      { icon: "🔄", label: "Rotation", python: "Reassign root to restore balance" },
      { icon: "📏", label: "Check after insert", python: "Walk up and fix each ancestor" },
    ],
  },

  heap: {
    title: "Tournament Bracket",
    desc: "A heap is like a tournament. The champion (min/max) sits at the top. Each match picks the winner between two players.",
    mapping: [
      { icon: "🏆", label: "Champion at top", python: "Root = smallest (min-heap) or largest (max-heap)" },
      { icon: "🤼", label: "Matches", python: "Parent vs children comparisons" },
      { icon: "📊", label: "Ranking", python: "Sift up/down to restore heap property" },
    ],
  },
  greedy: {
    title: "Coin Change",
    desc: "Greedy is like making change with US coins: always take the largest coin first. 67¢ → 25 + 25 + 10 + 5 + 1 + 1.",
    mapping: [
      { icon: "🪙", label: "Take largest coin", python: "Local optimal choice" },
      { icon: "✅", label: "Move to next", python: "No reconsidering past choices" },
      { icon: "❌", label: "Can fail", python: "Some coin systems need non-greedy (DP)" },
    ],
  },
  backtracking: {
    title: "Maze with Dead Ends",
    desc: "Backtracking is like exploring a maze with a piece of chalk. You mark paths you try. When you hit a dead end, you erase your marks and try another path.",
    mapping: [
      { icon: "🧭", label: "Choose a path", python: "Make a decision" },
      { icon: "✖", label: "Hit dead end", python: "Prune — undo the choice" },
      { icon: "🏁", label: "Found the exit", python: "Valid solution found" },
    ],
  },
  "dynamic-programming": {
    title: "Memoized Fibonacci",
    desc: "DP is like computing Fibonacci with a notebook. Instead of recalculating fib(5) dozens of times, you write it down once and look it up.",
    mapping: [
      { icon: "📓", label: "Write down results", python: "Memoization cache (dict)" },
      { icon: "🔄", label: "Build from base cases", python: "Tabulation (bottom-up array)" },
      { icon: "⚡", label: "O(n) instead of O(2ⁿ)", python: "Exponential → linear speedup" },
    ],
  },
  "binary-search": {
    title: "Phone Book Search",
    desc: "Binary search is like finding a name in a phone book. Open to the middle. If your name comes before, go left; after, go right. Repeat.",
    mapping: [
      { icon: "📖", label: "Open middle", python: "mid = (left + right) // 2" },
      { icon: "◀", label: "Go left half", python: "right = mid - 1" },
      { icon: "▶", label: "Go right half", python: "left = mid + 1" },
    ],
  },
  sorting: {
    title: "Sorting Cards",
    desc: "Sorting is like organizing a hand of cards. You can methodically find the smallest (selection sort), or recursively split and merge.",
    mapping: [
      { icon: "🃏", label: "Unsorted hand", python: "Random array" },
      { icon: "🔍", label: "Find smallest", python: "Selection sort — O(n²)" },
      { icon: "✂", label: "Split and merge", python: "Merge sort — O(n log n)" },
    ],
  },
  dfs: {
    title: "Maze Explorer",
    desc: "DFS is like exploring a maze. You follow a path until you hit a wall, then backtrack to the last junction and try the next path.",
    mapping: [
      { icon: "🧭", label: "Follow a path", python: "Recursive call" },
      { icon: "🔙", label: "Backtrack at dead end", python: "Return from recursion" },
      { icon: "📍", label: "Mark visited", python: "Visited set" },
    ],
  },
  bfs: {
    title: "Ripple in a Pond",
    desc: "BFS is like a ripple when you drop a stone in water. The wave expands outward evenly in all directions, reaching nearby points first.",
    mapping: [
      { icon: "💧", label: "Drop a stone", python: "Start node" },
      { icon: "〰", label: "Ripple outward", python: "Visit neighbors level by level" },
      { icon: "🎯", label: "First to reach target", python: "Shortest path found" },
    ],
  },
}

export function AnalogySection({ lesson }: Props) {
  const d = lessonData[lesson.id] || lessonData.variables
  const isVariables = lesson.id === "variables"
  const [lockers, setLockers] = useState(initialLockers)
  const [selectedLocker, setSelectedLocker] = useState<number | null>(null)
  const [newItem, setNewItem] = useState("")
  const assignItem = () => {
    if (selectedLocker === null || !newItem.trim()) return
    setLockers((prev) => prev.map((l, i) => (i === selectedLocker ? { ...l, item: newItem, empty: false, color: "#006bff" } : l)))
    setNewItem("")
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-primary)" }}>
          Section 2 of 8
        </p>
        <h2 className="text-2xl font-semibold tracking-tight" style={{ letterSpacing: "-0.96px" }}>{d.title}</h2>
        <p className="mt-2 text-sm" style={{ color: "var(--el-body)", maxWidth: "600px" }}>{d.desc}</p>
      </div>

      {/* Show the locker interactive for Variables; static comparison for others */}
      {isVariables ? (
        <>
          <div className="flex flex-wrap justify-center gap-3">
            {lockers.map((locker, i) => (
              <motion.button key={locker.label} layout onClick={() => setSelectedLocker(i)}
                className="flex flex-col items-center rounded-md p-4 transition-all cursor-pointer"
                style={{
                  backgroundColor: selectedLocker === i ? "var(--el-surface-strong)" : "var(--el-surface-card)",
                  border: `2px solid ${selectedLocker === i ? "var(--el-primary)" : "var(--el-hairline)"}`,
                  minWidth: "100px",
                }}
                whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}
              >
                <div className="w-14 h-14 rounded-md flex items-center justify-center text-lg font-bold mb-2"
                  style={{ backgroundColor: locker.empty ? "var(--el-surface-strong)" : locker.color, color: locker.empty ? "var(--el-muted)" : "#fff" }}>
                  {locker.empty ? "?" : locker.item.split(" ")[0]}
                </div>
                <p className="text-[10px] font-mono" style={{ color: "var(--el-muted)" }}>{locker.label}</p>
                <p className="text-xs mt-1 font-medium">{locker.empty ? "Empty" : locker.item}</p>
              </motion.button>
            ))}
          </div>
          <div className="rounded-md p-5 flex flex-wrap items-end gap-3" style={{ backgroundColor: "var(--el-canvas-soft)", border: "1px solid var(--el-hairline)" }}>
            <div>
              <p className="text-xs font-medium mb-1" style={{ color: "var(--el-muted)" }}>Selected</p>
              <p className="text-sm font-mono font-semibold">{selectedLocker !== null ? lockers[selectedLocker].label : "None"}</p>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="text-xs font-medium mb-1 block" style={{ color: "var(--el-muted)" }}>Item</label>
              <input value={newItem} onChange={(e) => setNewItem(e.target.value)} onKeyDown={(e) => e.key === "Enter" && assignItem()}
                placeholder="e.g. 🎸 Guitar" className="el-input w-full" />
            </div>
            <button onClick={assignItem} className="el-btn el-btn-primary !h-10" disabled={selectedLocker === null || !newItem.trim()}>Assign</button>
          </div>
        </>
      ) : lesson.id === "strings" ? (
        <div className="rounded-md p-6" style={{ backgroundColor: "var(--el-canvas-soft)", border: "1px solid var(--el-hairline)" }}>
          <div className="flex items-center justify-center gap-1 mb-4">
            {"HELLO".split("").map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-10 h-10 rounded-md flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: i % 2 === 0 ? "var(--el-primary)" : "var(--geist-accent-hover)", color: "#fff" }}
              >
                {ch}
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-1 mb-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="text-[10px] font-mono text-center" style={{ color: "var(--el-muted)", width: "40px" }}>{i}</span>
            ))}
          </div>
          <p className="text-xs text-center" style={{ color: "var(--el-body)" }}>
            Each character has an index. <code className="el-code">"HELLO"[0]</code> → H, <code className="el-code">"HELLO"[1:4]</code> → ELL
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-4 gap-3">
          {[
            { icon: "🔢", title: "int", ex: "42, -7, 0" },
            { icon: "⚖", title: "float", ex: "3.14, -0.5" },
            { icon: "🔤", title: "str", ex: "'hello', '42'" },
            { icon: "✅", title: "bool", ex: "True, False" },
          ].map((t) => (
            <div key={t.title} className="rounded-md p-4 text-center" style={{ backgroundColor: "var(--el-surface-card)", border: "1px solid var(--el-hairline)" }}>
              <p className="text-2xl mb-1">{t.icon}</p>
              <p className="font-semibold el-code text-sm">{t.title}</p>
              <p className="text-xs" style={{ color: "var(--el-muted)" }}>{t.ex}</p>
            </div>
          ))}
        </div>
      )}

      <div className="rounded-md p-5" style={{ border: "1px solid var(--el-hairline)", backgroundColor: "var(--el-surface-card)" }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--el-muted)" }}>How this maps to Python</p>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          {d.mapping.map((item) => (
            <div key={item.label} className="flex items-start gap-2">
              <span>{item.icon}</span>
              <div><p className="font-medium">{item.label}</p><p style={{ color: "var(--el-muted)" }}>{item.python}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
