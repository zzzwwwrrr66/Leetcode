/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  // border & s 의 겹치는것만
  // s 에서 안겹치는것중 order 에 뒤에 올수있는 알파벳
  const map = Array(26).fill(0);
  [...s].forEach((v) => {
    const currentPosition = v.charCodeAt() - 96;
    map[currentPosition] = map[currentPosition] + 1;
  });

  let res = "";
  [...order].forEach((v) => {
    const currentPosition = v.charCodeAt() - 96;
    if (map[currentPosition] >= 1) {
      map[currentPosition] = map[currentPosition] + 1;
    }

    if (map[currentPosition] == 2) {
      res += v;
      map[currentPosition] = 0;
    } else if (map[currentPosition] > 2) {
      res += v.repeat(map[currentPosition] - 1);
      map[currentPosition] = 0;
    }
  });
  console.log({ map });

  for (let i = 1; i <= 26; i++) {
    if (map[i] > 0) {
      res += String.fromCharCode(i + 96);
    }
  }
  console.log({ map, res });
  return res;
};
// customSortString("kqep", "pekeq");
// customSortString("cba", "abcd");
customSortString("jftiugkz", "kfiukutzjg");
