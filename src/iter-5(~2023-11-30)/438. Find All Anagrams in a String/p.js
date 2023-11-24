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
var findAnagrams = function (s, p) {
  console.log();
};
