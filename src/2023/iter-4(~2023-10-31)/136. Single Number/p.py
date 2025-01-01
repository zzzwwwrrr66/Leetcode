from typing import List
from collections import Counter

input = [2, 2, 1]


def singleNumber(nums: List[int]) -> int:
    d = Counter(nums)

    for key in d:
        if d[key] == 1:
            return key


print(singleNumber([1]))
# https://leetcode.com/problems/single-number/?envType=featured-list&envId=top-100-liked-questions?envType=featured-list&envId=top-100-liked-questions
