import heapq
from typing import List


class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        N = len(points)
        adj = {i: [] for i in range(N)}
        # 각각의 노드마다 거리구하기
        for i in range(N):
            x1, y1 = points[i]
            for j in range(i + 1, N):
                x2, y2 = points[j]
                # 무조건 절대값
                dist = abs(x1 - x2) + abs(y1 - y2)
                adj[i].append([dist, j])
                adj[j].append([dist, i])

        res = 0
        visit = set()
        # 0,0 에서 시작
        minH = [[0, 0]]
        while len(visit) < N:
            cost, i = heapq.heappop(minH)
            if i in visit:
                continue
            res += cost
            visit.add(i)
            for neiCost, nodeNumber in adj[i]:
                if nodeNumber not in visit:
                    heapq.heappush(minH, [neiCost, nodeNumber])
        return res


s = Solution()

# s.minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]])

s.minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]])
