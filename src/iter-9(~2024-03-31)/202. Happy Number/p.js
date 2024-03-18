/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;

  const visited = new Set();

  while (!visited.has(n) && n !== 1) {
    visited.add(n);
    const nextNumber = String(n)
      .split("")
      .map((v) => v * 1)
      .reduce((sum, num) => {
        sum += Math.pow(num, 2);
        return sum;
      }, 0);
    n = nextNumber;
  }
  console.log({ visited });
  if (n === 1) {
    return true;
  } else {
    return false;
  }
};
console.log(isHappy(19));
console.log(isHappy(2));

/**
 *
 */
