# Example 1:
# Input: n = 3
# Output: ["((()))","(()())","(())()","()(())","()()()"]

# Example 2:
# Input: n = 1
# Output: ["()"]
from typing import List
from itertools import combinations, permutations
from collections import deque

"""

"""


def generateParenthesis(n: int) -> List[str]:
    if n == 1:
        return ["()"]

    filterList = []
    result = []
    for _ in range(n):
        filterList.append(0)
        filterList.append(1)

    filterList = set(permutations(filterList, n * 2))
    filterList = list(filter(lambda x: x[0] == 0 and x[len(x) - 1] == 1, filterList))

    bracketDict = {"0": "(", "1": ")"}
    for item in filterList:
        bracketCnt = 0
        bracket = ""
        for i in item:
            if i == 0:
                bracketCnt += 1
                bracket += bracketDict["0"]
            else:
                bracketCnt -= 1
                if bracketCnt < 0:
                    break
                bracket += bracketDict["1"]
        print(bracketCnt)
        if bracketCnt == 0:
            result.append(bracket)

    print(result)


generateParenthesis(3)
