# 39. Combination Sum
# https://leetcode.com/problems/combination-sum/


from itertools import combinations, product, combinations_with_replacement

candidates = [2, 3, 6, 7]
target = 7


def combinationSum(candidates: list[int], target: int) -> list[list[int]]:
    result = []

    def dfs(c_sum, index, path):
        # 조건
        if c_sum < 0:
            return
        if c_sum == 0:
            result.append(path)
            return

        # 실행 (process)
        # 재귀 실행
        for i in range(index, len(candidates)):
            # 중복 조합
            dfs(c_sum - candidates[i], i, path + [candidates[i]])
            # 중복 순열
            # dfs(c_sum - candidates[i], 0, path + [candidates[i]])

    dfs(target, 0, [])
    return result


print(combinationSum(candidates, target))
