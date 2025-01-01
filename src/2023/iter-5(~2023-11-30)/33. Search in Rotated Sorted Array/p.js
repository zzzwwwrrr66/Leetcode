/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // error case
  if (nums.length === 0) {
    return -1;
  }

  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  const n = nums.length - 1;
  let left = 0;
  let right = n;

  // pibot에 의해 뒤틀려 정렬된 값만 가능
  // 정렬되있지만 중도에서 정렬이 끝났으므로 index의 기준을 정해야한다 => 가장 작은 index로
  // 범위를 점점 줄여간다
  while (left < right) {
    const mid = parseInt((left + right) / 2, 10);
    const midNum = nums[mid];
    const rightNum = nums[right];
    if (midNum > rightNum) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // 인덱스의 찾을 범위를 구하기 위해 minNumIdx 기준으로 low, high 의 범위를 정한다
  const minNumIdx = left;
  left = 0;
  right = n;
  // target 이 가장작은수 보다 크거나같고, target 이 nums[right] 보다 작거나같으면 left를 minNumIndex
  if (target >= nums[minNumIdx] && target <= nums[right]) {
    left = minNumIdx;
  } else {
    right = minNumIdx;
  }

  // 원래의 바이너리서치 while(low <= high) 로 target을 찾는다
  while (left <= right) {
    const mid = parseInt((left + right) / 2, 10);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
// console.log(search([4, 5, 6, 7, 0, 1, 2], 4));
console.log(search([1, 3], 4));
