class Solution:
    def checkValidString(self, s: str) -> bool:
        n = len(s)
        memo = [[None] * (n + 1) for _ in range(n + 1)]

        def dfs(i, open):
            if open < 0:
                return False
            if i == n:
                return open == 0
            if memo[i][open] is not None:
                return memo[i][open]

            if s[i] == "(":
                result = dfs(i + 1, open + 1)
            elif s[i] == ")":
                result = dfs(i + 1, open - 1)
            else:
                res1 = dfs(i + 1, open)
                res2 = dfs(i + 1, open + 1)
                res3 = dfs(i + 1, open - 1)
                result = res1 or res2 or res3

            memo[i][open] = result
            return result

        print(memo)
        return dfs(0, 0)


s = Solution()
s.checkValidString("(((((*)))**")
s.checkValidString("((*)")
