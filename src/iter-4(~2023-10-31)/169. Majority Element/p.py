from collections import Counter
from typing import List


def majorityElement(nums: List[int]) -> int:
    c = Counter(nums)
    return max(c, key=c.get)


print(majorityElement([3, 3, 4]))


a = dict()
a["2"] = 2
print(a.get("2"))
