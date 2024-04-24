/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
  this.numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    this.numMap.set(i, nums[i]);
  }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  let result = 0;

  for (const key of this.numMap.keys()) {
    result += this.numMap.get(key) * vec.numMap.get(key);
  }

  return result;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
