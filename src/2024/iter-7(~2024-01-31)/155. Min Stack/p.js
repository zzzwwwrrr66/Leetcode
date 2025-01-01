// map 형식으로 하면될듯? key를 index, value를 값으로, 아니면 index#value 느낌
class MinStack {
  constructor() {
    this.list = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.list.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    this.list.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.list[this.list.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return Math.min(...this.list);
  }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const test = new MinStack();
test.push(1);
test.push(2);
test.push(3);
console.log(test.getMin());

const set = new Set();
set.add(1);
console.log(set);
console.dir(set);
