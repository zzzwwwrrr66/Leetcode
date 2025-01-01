from typing import List


def merge(intervals: List[List[int]]) -> List[List[int]]:
    intervals = sorted(intervals, key=lambda x: x[0])

    ans = []

    for interval in intervals:
        # 마지막의 answer[-1][1] 와 현재비교의 벨류의 첫번째랑 비교
        if not ans or ans[-1][1] < interval[0]:
            ans.append(interval)
        else:
            ans[-1][1] = max(ans[-1][1], interval[1])  #

    return ans


# merge([[1, 3], [2, 6], [8, 10], [15, 18]])
# merge([[1, 4], [4, 5]])
print(merge([[1, 4], [0, 4]]))
