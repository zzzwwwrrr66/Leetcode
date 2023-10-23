from typing import List


def maxSubArray(nums: List[int]) -> int:
    if len(nums) == 1:
        return nums[0]
    for i in range(1, len(nums)):
        nums[i] = max(nums[i], nums[i - 1] + nums[i])
    return max(nums)


# print(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
# print(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
# (maxSubArray([5, 4, -1, 7, 8]))
