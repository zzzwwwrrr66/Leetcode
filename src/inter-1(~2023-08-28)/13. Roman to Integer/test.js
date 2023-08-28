// visited 사용 하면될듯
const romanToInt = function(s) {
  const dict = {
    "I": 1,
    "V": 5,
    "IV": 4,
    "IX": 9,
    "X": 10,
    "L": 50,
    "XL": 40,
    "XC": 90,
    "C": 100,
    "D": 500,
    "CD": 400,
    "CM": 900,
    "M": 1000,
  }
  const visited = Array.from({length: s.length}, ()=>false);
  let result = 0;
  for(let i = 0; i < s.length; i++) {
      if(visited[i]) continue;
      const oneWord = s[i]
      const twoWord = s[i] + s[i + 1];
      if(dict[twoWord]) {
        result+= dict[twoWord];
        visited[i] = true;
        visited[i + 1] = true;
      } else {
        result+= dict[oneWord];
        visited[i] = true;
      }
  }
  return result;
};
console.log(romanToInt("III"))

1000 + 100 + 1000 + 10 + 100 + 1 + 5


// "IV" = 4 "IX" = 9
// "XL" = 40 "XC" = 90
// "CD" = 400 "CM" = 900