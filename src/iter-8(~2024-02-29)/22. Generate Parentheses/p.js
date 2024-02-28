/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // bucket 을 두개로 가지고 생각
  let result = [];
  let output = [];
  backtrack(n, 0, 0, output, result);

  return result;
};

function backtrack(n, leftCount, rightCount, output, result) {
  // Base case where count of left and right braces is
  // "n"
  if (leftCount >= n && rightCount >= n) {
    // Join the array elements into a string without any
    // separators.
    let outputStr = output.join("");
    result.push(outputStr);
  }

  // Case where we can still append left braces
  if (leftCount < n) {
    output.push("(");
    backtrack(n, leftCount + 1, rightCount, output, result);
    output.pop();
  }

  // Case where we append right braces if the current
  // count of right braces is less than the count of
  // left braces
  if (rightCount < leftCount) {
    output.push(")");
    backtrack(n, leftCount, rightCount + 1, output, result);
    output.pop();
  }
}
console.log(generateParenthesis(3));
