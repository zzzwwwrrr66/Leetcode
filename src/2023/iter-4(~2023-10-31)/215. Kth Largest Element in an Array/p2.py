from typing import List
import heapq

"""
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
"""

"""
1. a = 0~k([:k]) 만큼 splice
2. a 를 heapq에 넣고 heapify(작은숫자가 맨앞으로 옴)
3. 나머지 [:k] loop (num)
4. heap[0] 보다 num 이 크면 heapq 에 삽입
5. loop 가 끝나면 k번째 큰수는 heap[0] 에 배치됨 => return heap[0]
"""


# Approach 2/3: Min-Heap
def findKthLargest(nums: List[int], k: int) -> int:
    heap = nums[:k]
    heapq.heapify(heap)

    for num in nums[k:]:
        if num > heap[0]:
            heapq.heappop(heap)
            heapq.heappush(heap, num)

    return heap[0]


print(findKthLargest([3, 2, 1, 5, 6, 4], 3))
# https://leetcode.com/problems/kth-largest-element-in-an-array/
