from typing import List

# Dynamic Programming (Bottom-Up)


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [[0] * 2 for _ in range(n)]
        dp[n - 1][1] = dp[n - 1][0] = nums[n - 1]
        for i in range(n - 2, -1, -1):
            dp[i][1] = max(nums[i], nums[i] + dp[i + 1][1])
            dp[i][0] = max(dp[i + 1][0], dp[i][1])

        return dp[0][0]


s = Solution()


# 1
s.maxSubArray([-2, 1])

# 6
s.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

# 1
s.maxSubArray([1])

# 23
s.maxSubArray([5, 4, -1, 7, 8])
