/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
  const stack = [];
  for (const char of s) {
    if (char !== "]") { stack.push(char); continue; }

    // 맨마지막 pop
    let cur = stack.pop();

    let str = '';
    while (cur !== '[') {
      str = cur + str;
      cur = stack.pop();
    }

    let num = '';
    cur = stack.pop();
    // number가 아닐떄까지
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      // 넘버에서 stack을뺀다? -> while에서 판단을 위해서 빼야한다 => 2~3자리 수의 숫자도 존재하기때문
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join('');
};
console.log(
decodeString("3[a2[c]]")
)
// decodeString("2[abc]3[cd]ef")