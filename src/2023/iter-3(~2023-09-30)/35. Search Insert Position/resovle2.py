import bisect
from typing import List


def searchInsert(nums: List[int], target: int) -> int:
    low, high = 0, len(nums)
    while low < high:
        mid = (low + high) // 2
        if nums[mid] < target:
            low = mid + 1
        else:
            high = mid
    return low


print(searchInsert([1, 3], 1))
