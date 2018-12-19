//LIFO list stored as an array (constructor takes array)
class StackArray {
  constructor(data) {
    this._list = data;
  }

  //Appends a new item to the "top" of the stack
  //Returns updated stack
  push(data) {
    return this._list.push(data);
  }

  //removes and returns the head node (the newest item in the stack)
  pop() {
    return this._list.pop();
  }

  //returns the next item that will be popped off the stack without popping it
  peek() {
    return this._list[this._list.length - 1];
  }

  //returns boolean
  isEmpty() {
    return this._list.length === 0;
  }
}

// let catStack = new StackArray(['Simba', 'Rafiki']);
// catStack.push('Tamarin');
// catStack.pop();
// catStack.pop();
// console.log(catStack.isEmpty());
