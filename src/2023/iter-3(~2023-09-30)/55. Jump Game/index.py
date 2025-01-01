from typing import List
from collections import deque


def canJump(nums: List[int]) -> bool:
    Q = deque()

    for i in range(nums[0], -1, -1):
        Q.append({"position": 0 + i, "jump": i})

    goal = len(nums) - 1
    result = False

    while Q:
        x = Q.popleft()
        if x["position"] == goal:
            result = True
            break
        if x["position"] > goal:
            continue
        if x["position"] < goal and x["jump"] == 0:
            continue

        for i in range(nums[x["position"]], 0, -1):
            Q.append({"position": i + x["position"], "jump": i})

    return result


# print(canJump([2, 3, 1, 1, 4]))
# print(canJump([3, 2, 1, 0, 4]))
print(canJump([1, 2, 3]))
