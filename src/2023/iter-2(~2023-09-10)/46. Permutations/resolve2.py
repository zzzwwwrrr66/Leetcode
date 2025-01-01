def permute(nums):
    check_list = [0] * len(nums)
    path = [0] * len(nums)
    result = []

    def dfs(L):  # L, path 로 result.push(path) 가능할듯?
        if L == 3:
            result.append(path.copy())
        else:
            for i in range(len(nums)):
                if check_list[i] == 0:
                    path[L] = nums[i]
                    check_list[i] = 1

                    dfs(L + 1)

                    check_list[i] = 0  # backtracking

    dfs(0)
    return result


print("check 1", permute([1, 2, 3]))
