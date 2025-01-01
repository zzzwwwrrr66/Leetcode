/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.trim().toLowerCase();
  if (s === "") return true;

  s = s
    .split("")
    .filter((str) => str.match(/^[A-Za-z0-9]*$/))
    .join("");
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const left = s[l];
    const right = s[r];
    if (left === right) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;
};
// isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("0P");
