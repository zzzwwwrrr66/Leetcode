from collections import deque

"""
1. 왼쪽의 node는 root node 보다 작다
2. right node 는 root node 보다 크다 
3. 하위의 node tree도 1,2 의 방식을 따른다
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def isValidBST(root) -> bool:
    q = deque([root])
    q.popleft()
    pass
