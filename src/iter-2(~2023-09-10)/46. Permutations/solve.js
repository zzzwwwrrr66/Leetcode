/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [],
      visited = {};

  var backtrack = (cur) => {
      if (cur.length === nums.length) return res.push(cur);

      for (let num of nums) {
          if (!visited[num]) {
              visited[num] = true;
              backtrack([...cur, num]);
              visited[num] = false;
          }
      }
  };

  backtrack([]);
  return res;
};


permute([1,2,3])