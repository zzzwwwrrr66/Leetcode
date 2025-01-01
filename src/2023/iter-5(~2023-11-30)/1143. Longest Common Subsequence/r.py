# 두 문자열에서 공통되면서 연속으로 가장긴 string count 를 return


def longestCommonSubsequence(text1, text2):
    """
    :type text1: str
    :type text2: str
    :rtype: int
    """
    m = len(text1)
    n = len(text2)
    countDict = [[0] * (n + 1) for i in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                countDict[i][j] = countDict[i - 1][j - 1] + 1
            else:
                # 저장용
                countDict[i][j] = max(countDict[i][j - 1], countDict[i - 1][j])

    return countDict[m][n]


print(longestCommonSubsequence("ezupkr", "ubmrapg"))
