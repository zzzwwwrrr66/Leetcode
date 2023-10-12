from typing import List
import bisect


def searchRange(nums: List[int], target: int) -> List[int]:
    def search(x):
        lo, hi = 0, len(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] < x:
                lo = mid + 1
            else:
                hi = mid
        return lo

    lo = search(target)
    hi = search(target + 1) - 1
    print(lo, hi)

    if lo <= hi:
        return [lo, hi]

    return [-1, -1]


print(searchRange([5, 7, 7, 8, 8, 10], 8))

# Input: nums = [5,7,7,8,8,10], target = 8
# Output: [3,4]

# https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
