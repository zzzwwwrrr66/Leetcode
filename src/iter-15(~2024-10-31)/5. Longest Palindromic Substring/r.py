class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        resLen = 0

        for i in range(len(s)):
            # odd length ("abcba" -> 같은 케이스를 찾을때)
            l, r = i, i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                tmpLen = r - l + 1
                tmpRes = s[l : r + 1]
                if tmpLen > resLen:
                    res = tmpRes
                    resLen = tmpLen
                l -= 1
                r += 1

            # even length ("abba" -> 같은 케이스를 찾을때 )
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                tmpLen = r - l + 1
                tmpRes = s[l : r + 1]
                if tmpLen > resLen:
                    res = tmpRes
                    resLen = tmpLen
                l -= 1
                r += 1
        print("res: ", res)
        return res


s = Solution()

# s.longestPalindrome("babad")
s.longestPalindrome("cbbd")
