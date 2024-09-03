import heapq
from typing import List
from collections import Counter, deque


# heap queue, queue
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        if n == 0:
            return len(tasks)

        count = Counter(tasks)
        maxHeap = [-cnt for cnt in count.values()]
        heapq.heapify(maxHeap)

        time = 0
        queue = deque()  # pairs of [-cnt, idleTime]
        while maxHeap or queue:
            time += 1

            if not maxHeap:
                time = queue[0][1]
            else:
                cntLeft = 1 + heapq.heappop(maxHeap)
                if cntLeft:
                    canTaskTime = time + n
                    queue.append([cntLeft, canTaskTime])

            if queue and queue[0][1] == time:
                currTask = queue.popleft()[0]
                heapq.heappush(maxHeap, currTask)

        print("time", time)
        return time


s = Solution()

s.leastInterval(["A", "A", "A", "B", "B", "B"], 2)
# //  A -> B -> C -> D -> A -> B.

# s.leastInterval(["A", "C", "A", "B", "D", "B"], 1)
# // 6 A -> B -> C -> D -> A -> B.

# s.leastInterval(["A", "A", "A", "B", "B", "B"], 3)
# // 10 A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
