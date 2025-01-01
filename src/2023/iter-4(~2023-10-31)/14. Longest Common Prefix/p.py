from typing import List
import bisect


def longestCommonPrefix(strs: List[str]) -> str:
    ans = ""
    strs = sorted(strs)
    first = strs[0]
    last = strs[-1]
    for i in range(min(len(first), len(last))):
        if first[i] != last[i]:
            return ans
        ans += first[i]
    return ans


print(longestCommonPrefix(["flower", "flow", "flight"]))
# print(longestCommonPrefix(["dog", "racecar", "car"]))

# https://leetcode.com/problems/longest-common-prefix/
"""
Example 1:

# Input: strs = ["flower","flow","flight"]
Output: "fl"
"""
