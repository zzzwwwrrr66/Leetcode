# https://leetcode.com/problems/product-of-array-except-self/
from typing import List
from functools import reduce

"""
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
"""
# nums[i]가 각각 곱한수가 모두 같게 한다 -> 모든수를 다 곱해서 멕스 숫자 구하고 미드 해놓고 바이너리 서치?
def productExceptSelf(nums: List[int]) -> List[int]:
  n = len(nums)
  result = [0] * n
  forwardNum = 1
  for i in range(0, n):
    result[i] = forwardNum
    forwardNum = nums[i] * forwardNum

  backwardNum = 1
  for i in reversed(range(n)):
    result[i] = backwardNum * result[i]
    backwardNum = nums[i] * backwardNum
  print(result)



# productExceptSelf([1,2,3,4])
productExceptSelf([4,5,1,8,2])