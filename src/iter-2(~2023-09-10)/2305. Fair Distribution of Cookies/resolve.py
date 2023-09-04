from typing import List


def distributeCookies(cookies: List[int], k: int) -> int:
    def dfs(index):
        nonlocal best
        if index == len(cookies):
            best = min(best, max(split))
            return
        # give to a new kid
        if len(split) < k:
            split.append(cookies[index])
            dfs(index + 1)
            split.pop()
        # give to a kid that already has cookies
        for i in range(len(split)):
            if split[i] + cookies[index] < best:
                split[i] += cookies[index]
                dfs(index + 1)
                # backtracking 에서 현재의 쿠키 를 뺀다
                split[i] -= cookies[index]

    split = []
    best = float("inf")
    dfs(0)
    return best


print(distributeCookies([8, 15, 10, 20, 8], 2))
