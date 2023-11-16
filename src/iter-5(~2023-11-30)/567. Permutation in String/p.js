/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  // s1 maps
  const s1Maps = {};
  const s2Maps = {};
  const s1Len = s1.length;
  const s2Len = s2.length;

  if(s2Len < s1Len) return false;

  for (const s of s1) {
    if(!s1Maps[s]) {
      s1Maps[s] = 0
    }
    s1Maps[s]++;
  }
  // for slice window
  for (let i = 0; i < s1Len - 1; i++) {
    const currS = s2[i]
    if(!s2Maps[currS]) {
      s2Maps[currS] = 0
    }
    s2Maps[currS]++;
  }


  let j = 0;
  for(let i = s1Len - 1; i < s2Len; i++) {
    const currS = s2[i];
    const prevS = s2[j];
    // 1. 현재단어를 Maps 에 추가 
    if(!s2Maps[currS]) {
      s2Maps[currS] = 0
    }
    s2Maps[currS]++;
    
    // 2. s1Maps s2Maps 가 같은지 비교 -> YES => return true
    
    const isObjSame = Object.keys(s1Maps).every(key => s1Maps[key] === s2Maps[key]);
    if(isObjSame) {
      return true
    }

    // 3. s2[j]-- 마이너스 후 count 0 이면 삭제
    s2Maps[prevS]--;
    if(s2Maps[prevS] === 0) {
      delete s2Maps[prevS];
    }
    
    // 4. j += 1;
    j++;
  }
  return false;
};
console.log(
  checkInclusion("ab", "eidbaooo")
)

