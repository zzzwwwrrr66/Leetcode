/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12 || s.length < 4) return [];

  const result = [];
  helper(s, [], result);

  return result;
};

const helper = (s, currSet, result) => {
  if (currSet.length === 4 && !s.length) {
    // !s.length -> s 를 다사용했을때임
    result.push(Array.from(currSet).join("."));
    return;
  }
  if (currSet.length >= 4) {
    return;
  }

  for (let i = 1; i < 4; i++) {
    if (s.length < i) continue;
    const str = s.slice(0, i);
    if ((str.length > 1 && str[0] === "0") || Number(str) > 255) continue;
    currSet.push(str);
    helper(s.slice(i), currSet, result);
    currSet.pop();
  }
};
console.log(restoreIpAddresses("25525511135"));
