/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // base return case
  if (strs.length === 1) {
    return [strs];
  }
  const maps = new Map();

  // alphabet 의 숫자를 더한 키값을 정한다 -> 알파벳이 달라도 sum 이같으면 같은 key 취급하기 때문에 X
  for (const str of strs) {
    const aKey = str.split("").sort().join("");

    if (!maps.has(aKey)) {
      maps.set(aKey, []);
    }
    maps.get(aKey).push(str);
  }

  return [...maps.values()];
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
