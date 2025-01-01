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

// findSubsequences([4, 4, 3, 2, 1]);x
console.log(findSubsequences([4, 6, 7, 7]));

/* 조합(combination)
// 1. 조건에 맞으면 result에 추가
// 2. index + 1, 현재까지의 진행temp, result = [] 를 재귀한다
// 3. return result 
*/
