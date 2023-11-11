from typing import List

# 빨리 찾는데 의미가 있음??
# 각각의 벨류가 곱했을떄 모두 같은 값이 나오는 벨류들을 구해
def productExceptSelf(nums: List[int]) -> List[int]:
    n = len(nums)
    prefix_product = 1
    postfix_product = 1
    result = [0]*n
    for i in range(n): # [1,4, 20. 20, 160]
        result[i] = prefix_product
        # 다음 인덱스를 위한 곱하기
        prefix_product *= nums[i]
    for i in range(n-1,-1,-1):
        result[i] *= postfix_product
        postfix_product *= nums[i]
    return result

print(
productExceptSelf([4,5,1,8,2])
)
# productExceptSelf([1,2,3,4])