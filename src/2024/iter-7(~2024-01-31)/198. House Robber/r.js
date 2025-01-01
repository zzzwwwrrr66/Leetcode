var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(...nums);
  }
  let prev = 0;
  let cur = 0;

  nums.forEach((n) => {
    const a = n + prev;
    prev = cur;

    cur = Math.max(a, prev);
  });
  return cur;
};
console.log(rob([2, 1, 1, 2]));
