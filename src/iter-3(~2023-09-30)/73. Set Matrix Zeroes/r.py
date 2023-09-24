from typing import List
import copy


def setZeroes(matrix: List[List[int]]) -> None:
    # input validation
    if not matrix:
        return []

    m = len(matrix)
    n = len(matrix[0])

    zeroes_row = [False] * m
    zeroes_col = [False] * n
    for row in range(m):
        for col in range(n):
            if matrix[row][col] == 0:
                zeroes_row[row] = True
                zeroes_col[col] = True

    for row in range(m):
        for col in range(n):
            if zeroes_row[row] or zeroes_col[col]:
                matrix[row][col] = 0

    print(matrix)


setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
