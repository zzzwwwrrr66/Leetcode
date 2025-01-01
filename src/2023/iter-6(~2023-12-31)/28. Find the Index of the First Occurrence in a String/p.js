/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // base case
  if (needle.length === 0) {
    return -1;
  }
  if (needle.length === 1 && haystack[0] === needle[0]) {
    return 0;
  }

  let findIndex = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[findIndex]) {
      for (let j = 1; j < needle.length; j++) {}
    }
  }
};
console.log(strStr("mississippi", "issip"));
// console.log(strStr("leetcode", "leeto"));
