const { Node } = require('./SinglyLinkedList');
const { SinglyLinkedList } = require('./SinglyLinkedList');
const { Stack } = require('./Stack');

//returns a string that may contain brackets '{}' '[]' and '()'
//returns true is all brackets are closed in order [()]
//returns false is brackets are not closed eg. []( or not closed in order [{s]}
function balancedBrackets(str) {
  let matches = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      let current = stack.peek().val;
      if (matches[current] === str[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

console.log(balancedBrackets('hello')); //true
console.log(balancedBrackets('(hi [there])')); //true
console.log(balancedBrackets('(hi) [there]')); //true
console.log(balancedBrackets('(((hi)))')); //true
console.log(balancedBrackets('(hello')); //false
console.log(balancedBrackets('(nope]')); //false
console.log(balancedBrackets('((ok) [nope)]')); //false
