/*
Depth-First Search (DFS) Overview:
-----------------------------------
- DFS is a graph traversal algorithm that explores as far as possible along a branch before backtracking.
- It uses recursion (or a stack) to go "deep" into the graph.

Key Idea:
------------
1️⃣ Start at the given node.
2️⃣ Mark it as visited and process it.
3️⃣ Recursively visit each unvisited neighbor.
4️⃣ Once no neighbors remain, backtrack to the previous node.

Example Graph:
-----------------
     A
    / \
   B   C
  / \    \
 D   E    F

 DFS Traversal (starting at A):
A → B → D → E → C → F
*/


function depthFirstSearch(graph, node, visited = new Set()) {
  // 1️⃣ Base case – if node already visited, stop
  if (visited.has(node)) return;

  // 2️⃣ Process the node (e.g., print or store it)
  console.log(node);

  // 3️⃣ Mark the node as visited
  visited.add(node);

  // 4️⃣ Visit each neighbor recursively
  for (let neighbor of graph[node] || []) {
    depthFirstSearch(graph, neighbor, visited);
  }
}


// --------------- USAGE EXAMPLE ----------------
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: [],
  F: []
};

/*
Graph Visualization:
     A
    / \
   B   C
  / \    \
 D   E    F
*/

// Start DFS at A
depthFirstSearch(graph, 'A');
// Expected Output: A → B → D → E → C → F
