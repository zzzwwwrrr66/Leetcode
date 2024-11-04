/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // for -> while ( 해당 단어가 없을때까지 )
  // loop s -> loop wordDict
  const n = s.length;
  const memo = Array(n + 1).fill(false);

  function recursion(sIndex, wordIndex) {
    if (wordIndex >= wordDict.length) {
      return false;
    }
    const currWord = wordDict[wordIndex];
    if (sIndex + currWord.length >= n) {
      return false;
    }
    if (s.substring(sIndex, sIndex + currWord.length) !== currWord) {
      return false;
    }

    recursion(currWord.length, wordIndex + 1);
  }
  recursion(0, 0);
};
// recursion Tree 구조를 생각
// 4 에서 leet이 맞았으니 4에서 wordDict를 다시 recursion
// code 에서 맞았으니 currIndex는 8 이 된다 그러므로 8은 True의 숫자임
wordBreak("leetcode", ["leet", "code"]);
