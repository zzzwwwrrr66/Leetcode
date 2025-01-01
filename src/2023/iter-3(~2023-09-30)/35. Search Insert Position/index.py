from typing import List

# Example 1:
# Input: nums = [1,3,5,6], target = 5
# Output: 2

# Example 2:
# Input: nums = [1,3,5,6], target = 2
# Output: 1

# Example 3:
# Input: nums = [1,3,5,6], target = 7
# Output: 4


def searchInsert(nums: List[int], target: int) -> int:
    if target in nums:
        return nums.index(target)
    nums.append(target)
    nums.sort()
    return nums.index(target)


print(searchInsert([1, 3], 2))

# 다른 방법도 찾아 보기


print()
