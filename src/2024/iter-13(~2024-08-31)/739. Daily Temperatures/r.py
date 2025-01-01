from typing import List


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = []  # pair: [temp, index]

        for i, t in enumerate(temperatures):
            # lastStackT = stack[-1][0]
            while stack and t > stack[-1][0]:
                stackT, stackIdx = stack.pop()
                res[stackIdx] = i - stackIdx
            stack.append((t, i))

        print("res", res)
        return res


s = Solution()
s.dailyTemperatures([73, 74, 80, 71, 69, 72, 76, 73])
