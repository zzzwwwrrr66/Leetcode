from typing import List


class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:

        def backtrack(i, total):
            if i == len(nums):
                return total == target

            plus = backtrack(i + 1, total + nums[i])
            minus = backtrack(i + 1, total - nums[i])
            return plus + minus

        return backtrack(0, 0)


s = Solution()
print(s.findTargetSumWays([1, 1, 1, 1, 1], 3))

print(s.findTargetSumWays([1, 1, 1, 1, 1], 3), s.findTargetSumWays([1], 1))
