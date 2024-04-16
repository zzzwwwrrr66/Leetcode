var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let res = 0,
    left = 0,
    right = 0,
    current = 1;

  // 그전것들 다 카운트에 추가
  while (right < nums.length) {
    current = current * nums[right];
    while (current >= k) {
      // current가 k 보다 클때 left++ 조건, 그전의 nums[left] 는 제거
      current = current / nums[left];
      left++;
    }
    res += right - left + 1;
    right++;
  }
  return res;
};

numSubarrayProductLessThanK([10, 5, 2, 6], 100);
// numSubarrayProductLessThanK([1, 2, 3], 0);

// 10, 5, 10|5, 5|2, 2, 5|2|6, 2|6, 6
