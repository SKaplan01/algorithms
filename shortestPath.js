const { Node, Graph } = require('./graph');
const { Queue } = require('./Queue');

// accepts a graph, a source vertex and target vertex and returns the shortest path
function shortestPath(graph, source, target) {
  let visited = new Set();
  let paths = { [source.value]: [] };
  let queue = new Queue();
  queue.enqueue(source);
  while (!queue.isEmpty()) {
    let current = queue.dequeue().val;
    if (current.value === target.value) {
      return paths[current.value].length;
    }
    visited.add(current);
    for (let adj of current.adjacent) {
      if (paths[adj.value] === undefined) {
        paths[adj.value] = [...paths[current.value]];
        paths[adj.value].push(current.value);
      }
      queue.enqueue(adj);
    }
  }
  return 'Error: no path between source and target';
}

let graph = new Graph();
let A = new Node('A');
let B = new Node('B');
let C = new Node('C');
let D = new Node('D');
let H = new Node('H');
let Z = new Node('Z');

graph.addVertices([A, B, C, D, H, Z]);

graph.addEdge(A, C);
graph.addEdge(A, Z);

graph.addEdge(A, H);
graph.addEdge(H, B);
graph.addEdge(B, D);
graph.addEdge(D, C);
graph.addEdge(A, B);

console.log(shortestPath(graph, Z, B));
