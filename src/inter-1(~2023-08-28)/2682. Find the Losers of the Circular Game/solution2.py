def circularGameLosers(n, k):
    received_ball = set()
    turn = 0
    for i in range(n):  # start가 sset에 없으면
        turn += i
        x = ((turn * k) % n) + 1
        if x in received_ball:
            break
        received_ball.add(x)

    players = set(range(1, n + 1))
    losers = list(players - received_ball)
    return losers


print(circularGameLosers(5, 2))
