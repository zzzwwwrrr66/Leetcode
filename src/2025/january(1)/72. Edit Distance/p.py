class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        # convert word1 to word2
        # operations = Insert, Delete, Replace
        # dfs(word, state(insert, delete, replace), cnt)
        ## dp
        ## if word == word2: res = min(res, cnt)
        m = len(word1)
        n = len(word2)
        dp = [[float("inf")] * (n + 1) for i in range(m + 1)]
        print(dp)

        for i in range(m + 1):
            dp[i][n] = m - i
        for j in range(n + 1):
            dp[m][j] = n - j
        print(dp)

        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                print(i, j)
                if word1[i] == word2[j]:
                    dp[i][j] = dp[i + 1][j + 1]
                else:
                    dp[i][j] = min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]) + 1

        return dp[0][0]


s = Solution()
s.minDistance("horse", "ros")
s.minDistance("intention", "execution")

[[0, 1, 1, 5], [0, 1, 1, 4], [0, 0, 1, 3], [0, 0, 1, 2], [0, 0, 0, 1], [3, 2, 1, 0]]


# [
#     [inf, inf, inf, 5],
#     [inf, inf, inf, 4],
#     [inf, inf, inf, 3],
#     [inf, inf, inf, 2],
#     [inf, inf, inf, 1],
#     [3,     2,   1, 0],
# ]
