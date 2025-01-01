/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 중복 금지
  // 어떤 순서를 return 해도 상관없음
  let res = new Set();

  function dfs(currIndex, list) {
    const curr = list.sort((a, b) => a - b).join(",");
    if (res.has(curr)) {
      return;
    }
    res.add(curr);

    for (let i = currIndex; i < nums.length; i++) {
      dfs(i + 1, [...list, nums[i]]);
    }
  }

  dfs(0, []);

  const result = [...res].map((v) => {
    if (v === "") {
      return [];
    } else {
      return v.split(",");
    }
  });

  return result;
};

subsets([1, 2, 3]);
subsets([0]);
