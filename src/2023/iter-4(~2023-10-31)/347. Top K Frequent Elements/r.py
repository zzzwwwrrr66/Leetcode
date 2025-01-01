from typing import List

"""
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

"""
from collections import defaultdict


# hash map
def topKFrequent(nums: List[int], k: int) -> List[int]:
    defDict = defaultdict(int)
    for number in nums:
        defDict[number] += 1
    return sorted(defDict, key=defDict.get, reverse=True)[:k]


print(topKFrequent([1, 1, 1, 2, 2, 3], 2))
