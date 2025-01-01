from typing import List


def spiralOrder(matrix: List[List[int]]) -> List[int]:
    result = []
    while matrix:
        result += matrix.pop(0)
        matrix = (list(zip(*matrix)))[::-1]
    return result


print(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
