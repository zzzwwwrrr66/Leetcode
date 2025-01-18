class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)

        # 1. 브루트포스를 먼저생각해내야 햇다
        # 2. state를 Index로 표현하는 방법을 알아야 했다
        # 3. String의 DP는 2차원 배열로 많이 표현하는걸 알아야 했다
        # insert, delete, replace
        def dfs(i, j):
            if i == m:
                return n - j
            if j == n:
                return m - i
            if word1[i] == word2[j]:  # 같을땐 작업안해도 된다 => operation count 0
                return dfs(i + 1, j + 1)

            delete = dfs(i + 1, j)  # (i + 1, j) = delete
            insert = dfs(i, j + 1)  # (i, j + 1) = insert
            replace = dfs(i + 1, j + 1)  # (i + 1, j + 1) -> replace
            res = min(delete, insert, replace)
            return res + 1

        return dfs(0, 0)


s = Solution()
print(s.minDistance("horse", "ros"))
print(s.minDistance("horse", "zxc"))
print(s.minDistance("ac", "ab"))
