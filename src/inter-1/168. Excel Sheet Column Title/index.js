/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (columnNumber) => {
  let result = '';
  while (columnNumber > 0) {
    result = (String.fromCharCode('A'.charCodeAt() + (columnNumber - 1) % 26)) + result
    columnNumber = parseInt((columnNumber - 1) / 26)
  }
  return result
};
console.log(
convertToTitle(1)
)