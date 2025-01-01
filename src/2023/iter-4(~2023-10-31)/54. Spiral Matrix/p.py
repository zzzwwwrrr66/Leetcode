"""
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

"""
from typing import List


def spiralOrder(matrix: List[List[int]]) -> List[int]:
    result = []
    row_s, row_e = 0, len(matrix) - 1
    col_s, col_e = 0, len(matrix[0]) - 1

    while row_s <= row_e and col_s <= col_e:
        for i in range(col_s, col_e + 1):  # right
            result.append(matrix[row_s][i])
        row_s += 1

        for i in range(row_s, row_e + 1):  # down
            result.append(matrix[i][col_e])
        col_e -= 1

        if row_s <= row_e:  # left
            for i in range(col_e, col_s - 1, -1):
                result.append(matrix[row_e][i])
            row_e -= 1
        if col_s <= col_e:  # up
            for i in range(row_e, row_s - 1, -1):
                result.append(matrix[i][col_s])
            col_s += 1
    return result


spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# https://leetcode.com/problems/spiral-matrix/
