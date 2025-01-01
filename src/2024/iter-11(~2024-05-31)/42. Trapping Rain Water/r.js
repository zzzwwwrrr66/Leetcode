/**
 * Linear
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/trapping-rain-water
 * @param {number[]} height
 * @return {number}
 *
 */
var trap = function (height) {
  const maxLeft = [];
  const maxRight = [];
  const minLeftRight = [];

  let current = 0;
  for (let i = 0; i < height.length; i++) {
    maxLeft.push(current);
    current = Math.max(current, height[i]);
  }
  console.log({ maxLeft });
  current = 0;
  for (let i = height.length - 1; i > -1; i--) {
    maxRight.push(current);
    current = Math.max(current, height[i]);
  }
  // because the elements were added reverse.
  maxRight.reverse();

  for (let i = 0; i < height.length; i++) {
    const minofLeftRight = Math.min(maxLeft[i], maxRight[i]);
    minLeftRight.push(minofLeftRight);
  }

  let water = 0;
  for (let i = 0; i < height.length; i++) {
    if (minLeftRight[i] - height[i] > 0) {
      water += minLeftRight[i] - height[i];
    }
  }

  return water;
};

/**
 * https://leetcode.com/problems/trapping-rain-water/
 * Time O(N) | Space O(1)
 * @param {number[]} height
 * @return {number}
 */
var trap2 = function (height) {
  let [left, right] = [0, height.length - 1];
  let [maxLeft, maxRight, area] = [0, 0, 0];

  while (left < right) {
    const [leftHeight, rightHeight] = getHeights(height, left, right);
    const [leftWindow, rightWindow] = getWindows(height, left, maxLeft, right, maxRight);

    const isRightGreater = leftHeight <= rightHeight;
    if (isRightGreater) {
      if (hasNewMax(maxLeft, leftHeight)) {
        maxLeft = leftHeight;
      } else {
        area += leftWindow;
      }

      left++;
    }

    const isRightLess = rightHeight < leftHeight;
    if (isRightLess) {
      if (hasNewMax(maxRight, rightHeight)) {
        maxRight = rightHeight;
      } else {
        area += rightWindow;
      }

      right--;
    }
  }
  console.log({ area });
  return area;
};

const hasNewMax = (max, currHeight) => max < currHeight;

const getHeights = (height, left, right) => [height[left], height[right]];

const getWindows = (height, left, maxLeft, right, maxRight) => {
  const [leftHeight, rightHeight] = getHeights(height, left, right);
  const [leftWindow, rightWindow] = [maxLeft - leftHeight, maxRight - rightHeight];

  return [leftWindow, rightWindow];
};

trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

/*
solution No.1 
min(l, r) - h[i]

left 에서의 max height -> left max height list
right 에서의 max height -> right max height list
min(left, right) list -> save min(l, r) => 적은수를 담아야지 많은 물을 획득가능 
for h of height 
  h - currMinNum


solution No.2
left = 0, right = height.len - 1
기본적으로 height[left],height[right] 를 비교 하면서 left++, right-- 를 한다 
-> 같은수 일때는 넘어갈수 없으니 leftMax를 저장후에 left++ 를 진행한다 
height[i] - maxLeft, maxRight 로 얻을수 있는 물의양을 알수있다 
*/
