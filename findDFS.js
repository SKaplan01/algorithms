class NodeBinaryTree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new NodeBinaryTree('A');
root.left = new NodeBinaryTree('B');
root.right = new NodeBinaryTree('C');
root.left.left = new NodeBinaryTree('D');
root.left.right = new NodeBinaryTree('E');
root.right.left = new NodeBinaryTree('F');
// console.log(root);

// given a target value, traverse a binary tree to find a node with that value
// return the node; if not found, return -1
function findDFS(root, target, result = -1) {
  if (!root) {
    return -1;
  }
  if (root.val === target) {
    return root;
  }
  if (result === -1) {
    result = findDFS(root.left, target, result);
  }
  if (result === -1) {
    result = findDFS(root.right, target, result);
  }
  return result;
}

console.log(findDFS(root, 'F'));
