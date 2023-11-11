# https://leetcode.com/problems/rotting-oranges/
# 다시해보기 (아이패드 메모 참고 가능)

from typing import List
import itertools

# 4 방향
# DFS or BFS

# start 0 0
# 처음부터 이미 다 썩거나 비어있으면 0
# 오렌지가 다 썩을수 없으면 -1
# 오렌지가 다썩는 시간


def orangesRotting(grid: List[List[int]]) -> int:
    EMPTY, FRESH, ROTTEN = 0, 1, 2
    if FRESH not in list(itertools.chain(*grid)):
        return 0

    m, n = len(grid), len(grid[0])
    visited = [[False for j in range(n)] for i in range(m)]
    result = []

    def recursion(row, col, cnt):
        if row < 0 or col < 0 or row >= m or col >= n:
            return
        if visited[row][col]:
            return
        if grid[row][col] == EMPTY:
            return
        if visited[row][col] and grid[row][col] == ROTTEN:
            return

        visited[row][col] = True
        if grid[row][col] == FRESH:
            grid[row][col] = ROTTEN

        for x, y in [[-1, 0], [0, 1], [1, 0], [0, -1]]:
            nRow = row + x
            nCol = col + y
            recursion(nRow, nCol, cnt + 1)
            print(cnt)
            result.append(cnt)

    for i in range(0, m):
        for j in range(0, n):
            # if find rotten orange
            if grid[i][j] == ROTTEN:
                recursion(i, j, 0)

    if FRESH in list(itertools.chain(*grid)):
        return -1
    print(grid, result)
    return max(*result)


# print(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]))
# print(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))

# print(orangesRotting([[0, 2]]))
# print(orangesRotting([[1, 2]]))
# print(orangesRotting([[0]]))
# print(orangesRotting([[0, 2, 2]]))
print(orangesRotting([[2, 1, 1], [1, 1, 1], [0, 1, 2]]))
