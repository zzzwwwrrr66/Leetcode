graph = {1: [2, 3, 4], 2: [5], 3: [5], 4: [], 5: [6, 7], 6: [], 7: [3]}


def DFS(v, visited=[]):
    visited.append(v)
    for w in graph[v]:
        if w not in visited:
            visited = DFS(w, visited)
    return visited


print(DFS(1))
