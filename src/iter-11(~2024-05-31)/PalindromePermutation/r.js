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
  let charCnt = 0;

  for (const str of s) {
    if (str === " ") continue;
    if (!sMap.has(str)) {
      sMap.set(str, true);
    } else {
      sMap.delete(str);
    }
    charCnt++;
  }

  if (charCnt % 2 === 0) {
    return sMap.size === 0;
  } else {
    return sMap.size === 1;
  }
}
console.log(checkPalinPerm("Tact Coa"));
console.log(checkPalinPerm("Tact Boa"));
console.log(checkPalinPerm("aabbc"));
console.log(checkPalinPerm("aabc"));
