/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let t = 0;
  if (left.length > 0) {
    t = Math.max(...left); //4
  }
  if (right.length > 0) {
    t = Math.max(t, n - Math.min(...right));
  }
  return t;
};

getLastMoment(4, [4, 3], [0, 1]);
