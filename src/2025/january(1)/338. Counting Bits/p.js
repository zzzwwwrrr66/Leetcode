/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  function getBinary(number) {
    if (number === 0) {
      return 0;
    }
    if (number === 1) {
      return 1;
    }
    const res = [];
    while (number > 0) {
      res.push(number % 2);
      number = Math.floor(number / 2);
    }
    return res.reduce((a, b) => a + b);
  }

  const res = [];
  for (let i = 0; i <= n; i++) {
    res.push(getBinary(i));
  }

  return res;
};

countBits(2);
