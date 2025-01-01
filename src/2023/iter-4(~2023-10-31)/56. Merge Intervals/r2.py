from typing import List


def merge(intervals: List[List[int]]) -> List[List[int]]:
    if not intervals:
        return []
    intervals.sort()

    unique = []
    last = intervals[0]
    for cur in intervals:
        if cur[0] <= last[1]:
            last[1] = max(last[1], cur[1])
        else:
            unique.append(last)
            last = cur

    unique.append(last)
    return unique


merge([[1, 3], [2, 6], [8, 10], [15, 18]])
# merge([[1, 4], [4, 5]])
# print(merge([[1, 4], [0, 4]]))
