/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  if (nums.length < 3) return res;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    // 정렬된 list 이기 때문에 0 보다 높으면 break
    if (currNum > 0) break;
    // 같은걸 피하는조건?
    if (i > 0 && currNum === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const left = nums[l];
      const right = nums[r];
      const threeSum = currNum + left + right;
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([currNum, left, right]);
        l++;
        r--;
        // 뭔조건?? 같은걸 피하는 조건??
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/* 
  for -> while 
  for nums.length
    currNum, l = 0, r = nums.length
      while (l < r)

        
*/
//
//
