/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of s) {
    /* Time O(N) */
    const isBracket = char in map;
    if (!isBracket) {
      stack.push(char);
      continue;
    } /* Space O(N) */

    const isEqual = stack[stack.length - 1] === map[char];
    if (isEqual) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.length === 0;
};

// isValid("()[]{}");
// isValid("{[]}");
isValid("{[}]");
