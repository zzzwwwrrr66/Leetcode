/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  // back to basics?!
  const cntMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (!cntMap.has(i + 1)) {
      cntMap.set(i + 1, 0);
    }
    if (!cntMap.has(currNum)) {
      cntMap.set(currNum, 0);
    }
    cntMap.set(currNum, cntMap.get(currNum) + 1);
  }

  const over2Cnt = [];
  const zeroCnt = [];
  for (const [k, v] of cntMap.entries()) {
    if (v > 1) {
      over2Cnt.push(k);
    }
    if (v === 0) {
      zeroCnt.push(k);
    }
  }

  return [...over2Cnt, ...zeroCnt];
};
console.log(findErrorNums([1, 2, 2, 4]), findErrorNums([1, 1]));
/*
  Input: nums = [1,2,2,4]
  Output: [2,3]
 */
