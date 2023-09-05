def lengthOfLongestSubstring(s: str) -> int:
    result, l = 0, 0
    char_set = set()
    for r in range(len(s)):
        current_word = s[r]
        while current_word in char_set:
            char_set.remove(s[l])
            l += 1
        char_set.add(current_word)
        result = max(len(char_set), result)
        print(l)
    return result


# print(lengthOfLongestSubstring("ckilbkd"))
print(lengthOfLongestSubstring("dvdf"))
