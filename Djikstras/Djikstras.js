class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstras(startVertex, endVertex) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = []; // what we return

    //build up initial state for distances
    for (let vertex in this.adjacencyList) {
      if (vertex === startVertex) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // while there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === endVertex) {
        // We are done
        // We build the return path
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // Find neighbouring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // Calculating new distance to neighbouring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distances[nextNode.node]) {
            //updating new smallest distance
            distances[nextNeighbour] = candidate;
            // updating previous - How we got to neighbour
            previous[nextNeighbour] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
console.log(graph.dijkstras('A', 'E'));