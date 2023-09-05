def lengthOfLongestSubstring(s: str) -> int:
    seen = {}
    l = 0
    output = 0
    for r in range(len(s)):
        current_word = s[r]
        # If s[r] not in seen, we can keep increasing the window size by moving right pointer
        if current_word not in seen:
            output = max(output, r - l + 1)

        # There are two cases if s[r] in seen:
        # case1: s[r] is inside the current window, we need to change the window by moving left pointer to seen[s[r]] + 1.
        # case2: s[r] is not inside the current window, we can keep increase the window
        else:
            if seen[current_word] < l:
                output = max(output, r - l + 1)
            else:
                l = seen[current_word] + 1
        seen[current_word] = r
    return output


# print(lengthOfLongestSubstring("ckilbkd"))
print(lengthOfLongestSubstring("acbdbacd"))
