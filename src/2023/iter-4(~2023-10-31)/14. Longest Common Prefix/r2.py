from typing import List
import bisect


def longestCommonPrefix(strs: List[str]) -> str:
    l = list(zip(*strs))
    prefix = ""
    for i in l:
        if len(set(i)) == 1:
            prefix += i[0]
        else:
            break
    return prefix


print(longestCommonPrefix(["flower", "flow", "flight"]))
# print(longestCommonPrefix(["dog", "racecar", "car"]))

# https://leetcode.com/problems/longest-common-prefix/
"""
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
"""
