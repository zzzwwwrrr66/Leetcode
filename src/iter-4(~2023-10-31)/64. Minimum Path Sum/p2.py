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


# dp
def minPathSum(grid: List[List[int]]) -> int:
    m, n = len(grid), len(grid[0])

    for i in range(m):
        for j in range(n):
            if i == 0 and j == 0:
                continue

            left = float("inf")
            up = float("inf")
            upIdx = (i - 1, j)
            leftIdx = (i, j - 1)
            if upIdx[0] >= 0 and upIdx[0] <= m - 1:
                up = grid[i][j] + grid[upIdx[0]][upIdx[1]]
            if leftIdx[1] >= 0 and leftIdx[1] <= n - 1:
                left = grid[i][j] + grid[leftIdx[0]][leftIdx[1]]

            grid[i][j] = min(left, up)

    return grid[m - 1][n - 1]


print(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
print(minPathSum([[1, 2, 3], [4, 5, 6]]))

# https://leetcode.com/problems/minimum-path-sum/
