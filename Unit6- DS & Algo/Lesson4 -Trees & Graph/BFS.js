/*
BFS (Breadth-First Search) Overview:
------------------------------------
- BFS is a graph traversal algorithm that explores nodes LEVEL BY LEVEL.
- It visits every neighbor of the current node before moving on to
  neighbors-of-neighbors — like ripples spreading outward in a pond.
- It is commonly used to find the SHORTEST PATH in an UNWEIGHTED graph
  (a graph where every connection "costs" the same to travel).

How BFS Works (Pseudo-code):
--------------------------------
1️⃣ Initialize a queue and enqueue the starting node.
2️⃣ Mark the starting node as visited.
3️⃣ While the queue is not empty:
     - Dequeue a node (current node).
     - If it is the target node, reconstruct the path.
     - Otherwise, visit all unvisited neighbors, mark them as visited, and enqueue them.
4️⃣ Repeat until the queue is empty.

BFS guarantees the SHORTEST PATH in an UNWEIGHTED graph because it explores
   nodes in order of distance — it never skips ahead to a farther node before
   checking every closer one first.

Example Graph Structure:
---------------------------
   A
  / \
 B   C
 / \   \
D   E   F

Adjacency List:
A → B, C
B → A, D, E
C → A, F
D → B
E → B
F → C
*/


function bfsShortestPath(adjacencyList, start, end) {

  // STEP 1:

  // The QUEUE holds nodes waiting to be explored, in the order we found them.
  // We always look at the OLDEST node in the queue first (first in, first out)

  // The VISITED set stops us from checking the same node twice, which would
  // waste time and could even cause an infinite loop if the graph has cycles.
  let visited = new Set();

  // The PREVIOUS object remembers "which node did we arrive from?" for every
  // node we visit. Once we reach the end, we can walk this backwards to
  // rebuild the exact path we took.
  let previous = {};

  // Quick exit: if start and end are the same node, there's nothing to search.
  if (start === end) return [start];

  // STEP 2: Add the starting node so BFS has somewhere to begin.
  queue.push(start);          // put the start node in line to be explored
  visited.add(start);         // mark it as seen so we never re-queue it
  previous[start] = null;     // the start node has no "previous" node

  // STEP 3: Keep exploring until we either find the end node,
  // or run out of nodes to check (queue becomes empty).
  while (queue.length > 0) {

    // Take the node that's been waiting the longest 
    let currentNode = queue.shift();

    // STEP 4: Did we just reach the node we're looking for?
    if (currentNode === end) {

      // Rebuild the path by walking the "previous" trail backwards,
      // from the end node all the way back to the start node.
      let path = [];
      let node = end;

      while (node !== null) {
        path.push(node);        // add this node to our path
        node = previous[node];  // step back to whoever came before it
      }

      // The path was built backwards (end → start), so flip it around
      // to read naturally from start → end.
      return path.reverse();
    }

    // STEP 5: We haven't found the end yet — explore this node's neighbors
    for (let neighbor of adjacencyList[currentNode]) {

      // Only look at neighbors we haven't already seen. Skipping visited
      // nodes is what keeps BFS efficient and prevents infinite loops.
      if (!visited.has(neighbor)) {
        visited.add(neighbor);            // mark it seen right away
        queue.push(neighbor);             // add it to the back of the line
        previous[neighbor] = currentNode; // remember how we got here
      }
    }
  }

  // STEP 6: If the queue empties out and we never returned above,
  // there's no path connecting start to end.
  return null;
}


// --------------- USAGE EXAMPLE ----------------
const cityMap = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B'],
  F: ['C']
};

/*
Graph Visualization:
   A
  / \
 B   C
 / \   \
D   E   F
*/

// Find the shortest path from A to F
const shortestPath = bfsShortestPath(cityMap, 'A', 'F');
console.log("Shortest path from A to F:", shortestPath);
// Expected Output: ['A', 'C', 'F']