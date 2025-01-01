from typing import List

nums = [1, 1, 2]


def removeDuplicates(nums: List[int]) -> int:
    a = nums.copy()
    result = list(set(a))
    return len(result)


print(removeDuplicates(nums))
