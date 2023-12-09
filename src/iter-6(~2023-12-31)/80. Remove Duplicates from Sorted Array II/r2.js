var removeDuplicates = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    let secPrev = nums[i - 2];
    if (secPrev === nums[i]) nums.splice(i, 1);
  }
};

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]); // return [0,0,1,1,2,3,3]
// removeDuplicates([0, 0, 1, 1, 1, 2, 3, 3]); // return [0,0,1,1,2,3,3]
