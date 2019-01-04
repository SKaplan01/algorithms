//https://leetcode.com/problems/generate-parentheses/

//PROBLEM: Given n pairs of parentheses, write a function to generate
//all combinations of well-formed parentheses.

//nodes to keep track of valid combinations of pairs of parenthesis
//left most children in the tree grow as binary (adding parens to end and to outside) '()()' --> '()()()' and '(()())'
//all other nodes have 3 children (adding parens to beginning, end, and to outside) '(())' --> '()(())' '(())()' and '((()))'
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

  //adds children to a (non-left)parensTree node and pushes values for new children onto valuesAdded
  addChildren(valuesAdded) {
    this.children.push(new Node('()' + this.val, 'right'));
    valuesAdded.push('()' + this.val);
    this.children.push(new Node('(' + this.val + ')', 'right'));
    valuesAdded.push('(' + this.val + ')');
    this.children.push(new Node(this.val + '()', 'right'));
    valuesAdded.push(this.val + '()');
  }
}

//making an instance of a parens tree always starts with a head node with value of '()'
class parensTree {
  constructor() {
    this.head = new Node('()', 'left');
  }

  //adds a level to a parensTree and returns a list of the values added
  //a "level" --> child nodes for all possible valid combionations of parenthesis
  //when adding one additional pair of parens to a string of pairs of parens
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

var generateParenthesis = function(n) {
  let parens = new parensTree();
  let result = ['()'];
  for (let i = 0; i < n - 1; i++) {
    result = parens.addLevel();
  }
  return result;
};

console.log(generateParenthesis(4));

//Not the most efficient solution because you "re-traverse"
//all previous levels of the tree when you add a new level
