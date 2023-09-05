def lengthOfLongestSubstring(s: str) -> int:
    visited_index = dict()
    result = 0
    L = 0

    for R in range(len(s)):
        current_word = s[R]
        if current_word not in visited_index:
            result = max(result, R - L + 1)
        else:
            if visited_index[current_word] < L:
                result = max(result, R - L + 1)
            else:
                L = visited_index[current_word] + 1

        visited_index[current_word] = R

    return result


print(lengthOfLongestSubstring("ckilbkd"))
# print(lengthOfLongestSubstring("acbdbacd"))
