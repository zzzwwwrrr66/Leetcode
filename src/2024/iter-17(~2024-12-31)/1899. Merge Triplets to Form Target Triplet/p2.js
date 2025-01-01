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

  let [x, y, z] = [false, false, false];
  for (const t of triplets) {
    if (t.length !== 3) {
      return false;
    }
    x = x || (t[0] === target[0] && t[1] <= target[1] && t[2] <= target[2]);
    y = y || (t[0] <= target[0] && t[1] === target[1] && t[2] <= target[2]);
    z = z || (t[0] <= target[0] && t[1] <= target[1] && t[2] === target[2]);
  }
  return x && y && z;
};
console.log(
  mergeTriplets(
    [
      [2, 5, 3],
      [2, 3, 4],
      [1, 2, 5],
      [5, 2, 3],
    ],
    [5, 5, 5]
  )
);
