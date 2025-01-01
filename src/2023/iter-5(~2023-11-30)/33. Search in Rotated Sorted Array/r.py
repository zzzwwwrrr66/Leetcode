def search(A, target):
    n = len(A)
    if not A or n == 0:
        return -1

    lo, hi = 0, n - 1
    # // 가장 작은 value의 index 를 찾는다
    # // Loop will terminate since mid < hi, and lo or hi will shrink by at least 1.
    # // Proof by contradiction that mid < hi: if mid==hi, then lo==hi and loop would have been terminated.
    while lo < hi:  # low < high 의 경우 마지막에는 같아진다
        mid = (lo + hi) // 2
        if A[mid] > A[hi]:
            lo = mid + 1
        else:
            hi = mid
    # lo==hi 는 index중 가장작은 index
    minNumIdx = lo
    lo, hi = 0, n - 1
    # The usual binary search and accounting for rotation.
    while lo <= hi:
        mid = (lo + hi) // 2
        realMid = (mid + minNumIdx) % n  # 나머지를 구하는이유..?
        if A[realMid] == target:
            return realMid
        if A[realMid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1


print(search([4, 5, 6, 7, 0, 1, 2], 0))
print(search([4, 5, 6, 7, 0, 1, 2], 3))
print(search([1], 0))
