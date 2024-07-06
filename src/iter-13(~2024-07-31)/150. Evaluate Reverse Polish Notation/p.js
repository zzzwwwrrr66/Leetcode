/**
 * @param {string[]} tokens
 * @return {number}
 */

function evalRPN(tokens) {
  const asd = ["+", "-", "*", "/"];
  if (tokens.length === 1) {
    if (isNaN(tokens[0])) {
      return 0;
    }
    return tokens[0];
  }
  const resList = [];
  let res = 0;
  while (tokens.length > 0) {
    const x = tokens.shift();
    if (!isNaN(x)) {
      resList.push(x);
      continue;
    }
    if (resList.length >= 2) {
      const b = Number(resList.pop());
      const a = Number(resList.pop());
      const res = calculate(a, b, x);
      resList.push(res);
    }
  }

  console.log(resList[resList.length - 1]);
  return resList[resList.length - 1];
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return parseInt(a / b);
  }
}

// evalRPN(["2", "1", "+", "3", "*"]);
// evalRPN(["4", "13", "5", "/", "+"]);
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
/*
  Input: tokens = ["2","1","+","3","*"]
  Output: 9
  Explanation: ((2 + 1) * 3) = 9
*/

/*
  Constraints: 1 <= tokens.length <= 104
  tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

*/
