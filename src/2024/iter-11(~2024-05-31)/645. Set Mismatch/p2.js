/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  // back to basics?!
  const cntMap = new Uint8Array(nums.length + 1);
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    cntMap[currNum] = cntMap[currNum] + 1;
  }

  const over2Cnt = [];
  const zeroCnt = [];
  for (let i = 1; i <= nums.length; i++) {
    if (cntMap[i] > 1) {
      over2Cnt.push(i);
    }
    if (cntMap[i] === 0) {
      zeroCnt.push(i);
    }
  }

  return [...over2Cnt, ...zeroCnt];
};
console.log(findErrorNums([1, 2, 2, 4]), findErrorNums([1, 1]));
/*
  Input: nums = [1,2,2,4]
  Output: [2,3]
 */
