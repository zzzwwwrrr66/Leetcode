from typing import List


def moveZeroes(nums: List[int]) -> None:
    anchor = 0
    for explorer in range(len(nums)):
        if nums[explorer] != 0:
            nums[anchor], nums[explorer] = nums[explorer], nums[anchor]
            anchor += 1


moveZeroes([0, 1, 0, 3, 12])
