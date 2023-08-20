// Create a class to store our graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Create a function to add a vertex
  addVertex(vertex) {
    // Check it the vertex already exists, if not create it
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Create a function to add an edge
  addEdge(vertex1, vertex2) {
    // If one of the vertex does not exist return undefined
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    // Else we add them to the list
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    // If one of the edges does not exist return
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    // Remove the vertices
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    // return if the vertex does not exist
    if (!this.adjacencyList[vertex]) return undefined;
    // get all the vertex linked to the vertex we want to remove
    let array1 = this.adjacencyList[vertex];
    //remove the vertex from the connected
    for (let i = 0; i < array1.length; i++) {
      let currentVertex = array1[i];
      this.adjacencyList[currentVertex] = this.adjacencyList[currentVertex].filter(
        v => v !== vertex
      );
    }
    // delete the vertex
    delete this.adjacencyList[vertex];
  }

  dfsRecursive(vertex) {
    const list = [];
    const visited = {};

    const dfsHelper = (vertex) => {
      if (!this.adjacencyList[vertex]) return undefined;
      if (visited[vertex] === true) return undefined;
      list.push(vertex);
      visited[vertex] = true;
      let array1 = this.adjacencyList[vertex];
      for (let i = 0; i < array1.length; i++) {
        let currentVertex = array1[i];
        dfsHelper(currentVertex);
      }
    }
    dfsHelper(vertex);
    return list;
  }

  dfsIterative(vertex) {
    // stack is used to keep track of the vertex to be visited
    let stack = [];
    // Keeps track of already visited vertex
    let visited = {};
    // values to return
    let result = [];
    // push the first vertex to your stack
    stack.push(vertex);

    // loop while there are items in stack
    while (stack.length !== 0) {
      vertex = stack.pop();
      // Check if the current vertex has already been visited
      if (!visited[vertex]) {
        // Add the vertex to the return array
        result.push(vertex)
        // Mark the vertex as visited
        visited[vertex] = true;
        // Get all the vertex connected to the current vertex
        let array1 = this.adjacencyList[vertex];
        for (let i = 0; i < array1.length; i++) {
          let currentVertex = array1[i];
          stack.push(currentVertex);
        }
      }
    }
    return result;
  }

  bfs(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    let queue = [];
    let visited = {};
    let result = [];
    queue.push(vertex);

    while (queue.length !== 0) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        result.push(vertex)
        visited[vertex] = true;
        let array1 = this.adjacencyList[vertex];
        for (let i = 0; i < array1.length; i++) {
          let currentVertex = array1[i];
          queue.push(currentVertex);
        }
      }
    }
    return result;
  }
}

const graph = new Graph();
// graph.addVertex('Nairobi');
// graph.addVertex('Nakuru');
// graph.addVertex('Nyeri');
// graph.addVertex('Mombasa');
// graph.addEdge('Nairobi', 'Nakuru');
// graph.addEdge('Nairobi', 'Nyeri');
// graph.addEdge('Nairobi', 'Mombasa');
// graph.addEdge('Nakuru', 'Nyeri');
// graph.addEdge('Mombasa', 'Nyeri');
// graph.removeVertex('Nairobi');
// console.log(graph.adjacencyList);

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
console.log(graph.adjacencyList)
//console.log(graph.bfs('A'));
