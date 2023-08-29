const dict = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

/**
* @param {string} digits
* @return {string[]}
*/
var letterCombinations = function(digits) {
  const result = [];
  if(digits.length === 0) return result;

  // invoke
  DFS(0, '');

  function DFS(index, path) {
    // backtracking
    if(path.length === digits.length) {
      result.push(path);
      return
    }

    for(let i = index; i < digits.length; i++) {
      const currentString = dict[digits[i]]
      for(let j = 0; j < currentString.length; j++) {
        DFS(i + 1, path + currentString[j]);
      }
    }
  }
  return result;
};

letterCombinations('23')