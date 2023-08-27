/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = new Map;
  
  for(let i = 0; i < nums.length; i++) {
    if(hash.has(nums[i])) {
      return [hash.get(nums[i]), i];
    } else {
      hash.set(target - nums[i], i)
    }
  }
};
