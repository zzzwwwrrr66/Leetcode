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

    return list(hash.values())


groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
# print(groupAnagrams([""]))
# https://leetcode.com/problems/group-anagrams/
