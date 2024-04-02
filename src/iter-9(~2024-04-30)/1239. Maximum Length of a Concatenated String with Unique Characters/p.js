/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  // 자신 포함 두개까지 가능

  // base return case
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  let maxNum = 0;

  function dfs(index, currentStrings) {
    if (currentStrings.length !== new Set(currentStrings.split("")).size) return;
    maxNum = Math.max(maxNum, currentStrings.length);

    for (let i = index; i < arr.length; i++) {
      const currString = arr[i];
      dfs(i + 1, currentStrings + currString);
    }
  }

  dfs(0, "");

  return maxNum;
};
// 글자를 합쳐서 유니크한 max length 를 return
// console.log(maxLength(["un", "iq", "ue"]));
console.log(maxLength(["cha", "r", "act", "ers"]));
