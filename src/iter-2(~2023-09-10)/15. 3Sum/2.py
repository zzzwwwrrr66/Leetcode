# i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
# 조합?


from itertools import combinations
from typing import List


# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]


def threeSum(nums: List[int]) -> List[List[int]]:
    result = set()

    n, p, z = [], [], []

    # spread nums
    for num in nums:
        if num < 0:
            n.append(num)
        elif num > 0:
            p.append(num)
        else:
            z.append(num)

    N, P = set(n), set(p)

    # add for zero
    if len(z) >= 3:
        result.add((0, 0, 0))

    if z:
        for negative_num in N:
            if negative_num * -1 in P:
                result.add((negative_num, 0, negative_num * -1))

    # add for negative
    for i in range(len(n)):
        for j in range(i + 1, len(n)):
            target_num = (n[i] + n[j]) * -1
            if target_num in P:
                result.add(tuple(sorted([n[i], n[j], target_num])))
    # add for positive
    for i in range(len(p)):
        for j in range(i + 1, len(p)):
            target_num = (p[i] + p[j]) * -1
            if target_num in N:
                result.add(tuple(sorted([p[i], p[j], target_num])))

    return result


print(threeSum([-1, 0, 1, 2, -1, -4]))
