from collections import deque


def isSymmetric(root):
    q = deque(root)
    depth = 0
    depth_dict = dict()
    result = True

    while q:
        depth += 1
        depth_dict[depth] = [[], []]
        for _ in range(len(q)):
            parent_node = q.popleft()
            if parent_node.left:
                q.append(parent_node.left)
                depth_dict[depth][0].append(parent_node.left.val)
            else:
                depth_dict[depth][0].append(None)
            if parent_node.right:
                q.append(parent_node.right)
                depth_dict[depth][1].append(parent_node.right.val)
            else:
                depth_dict[depth][1].append(None)

        depth_dict[depth][0].reverse()
        if depth_dict[depth][0] != depth_dict[depth][1]:
            result = False
            break
    return result


[12].reverse()
isSymmetric([1, 2, 2, 3, 4, 4, 3])
