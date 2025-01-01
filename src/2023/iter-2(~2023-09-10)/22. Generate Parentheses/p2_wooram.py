from typing import List
from collections import deque


def generateParenthesis(n: int) -> List[str]:
    result = []
    q = deque()
    q.append([0, 0, ""])

    while q:
        left, right, s = q.popleft()

        if len(s) == n * 2:
            result.append(s)
        if left < n:
            q.append([left + 1, right, s + "("])
        if right < left:
            q.append([left, right + 1, s + ")"])
    return result


print(generateParenthesis(3))
