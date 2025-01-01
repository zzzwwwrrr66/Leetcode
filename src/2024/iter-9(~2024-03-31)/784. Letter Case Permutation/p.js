/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let map = {};

  let iterate = (index, temp, result = []) => {
    if (map[temp]) return;
    if (temp.length >= 2) {
      result.push(temp);
    }

    for (let i = index; i < nums.length; i++) {
      if (temp[temp.length - 1] > nums[i]) continue;
      map[temp] = true;
      iterate(i + 1, [...temp, nums[i]], result);
    }

    return result;
  };

  const result = iterate(0, []);
  return result;
};
console.log(letterCasePermutation("a1b2")); // return [("a1b2", "a1B2", "A1b2", "A1B2")];
