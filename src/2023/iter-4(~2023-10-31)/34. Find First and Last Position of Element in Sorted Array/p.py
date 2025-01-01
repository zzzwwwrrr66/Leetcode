from typing import List
import bisect


def searchRange(nums: List[int], target: int) -> List[int]:
    left = bisect.bisect_left(nums, target)
    right = bisect.bisect_right(nums, target)
    if right - left > 0:
        return [left, right - 1]
    else:
        return [-1, -1]


print(searchRange([1], 1))

# Input: nums = [5,7,7,8,8,10], target = 8
# Output: [3,4]

# https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
