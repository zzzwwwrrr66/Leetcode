/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsMap = new Map();
  for (const num of nums) {
    if (!numsMap.has(num)) numsMap.set(num, 1);
  }

  numsMap.forEach((v, k) => {
    if (numsMap.has(k + 1)) {
      numsMap.set(k + 1, 0);
    }
  });

  let maxCnt = -Infinity;
  for (const num of nums) {
    let cnt = 1;
    if (numsMap.get(num) === 1) {
      while (numsMap.get(num + cnt) === 0) {
        cnt++;
      }
    }
    maxCnt = Math.max(maxCnt, cnt);
  }

  return maxCnt;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
