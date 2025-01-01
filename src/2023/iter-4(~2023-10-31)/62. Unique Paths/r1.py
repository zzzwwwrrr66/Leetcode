def uniquePaths(m: int, n: int) -> int:
    # 위나 오른쪽만 이동가능한것들은 dp 에 "1" 입력
    dp = [[1 if i == 0 or j == 0 else 0 for j in range(n)] for i in range(m)]

    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

    return dp[-1][-1]


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
