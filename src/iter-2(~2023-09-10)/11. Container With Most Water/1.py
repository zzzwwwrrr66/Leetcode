from typing import List

input = [1, 8, 6, 2, 5, 4, 8, 3, 7]


def maxArea(height: List[int]) -> int:
    maxNum = 0
    S = 0
    E = len(height) - 1

    while S < E:
        maxNum = max(maxNum, (E - S) * min(height[S], height[E]))

        if height[S] < height[E]:
            S += 1
        else:
            E -= 1

    return maxNum


print(maxArea(input), maxArea([1, 1]))
