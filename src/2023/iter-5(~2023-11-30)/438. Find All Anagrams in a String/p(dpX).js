/*  알파벳 철자가 해당되는 첫 index 를 return [index, index2...] 

loop
|
  
  dfs 
  return case 
  1. visited count가 1 이상일때
  2. depth level 이 length 와같을때 

  result.push case 
  1. visited count 가 3 이고 depth level 이 length 와같을때
  result.push(firstIndex)

  실행 case
  dfs(level, partition, result)
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, target) {
  // error case
  if (s.length < target.length) return [];

  const targetLen = target.length;
  const targetMap = new Map();
  for (let i = 0; i < targetLen; i++) {
    if (!targetMap.has(target[i])) {
      targetMap.set(target[i], 0);
    }
    targetMap.set(target[i], targetMap.get(target[i]) + 1);
  }

  const countList = Array.from({ length: s.length }, () => 0);
  countList[0] = 3;
  const result = [];

  for (let i = 1; i <= s.length - targetLen; i++) {
    const curr = s[i];
    if (target.includes(curr)) {
      const currIndex = countList[i - 1] - 1;
      for (let j = i + currIndex; j <= i + currIndex; j++) {}
    }
  }

  return result;
};

/* 
  Input: s = "cbaebabacd", p = "abc"
  Output: [0,6]
  Explanation:
  The substring with start index = 0 is "cba", which is an anagram of "abc".
  The substring with start index = 6 is "bac", which is an anagram of "abc".
*/
console.log(findAnagrams("cbaebabacd", "abc"));
// console.log(findAnagrams("abab", "ab"));
// console.log(findAnagrams("baa", "aa"));
