/**
 * @param {string[]} tokens
 * @return {number}
 */

function evalRPN(tokens) {
  const stack = [];
  const ops = new Map();
  ops.set("+", (a, b) => a + b);
  ops.set("-", (a, b) => a - b);
  ops.set("*", (a, b) => a * b);
  ops.set("/", (a, b) => parseInt(a / b, 10));

  for (const token of tokens) {
    if (ops.has(token)) {
      const firstNum = stack.pop();
      const secondNum = stack.pop();
      const handleMath = ops.get(token);
      const getMath = handleMath(secondNum, firstNum);

      stack.push(getMath);
    } else {
      stack.push(parseInt(token, 10));
    }
  }

  return stack.pop();
}

// evalRPN(["2", "1", "+", "3", "*"]);
evalRPN(["4", "13", "5", "/", "+"]); // 6
