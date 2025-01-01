/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (!numsMap.has(currNum)) {
      numsMap.set(target - currNum, i);
    } else if (numsMap.has(currNum)) {
      return [numsMap.get(currNum), i];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
