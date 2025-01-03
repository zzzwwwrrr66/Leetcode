from typing import List
import heapq


class Solution:
    def findCheapestPrice(
        self, n: int, flights: List[List[int]], src: int, dst: int, k: int
    ) -> int:
        # from, to, price = flights
        # return the cheapest price -> from src to dst
        # k 는 멈출수있는 limit -> src dst 빼고는 다 count 된다
        # If there is no such route, return -1.

        # 1. 그래프 작성 -> fromNode, toNode, stops, cost
        adj = {i: [] for i in range(n)}
        for i, v in enumerate(flights):
            f, t, price = v
            adj[f].append([price, t])

        # 2. dist 작성 (toNode = count index => cost)
        dist = [[float("inf")] * (n + 1) for _ in range(n)]

        hq = [[0, src, -1]]  # cost, toNode, cnt
        # 3. bfs
        while len(hq):
            cost, toNode, cnt = heapq.heappop(hq)
            if dst == toNode:
                return cost
            if cnt >= k or cost > dist[toNode][cnt + 1]:
                continue

            dist[toNode][cnt + 1] = cost

            for i, v in enumerate(adj[toNode]):
                cst, target = v
                nextCost = cst + cost
                nextCnt = cnt + 1
                if dist[target][nextCnt + 1] > nextCost:
                    dist[target][nextCnt + 1] = nextCost
                    heapq.heappush(hq, (nextCost, target, cnt + 1))

        return -1


s = Solution()

# 700
# s.findCheapestPrice(
#     4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1
# )

# 200
# s.findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)

# # 500
print(s.findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0))


{0: [[100, 1]], 1: [[100, 2], [600, 3]], 2: [[100, 0], [200, 3]], 3: []}
