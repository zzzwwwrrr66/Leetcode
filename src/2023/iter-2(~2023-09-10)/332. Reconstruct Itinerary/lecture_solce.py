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

import collections


def findItinerary(tickets):
    graph = collections.defaultdict(list)

    for a, b in sorted(tickets):
        graph[a].append[b]

    print(graph)
    # return result


findItinerary(tickets)
# print(
#     solution.findItinerary(
#         [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
#     ),
#     solution.findItinerary(
#         [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
#     ),
#     solution.findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]),
# )
