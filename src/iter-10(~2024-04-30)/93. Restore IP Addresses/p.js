/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const dfs = (str, current, result = []) => {
    // return case
    if (current.length === 4 && !str.length) {
      result.push(current.join("."));
      return;
    }
    if (current.length >= 4) {
      return;
    }

    for (let i = 1; i < 4; i++) {
      if (str.length < i) continue;

      const currentIp = str.slice(0, i);
      if ((str.length > 1 && str[0] === "0") || Number(currentIp) > 255) continue;
      const nextStr = str.slice(i);
      dfs(nextStr, [...current, currentIp], result);
    }

    return result;
  };

  const result = dfs(s, []);

  console.log(result);
};

restoreIpAddresses("25525511135");

// ip 주소 하나만큼 loop
//
/**
ip 주소 하나만큼 loop 
-> 처음부터 하나하나 쌓아가는 느낌
-> return 하는 것도 중요하지만, 재귀시킬때의 조건도 중요하다
 */
