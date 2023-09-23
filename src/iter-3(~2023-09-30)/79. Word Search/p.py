from typing import List
from collections import deque


def exist(board: List[List[str]], word: str) -> bool:
    startWord = word[0]
    dx = (-1, 0, 1, 0)
    dy = (0, 1, 0, -1)

    wordDict = dict()
    for i in range(len(word)):
        if word[i] not in wordDict:
            wordDict[word[i]] = i

    # Q 말고 DFS 재귀 방식으로
    def bfs(idx1, idx2):
        result = False
        visited = [[False] * len(i) for i in board]
        visited[idx1][idx2] = True
        Q = deque([[idx1, idx2]])
        QWord = deque(list(word))
        while Q:
            x, y = Q.popleft()  # 단어의 순서 => x, y, k
            # 먼저 error pattern 처리 or로 (word[k] != board[x][y]: continue)
            QWord.popleft()
            currentWord = board[x][y]
            nextWord = QWord[0]
            if not QWord:
                result = True
                break

            for i in range(4):
                nx = dx[i] + x
                ny = dy[i] + y
                if (
                    nx > -1
                    and ny > -1
                    and nx < len(board)
                    and ny < len(board[0])
                    and not visited[nx][ny]
                    and board[nx][ny] in QWord  # 필요 X
                    and QWord[0] == board[nx][ny]  # 필요 X
                    #
                ):
                    visited[nx][ny] = True
                    Q.append([nx, ny])  # 단어의 순서를 건내줘야함 => nx, ny, nextIndex

        return result

    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] == startWord:
                if bfs(i, j):
                    return True

    return False


board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
word = "ABCCED"
# print(exist(board, word))
# print(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"))
# print(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"))
print(
    exist(
        [["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]], "ABCESEEEFS"
    )
)
