from typing import List
from collections import defaultdict


def longestConsecutive(nums: List[int]) -> int:
    dp = defaultdict(list)
    visited = defaultdict(bool)
    mx = 0
    for i in nums:
        if visited[i]:
            continue
        visited[i] = True
        l, r = i, i

        if dp[i - 1]:
            l = dp[i - 1][0]
        if dp[i + 1]:
            r = dp[i + 1][1]
        dp[l] = [l, r]
        dp[r] = [l, r]
        mx = max(mx, r - l + 1)
    return mx


# longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
longestConsecutive([100, 4, 200, 1, 3, 2])
# print(longestConsecutive([1, 2, 0, 1]))
