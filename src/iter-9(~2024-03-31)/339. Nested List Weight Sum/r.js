/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function (nestedList) {
  return dfs(nestedList, 1);
};

function dfs(nestedList, depth, sum = 0) {
  nestedList.forEach((node) => {
    if (node.isInteger()) {
      sum += depth * node.getInteger();
    } else {
      sum += dfs(node.getList(), depth + 1);
    }
  });

  return sum;
}

const getSum = (list, depth) => {
  return list.reduce((acc, cur) => {
    // Detect if the current value is a Number or a Array
    if (cur.isInteger()) {
      // Simple math, current number multiplied by depth
      return acc + cur.getInteger() * depth;
    }

    // Array will recursively call itself while increasing depth relative to its current depth
    return acc + getSum(cur.getList(), depth + 1);
  }, 0);
};

// Start the recursive function to get the sum
return getSum(nestedList, 1);
