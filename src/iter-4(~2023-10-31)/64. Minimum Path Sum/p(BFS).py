from typing import List
from collections import deque

"""
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
"""
"""
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
"""


# dp minimum sum
# 왼쪽 위
# visited, grid 에 직접 설정후/ 정답 : grid[m - 1][n - 1]
def minPathSum(grid: List[List[int]]) -> int:
    m, n = len(grid), len(grid[0])
    visited = [[False for j in range(n)] for i in range(m)]
    direction = [(1, 0), (0, 1)]
    Q = deque()
    Q.append([0, 0])

    while Q:
        x, y = Q.popleft()

        # 종료 조건
        if x < 0 or y < 0 or x > m - 1 or y > n - 1:
            continue
        if visited[x][y]:
            continue

        # 실행
        visited[x][y] = True
        left = 999
        up = 999
        if x - 1 >= 0 and x - 1 <= m - 1:
            up = grid[x][y] + grid[x - 1][y]
        if y - 1 >= 0 and y - 1 <= n - 1:
            left = grid[x][y] + grid[x][y - 1]

        if x == 0 and y == 0:
            grid[x][y] = grid[x][y]
        else:
            grid[x][y] = min(left, up)

        # 재귀
        for nx, ny in direction:
            Q.append([x + nx, y + ny])

    return grid[m - 1][n - 1]


print(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
print(minPathSum([[1, 2, 3], [4, 5, 6]]))

# https://leetcode.com/problems/minimum-path-sum/
