/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  // map word +1

  const wordMap = new Map();
  for (const w of s) {
    if (!wordMap.has(w)) {
      wordMap.set(w, 0);
    }

    wordMap.set(w, wordMap.get(w) + 1);
  }

  for (const w of t) {
    if (!wordMap.has(w) || !wordMap.get(w)) {
      return false;
    }
    wordMap.set(w, wordMap.get(w) - 1);
  }

  return true;
};

// isAnagram("anagram", "nagaram");
// isAnagram("rat", "car");
console.log(isAnagram("aacc", "ccac"));
// (s = "rat"), (t = "car");
// s = "anagram", t = "nagaram"
