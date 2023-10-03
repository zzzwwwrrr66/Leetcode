# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]
from typing import List
from collections import deque


def moveZeroes(nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    zeros = []
    index = 0
    while index < len(nums):
        if nums[index] == 0:
            zero = nums.pop(index)
            zeros.append(zero)
            continue
        index += 1
    for i in zeros:
        nums.append(i)


moveZeroes([0, 1, 0, 3, 12])

# https://leetcode.com/problems/move-zeroes/
