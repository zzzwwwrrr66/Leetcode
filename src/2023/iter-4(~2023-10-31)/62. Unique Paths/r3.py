def uniquePaths(m: int, n: int) -> int:
    # Create a 2D DP table filled with zeros
    dp = [[0] * n for _ in range(m)]

    # Initialize the rightmost column and bottom row to 1
    for i in range(m):
        dp[i][n - 1] = 1
    for j in range(n):
        dp[m - 1][j] = 1

    # Fill in the DP table bottom-up
    for i in range(m - 2, -1, -1):
        for j in range(n - 2, -1, -1):
            dp[i][j] = dp[i + 1][j] + dp[i][j + 1]

    # Return the result stored in the top-left corner
    return dp[0][0]


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
