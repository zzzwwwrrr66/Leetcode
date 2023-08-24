/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let result = false;
  if(s.length < 2) return result;

  let repeatStr = '';
  for(let i = 0; i < s.length / 2; i++) {
    repeatStr+= s[i];
    if(!s.replaceAll(repeatStr, '')) {
      result = true;
      break;
    }
  }

  return result
};