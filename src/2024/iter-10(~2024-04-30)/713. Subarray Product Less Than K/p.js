/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  // 2 loop? or 1loop recursion

  console.log({ nums, k });

  const result = [];
  const visited = new Set();
  // function dfs(currentNums, currentIndex) {
  //   if (currentIndex >= nums.length) {
  //     return;
  //   }
  //   if (visited.has(currentNums.join(""))) {
  //     return;
  //   }
  //   const multiple = currentNums.reduce((a, b) => a * b);
  //   if (multiple < k) {
  //     result.push(currentNums);
  //   } else {
  //     return;
  //   }

  //   visited.add(currentNums.join(""));

  //   for (let i = currentIndex; i < nums.length; i++) {
  //     dfs([...currentNums, nums[i + 1]], i + 1);
  //   }
  // }

  nums.forEach((num, i) => {
    const currentNums = [];
    for (let j = i; j < nums.length; j++) {
      currentNums.push(nums[j]);
      const multiple = currentNums.reduce((a, b) => a * b);
      if (multiple < k) {
        result.push([...currentNums]);
      } else {
        break;
      }
    }
  });

  return result.length;
};

numSubarrayProductLessThanK([10, 5, 2, 6], 100);
numSubarrayProductLessThanK([1, 2, 3], 0);
// return : 8
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// 배열안의 곱이 k 보다 작은 조합
