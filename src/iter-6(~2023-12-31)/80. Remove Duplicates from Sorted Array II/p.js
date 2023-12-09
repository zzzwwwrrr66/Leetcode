/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    const prev = nums[i - 2];
    if (prev === nums[i]) {
      nums.splice(i, 1);
    }
  }
};

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]); // return [0,0,1,1,2,3,3]
//  4, 8
