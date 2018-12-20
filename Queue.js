const { Node } = require('./SinglyLinkedList');
const { SinglyLinkedList } = require('./SinglyLinkedList');

//FIFO list
class Queue {
  constructor(data) {
    this._list = new SinglyLinkedList(data);
  }

  //Appends a new node with the data to end of list.
  //Returns updated list
  enqueue(data) {
    return this._list.append(data);
  }

  //removes and returns the head node (the oldest item in the list)
  dequeue() {
    return this._list.shift();
  }

  peek() {
    return this._list.head;
  }

  isEmpty() {
    return this._list.head === null;
  }
}

module.exports = { Queue };
