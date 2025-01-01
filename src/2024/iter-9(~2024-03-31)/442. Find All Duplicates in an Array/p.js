/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const result = [];
  const visited = new Set();
  nums.forEach((n) => {
    if (!visited.has(n)) {
      visited.add(n);
    } else {
      result.push(n);
    }
  });

  return result;
};
