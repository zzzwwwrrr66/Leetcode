/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  //
  /*
  hash count 
  
  each loop 3

  for s

  for t

  check to same s and t
  */
  if (s.length !== t.length) {
    return false;
  }
  if (s.length === 1 && t.length === 1) {
    if (s === t) {
      return true;
    }
    return false;
  }

  const sMap = new Map();
  let sCountKey = 0;
  for (const v of s) {
    if (!sMap.get(v)) {
      sCountKey++;
      sMap.set(v, sCountKey);
    }
  }

  const tMap = new Map();
  let tCountKey = 0;
  for (const v of t) {
    if (!tMap.get(v)) {
      tCountKey++;
      tMap.set(v, tCountKey);
    }
  }

  // compare s and t
  for (let i = 0; i < s.length; i++) {
    if (sMap.get(s[i]) !== tMap.get(t[i])) {
      return false;
    }
  }
  return true;
};
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("foo", "bar"));
