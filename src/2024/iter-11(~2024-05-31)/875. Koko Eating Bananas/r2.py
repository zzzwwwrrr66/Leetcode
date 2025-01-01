from typing import List
import math


def minEatingSpeed(piles: List[int], h: int) -> int:
    l, r = 1, max(piles)
    res = r

    while l <= r:
        k = (l + r) // 2

        totalTime = 0
        for p in piles:
            totalTime += math.ceil(float(p) / k)

        if totalTime <= h:
            res = k
            r = k - 1
        else:
            l = k + 1

    print(res)
    return res


minEatingSpeed([3, 6, 7, 11], 8)
minEatingSpeed([30, 11, 23, 4, 20], 5)
minEatingSpeed([30, 11, 23, 4, 20], 6)
