from typing import List


def longestConsecutive(nums: List[int]) -> int:
    longest = 0
    num_set = set(nums)

    for n in num_set:
        if (n - 1) not in num_set:
            length = 1
            while (n + length) in num_set:
                length += 1
            longest = max(longest, length)

    return longest


# longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
# longestConsecutive([100, 4, 200, 1, 3, 2])
longestConsecutive([1, 2, 0, 1])
