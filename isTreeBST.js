// CCI 4.5 Is a binary tree a Binary Search Tree?

const { NodeBinaryTree } = require('./treesWarmups');

//example tree
let root = new NodeBinaryTree(7);
root.appendLeft(5);
root.appendRight(8);
root.left.appendLeft(3);
root.left.appendRight(9);
root.right.appendRight(10);
// console.log(root);

function validateBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val < min || root.val > max) {
    return false;
  }

  if (root.left) {
    let result = validateBST(root.left, min, root.val);
    if (!result) {
      return false;
    }
  }

  if (root.right) {
    let result = validateBST(root.right, root.val, max);
    if (!result) {
      return false;
    }
  }

  return true;
}

console.log(validateBST(root)); //false
let root2 = null;

console.log(validateBST(root2)); //true
let root3 = new NodeBinaryTree(3);
console.log(validateBST(root3)); //true
