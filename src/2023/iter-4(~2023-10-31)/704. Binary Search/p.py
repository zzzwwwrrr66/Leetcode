"""
Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
"""


from typing import List


def search(nums: List[int], target: int) -> int:
    left, right, mid = 0, len(nums) - 1, len(nums) // 2
    if len(nums) == 1:
        return 0 if nums[0] == target else -1

    result = -1
    while left <= right:
        if nums[mid] == target:
            result = mid
            break

        if nums[mid] < target:
            left = mid + 1
        elif nums[mid] > target:
            right = mid - 1
        mid = (left + right) // 2

    return result


# print(search([-1, 0, 3, 5, 9, 12], 9))
# print(search([-1, 0, 3, 5, 9, 12], 2))
# print(search([5], 5))
print(search([2, 5], 2))
