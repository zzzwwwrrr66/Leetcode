"""
:type s1: str
:type s2: str
:rtype: bool
"""
def checkInclusion(s1, s2):
    n1, n2 = len(s1), len(s2)
    if n1 > n2:
        return False
    
    s1_count = {}
    s2_count = {}
    
    for c in s1:
        s1_count[c] = s1_count.get(c, 0) + 1
    
    # 0 ~ 1 splice
    for c in s2[:n1-1]:
        s2_count[c] = s2_count.get(c, 0) + 1
        
    j = 0
    for i in range(n1-1, n2):
        c = s2[i]
        s2_count[c] = s2_count.get(c, 0) + 1
        if s2_count == s1_count:
            return True
        s2_count[s2[j]] -= 1
        if s2_count[s2[j]] == 0:
            del s2_count[s2[j]]
        j += 1
            
    return False


checkInclusion("ab", "eidbaooo")