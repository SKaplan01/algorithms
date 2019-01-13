// Cracking the Coding Interview 4.12
// Given a binary tree where each node contains and integer
// count that number of paths that sum to a target value
// paths do not need to start at the root, but must go downwards

const { NodeBinaryTree } = require('./treesWarmups');

//Setting up a tree to test
let node1 = new NodeBinaryTree(1);
node1.appendLeft(3);
node1.appendRight(5);
node1.left.appendLeft(2);
node1.left.appendRight(-2);
node1.right.appendLeft(4);
node1.right.appendRight(-1);

function findPathsToSum(node, target, sums = [], pathCount = 0) {
  for (let i = 0; i < sums.length; i++) {
    sums[i] += node.val;
    if (sums[i] === target) {
      pathCount++;
    }
  }
  if (node.val === target) {
    pathCount++;
  }
  sums.push(node.val);

  if (node.left) {
    pathCount = findPathsToSum(node.left, target, sums, pathCount);
    let popped = sums.pop();
    for (let i = 0; i < sums.length; i++) {
      sums[i] -= popped;
    }
  }

  if (node.right) {
    pathCount = findPathsToSum(node.right, target, sums, pathCount);
    let popped = sums.pop();
    for (let i = 0; i < sums.length; i++) {
      sums[i] -= popped;
    }
  }

  return pathCount;
}

console.log(findPathsToSum(node1, 1));
