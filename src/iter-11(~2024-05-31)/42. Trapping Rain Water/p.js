/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  /*
solution
left = 0, right = height.len - 1
기본적으로 height[left],height[right] 를 비교 하면서 left++, right-- 를 한다 
-> 같은수 일때는 넘어갈수 없으니 leftMax를 저장후에 left++ 를 진행한다 
height[i] - maxLeftHeight, maxRightHeight 로 얻을수 있는 물의양을 알수있다 
*/
  const n = height.length;
  if (n === 1) {
    return 0;
  }
  let left = 0;
  let right = height.length - 1;
  let maxLeftHeight = -Infinity;
  let maxRightHeight = -Infinity;
  let res = 0;
  while (left < right) {
    const currLeftHeight = height[left];
    const currRightHeight = height[right];
    if (currLeftHeight <= currRightHeight) {
      maxLeftHeight = Math.max(currLeftHeight, maxLeftHeight);
      const currWater = maxLeftHeight - currLeftHeight;
      if (currWater > 0) {
        res += currWater;
      }
      left++;
    } else {
      maxRightHeight = Math.max(currRightHeight, maxRightHeight);
      const currWater = maxRightHeight - currRightHeight;
      if (currWater > 0) {
        res += currWater;
      }
      right--;
    }
  }

  return res;
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

/*
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/
