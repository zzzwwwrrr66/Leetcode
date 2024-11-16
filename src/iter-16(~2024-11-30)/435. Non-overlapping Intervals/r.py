from typing import List


class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort()
        res = 0
        prevEnd = intervals[0][1]
        for start, end in intervals[1:]:
            if start >= prevEnd:
                prevEnd = end
            else:
                res += 1
                prevEnd = min(end, prevEnd)

        return res


s = Solution()
s.eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])  # 1 [1,2],[1,3],[2,3],[3,4]

# s.eraseOverlapIntervals(
#     [
#         [1, 2],
#         [1, 2],
#         [1, 2],
#     ]
# ) # 2
# s.eraseOverlapIntervals(
#     [
#         [1, 2],
#         [2, 3],
#     ]
# ) # 0
