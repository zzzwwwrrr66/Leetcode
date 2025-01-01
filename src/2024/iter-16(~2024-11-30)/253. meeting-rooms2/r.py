import heapq
from typing import List


# 최소한의 필요한 ROOM 구하기
class Solution:
    def minMeetingRooms(self, intervals: List[int]) -> int:
        intervals.sort(key=lambda x: x[0])
        min_heap = []
        print(intervals)
        for interval in intervals:

            start = interval[0]
            end = interval[1]
            if min_heap and min_heap[0] <= start:
                heapq.heappop(min_heap)
            heapq.heappush(min_heap, end)
            print("min_heap", min_heap)

        return len(min_heap)


s = Solution()
# print(s.minMeetingRooms([[2, 15], [4, 9], [9, 29], [16, 23], [36, 45]]))
print(  # 2
    s.minMeetingRooms(
        [
            [1, 5],
            [8, 9],
            [8, 9],
        ]
    )
)
