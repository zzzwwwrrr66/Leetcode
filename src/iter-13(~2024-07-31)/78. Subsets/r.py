import typing


def subsets(nums: typing.List[int]) -> typing.List[typing.List[int]]:
    result = []

    def dfs(index, path):
        if path in result:
            return

        result.append(path)

        for i in range(index, len(nums)):
            dfs(i + 1, path + [nums[i]])

    dfs(0, [])
    return result


subsets([1, 2, 3])
subsets([0])
