from typing import List
from collections import deque


def canJump(nums: List[int]) -> bool:
    reach = 0
    for i in range(len(nums)):
        if i > reach or reach >= len(nums) - 1:
            break
        reach = max(reach, i + nums[i])
    return reach >= len(nums) - 1


print(canJump([2, 3, 1, 1, 4]))
