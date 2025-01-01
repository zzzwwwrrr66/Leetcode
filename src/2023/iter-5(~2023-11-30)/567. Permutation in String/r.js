/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean} boolean
 */
var checkInclusion = function (s1, s2) {
  const len1 = s1.length, len2 = s2.length;
  if (len1 > len2) return false;

  // alphabet
  const count = Array(26).fill(0);

  for (let i = 0; i < len1; i++) {
      // s1 의 count check
      count[s1.charCodeAt(i) - 97] += 1;
      // s2 확인(-1) s1의 i만큼만
      count[s2.charCodeAt(i) - 97] -= 1;
  }
  // 아무것도 변한게 없으면 return true; OR 위에서 빼줬으면
  if (!count.some(e => e !== 0)) return true;


  for (let i = len1; i < len2; i++) {
      // d, b, o, a
      count[s2.charCodeAt(i)-97] -= 1;
      count[s2.charCodeAt(i-len1)-97] += 1; // e => 0, i => 0
      if (!count.some(e => e !== 0)) return true;
  }
  return false;
};


// console.log(
// checkInclusion("ab", "eidbaooo")
// )
checkInclusion("ab", "eidboaoo")


// checkInclusion("prosperity","properties")
