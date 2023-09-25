from collections import deque


def iterative(self, root):
    if not root:
        return True
    Q = deque([(root, -float("inf"), float("inf"))])
    while len(Q):
        node, left, right = Q.popleft()
        if node.val <= left or node.val >= right:
            return False
        if node.left:
            Q.append((node.left, left, node.val))
        if node.right:
            Q.append((node.right, node.val, right))
    return True


def recursive(root):
    def rec(node, left, right):
        if node:
            if node.val <= left or node.val >= right:
                return False
            return rec(node.left, left, node.val) and rec(node.right, node.val, right)
        return True

    return rec(root, -float("inf"), float("inf"))
