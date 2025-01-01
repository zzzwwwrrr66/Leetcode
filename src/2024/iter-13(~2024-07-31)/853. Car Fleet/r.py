import typing


def carFleet(target: int, position: typing.List[int], speed: typing.List[int]) -> int:
    if len(position) == 0:
        return 0
    if len(position) == 1:
        return 1

    pair = [(p, s) for p, s in zip(position, speed)]
    pair.sort(reverse=True)  # one line 이어서 그뒤로는 같이 가야한다 못간다
    stack = []
    for p, s in pair:  # Reverse Sorted Order
        stack.append((target - p) / s)  # 현재포지션에서 스피드로 걸리는 시간
        if (
            len(stack) >= 2 and stack[-1] <= stack[-2]
        ):  # 마지막것이 시간이 더 걸리면 pop 하지 않는다
            stack.pop()
    return len(stack)


carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])
