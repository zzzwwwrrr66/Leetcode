# get count : 똑같은 단어를 만들때까지 걸리는 count
# 단어추가, 단어 제거, 단어 자리 바꾸기

"""
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
"""


def minDistance(w1: str, w2: str) -> int:
    def solve(w1, w2, n, m):
        # Base Case if any one of w1 or w2 is empty
        if n == 0 or m == 0:
            return m or n

        elif w1[n - 1] == w2[m - 1]:
            return solve(w1, w2, n - 1, m - 1)

        else:
            return 1 + min(
                solve(w1, w2, n - 1, m - 1),  # Replace
                solve(w1, w2, n - 1, m),  # Delete
                solve(w1, w2, n, m - 1),  # Insert
            )

    return solve(w1, w2, len(w1), len(w2))


print(minDistance("horse", "ros"))
