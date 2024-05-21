/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // * sort 되 있어서 가능?
  // 크면 r-=1
  // 작으면 l+=1
  //
  // Math.floor(l + r / 2);
  // while(l < r) {}

  const results = [];

  if (nums.length < 3) return results;

  nums.sort((a, b) => a - b);
  const target = 0;

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (currNum > 0) break;

    // 중복 방지
    if (i > 0 && currNum === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = currNum + nums[l] + nums[r];
      if (sum > target) {
        r--;
      } else if (sum < target) {
        l++;
      } else {
        results.push([currNum, nums[l], nums[r]]);
        l++;
        r--;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return results;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
