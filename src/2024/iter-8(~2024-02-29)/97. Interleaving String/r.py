def isInterleave(s1: str, s2: str, s3: str) -> bool:
    m, n, l = len(s1), len(s2), len(s3)
    if m + n != l:
        return False

    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True

    # s1
    for i in range(1, m + 1):
        dp[i][0] = dp[i - 1][0] and s1[i - 1] == s3[i - 1]

    # s2
    for j in range(1, n + 1):
        dp[0][j] = dp[0][j - 1] and s2[j - 1] == s3[j - 1]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            dp[i][j] = (dp[i - 1][j] and s1[i - 1] == s3[i + j - 1]) or (
                dp[i][j - 1] and s2[j - 1] == s3[i + j - 1]
            )
    print(dp)
    return dp[m][n]


isInterleave("aabcc", "dbbca", "aadbbcbcac")


"""
2개의 string 비교는 matrix dp 가 제일 좋은듯
aadbbcbcac

[             d     b      b       c     a
    [True, False, False, False, False, False], 
  a [True, False, False, False, False, False],
  a [True,  True,  True,  True,  True, False],  
  b [False, True,  True, False,  True, False], 
  c [False, False, True,  True,  True,  True], 
  c [False, False, False, True,  False,  True]
  ]
"""
