/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanList = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";
  for (let i = 0; i < romanList.length; i++) {
    const [word, int] = romanList[i];
    while (int <= num) {
      //num 이 int보다 클때까지
      num -= int;
      result += word;
    }
  }
  return result;
};

// intToRoman(3);
intToRoman(1994);
