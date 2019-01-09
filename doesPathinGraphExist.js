//Cracking the Coding Interview: Trees 4.1

let nodeA = { val: 'a', adjacents: [] };
let nodeB = { val: 'b', adjacents: [] };
let nodeC = { val: 'c', adjacents: [] };
let nodeD = { val: 'd', adjacents: [] };
let nodeE = { val: 'e', adjacents: [] };

nodeA.adjacents.push(nodeB);
nodeA.adjacents.push(nodeC);
nodeC.adjacents.push(nodeB);
nodeC.adjacents.push(nodeE);
nodeD.adjacents.push(nodeC);

//given a directed graph and two nodes, returns true if there is a path from node1 to node2
function searchGraph(node, target, visited = new Set()) {
  if (node.val === target) {
    return true;
  } else {
    for (let i = 0; i < node.adjacents.length; i++) {
      if (!visited.has(node.adjacents[i])) {
        visited.add(node.adjacents[i]);
        searchGraph(node.adjacents[i], target, visited);
        if (visited.has(target)) return true;
      }
    }
  }
  return false;
}

console.log(searchGraph(nodeA, nodeD));
