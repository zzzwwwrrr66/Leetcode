from typing import List


# 문자열 거꾸로 생각하기 문제
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        n = len(s)
        dp = [False] * (n + 1)
        dp[n] = True
        print("dp", dp)

        for i in range(n - 1, -1, -1):
            for currentWord in wordDict:
                nextIndex = len(currentWord)
                if dp[i]:
                    break
                if (i + nextIndex) <= n and s[i : i + nextIndex] == currentWord:
                    dp[i] = dp[i + nextIndex]

        return dp[0]


s = Solution()
# s.wordBreak("leetcode", ["leet", "code"])
s.wordBreak("applepenapple", ["apple", "pen"])

# 0 1 2 3 4 5 6 7 8 9 10 11 12
# a p p l e p e n a p  p  l  e
# #
