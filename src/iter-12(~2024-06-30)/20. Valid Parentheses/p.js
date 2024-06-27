/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1 || s.length === 0) {
    return false;
  }
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (const v of s) {
    const isClose = v in bracketMap;
    if (!isClose) {
      stack.push(v);
      continue;
    }

    if (stack[stack.length - 1] === bracketMap[v]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

// isValid("()[]{}");
isValid("{[]}");
/*
  Input: s = "()"
  Output: true

  Input: s = "()[]{}"
  Output: true

  Input: s = "(]"
  Output: false
*/
