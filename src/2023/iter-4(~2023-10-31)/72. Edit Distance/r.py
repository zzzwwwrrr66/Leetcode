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
"""
확인하기 
모든 단어 관련 dp에 대해 하향식을 생각해내는 것이 훨씬 더 직관적이고 간단(재귀)
그림으로 그려보기   
https://leetcode.com/problems/edit-distance/editorial/?envType=featured-list&envId=top-100-liked-questions%3FenvType%3Dfeatured-list&envId=top-100-liked-questions
"""


def minDistance(word1, word2, cache={}):
    if not word1 and not word2:
        return 0
    if not len(word1) or not len(word2):
        return len(word1) or len(word2)
    if word1[0] == word2[0]:
        return minDistance(word1[1:], word2[1:])
    if (word1, word2) not in cache:
        inserted = 1 + minDistance(word1, word2[1:])
        deleted = 1 + minDistance(word1[1:], word2)
        replaced = 1 + minDistance(word1[1:], word2[1:])
        cache[(word1, word2)] = min(inserted, deleted, replaced)
    return cache[(word1, word2)]


print(
    minDistance(
        "horse",
        "ros",
    )
)
