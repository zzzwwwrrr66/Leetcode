from collections import deque


def maxDepth(root):
    if not root:
        return 0

    q = deque(root)  # 3
    depth = 0

    while q:
        depth += 1

        for _ in range(len(q)):
            parent_node = q.popleft()
            if parent_node.left:
                q.append(parent_node.left)
            if parent_node.right:
                q.append(parent_node.right)

    return depth


maxDepth([3, 9, 20, None, None, 15, 7])
