from collections import deque


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def diameterOfBinaryTree(root):
    def dfs(node):
        if not node:
            return -1
        left = dfs(node.left)
        right = dfs(node.right)

        longest = max(longest, left + right + 2)
        return max(left, right) + 1
