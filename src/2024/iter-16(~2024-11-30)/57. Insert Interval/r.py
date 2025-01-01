from typing import List


class Solution:
    def insert(
        self, intervals: List[List[int]], newInterval: List[int]
    ) -> List[List[int]]:
        res = []

        for i in range(len(intervals)):
            currInterval = intervals[i]
            if newInterval[1] < currInterval[0]:  # NEW E < CURR S
                res.append(newInterval)
                print("res", res + intervals[i:])
                return res + intervals[i:]  # sort 전제여서 가능
            elif newInterval[0] > currInterval[1]:  # NEW S > CURR E
                res.append(currInterval)
            else:
                newInterval = [
                    min(newInterval[0], currInterval[0]),
                    max(newInterval[1], currInterval[1]),
                ]

        res.append(newInterval)
        return res


s = Solution()
# s.insert([[1, 3], [6, 9]], [2, 5])  # [[1,5],[6,9]]
s.insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])  # [[1,2],[3,10],[12,16]]
