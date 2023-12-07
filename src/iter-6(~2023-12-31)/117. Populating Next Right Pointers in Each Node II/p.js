/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // base case
  if (!root) {
    return root;
  }

  const Q = [];
  Q.push([root, 0]);

  while (Q.length) {
    const [x, level] = Q.shift();
    if (Q.length) {
      const [rightX, rightLevel] = Q[0];
      if (level === rightLevel) {
        x.next = rightX;
      }
    }
    if (x.left) {
      Q.push([x.left, level + 1]);
    }
    if (x.right) {
      Q.push([x.right, level + 1]);
    }
  }
  return root;
};

class Queue {
  constructor() {
    this.storage = new Map();
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.storage.size;
  }

  add(value) {
    if (!this.storage.size) {
      this.storage.set(0, value);
    } else {
      this.rear += 1;
      this.storage.set(this.rear, value);
    }
  }

  pop() {
    const item = this.storage.get(this.front);
    if (this.storage.size === 1) {
      this.storage.clear();
      this.front = 0;
      this.rear = 0;
    } else {
      this.storage.delete(this.front);
      this.front += 1;
    }
    return item;
  }
}
