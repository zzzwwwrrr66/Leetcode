/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const def = (first = 1, curr = []) => {
    if (curr.length === k) {
      result.push(curr.slice());
    }

    for (let i = first; i < n + 1; i++) {
      curr.push(i);
      def(i + 1, curr);
      curr.pop();
    }
  };

  def();

  return result;
};
console.log(combine(4, 2));
