/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 합해서 0 이 가능한 배열의 조합 찾아내기
  nums.sort((a, b) => b - a);
  const res = new Set();
  const zero = []; // 0
  const negative = []; // -
  const positive = []; // +

  // spread num
  nums.forEach((num) => {
    if (num === 0) {
      zero.push(num);
    } else if (num < 0) {
      negative.push(num);
    } else if (num > 0) {
      positive.push(num);
    }
  });

  const N = new Set(negative);
  const P = new Set(positive);

  // case [-1, 0, 1]
  if (zero.length > 0) {
    negative.forEach((n) => {
      if (P.has(-1 * n)) {
        res.add(`${n},${0},${-1 * n}`);
      }
    });
  }
  // zero case
  if (zero.length >= 3) {
    res.add(`0,0,0`);
  }
  // negative case
  for (let i = 0; i < negative.length; i++) {
    for (let j = i + 1; j < negative.length; j++) {
      const targetNum = -1 * (negative[i] + negative[j]);
      if (P.has(targetNum)) {
        res.add(`${negative[i]},${negative[j]},${targetNum}`);
      }
    }
  }
  // positive case
  for (let i = 0; i < positive.length; i++) {
    for (let j = i + 1; j < positive.length; j++) {
      const targetNum = (positive[i] + positive[j]) * -1;
      if (N.has(targetNum)) {
        res.add(`${positive[i]},${positive[j]},${targetNum}`);
      }
    }
  }

  return [...res.values()].map((v) => v.split(",").map((v) => parseInt(v, 10)));
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([1, 2, -2, -1]));
