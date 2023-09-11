from typing import List

nums = [1, 1, 2]


def removeDuplicates(nums: List[int]) -> int:
    i, j, cnt = 0, 1, 1
    while i <= j and j < len(nums):
        if nums[i] == nums[j]:
            j += 1
        else:
            cnt += 1
            i = j
    return cnt


print(removeDuplicates(nums))
