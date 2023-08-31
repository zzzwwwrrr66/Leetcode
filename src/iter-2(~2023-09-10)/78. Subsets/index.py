# way to use itertools

from itertools import combinations


class Solution:
    def subsets(self, nums):
        result = [[]]
        for i in range(1, len(nums) + 1):
            print(i)
            for itemList in map(list, combinations(nums, i)):
                result.append(itemList)
        return result


solution = Solution()
print(solution.subsets([1, 2, 3]))
