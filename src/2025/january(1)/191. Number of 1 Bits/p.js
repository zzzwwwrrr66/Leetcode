/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const res = [];
  while (n > 0) {
    const x = n % 2;
    if (x % 2) {
      res.push(x);
    }

    n = Math.floor(n / 2);
  }
  return res.length;
};

console.log(hammingWeight(11), hammingWeight(128), hammingWeight(2147483645));
