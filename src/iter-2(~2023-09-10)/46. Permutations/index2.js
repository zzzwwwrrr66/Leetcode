/*
Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const visited = {};
  const path = Array.from({length: nums.length}, ()=>0);
  const goalLen = nums.length;
  const result =  [];
  function DFS(L) {
    if(L === goalLen) {
      result.push([...path]); 
    } else {
      for(const num of nums) {
        if(!visited[num]) {
          visited[num] = true;
          path[num - 1] = num;
          DFS(L + 1);
          visited[num] = false;
        }
      }
    }
  }

  DFS(0);

  return result;
};
console.log(permute([1,2,3]))
