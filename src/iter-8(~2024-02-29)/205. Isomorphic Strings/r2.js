/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 현재의 문자를 다음인덱스부터 찾는다->둘의 비교
  // i + 1 을 하는이유는 첫번째의 인덱스는 비교할 필요 X, 다음존재하거나 존재하지 않는 현재의 문자열을 알수있으면 되기때문
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
      return false;
    }
  }
  return true;
};

// console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("paper", "title"));
// console.log(isIsomorphic("foo", "bar"));
