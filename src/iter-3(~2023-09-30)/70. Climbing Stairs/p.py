"""
Input: n = 2
Output: 2

1. n 만큼 dp[] 를 만든다
2. 1 일떄 2 일때 수를 저장한다 dp[1] = 1, dp[2] = 2

"""


def climbStairs(n: int) -> int:
    dp = dict()
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    dp[3] = 3

    if n == 0 or n == 1 or n == 2:
        return dp[n]

    for i in range(3, n + 1):
        dp[i] = dp[i - 2] + dp[i - 1]

    return dp[n]


print(climbStairs(4))
