from itertools import combinations

"""
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
"""


class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        result = []

        def dfs(index, path):
            if path in result:
                return

            result.append(path)

            for i in range(index, len(nums)):
                dfs(i + 1, path + [nums[i]])

        dfs(0, [])
        return result


solution = Solution()
print(solution.subsets([1, 2, 3]))


for i in range(3, 3):
    print(i)
