/**
 * https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks
 * In this challenge, you must first implement a queue using two stacks.
 */

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  transfer() {
    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }
  peek() {
    this.transfer();
    return this.stack2[this.stack2.length - 1];
  }
  pop() {
    this.transfer();
    return this.stack2.pop();
  }
  put(value) {
    this.stack1.push(value);
  }
}

function processData(input) {
  //Enter your code here
  const inputArr = input.split('\n').slice(1).map(line => line.split(' '));
  const queue = new Queue();
  inputArr.forEach(([type, input]) => {
    const dictionary = {
      '1': num => queue.put(num),
      '2': () => queue.pop(),
      '3': () => {
        return console.log(queue.peek());
      },
    };
    return dictionary[type](input);
  });
}
