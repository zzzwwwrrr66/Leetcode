/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let arr = haystack.split(needle);

  if (arr.length > 1) {
    if (arr[0] === "") return 0;

    return arr[0].length;
  } else return -1;
};

console.log(strStr("leetcode", "leeto"));
console.log(strStr("sadbutsad", "sad"));
console.log(strStr("mississippi", "issip"));
