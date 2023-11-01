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


def minDistance(word1: str, word2: str) -> int:
    """Dynamic programming solution"""
    m = len(word1)
    n = len(word2)
    table = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m + 1):
        table[i][0] = i
    for j in range(n + 1):
        table[0][j] = j

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                table[i][j] = table[i - 1][j - 1]
            else:
                table[i][j] = 1 + min(
                    table[i - 1][j], table[i][j - 1], table[i - 1][j - 1]
                )
    return table[-1][-1]


print(minDistance("horse", "ros"))
