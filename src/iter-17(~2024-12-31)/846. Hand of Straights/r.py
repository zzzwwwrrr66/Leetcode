from typing import Counter


class Solution:
    def isNStraightHand(self, hand, groupSize):
        if len(hand) % groupSize:
            return False
        count = Counter(hand)
        hand.sort()
        for num in hand:
            if count[num]:
                for i in range(
                    num, num + groupSize
                ):  # 왜 연속된 숫자 라는게 정해져있지 ?? -> Group은 연속된 숫자여야 한다
                    if not count[i]:
                        return False
                    count[i] -= 1
        return True


s = Solution()
s.isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)  # [1,2,3],[2,3,4],[6,7,8]
