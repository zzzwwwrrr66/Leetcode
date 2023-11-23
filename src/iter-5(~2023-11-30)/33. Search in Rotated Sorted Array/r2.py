# 정렬되있지만 중도에서 정렬이 끝났으므로 index의 기준을 정해야한다 => 가장 작은 index로
# 인덱스의 찾을 범위를 구하기 위해 minNumIdx 기준으로 low, high 의 범위를 정한다
# 원래의 바이너리서치 while(low <= high) 로 target을 찾는다


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

    # 가장작은 숫자인덱스를 구했으므로 시작점을 계산
    minNumIdx = lo
    lo, hi = 0, n - 1
    if target >= A[minNumIdx] and target <= A[hi]:
        lo = minNumIdx
    else:
        hi = minNumIdx

    # The usual binary search and accounting for rotation.
    while lo <= hi:
        mid = (lo + hi) // 2
        # realMid = (mid + minNumIdx) % n  # 나머지를 구하는이유..?
        if A[mid] == target:
            return mid
        if A[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1


print(search([4, 5, 6, 7, 0, 1, 2], 0))
print(search([4, 5, 6, 7, 0, 1, 2], 3))
print(search([1], 0))
