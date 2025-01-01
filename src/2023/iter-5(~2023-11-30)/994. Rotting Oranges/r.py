from typing import List
from collections import deque


def orangesRotting(grid: List[List[int]]) -> int:
    # number of rows
    rows = len(grid)
    if rows == 0:  # check if grid is empty
        return -1

    EMPTY, FRESH, ROTTEN = 0, 1, 2
    cols = len(grid[0])
    fresh_cnt = 0
    rotten = deque()

    # for BFS
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == ROTTEN:
                rotten.append((r, c))
            elif grid[r][c] == FRESH:
                fresh_cnt += 1

    # keep track of minutes passed.
    minutes_passed = 0

    while rotten and fresh_cnt > 0:
        # minutes_passed 는 depth 를 표시
        minutes_passed += 1

        for _ in range(len(rotten)):
            x, y = rotten.popleft()

            for dx, dy in [[-1, 0], [0, 1], [1, 0], [0, -1]]:
                nx, ny = x + dx, y + dy
                if nx < 0 or nx == rows or ny < 0 or ny == cols:
                    continue
                if grid[nx][ny] == EMPTY or grid[nx][ny] == ROTTEN:
                    continue

                fresh_cnt -= 1
                grid[nx][ny] = ROTTEN

                rotten.append((nx, ny))
    # fresh_cnt 는 전부 돌았는지 확인하는 작업
    return minutes_passed if fresh_cnt == 0 else -1


print(orangesRotting([[2, 1, 1], [1, 1, 1], [0, 1, 2]]))
