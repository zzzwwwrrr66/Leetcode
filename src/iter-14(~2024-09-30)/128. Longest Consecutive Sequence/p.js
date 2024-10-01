/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 연속된 숫자에서 제일 긴 숫자 찾기
  // left right?? 조건에서 틀리면 left가 right 로 오기??
  // O(n)으로 끝내야함

  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }

  let right = 1;
  nums.sort((a, b) => a - b);
  const resNums = Array(nums.length).fill(1);
  let res = -1;
  while (right < nums.length) {
    const prev = nums[right - 1];
    const current = nums[right];
    if (prev + 1 === current) {
      resNums[right] = resNums[right - 1] + 1;
      res = Math.max(resNums[right - 1] + 1, res);
    } else if (prev === current) {
      resNums[right] = resNums[right - 1];
    }
    right++;
  }
  return res === -1 ? Math.max(...resNums) : res;
};

// return 4 -> [1, 2, 3, 4]
longestConsecutive([100, 4, 200, 1, 3, 2]);

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
// 0, 0, 1
longestConsecutive([0, 0]);
longestConsecutive([1, 2, 0, 1]);
longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]); // return 7
