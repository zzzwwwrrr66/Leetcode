from typing import List
import heapq


def kSmallestPairs(nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
    Q = []
    for i, num in enumerate(nums1):
        print(i, num)
        heapq.heappush(Q, [nums2[0] + num, 0])  # nums1[i] + nums2[0], nums1's position

    result = []
    while Q and k > 0:
        x, pos = heapq.heappop(Q)
        currNum1 = x - nums2[pos]
        result.append([currNum1, nums2[pos]])

        if pos + 1 < len(nums2):
            heapq.heappush(Q, [currNum1 + nums2[pos + 1], pos + 1])

        k -= 1
    return result


# print(kSmallestPairs([1, 7, 11], [2, 4, 6], 3))
print(kSmallestPairs([1, 1, 2], [1, 2, 3], 2))
# print(kSmallestPairs([1, 2], [3], 3))


# node, python, SQL
