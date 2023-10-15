from typing import List
import heapq


def groupAnagrams(strs: List[str]) -> List[List[str]]:
    if len(strs) == 1:
        return [[strs[0]]]

    hash = {}
    for str in strs:
        currWord = "".join(sorted(str))
        if not currWord in hash:
            hash[currWord] = []
        hash[currWord].append(str)
        hash[currWord].sort()

    result = []
    for key in hash:
        print(key)
        result.append(hash[key])

    result = sorted(result, key=lambda x: len(x))
    return result


# groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
print(groupAnagrams([""]))
# https://leetcode.com/problems/group-anagrams/
