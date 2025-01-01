// two point ?? left = 0, right = s.length;
// while if left === right => left++, right--

//
// hash???
// 글자개수 확인

// 0. trim()
// 1.
// 글자 구성개수홀수 -> 한가지 고유글자 + 짝수 글자들
// 글자 구성개수 짝수 -> 모든글자가 짝으로 구성

/**
 *
 * @param {String} s
 */
function checkPalinPerm(s) {
  // trim, lowercase

  s = s.trim().toLowerCase();
  const sMap = new Map();
  for (const str of s) {
    if (str === " ") continue;
    if (!sMap.has(str)) {
      sMap.set(str, 0);
    }
    sMap.set(str, sMap.get(str) + 1);
  }

  const len = sMap.keys().length;
  let type = len % 2 === 0 ? "even" : "odd";

  if (type === "even") {
    for (const key of sMap.keys()) {
      if (sMap.get(key) % 2 !== 0) return false;
    }
  } else {
    const keys = [];
    for (const key of sMap.keys()) {
      if (sMap.get(key) % 2 === 0) {
        sMap.delete(key);
      } else {
        keys.push(key);
      }
    }

    if (sMap.size !== 1 || keys.length !== 1) {
      return false;
    }

    return true;
  }
}
console.log(checkPalinPerm("Tact Coa"));
console.log(checkPalinPerm("Tact Boa"));
console.log(checkPalinPerm("aabbc"));
console.log(checkPalinPerm("aabc"));
