# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        # first return 1
        # recursion(root)
        # return 3
        result = []
        if not root:
            return []

        def r(root):
            if root.left:
                r(root.left)
            result.append(root.val)  # 실행
            if root.right:
                r(root.right)

        r(root)

        return result


def inorder(root):
    return inorder(root.left) + [root.val] + inorder(root.right) if root else []
