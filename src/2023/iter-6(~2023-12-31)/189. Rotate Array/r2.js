/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
const rotate = (nums, k) => {
  const stack = [];
  k = k % nums.length;
  while (k--) {
    stack.push(nums.pop());
  }
  nums.unshift(...stack.reverse());
};

// rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([1, 2], 5);
