from typing import List

nums = [1, 1, 1, 2]


def removeDuplicates(nums: List[int]) -> int:
    i, j = 0, 1
    while i <= j and j < len(nums):
        if nums[i] == nums[j]:
            j += 1
        else:
            nums[i + 1] = nums[j]
            i += 1
    print(nums)
    return i + 1


print(removeDuplicates(nums))
