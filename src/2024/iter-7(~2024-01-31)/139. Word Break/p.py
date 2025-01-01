from typing import List


def wordBreak(s: str, wordDict: List[str]) -> bool:
    def deleteString(findWord, wordDict, memo={}):
        # 빠져나가기 조건
        if not len(findWord):
            return True
        if findWord in memo and memo[findWord] is False:
            return False

        # 실행
        for word in wordDict:
            # 재귀 실행조건
            if findWord.startswith(word):
                newWord = findWord[len(word) :]
                # 재귀실행
                if deleteString(newWord, wordDict):
                    return True

        memo[findWord] = False

        return False

    result = deleteString(s, wordDict)
    return result


# 2loop
print(wordBreak("leetcode", ["leet", "code"]))
print(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
