def twoSum(nums: list[int], target: int) -> list[int]:
    dict = {}
    for i, n in enumerate(nums):
        if n in dict:
            return dict[n], i
        else:
            dict[target - n] = i


print(print(twoSum([3, 2, 4], 6)))
