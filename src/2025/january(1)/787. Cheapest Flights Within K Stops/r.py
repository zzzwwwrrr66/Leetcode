import heapq
from typing import List


# node number 와 count, cost 의 상태가 필요하다
# 상태 저장의 value 를 만들고 루프나 재귀를 돌면서 상태에 맞게 return 과 오류를 throw 한다
class Solution:
    def findCheapestPrice(
        self, n: int, flights: List[List[int]], src: int, dst: int, k: int
    ) -> int:
        INF = float("inf")
        adj = [[] for _ in range(n)]
        # key -> start node number, value []:index -> count, value -> cost
        dist = [[INF] * (n + 1) for _ in range(n)]
        for fromNode, toNode, cost in flights:
            adj[fromNode].append([toNode, cost])

        dist[src][0] = 0
        minHeap = [(0, src, -1)]  # cost, node, stops
        while len(minHeap):
            cost, node, stops = heapq.heappop(minHeap)
            if dst == node:
                print("dist", dist)
                print("cost", cost)
                return cost
            # 처음일때
            if stops == k or dist[node][stops + 1] < cost:
                continue
            for nei, w in adj[node]:
                nextCst = cost + w
                nextStops = 1 + stops
                if dist[nei][nextStops + 1] > nextCst:
                    dist[nei][nextStops + 1] = nextCst
                    heapq.heappush(minHeap, (nextCst, nei, nextStops))

        return -1


s = Solution()

# 700
s.findCheapestPrice(
    4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1
)

# 200
s.findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)

# 500
s.findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)

{0: [[100, 1]], 1: [[100, 2], [600, 3]], 2: [[100, 0], [200, 3]], 3: []}
# [
#     [0, inf, inf, inf, inf, inf],
#     [inf, 100, inf, inf, inf, inf],
#     [inf, inf, 200, inf, inf, inf],
#     [inf, inf, 700, inf, inf, inf],
# ]
