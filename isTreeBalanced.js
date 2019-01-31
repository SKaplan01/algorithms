//CCI 4.4 Check is binary tree is balanced

const { NodeBinaryTree } = require('./treesWarmups');

//example tree
let root = new NodeBinaryTree('A');
root.appendLeft('B');
root.appendRight('F');
root.left.appendLeft('C');
root.left.left.appendLeft('E');
root.left.appendRight('D');
// console.log(root);

//helper function, given a node,
//returns the height of its largest subtree
function getHeight(node) {
  if (node === null) {
    return -1;
  }
  let left = 1 + getHeight(node.left);
  let right = 1 + getHeight(node.right);
  return Math.max(left, right);
}

//given a binary tree, returns true if the tree is balanced
//tree is balanced if the difference in height between every
//left and right subtree is less than 2
function isTreeBalanced(root) {
  if (root === null) {
    return true;
  }
  let leftHeight = getHeight(root.left);
  let rightHeight = getHeight(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }
  return isTreeBalanced(root.left) && isTreeBalanced(root.right);
}

console.log(isTreeBalanced(root));
