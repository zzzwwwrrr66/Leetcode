var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(nums.length).fill(0);
    
    let forwardNum = 1
    let backwardNum = 1
    for (let i = 0; i < n; i++) {
      result[i] = forwardNum;
      forwardNum = nums[i] * forwardNum
    }
    for(let i = n - 1; 0 <= i; i--) {
      result[i] = backwardNum * result[i]
      backwardNum = nums[i] * backwardNum
    }
    console.log(result)
    return result;
};


productExceptSelf([4,5,1,8,2])