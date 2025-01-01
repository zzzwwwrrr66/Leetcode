from typing import List

# 내가 다시풀어보기 hash visited, recursion 으로


def wordBreak(s: str, wordDict: List[str]) -> bool:
    def deleteString(findWord, wordDict, memo={}):
        if not len(findWord):
            return True
        if findWord in memo and not memo[findWord]:
            return False

        for word in wordDict:
            if findWord.startswith(word):
                newWord = findWord[len(word) :]
                if deleteString(newWord, wordDict):
                    return True

        memo[findWord] = False
        return False

    result = deleteString(s, wordDict)
    return result

    # return True if len(s) == 0 else False


# print(wordBreak("leetcode", ["leet", "code"]))
# print(wordBreak("applepenapple", ["apple", "pen"]))
print(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
# print(wordBreak("catskicatcats", ["cats", "cat", "dog", "ski"]))
