class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        dp = [[float("inf")] * (len(word2) + 1) for i in range(len(word1) + 1)]

        for j in range(len(word2) + 1):
            dp[len(word1)][j] = len(word2) - j

        for i in range(len(word1) + 1):
            dp[i][len(word2)] = len(word1) - i

        print(dp)

        for i in range(len(word1) - 1, -1, -1):
            for j in range(len(word2) - 1, -1, -1):
                if word1[i] == word2[j]:
                    dp[i][j] = dp[i + 1][j + 1]
                else:
                    delete = dp[i + 1][j]
                    insert = dp[i][j + 1]
                    replace = dp[i + 1][j + 1]
                    dp[i][j] = 1 + min(delete, insert, replace)
        return dp[0][0]


s = Solution()
print(s.minDistance("horse", "ros"))
print(s.minDistance("horse", "zxc"))
print(s.minDistance("ac", "ab"))

[
    [inf, inf, inf, 5],
    [inf, inf, inf, 4],
    [inf, inf, inf, 3],
    [inf, inf, inf, 2],
    [inf, inf, inf, 1],
    [3, 2, 1, 0],
]


# 2개의 values 를 비교할때는 2차원배열???
