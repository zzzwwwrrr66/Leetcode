/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/**
 * 아래와 같은 느낌으로 def back tracking
 *
 *                       1
 *                2      3      4
 *              3   4   4  4
 *            4  4
 */
var combine = function (n, k) {
  // base case
  if (n === 1 && k === 1) {
    return [[1]];
  }
  const result = [];
  const def = (level = 1, partition = []) => {
    // k  === length : return
    if (k === partition.length) {
      result.push(partition.slice());
    }

    for (let i = level; i < n + 1; i++) {
      partition.push(i);
      def(i + 1, partition);
      partition.pop();
    }
  };

  def();

  return result;
};

console.log(combine(4, 2));
