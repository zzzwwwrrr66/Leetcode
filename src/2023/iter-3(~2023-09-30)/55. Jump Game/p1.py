from typing import List
from collections import deque


def canJump(nums: List[int]) -> bool:
    position = 0
    for i in range(len(nums)):
        sumIndex = nums[i] + i
        if sumIndex >= position:  # 전의 숫자보다 나아갈수없으면 position 그대로 저장
            position = sumIndex
        if i == position:  # 전 단계 까지 왔는데
            break

    if position >= len(nums) - 1:
        return True
    return False


print(canJump([3, 2, 1, 0, 4]))
print(canJump([2, 3, 1, 1, 4]))
