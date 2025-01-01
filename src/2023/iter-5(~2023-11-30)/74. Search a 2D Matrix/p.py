# https://leetcode.com/problems/search-a-2d-matrix/submissions/

from typing import List

"""
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
"""


def searchMatrix(matrix: List[List[int]], target: int) -> bool:
    left = 0
    right = len(matrix) - 1
    while left <= right:
        mid = (left + right) // 2
        currList = matrix[mid]
        result, tmp = binarySearch(currList, target)
        if result is True:
            return True

        if tmp < target:
            left = mid + 1
        elif tmp > target:
            right = mid - 1

    return False


def binarySearch(arr: List[int], target: int):
    left = 0
    right = len(arr) - 1
    result = False
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            result = True
            break
        if arr[mid] < target:
            left = mid + 1
        if arr[mid] > target:
            right = mid - 1

    return result, arr[mid]


print(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 60))
