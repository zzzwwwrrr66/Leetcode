/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  // 1. matrix loop => check target matrix[i][0] <= target && matrix[i][-1] >= target
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    const currArr = matrix[i];
    if (currArr[0] <= target && currArr[currArr.length - 1] >= target) {
      let left = 0;
      let right = currArr.length - 1;
      while (left <= right) {
        let mid = parseInt(left + (right % 2), 10);
        if (currArr[mid] === target) {
          return true;
        }

        if (currArr[mid] > target) {
          right = mid - 1;
        }
        if (currArr[mid] < target) {
          left = mid + 1;
        }
      }
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
);
