import bisect
from typing import List


def searchInsert(nums: List[int], target: int) -> int:
    return bisect.bisect_left(nums, target)


print(searchInsert([1, 3], 2))
