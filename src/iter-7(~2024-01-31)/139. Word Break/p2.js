/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  function deleteWord(findWord, memo = {}) {
    if (findWord === "") {
      return true;
    }
    if (memo.hasOwnProperty(findWord) && memo[findWord] === false) {
      return false;
    }

    for (const word of wordDict) {
      if (findWord.startsWith(word)) {
        const newWord = findWord.substring(word.length, findWord.length + 1);
        if (deleteWord(newWord, memo)) {
          return true;
        }
      }
    }

    memo[findWord] = false;
    return false;
  }

  return deleteWord(s);
};
console.log(
  wordBreak("leetcode", ["leet", "code"]),
  wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])
);
