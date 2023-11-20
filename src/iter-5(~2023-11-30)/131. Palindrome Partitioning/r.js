/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // buffer for partition in DFS / 분할
  let partition = [];

  // final output of palindrome substrings
  let result = [];

  dfs(s, partition, result);

  return result;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var dfs = function (s, partition, result) {
  // Base case:
  // Empty string must be palindrome
  if (0 == s.length) {
    result.push([...partition]);
    return;
  }

  // General cases:
  for (let i = 1; i <= s.length; i++) {
    let currentS = s.substring(0, i);
    let newS = s.substring(i);

    // Current currentS is palindrome, keep trying to make more partition in postfix by DFS
    if (isPalindrome(currentS)) {
      partition.push(currentS);

      dfs(newS, partition, result);

      //return 되면 분할의 마지막을pop()
      partition.pop();
    }
  }
  return;
};

const isPalindrome = (str) => {
  console.log(str);
  return str === str.split("").reverse().join("");
};

console.log(partition("aab"));
