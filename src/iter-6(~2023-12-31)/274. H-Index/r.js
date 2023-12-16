/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (citations[i] > i) {
    i++;
  }

  return i;
};

// hIndex([3, 0, 6, 1, 5]); return 3
// 6, 5, 3, 1, 0
hIndex([1, 3, 1]);
// 3, 1, 1
