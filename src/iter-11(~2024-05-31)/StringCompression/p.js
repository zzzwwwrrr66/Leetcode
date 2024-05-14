/**
 *
 * @param {string} str
 */
function stringCompression(str) {
  // two point
  let left = 0;
  let right = 0;
  let res = "";
  const cntMap = new Map();
  while (right <= str.length) {
    if (!cntMap.has(str[right])) {
      cntMap.set(str[right], 0);
    }
    cntMap.set(str[right], cntMap.get(str[right]) + 1);

    if (str[left] !== str[right]) {
      const currCnt = cntMap.get(str[left]);
      res += `${str[left]}${currCnt}`;
      left = right;
    }
    right++;
  }

  return res.length >= str.length ? str : res;
}
// 압축된 문자열이 원래 문자열보다 길면 default str return
console.log(
  stringCompression("aabccccca"), // a2b1c5a3
  stringCompression("aa"), // aa
  stringCompression("aaaAAaa"), // a3A2a2
  stringCompression("aacbba") // aacbba a2c1b2a3
);
