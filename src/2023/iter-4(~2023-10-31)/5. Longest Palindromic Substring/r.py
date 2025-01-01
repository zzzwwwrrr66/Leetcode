"""
Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
"""


# using DP ???
# 2차원 DP
"""
1. 무조건 펠린드롬 스트링이 주어진다? 
2. 펠린드롬인지 확인 하려면 2차원배열 DP 를 작성하고 대각으로 True 를 넣는다
3. 펠린드롬인지 확인할때는 1.s[i] == s[j]  2.j - 1 or dp[i + 1][j - 1] is True 인지 확인한다
"""


def longestPalindrome(s: str) -> str:
    longest_palindrom = ""
    dp = [[0] * len(s) for _ in range(len(s))]
    # filling out the diagonal by 1
    for i in range(len(s)):
        dp[i][i] = True
        longest_palindrom = s[i]

    # filling the dp table
    for i in range(len(s) - 1, -1, -1):
        for j in range(i + 1, len(s)):
            if s[i] == s[j]:  # if the chars mathces
                if j - i == 1 or dp[i + 1][j - 1] is True:
                    dp[i][j] = True
                    if len(longest_palindrom) < len(s[i : j + 1]):
                        longest_palindrom = s[i : j + 1]

    return longest_palindrom


print(longestPalindrome("racecar"))
# https://leetcode.com/problems/longest-palindromic-substring/
