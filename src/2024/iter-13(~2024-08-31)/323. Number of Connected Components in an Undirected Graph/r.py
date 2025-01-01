import typing


class UnionFind:
    def __init__(self):
        self.f = {}

    def findParent(self, currNode):
        child = self.f.get(currNode, currNode)
        if currNode != child:
            child = self.f[currNode] = self.findParent(child)
        return child

    def union(self, x, y):
        parent = self.findParent(x)
        child = self.findParent(y)
        self.f[parent] = child


class Solution:
    def countComponents(self, n: int, edges: typing.List[typing.List[int]]) -> int:
        dsu = UnionFind()
        for a, b in edges:
            dsu.union(a, b)
        print(dsu.f)
        res = set()
        for x in range(n):
            parent = dsu.findParent(x)
            res.add(parent)
        return len(res)


main = Solution()
print(
    main.countComponents(5, [[0, 1], [1, 2], [3, 4]]),
    # main.countComponents(
    #     5,
    #     [
    #         [0, 1],
    #         [1, 2],
    #         [2, 3],
    #         [3, 4],
    #     ],
    # ),
)
