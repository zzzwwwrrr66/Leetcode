def romanToInt(s: str) -> int:
    roman = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    number = 0
    for i in range(len(s) - 1):
        print(number)
        if roman[s[i]] < roman[s[(i + 1)]]:
            # 현재숫자가 다음숫자보다 작을때, result 에서 현재숫자를 뺸다
            number -= roman[s[i]]
        else:
            # 아닐경우 현재숫자를 result에 더한다
            number += roman[s[i]]

    return number + roman[s[-1]]


romanToInt("MCMXCIV")
