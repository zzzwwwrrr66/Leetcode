/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 2개이상의 케이스에 대한 조합
  const digitMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // base case
  if (digits === "" || digits.legth === 0) {
    return [];
  }
  for (let i = 0; i < digits.length; i++) {
    if (!["2", "3", "4", "5", "6", "7", "8", "9"].includes(digits[i])) {
      return [];
    }
  }

  // start
  function dfs(digits, list, res) {
    if (!digits || digits === "") {
      res.push(list.join(""));
      return res;
    }
    const currDigits = digits[0];
    const currStrings = digitMap[currDigits[0]];

    const nextDigits = digits.slice(1);
    for (const str of currStrings) {
      list.push(str);
      dfs(nextDigits, list, res);
      list.pop();
    }

    return res;
  }

  return dfs(digits, [], []);
};

letterCombinations("23");
