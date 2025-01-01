candidates = [2, 3, 6, 7]
target = 7


def combinationSum(candidates: list[int], target: int) -> list[list[int]]:
    result = []

    def DFS(c_sum, index, path):
        if c_sum < 0:
            return
        if c_sum == 0:
            result.append(path)
            return

        for i in range(index, len(candidates)):
            DFS(c_sum - candidates[i], i, path + [candidates[i]])

    DFS(target, 0, [])

    return result


print(combinationSum(candidates, target))
