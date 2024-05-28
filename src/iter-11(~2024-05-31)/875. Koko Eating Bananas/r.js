/**
 * @param {number[]} piles
 * @param {number} h
 * Time O(N * log(M)) | Space O(1)
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles)];

  while (left < right) {
    const mid = (left + right) >> 1;
    const hourSpent = getHourSpent(mid, piles);

    const isTargetGreater = h < hourSpent;
    if (isTargetGreater) left = mid + 1;

    const isTargetLess = hourSpent <= h;
    if (isTargetLess) right = mid;
  }

  return right;
};

const getHourSpent = (mid, piles, hourSpent = 0) => {
  for (const pile of piles) {
    hourSpent += Math.ceil(pile / mid);
  }

  return hourSpent;
};
minEatingSpeed([3, 6, 7, 11], 8);
// minEatingSpeed([30, 11, 23, 4, 20], 5);
