const { Graph, Node } = require('./graph');

describe('addVertex', function() {
  it('accepts a Node or an array of Node instances and adds it to the nodes property on the graph', function() {
    let graph = new Graph();
    let a = new Node('A');
    let b = new Node('B');
    let c = new Node('C');
    graph.addVertices([a, b]);
    graph.addVertex(c);
    expect(graph.nodes.has(a)).toBe(true);
    expect(graph.nodes.has(b)).toBe(true);
    expect(graph.nodes.has(c)).toBe(true);
  });
});

describe('addEdge', function() {
  it('accepts two vertices and updates their adjacent values to include the other vertex', function() {
    let graph = new Graph();
    let a = new Node('A');
    let b = new Node('B');
    let c = new Node('C');
    let d = new Node('D');
    graph.addVertices([a, b, c, d]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);
    expect(a.adjacent).toContain(b);
    expect(a.adjacent).toContain(c);
    expect(c.adjacent).toContain(a);
    expect(c.adjacent).toContain(d);
    expect(d.adjacent).toContain(b);
    expect(d.adjacent).toContain(c);
  });
});

describe('removeEdge', function() {
  it('accepts two vertices and updates their adjacent values to remove the other vertex', function() {
    let graph = new Graph();
    let a = new Node('A');
    let b = new Node('B');
    let c = new Node('C');
    let d = new Node('D');
    graph.addVertices([a, b, c, d]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);
    graph.removeEdge(b, a);
    graph.removeEdge(c, d);
    expect(a.adjacent).not.toContain(b);
    expect(b.adjacent).not.toContain(a);
    expect(c.adjacent).not.toContain(c);
    expect(d.adjacent).not.toContain(d);
  });
});

describe('removeVertes', function() {
  it('accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex', function() {
    let graph = new Graph();
    let a = new Node('A');
    let b = new Node('B');
    let c = new Node('C');
    let d = new Node('D');
    graph.addVertices([a, b, c, d]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);
    graph.removeVertex(c);
    graph.removeVertex(d);
    graph.nodes.has(a); // true
    graph.nodes.has(b); // true
    graph.nodes.has(c); // false
    graph.nodes.has(d); // false
    expect(graph.nodes.has(a)).toBe(true);
    expect(graph.nodes.has(b)).toBe(true);
    expect(graph.nodes.has(c)).toBe(false);
    expect(graph.nodes.has(d)).toBe(false);
  });
});

describe('depthFirstSearch', function() {
  it('returns an array of Node values using DFS', function() {
    let graph = new Graph();
    let S = new Node('S');
    let P = new Node('P');
    let U = new Node('U');
    let X = new Node('X');
    let Q = new Node('Q');
    let Y = new Node('Y');
    let V = new Node('V');
    let R = new Node('R');
    let W = new Node('W');
    let T = new Node('T');

    graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

    graph.addEdge(S, P);
    graph.addEdge(S, U);

    graph.addEdge(P, X);
    graph.addEdge(U, X);

    graph.addEdge(P, Q);
    graph.addEdge(U, V);

    graph.addEdge(X, Q);
    graph.addEdge(X, Y);
    graph.addEdge(X, V);

    graph.addEdge(Q, R);
    graph.addEdge(Y, R);

    graph.addEdge(Y, W);
    graph.addEdge(V, W);

    graph.addEdge(R, T);
    graph.addEdge(W, T);

    expect(graph.depthFirstSearch(S)).toEqual(
      expect.arrayContaining(['S', 'P', 'U', 'X', 'Q', 'V', 'Y', 'R', 'W', 'T'])
    );
  });
});

describe('breadthFirstSearch', function() {
  it('returns an array of Node values using BFS', function() {
    let graph = new Graph();
    let S = new Node('S');
    let P = new Node('P');
    let U = new Node('U');
    let X = new Node('X');
    let Q = new Node('Q');
    let Y = new Node('Y');
    let V = new Node('V');
    let R = new Node('R');
    let W = new Node('W');
    let T = new Node('T');

    graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

    graph.addEdge(S, P);
    graph.addEdge(S, U);

    graph.addEdge(P, X);
    graph.addEdge(U, X);

    graph.addEdge(P, Q);
    graph.addEdge(U, V);

    graph.addEdge(X, Q);
    graph.addEdge(X, Y);
    graph.addEdge(X, V);

    graph.addEdge(Q, R);
    graph.addEdge(Y, R);

    graph.addEdge(Y, W);
    graph.addEdge(V, W);

    graph.addEdge(R, T);
    graph.addEdge(W, T);

    expect(graph.breadthFirstSearch(S)).toEqual(
      expect.arrayContaining(['S', 'P', 'U', 'X', 'Q', 'V', 'Y', 'R', 'W', 'T'])
    );
  });
});

describe('canConnect', function() {
  it('returns true if two nodes can be connected through mutual friends', function() {
    let graph = new Graph();
    let S = new Node('S');
    let P = new Node('P');
    let U = new Node('U');
    let X = new Node('X');
    let Q = new Node('Q');
    let Y = new Node('Y');

    graph.addVertices([S, P, U, X, Q, Y]);

    graph.addEdge(S, P);
    graph.addEdge(P, U);

    graph.addEdge(P, X);
    graph.addEdge(Q, Y);

    expect(graph.canConnect(S, X)).toBe(true);
    expect(graph.canConnect(S, Q)).toBe(false);
  });
});
