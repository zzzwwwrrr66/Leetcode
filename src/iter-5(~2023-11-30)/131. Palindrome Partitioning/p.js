/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = (s) => {
  if (s.length === 1) {
    return [[s]];
  }
  const result = [];
  const partition = []; // process list
  // 펠린드롬이 가능한 모든패턴을 return
  function dfs(currS, partition, result) {
    if (currS === "") {
      result.push([...partition]);
      return;
    }

    for (let i = 1; i <= currS.length; i++) {
      const prefix = currS.substring(0, i);
      const postfix = currS.substring(i);

      if (isPalindrome(prefix)) {
        partition.push(prefix);
        // next level
        dfs(postfix, partition, result);
        partition.pop();
      }
    }
  }

  dfs(s, partition, result);

  return result;
};

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};
