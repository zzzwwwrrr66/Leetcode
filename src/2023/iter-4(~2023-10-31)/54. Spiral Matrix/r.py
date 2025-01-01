from typing import List


# row => i 가로열 , col => j 세로행
def spiralOrder(matrix: List[List[int]]) -> List[int]:
    res = []
    if len(matrix) == 0:
        return res
    row_begin = 0
    col_begin = 0
    row_end = len(matrix) - 1
    col_end = len(matrix[0]) - 1

    # row, col 이 max index보다 작거나 같을때 까지
    # 4방향 오른쪽 -> 아래 -> 왼쪽 -> 위로 -> 오른쪽 repeat 계산
    while row_begin <= row_end and col_begin <= col_end:
        for i in range(col_begin, col_end + 1):
            res.append(matrix[row_begin][i])
        row_begin += 1
        for i in range(row_begin, row_end + 1):
            res.append(matrix[i][col_end])
        col_end -= 1
        if row_begin <= row_end:
            for i in range(col_end, col_begin - 1, -1):
                res.append(matrix[row_end][i])
            row_end -= 1
        if col_begin <= col_end:
            for i in range(row_end, row_begin - 1, -1):
                res.append(matrix[i][col_begin])
            col_begin += 1
    return res


spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
