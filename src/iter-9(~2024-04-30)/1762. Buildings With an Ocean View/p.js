/**
 * @param {number[]} heights
 * @return {number[]}
 * time limit
 */
var findBuildings = function (heights) {
  // base case length 1
  if (heights.length === 1) {
    return [0];
  }
  const n = heights.length - 1;

  // 다음숫자들의 높이가 현재의 height보다 낮으면 바다뷰
  // return: 바다뷰인 index
  const result = [];
  let currentIndex = 0;
  while (heights.length > 0) {
    const x = heights.shift();
    let isOcean = false;
    if (x > Math.max(...heights) || n === currentIndex) {
      result.push(currentIndex);
    }
    currentIndex++;
  }

  return result;
};

findBuildings([4, 2, 3, 1]);
