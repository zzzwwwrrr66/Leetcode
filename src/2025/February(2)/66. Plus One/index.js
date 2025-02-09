/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits.length === 0) {
    return [1];
  }

  let plus = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (plus === 0) {
      break;
    }

    const plusNum = digits[i] + plus;
    if (plus === 1 && plusNum >= 10) {
      digits[i] = 0;
      plus = 1;
      continue;
    }

    plus = 0;
    digits[i] = plusNum;
  }

  if (digits[0] === 0) {
    digits = [1, ...digits];
  }

  return digits;
};

console.log(plusOne([9, 9, 9]));

[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
