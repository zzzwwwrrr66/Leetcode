// sliding window
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, target) {
  const result = [];
  // error case
  if (s.length < target.length) return result;

  const targetLen = target.length;
  const targetMap = new Map();
  for (let i = 0; i < targetLen; i++) {
    if (!targetMap.has(target[i])) {
      targetMap.set(target[i], 0);
    }
    targetMap.set(target[i], targetMap.get(target[i]) + 1);
  }

  let left = 0;
  let right = 0;
  let count = targetLen;
  while (right < s.length) {
    const currR = s[right];
    if (targetMap.get(currR) > 0) {
      count -= 1;
    }
    if (targetMap.has(currR)) {
      targetMap.set(currR, targetMap.get(currR) - 1);
    }

    right += 1;

    // push 조건
    if (count === 0) {
      result.push(left);
    }

    // left 조건
    if (right - left === targetLen) {
      const currL = s[left];
      if (targetMap.get(currL) >= 0) {
        count += 1;
      }
      if (targetMap.has(currL)) {
        targetMap.set(currL, targetMap.get(currL) + 1);
      }

      left += 1;
    }
  }

  return result;
};

// console.log(findAnagrams("cbaebabacd", "abc"));
("bae");
("aeb");
("eba");
("bab");
("aba");

("baebabacd");

console.log(findAnagrams("baa", "aa"));
