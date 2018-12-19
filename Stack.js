const { Node } = require('./SinglyLinkedList');
const { SinglyLinkedList } = require('./SinglyLinkedList');

//LIFO list stored as a linkedList
class Stack {
  constructor(data) {
    this._list = new SinglyLinkedList(data);
  }

  //Appends a new node with the data to the "top" of the stack.
  //Returns updated stack
  push(data) {
    return this._list.unshift(data);
  }

  //removes and returns the head node (the newest item in the stack)
  pop() {
    return this._list.shift();
  }

  //returns the next item that will be popped off the stack without popping it
  peek() {
    return this._list.head;
  }

  //returns boolean
  isEmpty() {
    return this._list.head === null;
  }
}

module.exports = { Stack };

// let catStack = new Stack(['Simba', 'Rafiki']);
// catStack.push('Tamarin');
// catStack.pop();
// catStack.pop();
// catStack.pop();
// console.log(catStack.isEmpty());
