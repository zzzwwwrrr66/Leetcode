import heapq
from typing import List


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        n = len(stones)
        if n == 0:
            return 0
        if n == 1:
            return stones[0]

        while len(stones) > 1:
            stones.sort()

            popA = stones.pop()
            popB = stones.pop()
            if popA != popB:
                stones.append(popA - popB)

        return stones[0] if len(stones) == 1 else 0


s = Solution()
# s.lastStoneWeight([2, 7, 4, 1, 8, 1])
s.lastStoneWeight([1, 3])
