from typing import List
import copy


# 2차원 배열 90 도 회전

# Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
# Output: [[7,4,1],[8,5,2],[9,6,3]]


def rotate(matrix: List[List[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    matrix.reverse()

    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):  # Note: Starting from `i+1` to avoid redundant swaps
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]


print(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


# https://leetcode.com/problems/rotate-image
