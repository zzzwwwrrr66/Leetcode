from typing import List


def rob(nums: List[int]) -> int:
    house_1 = 0
    house_2 = 0
    house_3 = 0
    for num in reversed(nums):
        temp = house_1
        house_1 = max(num + house_2, num + house_3)
        house_3 = house_2
        house_2 = temp

    return max(house_1, house_2)


print(rob([2, 7, 9, 3, 1]))
