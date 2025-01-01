
// 각각의 nums[i]는 앞으로 점프할수있는 최대의 수

/*
0 <= j <= nums[i] and
current index + j(최대점프할수있는수) < n
끝에 도달할수있는 가장작은수
0, 1 을 넣는다
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  const n = nums.length;
  const minNumTable = Array(n).fill(Infinity);
  minNumTable[0] = 0;
  if(n === 1) {
    return 0
  }

  for (let i = 0; i < n - 1; i++) {
    const currNum = nums[i];
    if(currNum === 0) continue;
    if(currNum === 1) {
      minNumTable[i + 1] = Math.min(minNumTable[i] + 1,  minNumTable[i + 1]);
      continue;
    }

    for (let j = 1; j <= currNum; j++) {
      if (i + j < n) {
        minNumTable[i + j] = Math.min(minNumTable[i] + 1,  minNumTable[i + j]);
      }
    }
  }

  return minNumTable[n - 1]
};

console.log(
jump([2,3,1,1,4])
)
console.log(
jump([2,3,0,1,4])
)