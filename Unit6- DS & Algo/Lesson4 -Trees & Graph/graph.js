/*
Graph Overview:
---------------
- A Graph is a collection of vertices (nodes) and edges (connections between nodes).

- In this example:
    We are using an **Adjacency List** to represent the graph.
    The graph is **UNDIRECTED**, meaning connections go BOTH WAYS.
      (If A is connected to B, then B is also connected to A.)

- We will:
  1️⃣ Create a Graph class to store the adjacency list.
  2️⃣ Add a method to add vertices (nodes).
  3️⃣ Add a method to add edges (connections).
  4️⃣ Add a method to display the graph.


Example Graph Structure (after adding edges):
------------------------------------------------
   A
  / \
 B   C
  \ /
   D

Adjacency List Representation:
A → B, C
B → A, D
C → A, D
D → B, C
*/


class Graph {
  constructor() {
    // adjacencyList will store vertices as keys and arrays of connected nodes as values
    // Example: { A: ["B", "C"], B: ["A", "D"], ... }
    this.adjacencyList = {};
  }

  /*
  addVertex(vertex)
  -----------------
  - Adds a vertex (node) to the graph if it does not already exist.
  */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []; // Create an empty list for neighbors
    }
  }

  /*
  addEdge(vertex1, vertex2)
  -------------------------
  - Creates a connection (edge) between two vertices.
  - Ensures both vertices exist before connecting them.
  - Since the graph is UNDIRECTED, we add the connection BOTH WAYS.
  */
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1); // Make sure vertex1 exists
    this.addVertex(vertex2); // Make sure vertex2 exists

    // Connect vertex1 → vertex2
    this.adjacencyList[vertex1].push(vertex2);

    // Connect vertex2 → vertex1 (because undirected graph)
    this.adjacencyList[vertex2].push(vertex1);
  }

  /*
  printGraph()
  ------------
  - Displays the adjacency list for all vertices.
  */
  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} → ${this.adjacencyList[vertex].join(", ")}`);
    }
  }
}


// --------------- USAGE EXAMPLE ----------------
const graph = new Graph();

// Adding edges (vertices are auto-created when adding edges)
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

/*
Expected Graph Structure (Adjacency List):
A → B, C
B → A, D
C → A, D
D → B, C
*/

console.log("Graph Adjacency List:");
graph.printGraph();
