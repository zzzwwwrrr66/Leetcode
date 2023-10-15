from typing import List
from collections import deque


"""
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
"""


def merge(intervals: List[List[int]]) -> List[List[int]]:
    if len(intervals) == 1:
        return intervals
    intervals = sorted(intervals, key=lambda x: x[0])

    ans = [intervals.pop(0)]
    for cs, ce in intervals:
        if ans[-1][1] < cs:
            ans.append([cs, ce])
        else:
            ans[-1][1] = max(ans[-1][1], ce)

    print(ans)


# merge([[1, 3], [2, 6], [8, 10], [15, 18]])
# merge([[1, 4], [4, 5]])
merge([[1, 4], [0, 4]])

# https://leetcode.com/problems/merge-intervals/
