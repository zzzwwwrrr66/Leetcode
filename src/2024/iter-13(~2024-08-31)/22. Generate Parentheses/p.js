/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // n 숫자가 주어지면 n 만큼의 "(" ")" 조합을 return
  // 조합이면 back
  console.log({ n });
  const res = [];
  const stack = [];

  function dfs(openN, closeN) {
    if (openN === closeN && closeN === n) {
      res.push(stack.join(""));
      return;
    }

    if (openN < n) {
      stack.push("(");
      dfs(openN + 1, closeN);
      stack.pop();
    }

    // 이조건을 해야지 짝이 맞음
    if (closeN < openN) {
      stack.push(")");
      dfs(openN, closeN + 1);
      stack.pop();
    }
  }

  dfs(0, 0);
  return res;
};

/*
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
 */

generateParenthesis(3);
