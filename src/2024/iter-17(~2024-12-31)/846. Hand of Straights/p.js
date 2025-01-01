/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  // hand 의 카드들을 groupSize 만큼 재배열
  // group의 넘버들은 연속되어야한다
  if (hand.length % groupSize !== 0) {
    return false;
  }

  const countMap = new Map();
  for (const n of hand) {
    countMap.get(n) ? countMap.set(n, countMap.get(n) + 1) : countMap.set(n, 1);
  }
  hand.sort((a, b) => a - b);
  console.log({ countMap, hand });

  // for()
  for (const n of hand) {
    if (countMap.get(n) > 0) {
      for (let checkNum = n; checkNum < n + groupSize; checkNum++) {
        if (!countMap.get(checkNum) || countMap.get(checkNum) === 0) {
          return false;
        }
        countMap.set(checkNum, countMap.get(checkNum) - 1);
      }
    }
  }
  return true;
};

// isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3);
isNStraightHand([8, 10, 12], 3);
