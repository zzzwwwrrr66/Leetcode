class Solution:
    def checkValidString(self, s: str) -> bool:

        def dfs(i, open):
            if open < 0:
                return False
            if i == len(s):
                return open == 0

            if s[i] == "(":
                return dfs(i + 1, open + 1)
            elif s[i] == ")":
                return dfs(i + 1, open - 1)
            else:
                res1 = dfs(i + 1, open)
                res2 = dfs(i + 1, open + 1)
                res3 = dfs(i + 1, open - 1)
                return res1 or res2 or res3

        return dfs(0, 0)


s = Solution()
# s.checkValidString(")")
# s.checkValidString("(((((*)))**")
s.checkValidString("((*)")
