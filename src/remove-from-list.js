const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  let curNode = l;
  let prevNode = null;

  if (curNode.value == k) {
    curNode.value = curNode.next.value;
    curNode.next = curNode.next.next;
  }

  while (curNode.next !== null) {
    prevNode = curNode;
    curNode = curNode.next;

    if (curNode.value === k && curNode.next === null) {
      prevNode.next = null;
    }
    else {
      if (curNode.value === k) {
        curNode.value = curNode.next.value;
        curNode.next = curNode.next.next;

        if (curNode.value === k) {
          curNode.value = curNode.next.value;
          curNode.next = curNode.next.next;
        }
      }
    }
  }

  return l;

}

module.exports = {
  removeKFromList
};
