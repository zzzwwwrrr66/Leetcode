from typing import List
from collections import deque


def dailyTemperatures(temperatures: List[int]) -> List[int]:
    result = [0] * len(temperatures)
    S = list()
    for ci, cv in enumerate(temperatures):
        while S and S[-1][1] < cv:
            xi, xv = S.pop()
            result[xi] = ci - xi
        S.append([ci, cv])

    return result


temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
dailyTemperatures(temperatures)


# https://leetcode.com/problems/daily-temperatures/
