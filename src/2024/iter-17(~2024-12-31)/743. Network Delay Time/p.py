from typing import List


class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        # node count -> n
        # List -> u, v, w
        # u -> node number, v -> target node, w -> time took
        # from k to all nodes
        # => yes -> minimum time, no -> -1

        # 1. 그래프 정리 {2: {1: 1, 3: 1} }

        disMap = {i + 1: [] for i in range(n)}
        dist = {i + 1: float("inf") for i in range(n)}
        for i, v in enumerate(times):
            nodeNum, targetNode, time = v
            disMap[nodeNum].append([time, targetNode])

        print(disMap, dist)

        def dfs(nodeNum, time):
            if time >= dist[nodeNum]:  # inf 일경우, max 가 아닐경우 -> min 찾기
                return

            dist[nodeNum] = time

            for i, v in enumerate(disMap[nodeNum]):
                dfs(v[1], v[0] + time)

        dfs(k, 0)

        res = max(dist.values())
        return res if res < float("inf") else -1


s = Solution()
s.networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)
# s.networkDelayTime([[1, 2, 1]], 2, 1)
# s.networkDelayTime([[1, 2, 1]], 2, 2)


{1: [], 2: [[1, 1], [1, 3]], 3: [[1, 4]], 4: []}
{1: [], 2: [False, False], 3: [False], 4: []}
