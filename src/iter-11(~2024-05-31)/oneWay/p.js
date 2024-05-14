/**
 *
 * @param {string} str
 * @param {string} str2
 */
function oneWay(str, str2) {
  // hash
  // 편집횟수가 1회 이내인지
  // 문자삽입, 문자삭제, 문자교체

  const cntMap = new Map();
  for (const s of str) {
    if (!cntMap.has(s)) {
      cntMap.set(s, 0);
    }
    cntMap.set(s, cntMap.get(s) + 1);
  }

  for (const s of str2) {
    if (cntMap.has(s)) {
      cntMap.set(s, cntMap.get(s) - 1);
    }
  }

  const sum = [...cntMap.values()].reduce((a, b) => a + b);
  return sum < 2;
}
console.log(
  oneWay("apple", "aple"), // true
  oneWay("apple", "apple"), // true
  oneWay("more", "core"), // true
  oneWay("abc", "ade") // false
);
