from typing import List


class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        dp = {}  # (index, total) -> # of ways

        def backtrack(i, total):
            if i == len(nums):
                return 1 if total == target else 0
            if (i, total) in dp:
                return dp[(i, total)]

            plus = backtrack(i + 1, total + nums[i])
            minus = backtrack(i + 1, total - nums[i])

            dp[(i, total)] = plus + minus

            return dp[(i, total)]

        res = backtrack(0, 0)
        print(dp)
        return res


s = Solution()
print(s.findTargetSumWays([1, 1, 1, 1, 1], 3))

{
    (4, 4): 1,
    (4, 2): 1,
    (3, 3): 2,
    (4, 0): 0,
    (3, 1): 1,
    (2, 2): 3,
    (4, -2): 0,
    (3, -1): 0,
    (2, 0): 1,
    (1, 1): 4,
    (4, -4): 0,
    (3, -3): 0,
    (2, -2): 0,
    (1, -1): 1,
    (0, 0): 5,
}
