/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  // nums 안의 최소 2개 의 조합 중복 X
  // 배열의 value가 감소 하지 않는 -> 계속 숫자가 커져야 함
  if (nums.length === 1) {
    return [];
  }

  const result = dfs(0, nums);

  return result;
};

function dfs(index, nums, temp = [], visited = {}, result = []) {
  if (visited[temp]) return;
  if (temp.length >= 2) {
    visited[temp] = true;
    result.push(temp);
  }
  for (let i = index; i < nums.length; i++) {
    const currentNumber = nums[i];
    if (temp[temp.length - 1] > currentNumber) continue;
    const nextTemp = [...temp, currentNumber];
    dfs(i + 1, nums, nextTemp, visited, result);
  }

  return result;
}

// findSubsequences([4, 4, 3, 2, 1]);x
console.log(findSubsequences([4, 6, 7, 7]));
