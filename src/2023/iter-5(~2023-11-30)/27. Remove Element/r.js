// two pointers
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      tmp = nums[right];
      nums[right] = "_";
      nums[left] = tmp;
      right--;
    } else {
      left++;
    }
  }

  return left;
};

removeElement([3, 2, 2, 3], 3);
