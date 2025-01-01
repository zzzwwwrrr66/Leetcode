/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const seen = new Set();
  for (const num of nums) {
      if (seen.has(num)) {
          return num;
      }
      seen.add(num);
  }
  return -1;  // Just to satisfy the compiler, this should never be reached
}

findDuplicate([1,3,4,2,2])