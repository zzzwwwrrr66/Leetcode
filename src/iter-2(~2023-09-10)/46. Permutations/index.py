from itertools import permutations


def permute(nums):
    results = []
    prev_elements = []

    def dfs(elements):
        # 리프 노드? 일때 결과 추가
        if len(elements) == 0:
            results.append(prev_elements[:])

        # 순열 생성 재귀 호출
        for e in elements:
            next_elements = elements[:]
            next_elements.remove(e)

            prev_elements.append(e)
            dfs(next_elements)
            prev_elements.pop()

    dfs(nums)
    return results


print("check 1", permute([1, 2, 3]))


print("check 2", list(permutations([1, 2, 3])))
print("wooram check", list(map(list, permutations([1, 2, 3]))))
