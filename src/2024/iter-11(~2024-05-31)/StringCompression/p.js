/**
 *
 * @param {string} str
 */
function stringCompression(str) {
  // two point
  let left = 0;
  let right = 0;
  let res = "";
  while (right <= str.length) {
    if (str[left] !== str[right]) {
      res += `${str[left]}${right - left}`;
      left = right;
    }
    right++;
  }

  return res.length >= str.length ? str : res;
}
// 압축된 문자열이 원래 문자열보다 길면 default str return
console.log(
  stringCompression("aabcccccaaa"), // a2b1c5a3
  stringCompression("aa"), // aa
  stringCompression("aaaAAaa"), // a3A2a2
  stringCompression("aacbba") // aacbba a2c1b2a3
);
