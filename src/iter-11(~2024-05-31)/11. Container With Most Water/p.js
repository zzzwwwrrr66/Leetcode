/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 어떤 기준으로 left++, right-- 를 하는지???
  // left 가 right보다 작으면 left++
  // right 보다 left 가 작으면 right--
  // 8(r) - 1(l) = 7 -> count
  // Math.min(valOfLeft, valOfRight) -> minTwo
  // minTwo * count
  let left = 0;
  let right = height.length - 1;
  let res = -Infinity;
  while (left < right) {
    const width = right - left;
    const leftVal = height[left];
    const rightVal = height[right];
    const minVal = Math.min(leftVal, rightVal);
    res = Math.max(res, width * minVal);

    if (leftVal < rightVal || leftVal === rightVal) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), maxArea([1, 1]), maxArea([2, 3, 4, 5, 18, 17, 6]));
/*

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
*/
