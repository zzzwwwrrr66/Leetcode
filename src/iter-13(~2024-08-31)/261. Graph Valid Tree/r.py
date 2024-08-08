def validTree(n, edges):
    """
    @param n: An integer
    @param edges: a list of undirected edges
    @return: true if it's a valid tree, or false
    """
    if not n:
        return True
    nodesMap = {i: [] for i in range(n)}
    for n1, n2 in edges:
        nodesMap[n1].append(n2)
        nodesMap[n2].append(n1)

    visit = set()

    def dfs(currNode, prevNode):
        if currNode in visit:
            return False

        visit.add(currNode)
        nextNodes = nodesMap[currNode]
        for nextNode in nextNodes:
            if nextNode == prevNode:
                continue
            if not dfs(nextNode, currNode):
                return False
        return True

    return dfs(0, -1) and n == len(visit)


# validTree(
#     5,
#     [
#         [0, 1],
#         [0, 2],
#         [0, 3],
#         [1, 4],
#     ],
# )
validTree(
    5,
    [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]],
)
