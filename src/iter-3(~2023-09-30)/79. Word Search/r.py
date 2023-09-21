from typing import List
from collections import Counter
from collections import defaultdict


def exist(board: List[List[str]], word: str) -> bool:
    # dict를 작성: 단어의 수만큼 카운터
    boardDic = defaultdict(int)
    for i in range(len(board)):
        for j in range(len(board[0])):
            boardDic[board[i][j]] += 1

    # 예외 처리 : 단어가 없을때, 단어가 수만큼 존재하지 않을때
    wordDic = Counter(word)
    for c in wordDic:
        if c not in boardDic or boardDic[c] < wordDic[c]:
            return False

    # 재귀실행: 단어의 첫번째와(word[0]) board[i][j] 같을때
    for i in range(len(board)):
        for j in range(len(board[0])):
            if board[i][j] == word[0]:
                if dfs(i, j, 0, board, word):
                    return True

    return False


def dfs(i, j, k, board, word):
    if (
        i < 0
        or j < 0
        or i >= len(board)
        or j >= len(board[0])
        or k >= len(word)
        or word[k] != board[i][j]
    ):
        return False

    # k 가 끝까지 다왔을때(단어가 다 연결됬다는 뜻임) return True
    if k == len(word) - 1:
        return True

    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]  # 아래, 위, 오른쪽, 왼쪽

    for x, y in directions:
        # Since we can't use the same letter twice, I'm changing current board[i][j] to -1 before traversing further
        tmp = board[i][j]
        # 갔던길을 우선 -1 로 변경
        board[i][j] = -1

        # If dfs returns True then return True so there will be no further dfs
        if dfs(i + x, j + y, k + 1, board, word):
            return True
        # 백트래킹: 저장했던 tmp 단어를 다시저장 => -1 덮어씌우기
        board[i][j] = tmp


board = [["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]]
word = "ABCESEEEFS"

print(exist(board, word))
