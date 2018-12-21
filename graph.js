const { Queue } = require('./Queue');

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let node of vertexArray) {
      this.addVertex(node);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let node of vertex.adjacent) {
      node.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start, visited = new Set(), nodes = []) {
    if (visited.has(start)) return null;
    visited.add(start);
    nodes.push(start.value);
    for (let node of start.adjacent) {
      this.depthFirstSearch(node, visited, nodes);
    }
    return nodes;
  }

  // this function returns an array of Node values that are connected using BFS
  breadthFirstSearch(start) {
    let queue = new Queue();
    let visited = new Set();
    let nodes = [];
    queue.enqueue(start);
    while (!queue.isEmpty()) {
      let curr = queue.dequeue().val;
      for (let node of curr.adjacent) {
        if (!visited.has(node)) {
          queue.enqueue(node);
        }
      }
      visited.add(curr);
      nodes.push(curr.value);
    }
    return nodes;
  }

  // returns true if two nodes can be connected through mutual friends
  canConnect(node1, node2) {
    let connections = this.breadthFirstSearch(node1);
    return connections.includes(node2.value);
  }
}

module.exports = { Graph, Node };
