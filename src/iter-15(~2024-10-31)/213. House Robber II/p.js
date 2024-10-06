/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 3) {
    return Math.max(...nums);
  }

  const firstMax = handleDp(nums.slice(0, nums.length - 1));
  const lastMax = handleDp(nums.slice(1, nums.length));

  return Math.max(...firstMax, ...lastMax);
};

function handleDp(dpList) {
  for (let i = 0; i < dpList.length; i++) {
    const rob1 = i - 2 < 0 ? dpList[i] : dpList[i - 2] + dpList[i];
    const rob2 = i - 1 < 0 ? 0 : dpList[i - 1];
    dpList[i] = Math.max(rob1, rob2);
  }
  return dpList;
}

rob([2, 3, 2]); // 3
rob([1, 2, 3, 1]); // 4
rob([1, 2, 1, 1]); // 3
