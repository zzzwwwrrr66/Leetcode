from typing import List

# Dynamic Programming (Top-Down)


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        memo = [[None] * 2 for _ in range(len(nums) + 1)]

        def dfs(i, flag):
            if i == len(nums):
                return 0 if flag else -1e6
            if memo[i][flag] is not None:
                return memo[i][flag]
            if flag:
                memo[i][flag] = max(0, nums[i] + dfs(i + 1, True))
            else:
                memo[i][flag] = max(dfs(i + 1, False), nums[i] + dfs(i + 1, True))
            return memo[i][flag]

        return dfs(0, False)


s = Solution()


# 1
s.maxSubArray([-2, 1])

# 6
s.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

# 1
s.maxSubArray([1])

# 23
s.maxSubArray([5, 4, -1, 7, 8])
