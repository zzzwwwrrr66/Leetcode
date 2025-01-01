def circularGameLosers(n, k):
    start = 0
    sset = set()
    p = 1
    while start not in sset:  # start가 sset에 없으면
        sset.add(start)
        start += p * k
        print(start)
        start = start % n
        p += 1
    ans = []
    for i in range(n):
        if i not in sset:
            ans.append(i + 1)
    return ans


circularGameLosers(5, 2)
