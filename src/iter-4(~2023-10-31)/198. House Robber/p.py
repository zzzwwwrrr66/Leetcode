from typing import List


# Greedy ?
# 가장 많은 max value
# 연속 두개의 집을 털면 X
# 홀수 짝수 의 max 만 구하면 될듯? -> 안됨
def rob(nums: List[int]) -> int:
    length = len(nums)
    if length == 0:
        return 0
    if length == 1:
        return nums[0]
    if length == 2:
        return max(nums)

    dp = [0] * length
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    for i in range(2, length):
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

    return dp[length - 1]


# print(rob([1, 2, 3, 1]))
print(rob([2, 7, 9, 3, 1]))
# print(rob([2, 1, 1, 2]))

"""
Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
"""

# https://leetcode.com/problems/house-robber/
