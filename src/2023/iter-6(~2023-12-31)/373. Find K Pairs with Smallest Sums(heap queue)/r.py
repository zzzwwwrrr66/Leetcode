from heapq import heappush, heappop
import heapq
from typing import List


# heap Q
def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
    res = []
    from heapq import heappush, heappop

    m, n, visited = len(nums1), len(nums2), set()
    if m == 0 or n == 0:
        return []
    h = [(nums1[0] + nums2[0], (0, 0))]
    for _ in range(min(k, (m * n))):
        val, (i, j) = heappop(h)
        res.append([nums1[i], nums2[j]])
        if i + 1 < m and (i + 1, j) not in visited:
            heappush(h, (nums1[i + 1] + nums2[j], (i + 1, j)))
            visited.add((i + 1, j))
        if j + 1 < n and (i, j + 1) not in visited:
            heappush(h, (nums1[i] + nums2[j + 1], (i, j + 1)))
            visited.add((i, j + 1))
    return res


def kSmallestPairs(nums1, nums2, k):
    resV = []  # Result list to store the pairs
    pq = []  # Priority queue to store pairs with smallest sums, sorted by the sum

    # Push the initial pairs into the priority queue
    for x in nums1:
        heapq.heappush(
            pq, [x + nums2[0], 0]
        )  # The sum and the index of the second element in nums2

    # Pop the k smallest pairs from the priority queue
    while k > 0 and pq:
        pair = heapq.heappop(pq)
        s, pos = (
            pair[0],
            pair[1],
        )  # Get the smallest sum and the index of the second element in nums2

        resV.append([s - nums2[pos], nums2[pos]])  # Add the pair to the result list

        # If there are more elements in nums2, push the next pair into the priority queue
        if pos + 1 < len(nums2):
            curr_num1 = s - nums2[pos]
            heapq.heappush(pq, [curr_num1 + nums2[pos + 1], pos + 1])

        k -= 1  # Decrement k

    return resV  # Return the k smallest pairs


print(kSmallestPairs([1, 7, 11], [2, 4, 6], 4))
# print(kSmallestPairs([1, 1, 2], [1, 2, 3], 2))
# print(kSmallestPairs([1, 2], [3], 3))
