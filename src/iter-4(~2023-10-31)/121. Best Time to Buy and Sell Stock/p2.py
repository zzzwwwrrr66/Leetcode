Input = [7, 1, 5, 3, 6, 4]


def maxProfit(prices):
    max_num = 0
    left, right = 0, 1
    while right < len(prices):
        if prices[left] >= prices[right]:
            left = right
        else:
            max_num = max(max_num, prices[right] - prices[left])

        right += 1
    return max_num
