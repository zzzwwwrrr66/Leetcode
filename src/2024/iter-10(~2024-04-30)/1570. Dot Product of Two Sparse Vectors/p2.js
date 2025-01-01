class SparseVector {
  constructor(nums) {
    this.nums = nums;
  }

  dotProduct(vec) {
    let result = 0;

    for (const key of this.numMap.keys()) {
      result += this.numMap.get(key) * vec.numMap.get(key);
    }

    return result;
  }
}

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
class SparseVector2 {
  constructor(nums) {
    this.nums = nums;
  }

  /**
   * @param {SparseVector} vec
   * @return {number}
   */
  dotProduct(vec) {
    let result = 0;

    for (let i = 0; i < this.nums.length; i++) {
      result += this.nums[i] * vec.nums[i];
    }

    return result;
  }
}

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
