from collections import defaultdict
from typing import List


class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list)
        # u -> node number, v -> target node, w -> time took
        for u, v, w in times:
            adj[u].append((v, w))

        print(adj)

        dist = {node: float("inf") for node in range(1, n + 1)}
        print(dist)

        def dfs(node, time):
            if time >= dist[node]:
                return

            dist[node] = time
            for nei, w in adj[node]:
                dfs(nei, time + w)

        dfs(k, 0)
        res = max(dist.values())
        return res if res < float("inf") else -1


s = Solution()
# s.networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)
# s.networkDelayTime([[1, 2, 1]], 2, 1)
s.networkDelayTime([[1, 2, 1]], 2, 2)


{1: [], 2: [[1, 1], [1, 3]], 3: [[1, 4]], 4: []}
{1: [], 2: [False, False], 3: [False], 4: []}
