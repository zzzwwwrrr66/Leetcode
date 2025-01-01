from typing import List

# Kadane's Algorithm


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        res, curSum = nums[0], 0
        for num in nums:
            if curSum < 0:  # currSum -> 전에꺼까지 Sum 된것
                curSum = 0
            curSum += num
            res = max(res, curSum)
        return res


s = Solution()


# 1
# s.maxSubArray([-2, 1])

# 6
s.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

# 1
s.maxSubArray([1])

# 23
s.maxSubArray([5, 4, -1, 7, 8])
