/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
  const numPattern = /[0-9]/;
  const stack = [];
  for (const str of s) {
    // ] 가나올때까지 스텍에입력
    if(str !== "]") {
      stack.push(str);
      continue;
    }
    
    // if "]" str 처리
    let char = "";
    let curr = stack.pop();
    while(curr !== "[") {
      char = curr + char;
      curr = stack.pop();
    }

    // number 처리
    let num = "";
    curr = stack.pop();
    while(numPattern.test(Number(curr))) {
      num = curr + num;
      curr = stack.pop();
    }
    stack.push(curr);
    stack.push(char.repeat(Number(num)));
  }

  return stack.join("");

};

// decodeString("3[a2[c]]")
decodeString("100[leetcode]")
