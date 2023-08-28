from itertools import combinations


def twoSum(nums, target):
    result = []
    combination = list(combinations(range(len(nums)), 2))
    for item in combination:
        if nums[item[0]] + nums[item[1]] == target:
            result.append(item[0])
            result.append(item[1])

    return result


print(twoSum([3, 2, 3], 6))
