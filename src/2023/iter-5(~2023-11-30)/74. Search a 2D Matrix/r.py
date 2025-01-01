from typing import List


def searchMatrix(matrix: List[List[int]], target: int) -> bool:
    if not matrix:
        return False
    # 2차원
    m, n = len(matrix), len(matrix[0])
    left, right = 0, m * n - 1

    while left <= right:
        mid = (left + right) // 2
        # divmod(찾고싶은 행렬의 번호, 2차원배열안의 수) => divmod 나머지와 몫 구하기
        mid_row, mid_col = divmod(mid, n)

        if matrix[mid_row][mid_col] == target:
            return True
        elif matrix[mid_row][mid_col] < target:
            left = mid + 1
        else:
            right = mid - 1

    return False


print(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 60))
