from typing import List


def longestConsecutive(nums: List[int]) -> int:
    if len(nums) == 0:
        return 0
    if len(nums) == 1:
        return 1

    max_num = 0
    nums_set = set(nums)
    for num in nums_set:
        if num - 1 not in nums_set:
            curr_max_num = 1
            while (num + curr_max_num) in nums_set:
                curr_max_num += 1
            max_num = max(max_num, curr_max_num)

    print(max_num)


# longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
# longestConsecutive([100, 4, 200, 1, 3, 2])
# longestConsecutive([0, -1])
longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])
