from typing import List
import copy

"""
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
"""


def setZeroes(matrix: List[List[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    => matrix 에 계속 반영하면됨
    """
    # matrix 바꾸면 0 늘어나니 카피 먼저 진행
    matrixCopy = copy.deepcopy(matrix)

    def dfs(i, j, direction):
        if i < 0 or j < 0 or i >= len(matrix) or j >= len(matrix[0]):
            return

        matrix[i][j] = 0

        for x, y in direction:
            dfs(i + x, j + y, [(x, y)])

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrixCopy[i][j] == 0:
                print("matrixCopy", matrixCopy)
                dfs(i, j, [(1, 0), (-1, 0), (0, 1), (0, -1)])  # 위 아래 오른쪽 왼쪽


setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
