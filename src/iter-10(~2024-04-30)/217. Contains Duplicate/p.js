/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const visited = new Set();
  for (num of nums) {
    if (visited.has(num)) {
      return true;
    }
    visited.add(num);
  }
  return false;
};
