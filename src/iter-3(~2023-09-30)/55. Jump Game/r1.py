from typing import List
from collections import deque


def canJump(nums: List[int]) -> bool:
    reachableIndex = 0
    for curr in range(len(nums)):
        if curr + nums[curr] >= reachableIndex:
            reachableIndex = curr + nums[curr]
        if curr == reachableIndex:
            break

    return reachableIndex >= len(nums) - 1


print(canJump([2, 3, 1, 1, 4]))
