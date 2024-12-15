/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  // "(" ")" "*" 만 주어진다
  // 괄호는 무조건 닫혀야한다
  // * 는 ( or ) or "" 이 될수있다
  if (s.length === 1 && (s[0] === ")" || s[0] === "(")) {
    return false;
  }

  function dfs(i, open) {
    if (i === s.length) {
      return open === 0;
    }
    if (open < 0) {
      return false;
    }

    const curr = s[i];
    if (curr === "(") {
      return dfs(i + 1, open + 1);
    } else if (curr === ")") {
      return dfs(i + 1, open - 1);
    } else {
      const res1 = dfs(i + 1, open);
      const res2 = dfs(i + 1, open - 1);
      const res3 = dfs(i + 1, open + 1);

      return res1 || res2 || res3;
    }
  }

  return dfs(0, 0);
};
console.log(
  // checkValidString(
  //   "(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((("
  // ),
  // checkValidString("(((((*)))**"),
  checkValidString("(*)")
  // checkValidString("()"),
  // checkValidString("(*)"),
  // checkValidString("(*))")
);
//checkValidString("()"), checkValidString("(*)"), checkValidString("(*))"),
/**
 * 
 * Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "(*)"
Output: true
Example 3:

Input: s = "(*))"
Output: true

 */
