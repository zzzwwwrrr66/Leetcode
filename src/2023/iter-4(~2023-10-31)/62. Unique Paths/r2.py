def uniquePaths(m: int, n: int) -> int:
    curr_row = [1] * n
    prev_row = [1] * n

    for i in range(1, m):
        for j in range(1, n):
            curr_row[j] = curr_row[j - 1] + prev_row[j]
        curr_row, prev_row = prev_row, curr_row

    return prev_row[-1]


print(uniquePaths(3, 7))
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
