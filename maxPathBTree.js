//find the longest path through the root of a binary tree

const { NodeBinaryTree } = require('./treesWarmups');

//example tree
let root = new NodeBinaryTree('A');
root.appendLeft('B');
root.appendRight('F');
root.left.appendLeft('C');
root.left.left.appendLeft('E');
root.left.appendRight('D');
root.right.appendLeft('G');
// console.log(root);

function findMaxDepth(node) {
  if (node === null) {
    return -1;
  }
  let left = 1 + findMaxDepth(node.left);
  let right = 1 + findMaxDepth(node.right);
  return Math.max(left, right);
}

function maxPath(root) {
  let left = 1 + findMaxDepth(root.left);
  let right = 1 + findMaxDepth(root.right);
  return left + right;
}

console.log(maxPath(root));
