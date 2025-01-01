import typing


def pacificAtlantic(
    heights: typing.List[typing.List[int]],
) -> typing.List[typing.List[int]]:
    ROWS, COLS = len(heights), len(heights[0])
    pacificVisit, atlanticVisit = set(), set()

    def dfs(r, c, visit, prevHeight):
        if (r, c) in visit or r < 0 or c < 0 or r == ROWS or c == COLS:
            return
        currHeight = heights[r][c]
        if currHeight < prevHeight:
            return

        visit.add((r, c))
        dfs(r + 1, c, visit, heights[r][c])
        dfs(r - 1, c, visit, heights[r][c])
        dfs(r, c + 1, visit, heights[r][c])
        dfs(r, c - 1, visit, heights[r][c])

    # 리스트의 주위만 loop (결국은 마지막으로 와야하기 때문)
    for c in range(COLS):
        # 첫번째 row, current col
        dfs(0, c, pacificVisit, heights[0][c])
        # 마지막 row, current col
        dfs(ROWS - 1, c, atlanticVisit, heights[ROWS - 1][c])

    for r in range(ROWS):
        # current row, 첫번째 col
        dfs(r, 0, pacificVisit, heights[r][0])
        # current row, 마지막 col
        dfs(r, COLS - 1, atlanticVisit, heights[r][COLS - 1])

    res = []
    for r in range(ROWS):
        for c in range(COLS):
            if (r, c) in pacificVisit and (r, c) in atlanticVisit:
                res.append([r, c])

    print(pacificVisit, atlanticVisit)
    print("res", res)
    return res


pacificAtlantic(
    [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
    ]
)
