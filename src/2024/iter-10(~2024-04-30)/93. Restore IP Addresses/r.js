var restoreIpAddresses = function (s) {
  const result = [];

  function permute(arr, str) {
    if (arr.length === 3) {
      if (isValid(str)) result.push([...arr, str]);
      return;
    }

    for (let i = 1; i < 4; i++) {
      let subStr = str.slice(0, i);
      if (!isValid(subStr)) continue;
      permute([...arr, subStr], str.slice(i));
    }
  }

  function isValid(str) {
    if (Number(str) > 255 || !str.length) return false;
    if (str.length >= 2 && str[0] === "0") return false;
    return true;
  }

  permute([], s);
  return result.map((x) => x.join("."));
};
console.log(restoreIpAddresses("25525511135"));

// ip 주소 하나만큼 loop
//
/**
ip 주소 하나만큼 loop 
-> 처음부터 하나하나 쌓아가는 느낌
 */
