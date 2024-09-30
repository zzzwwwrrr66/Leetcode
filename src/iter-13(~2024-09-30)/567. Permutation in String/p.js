/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // base case
  if (s1.length > s2.length) {
    return false;
  }

  // sliding window
  // HashMap or Set
  const checkDefault = new Map();
  for (const s of s1) {
    checkDefault.has(s) ? checkDefault.set(s, checkDefault.get(s) + 1) : checkDefault.set(s, 1);
  }

  for (let i = 0; i < s2.length; i++) {
    if (i + s1.length > s2.length) {
      break;
    }
    const currWord = s2[i];
    const check = new Map(checkDefault);
    if (!check.has(currWord)) {
      continue;
    }
    const window = s2.slice(i, i + s1.length);
    for (const windowWord of window) {
      if (!check.has(windowWord)) {
        break;
      }
      const currVal = check.get(windowWord);
      if (currVal === 1) {
        check.delete(windowWord);
      } else {
        check.set(windowWord, currVal - 1);
      }
    }

    if (check.size === 0) {
      return true;
    }
  }

  return false;
  /* 
      1st loop s2
      if curr in s1
          if(right + s1.length > s2.length) { 
              continue; 
          }
          cosnt window = slice (right, s1.length)
          window loop
              HashMap check
          if(Math.sum(...HashMap.values()) === 0) {
              return true;
          }
          
      return false;    
  */
};

// checkInclusion("ab", "eidbaooo"); // true
checkInclusion("ab", "eidboaoa"); // false
// checkInclusion("ccc", "cbac"); // false
