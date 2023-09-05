def lengthOfLongestSubstring(s: str) -> int:
    prevs = []
    prevs.append(s[0])
    count_table = [0] * len(s)
    count_table[0] = 1
    for i in range(1, len(s)):
        prev_word = s[i - 1]
        current_word = s[i]

        if current_word not in prevs:
            count_table[i] = count_table[i - 1] + 1
            prevs.append(current_word)
        elif prev_word != current_word and current_word in prevs:
            count_table[i] = count_table[i - 1]
        elif prev_word == current_word and current_word in prevs:
            if count_table[i - 1] > 1:
                count_table[i] = count_table[i - 1] - 1
            else:
                count_table[i] = count_table[i - 1]

    return count_table


print(lengthOfLongestSubstring("ckilbkd"))
