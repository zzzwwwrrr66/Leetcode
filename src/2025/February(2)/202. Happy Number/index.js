/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return true;
  }

  let res = String(n)
    .split("")
    .map((n) => Math.pow(Number(n), 2))
    .reduce((a, b) => a + b);

  console.log({ res });

  while (res !== 1) {
    res = String(n)
      .split("")
      .map((n) => Math.pow(Number(n), 2))
      .reduce((a, b) => a + b);
  }

  return true;
};

isHappy(19);
