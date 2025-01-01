from typing import List


def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
    # [1,1,4,2,1,1,0,0]

    left, right = 0, 1
    result = [0] * len(temperatures)

    while left < len(temperatures) - 1:
        if right < len(temperatures) - 1 and temperatures[left] >= temperatures[right]:
            right += 1
            continue

        result[left] = right - left if temperatures[left] < temperatures[right] else 0
        left += 1
        right = left + 1

    return result


temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
dailyTemperatures(temperatures)


# https://leetcode.com/problems/daily-temperatures/
