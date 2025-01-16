from typing import List


class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        # base case
        if len(nums) == 0 and nums[0] == target:
            return target

        # dp -> map -> i, total sum = True 개수
        dp = {}

        # func: dfs -> -, + 2개씩 분기?
        ## target 보다 크면 return
        ### i == len(nums) and sum == target: res += 1
        ### 숫자를 리턴 하고 계속 쌓아가는 방식으로 dfs 를 작성
        def dfs(i, sum):
            if i == len(nums) and sum == target:
                return 1
            if i == len(nums):
                return 0
            if (i, sum) in dp:
                return dp[(i, sum)]

            plus = dfs(i + 1, sum + nums[i])
            minus = dfs(i + 1, sum - nums[i])

            dp[(i, sum)] = plus + minus

            return dp[(i, sum)]

        return dfs(0, 0)


s = Solution()
print(s.findTargetSumWays([1, 1, 1, 1, 1], 3))
