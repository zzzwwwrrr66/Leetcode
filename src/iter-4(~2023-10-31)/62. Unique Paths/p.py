def uniquePaths(m: int, n: int) -> int:
    directions = [(1, 0), (0, 1)]
    visited = [[False for j in range(n)] for i in range(m)]
    cnt = 0

    def DFS(row: int, col: int):
        if row < -1 or col < -1 or row > m - 1 or col > n - 1:
            return
        if visited[row][col]:
            return
        if row == m - 1 and col == n - 1:
            nonlocal cnt
            cnt += 1
            return

        visited[row][col] = True

        for x, y in directions:
            nx = x + row
            ny = y + col
            DFS(nx, ny)
            visited[row][col] = False

    DFS(0, 0)
    return cnt


print(uniquePaths(23, 12))
# how to solve => dfs, bfs
# from [0][0] move to grid[m - 1][n - 1]
# only move either down or right
# 가능한 루트 전부 return count
"""
1.
# Input: m = 3, n = 7
# Output: 28

2.
# Input: m = 3, n = 2
# Output: 3
"""


# https://leetcode.com/problems/unique-paths/?envType=featured-list&envId=top-100-liked-questions?envType=featured-list&envId=top-100-liked-questions
