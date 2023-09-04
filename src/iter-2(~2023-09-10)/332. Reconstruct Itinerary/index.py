"""
Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
"""


"""
JFK 부터 시작
목적지가 두개일때는 사전순의 곳을 먼저 감
visited 를 목적지의 수만큼 플러스하고, 방문할때마다 마이너스, 0 이면 못감
DFS()
BFS queue 로도 가능 할듯?
"""


tickets = [
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
]


class Solution:
    def findItinerary(self, tickets: list[list[str]]) -> list[str]:
        result = []
        start = "JFK"

        eta_dict = dict()
        for ticket in sorted(tickets, reverse=True):
            if ticket[0] not in eta_dict.keys():
                eta_dict[ticket[0]] = list()
            eta_dict[ticket[0]].append(ticket[1])
            eta_dict[ticket[0]] = sorted(
                eta_dict[ticket[0]], key=lambda x: x[0], reverse=True
            )

        def DFS(key):
            if key not in eta_dict:
                return
            if not eta_dict[key]:
                return

            x = eta_dict[key].pop()
            result.append(x)
            DFS(x)

        result.append(start)
        DFS(start)

        return result


solution = Solution()
print(
    solution.findItinerary(
        [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
    ),
    solution.findItinerary(
        [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
    ),
    solution.findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]),
)
