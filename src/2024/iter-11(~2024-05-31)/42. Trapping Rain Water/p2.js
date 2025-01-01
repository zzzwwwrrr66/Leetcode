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
height[i] - maxLeft, maxRight 로 얻을수 있는 물의양을 알수있다 
*/
  const n = height.length;
  if (n === 1) {
    return 0;
  }
  const maxLeftList = [];
  const maxRightList = [];
  const minNumList = [];
  let leftMaxNum = -Infinity;
  let rightMaxNum = -Infinity;
  for (let i = 0; i < n; i++) {
    leftMaxNum = Math.max(leftMaxNum, height[i]);
    maxLeftList.push(leftMaxNum);
  }
  for (let i = n - 1; i >= 0; i--) {
    rightMaxNum = Math.max(rightMaxNum, height[i]);
    maxRightList.push(rightMaxNum);
  }
  maxRightList.reverse();

  for (let i = 0; i < n; i++) {
    const currMinNum = Math.min(maxLeftList[i], maxRightList[i]);
    minNumList.push(currMinNum);
  }

  const res = [];
  for (let i = 0; i < n; i++) {
    const currWater = minNumList[i] - height[i];
    if (currWater > 0) {
      res.push(currWater);
    } else {
      res.push(0);
    }
  }

  console.log({ maxLeftList, maxRightList });
  console.log({ minNumList });
  return res.reduce((a, b) => a + b);
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

/*
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/
