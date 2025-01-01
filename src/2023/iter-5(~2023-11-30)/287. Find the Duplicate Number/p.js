/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const dict = {}
    let result = -1;
    nums.some(num => {
      if(!dict[num]) {
        dict[num] = 0
      }
      dict[num] = dict[num] + 1
      if(dict[num] > 1) {
        result = num
        return true
      }
    })

    return result
};


findDuplicate([1,3,4,2,2])