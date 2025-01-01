def letterCombinations(digits):
    def DFS(index, path):
        # back
        if len(path) == len(digits):
            result.append(path)
            return

        for i in range(index, len(digits)):
            for j in dic[digits[i]]:
                DFS(i + 1, path + j)

    if not digits:
        return []

    result = []
    dic = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    DFS(0, "")

    return result


print(letterCombinations("23"))
