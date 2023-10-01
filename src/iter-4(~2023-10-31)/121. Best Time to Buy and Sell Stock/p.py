# Input: prices = [7,1,5,3,6,4]
# Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
# Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
from typing import List
from itertools import combinations

# greedy?
Input = [7, 1, 5, 3, 6, 4]


def maxProfit(prices):
    left = 0  # Buy
    right = 1  # Sell
    max_num = 0
    while right < len(prices):
        if prices[left] < prices[right]:
            currentProfit = prices[right] - prices[left]  # our current Profit
            max_num = max(currentProfit, max_num)
        else:
            left = right
        right += 1
    return max_num


# print(maxProfit([2, 4, 1]))
print(maxProfit(Input))


# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=featured-list&envId=top-100-liked-questions?envType=featured-list&envId=top-100-liked-questions
