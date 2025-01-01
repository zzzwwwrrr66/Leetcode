// hash
// https://www.youtube.com/watch?v=noYGgJNCWvQ&list=PL3xNAKVIm80KqKdgPzkZgmwt9U_eTQ2sM&index=2
/**
 *
 * @param {String} str
 * @param {String} str2
 */
function checkPermutation(str, str2) {
  // hash?
  if (str.length !== str2.length) {
    return false;
  }

  const strMap = new Map();
  const str2Map = new Map();

  for (const s of str) {
    if (!strMap.has(s)) {
      strMap.set(s, 0);
    }
    const nextVal = strMap.get(s) + 1;
    strMap.set(s, nextVal);
  }
  for (const s of str2) {
    if (!strMap.has(s)) {
      return false;
    }
    const nextVal = strMap.get(s) - 1;
    strMap.set(s, nextVal);
  }

  for (const key of strMap.keys()) {
    if (strMap.get(key) !== 0) {
      return false;
    }
  }

  return true;
}

// checkPermutation("a", "aab"); //false
console.log(
  checkPermutation("a", "aab"), //false
  checkPermutation("aba", "abb"), //false
  checkPermutation("hooh", "oohh") //true
);
