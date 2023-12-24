const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.length = 0;
  }
  getUnderlyingList() {
    return this.value;
  }

  enqueue(value) {
    const node = new ListNode(value);
    let current = this.value;

    if (this.length === 0) {
      this.value = node;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  dequeue() {
    const current = this.value;
    this.value = current.next;
    this.length--;
    return current.value;
  }


}

module.exports = {
  Queue
};
