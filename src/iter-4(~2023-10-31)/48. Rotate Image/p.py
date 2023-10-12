from typing import List
import copy


# 2차원 배열 90 도 회전

# Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
# Output: [[7,4,1],[8,5,2],[9,6,3]]


def rotate(matrix: List[List[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    arr = copy.deepcopy(matrix)

    for i in range(len(matrix)):
        for j in range(len(matrix) - 1, -1, -1):
            curr_i, curr_j = i, (len(matrix) - 1) - j
            change_i, change_j = (len(matrix) - 1) - j, (len(matrix) - 1) - i
            matrix[change_i][change_j] = arr[curr_i][curr_j]

    print(matrix)


print(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))


# https://leetcode.com/problems/rotate-image
