from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # ith day : 1day 1, 2day 2, 3day 3, 4day 0, 5th day 2
        # 가격이 가장 높을때 cooldown
        # 가격이 낮을때 buy
        dp = {}

        # 풀수있는 방법 찾기(dp, dfs)
        # State -> buy or sell
        def dfs(i, buying):
            # basic pattern and error 찾기
            if i >= len(prices):
                return 0
            if (i, buying) in dp:
                return dp[(i, buying)]

            cooldown = dfs(i + 1, buying)
            if buying:
                buy = dfs(i + 1, not buying) - prices[i]
                maxVal = max(buy, cooldown)
                dp[(i, buying)] = maxVal
                return maxVal
            else:
                sell = dfs(i + 2, True) + prices[i]
                maxVal = max(sell, cooldown)
                dp[(i, buying)] = maxVal
                return maxVal

        return dfs(0, True)


s = Solution()

print(s.maxProfit([1, 2, 3, 0, 2]))  # 3
# s.maxProfit([1])  # 0
