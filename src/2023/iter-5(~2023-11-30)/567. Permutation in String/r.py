from collections import Counter
def checkInclusion(self, s1: str, s2: str) -> bool:
    l1, l2 = len(s1), len(s2)
    if l1>l2: return False ## edge cases

    c1, c2 = Counter(s1), Counter(s2[:l1])
    
    for i in range(l2-l1):
        if c1==c2: return True
        char1, char2 = s2[i], s2[i+l1]
        c2[char1] -= 1 ## update counter c2
        if c2[char1]==0: 
            del c2[char1]
        c2[char2] += 1
    return c1==c2