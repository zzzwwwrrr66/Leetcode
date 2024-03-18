/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const wordMap = new Map();
  const seen = new Set();
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    const current = pattern[i];
    const currentWord = words[i];
    if (!wordMap.has(current) && !seen.has(currentWord)) {
      wordMap.set(current, currentWord);
      seen.add(currentWord);
    } else if (wordMap.get(current) !== currentWord) {
      return false;
    }
  }
  return true;
};
// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
