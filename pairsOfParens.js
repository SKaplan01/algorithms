//to add a level to the tree

//start at node
//does it have a left?
//YES --> put it on the stack and go left
//NO left...
//is it a left? then addChildrenToLeft (add a left and children)
//Does it have children?
//YES--> add to stack, iterate through children and recurse

//making an instance of a parens tree always starts with a head node with value of '()'
class parensTree {
  constructor() {
    this.head = new Node('()', 'left');
  }

  //adds a level to a parensTree and returns a list of the values added
  addLevel() {
    let valuesAdded = [];

    function checkNode(node) {
      if (node.left) {
        checkNode(node.left);
      } else {
        if (node.type === 'left') {
          node.addChildrenToLeft(valuesAdded);
          return;
        }
      }

      if (node.children.length === 0) {
        node.addChildren(valuesAdded);
        return;
      } else {
        for (let i = 0; i < node.children.length; i++) {
          checkNode(node.children[i]);
        }
      }
    }

    checkNode(this.head);

    return valuesAdded;
  }
}

class Node {
  constructor(val, type, children = [], left = null) {
    this.val = val;
    this.type = type;
    this.children = children;
    this.left = left;
  }

  //adds children to a left parensTree node and pushes values for new children onto valuesAdded
  addChildrenToLeft(valuesAdded) {
    this.left = new Node(this.val + '()', 'left');
    valuesAdded.push(this.val + '()');
    this.children.push(new Node('(' + this.val + ')', 'right'));
    valuesAdded.push('(' + this.val + ')');
  }

  //adds children to a parensTree node and pushes values for new children onto valuesAdded
  addChildren(valuesAdded) {
    this.children.push(new Node('()' + this.val, 'right'));
    valuesAdded.push('()' + this.val);
    this.children.push(new Node('(' + this.val + ')', 'right'));
    valuesAdded.push('(' + this.val + ')');
    this.children.push(new Node(this.val + '()', 'right'));
    valuesAdded.push(this.val + '()');
  }
}

var generateParenthesis = function(n) {
  let parens = new parensTree();
  for (let i = 0; i < n - 2; i++) {
    parens.addLevel();
  }
  let result = parens.addLevel();
  return result;
};

console.log(generateParenthesis(4));
