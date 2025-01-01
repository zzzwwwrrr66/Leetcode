/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  console.log({ numbers });
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] > target) {
        break;
      }
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
      // console.log("numbers[i][j]");
    }
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
console.log("==========================================");
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const solve = (numbers, target) => {
  let left = 0,
    right = 1;
  while (left < numbers.length) {
    if (numbers[left] + numbers[left + 1] > target) {
      continue;
    }
    for (let i = left + 1; i < numbers.length; i++) {
      if (numbers[left] + numbers[i] > target) {
        break;
      }
      if (numbers[left] + numbers[i] === target) {
        return [left + 1, i + 1];
      }
    }

    left++;
  }
  return [];
};
console.log(solve([2, 7, 11, 15], 9));
console.log(solve([2, 3, 4], 6));
console.log(solve([-1, 0], -1));
console.log("==========================================");
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const solve2 = (numbers, target) => {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] > target) {
      right -= 1;
    } else if (numbers[left] + numbers[right] < target) {
      left += 1;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [];
};

console.log(solve2([2, 7, 11, 15], 9));
console.log(solve2([2, 3, 4], 6));
console.log(solve2([-1, 0], -1));
