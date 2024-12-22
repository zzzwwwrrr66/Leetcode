from typing import List


class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        x = y = z = False
        for t in triplets:
            x |= t[0] == target[0] and t[1] <= target[1] and t[2] <= target[2]
            y |= t[0] <= target[0] and t[1] == target[1] and t[2] <= target[2]
            z |= t[0] <= target[0] and t[1] <= target[1] and t[2] == target[2]
            if x and y and z:
                return True
        return False


s = Solution()

# s.mergeTriplets([[2, 5, 3]], [2, 7, 5])
# s.mergeTriplets([[2, 7, 5]], [2, 7, 5])
# s.mergeTriplets([[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5])  # True
s.mergeTriplets([[2, 5, 3], [2, 3, 4], [1, 2, 5], [5, 2, 3]], [5, 5, 5])  # True
