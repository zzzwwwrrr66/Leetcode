import heapq
from typing import List


class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        # fixed points
        # base case
        if N == 0:
            return 0
        if N == 1:
            return points[0][0] + points[0][1]
        # 1. points distance map

        N = len(points)

        pointsDistanceMap = {i: [] for i in range(N)}
        for i in range(N):
            for j in range(i + 1, N):
                distance = (abs(points[i][0] - points[j][0])) + (
                    abs(points[i][1] - points[j][1])
                )
                pointsDistanceMap[i].append([distance, j])
                pointsDistanceMap[j].append([distance, i])

        # 2. start 0,0
        visited = set()
        res = 0
        q = [[0, 0]]
        # 3. sum distance by visit, heap queue
        while len(visited) < N:
            cost, i = heapq.heappop(q)
            if i in visited:
                continue
            res += cost
            visited.add(i)

            for neiCost, nodeNumber in pointsDistanceMap[i]:
                if nodeNumber not in visited:
                    heapq.heappush(q, [neiCost, nodeNumber])

        return res


s = Solution()

# s.minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]])
print(
    s.minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]),
    s.minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]]),
)


{
    0: [[1, 4], [2, 13], [3, 7], [4, 7]],  # 1 4
    1: [[0, 4], [2, 9], [3, 3], [4, 7]],  # 2 9
    2: [[0, 13], [1, 9], [3, 10], [4, 14]],  # 3  3
    3: [[0, 7], [1, 3], [2, 10], [4, 4]],  # 4  4
    4: [[0, 7], [1, 7], [2, 14], [3, 4]],
}
