function handleMove(num, dir) {
  if (dir === "R") {
    num++;
  } else if (dir === "L") {
    num--;
  }
  return num;
}
function handleChangeDirection(dir) {
  if (dir === "R") {
    dir === "L";
  } else {
    dir === "R";
  }
  return dir;
}

/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function (nums, s, d) {
  // R -> +   //   left -> -
  // loop 돈후 같은 방향 인 node 가 존재 하면 방향을 바꾼다 L -> R, R -> L

  // loop pos
  for (let i = 0; i < d; i++) {
    const checkDup = new Map();
    for (let j = 0; j < nums.length; j++) {
      const currDirection = s[j];
      const currNum = nums[j];
      const nextIdx = handleMove(currNum, currDirection);
      nums[j] = nextIdx;
      // checkDup.add(nextIdx);
    }

    // if (checkDup.size !== nums.length) {
    // }
    // 방향대로 움직인다

    // 움직인후 Nodes 의 위치 확인 -> Map

    // 겹친 Nodes 의 방향을 바꾼다
  }
  // loop distance
};

sumDistance([-2, 0, 2], "RLL", 3);
