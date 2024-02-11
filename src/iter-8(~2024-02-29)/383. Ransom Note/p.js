/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  magazineMap = new Map();

  for (const v of magazine) {
    magazineMap.get(v)
      ? magazineMap.set(v, magazineMap.get(v) + 1)
      : magazineMap.set(v, 1);
  }

  let result = true;
  for (const v of ransomNote) {
    if (!magazineMap.get(v)) {
      result = false;
      break;
    }
    if (magazineMap.get(v) === 0) {
      result = false;
      break;
    }
    magazineMap.set(v, magazineMap.get(v) - 1);
  }
  return result;
};
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
