# get count : 똑같은 단어를 만들때까지 걸리는 count
# 단어추가, 단어 제거, 단어 자리 바꾸기

"""
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
"""


def minDistance(word1: str, word2: str) -> int:
    set_word1 = set(word1)
    set_word2 = set(word2)
    result = 0
    # 1. delete
    set_word1 = set_word1 & set_word2
    print(set_word1)

    # 2. insert
    difference_word = set_word2 - set_word1
    if difference_word:
        for word in difference_word:
            set_word1.add(word)
            result = result + 1

    # word1 += difference_word
    # word1
    # 3. replace
    # print(set_word1, set_word2)
    # for i, v in enumerate(set_word1):
    #     print(v, i)
    #     if v == word2[i]:
    #         continue

    pass


minDistance("horse", "ros")
