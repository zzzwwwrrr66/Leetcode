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

  let [leftMin, leftMax] = [0, 0];

  for (const item of s) {
    if (item === "(") {
      leftMin += 1;
      leftMax += 1;
    } else if (item === ")") {
      leftMin -= 1;
      leftMax -= 1;
    } else if (item === "*") {
      leftMin -= 1;
      leftMax += 1;
    }

    if (leftMax < 0) {
      return false;
    }
    if (leftMin < 0) {
      leftMin = 0;
    }
  }
  return leftMin === 0;
};
console.log(
  checkValidString(
    "(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((("
  ),
  checkValidString("(((((*)))**"),
  checkValidString("(*)"),
  checkValidString("()"),
  checkValidString("(*)"),
  checkValidString("(*))")
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
