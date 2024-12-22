/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  // recursion top down

  if (triplets[0].length != target.length) {
    return false;
  }
  if (triplets.length === 1) {
    return triplets[0].join("") === target.join("");
  }

  const res = new Set();

  // recursion 종료 조건 1 : target 과 currList가 같을때
  // recursion 종료 조건 2 : 전부 다 돌았을때
  // triplets
  // target's value 보다 큰 list는 언제나 필요없다 (두개 합치면 언제나 False가 되기때문)

  for (const t of triplets) {
    console.log({ t });
    if (t.length !== 3) {
      return false;
    }

    if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
      continue;
    }

    for (let i = 0; i < t.length; i++) {
      if (t[i] == target[i]) {
        res.add(i);
      }
    }
  }

  return res.size === 3;
};

mergeTriplets(
  [
    [2, 5, 3],
    [2, 3, 4],
    [1, 2, 5],
    [5, 2, 3],
  ],
  [5, 5, 5]
);
