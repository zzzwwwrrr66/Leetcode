from typing import List
import collections


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        FRESH = 1
        ROTTEN = 2
        DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        ROW = len(grid)
        COL = len(grid[0])

        q = collections.deque()
        fresh = 0
        time = 0

        for r in range(ROW):
            for c in range(COL):
                if grid[r][c] == FRESH:
                    fresh += 1
                if grid[r][c] == ROTTEN:
                    q.append((r, c))

        while fresh > 0 and q:
            length = len(q)
            for i in range(length):
                r, c = q.popleft()

                for dr, dc in DIRECTIONS:
                    row, col = r + dr, c + dc
                    # if in bounds and nonrotten, make rotten
                    # and add to q
                    if (
                        row in range(ROW)
                        and col in range(COL)
                        and grid[row][col] == FRESH
                    ):
                        grid[row][col] = ROTTEN
                        q.append((row, col))
                        fresh -= 1

            time += 1
        return time if fresh == 0 else -1


s = Solution()
print(
    s.orangesRotting(
        [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1],
        ]
    ),
    # s.orangesRotting(
    #     [
    #         [2, 1, 1],
    #         [0, 1, 1],
    #         [1, 0, 1],
    #     ]
    # ),
    # s.orangesRotting([[0, 2]]),
    # s.orangesRotting(
    #     [
    #         [2, 1, 1],
    #         [1, 1, 1],
    #         [0, 1, 2],
    #     ]
    # ),
)
