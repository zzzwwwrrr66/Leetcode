from typing import List


def generate(numRows: int) -> List[List[int]]:
    graph = list([[1]])
    for i in range(1, numRows):
        graph.append([])
        for j in range(0, i + 1):
            graph[i].append(1)
            if j - 1 < 0 or j + 1 >= i + 1:
                continue

            graph[i][j] = graph[i - 1][j - 1] + graph[i - 1][j]

    return graph


generate(5)

# todo: see the another resolve
# https://leetcode.com/problems/pascals-triangle/solutions/?envType=featured-list&envId=top-100-liked-questions?envType=featured-list&envId=top-100-liked-questions
