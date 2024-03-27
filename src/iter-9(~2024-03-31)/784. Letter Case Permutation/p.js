/**
 * @param {string} s
 * @return {string[]}
 * pease and love
 */
const letterCasePermutation = (s) => {
  // s, pos, currWord, result
  const dfs = (s, pos, currWord, result = []) => {
    if (pos === s.length || currWord.length === s.length) {
      result.push(currWord);
      return;
    }

    if (isNaN(s[pos])) {
      const low = s[pos].toLocaleLowerCase();
      const up = s[pos].toLocaleUpperCase();
      dfs(s, pos + 1, currWord + low, result);
      dfs(s, pos + 1, currWord + up, result);
    } else {
      dfs(s, pos + 1, currWord + s[pos], result);
    }

    return result;
  };

  return dfs(s, 0, "");
};

function isAlphabet(ch) {
  return /[a-zA-Z]/i.test(ch);
}
console.log(letterCasePermutation("a1b2")); // return [("a1b2", "a1B2", "A1b2", "A1B2")];
