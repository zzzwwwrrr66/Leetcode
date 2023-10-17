from typing import List


def wordBreak(s: str, wordDict: List[str]) -> bool:
    def construct(current, wordDict, memo={}):
        if current in memo:
            return memo[current]

        if not current:
            return True

        for word in wordDict:
            if current.startswith(word):
                new_current = current[len(word) :]
                if construct(new_current, wordDict, memo):
                    return True

        # 다 지우고 남은 단어를 memo 해서 저장
        memo[current] = False
        return False

    return construct(s, wordDict)


# print(wordBreak("leetcode", ["leet", "code"]))
# print(wordBreak("applepenapple", ["apple", "pen"]))
# print(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
print(wordBreak("cars", ["car", "ca", "rs"]))
