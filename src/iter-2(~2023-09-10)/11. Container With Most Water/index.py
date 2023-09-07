from typing import List

input = [1, 8, 6, 2, 5, 4, 8, 3, 7]


def maxArea(height: List[int]) -> int:
    countDict = [0] * len(height)
    S = 0
    E = len(height) - 1
    while S < E:
        if height[S] <= height[E]:
            current_min_index = S
            countDict[current_min_index] = [1, E]
            # S += 1
        else:
            current_min_index = E
            countDict[current_min_index] = [1, S]
            # E += 1
        for i in range(S + 1, E):
            if height[current_min_index] < height[i]:
                continue
            countDict[current_min_index][0] = countDict[current_min_index][0] + 1

        if height[current_min_index] == height[S]:
            S += 1
        else:
            E -= 1

    print(countDict)


maxArea(input)
maxArea([1, 1])
