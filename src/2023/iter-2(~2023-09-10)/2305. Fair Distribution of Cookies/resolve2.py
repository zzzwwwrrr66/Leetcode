from typing import List


def distributeCookies(cookies: List[int], k: int) -> int:
    graph = [0] * k
    best = float("inf")

    def dfs(index, zero_count):
        nonlocal best

        # cookie.length - index 가 zero_count보다 작으면
        if len(cookies) - index < zero_count:
            return

        # After distributing all cookies, return the unfairness of this
        # distribution.
        if index == len(cookies):
            max_cookies = max(*graph)
            best = min(best, max_cookies)
            return

        # Try to distribute the i-th cookie to each child, and update answer
        # as the minimum unfairness in these distributions.
        for i in range(k):
            zero_count -= int(graph[i] == 0)
            graph[i] += cookies[index]

            # Recursively distribute the next cookie.
            dfs(index + 1, zero_count)

            graph[i] -= cookies[index]
            zero_count += int(graph[i] == 0)

    dfs(0, k)
    return best


print(distributeCookies([8, 15, 10, 20, 8], 2))
