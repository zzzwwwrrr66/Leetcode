# i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
# 조합?


from itertools import combinations
from typing import List


# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]
# 시간 초과로 안됨 ;
def threeSum(nums: List[int]) -> List[List[int]]:
    result = set()

    for i in list(combinations(nums, 3)):
        if (i[0]) + (i[1]) + (i[2]) == 0:
            result.add(tuple(sorted((i[0], i[1], i[2]))))

    return result


print(threeSum([-1, 0, 1, 2, -1, -4]))
