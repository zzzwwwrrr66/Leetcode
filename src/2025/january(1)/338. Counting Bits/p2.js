/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const res = [];
  for (let i = 0; i <= n; i++) {
    const currNum = i;

    res.push(
      currNum
        .toString(2)
        .split("")
        .map((v) => Number(v))
        .reduce((a, b) => a + b)
    );
  }

  return res;
};
countBits(2);
