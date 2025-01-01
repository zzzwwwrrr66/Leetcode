from typing import List

"""
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

"""


# hash map
def topKFrequent(nums: List[int], k: int) -> List[int]:
    # 0. error pattern
    if len(nums) == 1:
        return nums

    nums_map = dict()  # defaultdict 로 해보기
    # 1. 맵 작성 OR [(value, count), ...()] 작성
    for num in nums:
        if num not in nums_map:
            nums_map[num] = 0
        nums_map[num] = nums_map[num] + 1

    # 2. count 기준 sort
    # 3. result[0:k] => splice 로 return
    return sorted(nums_map, key=nums_map.get, reverse=True)[0:k]


print(topKFrequent([1, 1, 1, 2, 2, 3], 2))
