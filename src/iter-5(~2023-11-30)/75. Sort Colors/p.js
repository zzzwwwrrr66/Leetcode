/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // nums 를 바꿔버리니깐 안됨.. bucket 활용은 좋아서 남겨둠
  const colorDict = {
    0: "red",
    1: "white",
    2: "blue",
  };
  const red = [];
  const white = [];
  const blue = [];

  nums.forEach((num) => {
    switch (colorDict[num]) {
      case "red":
        red.push(num);
        break;
      case "white":
        white.push(num);
        break;
      case "blue":
        blue.push(num);
        break;
    }
  });

  return [...red, ...white, ...blue];
};
console.log(sortColors([2, 0, 2, 1, 1, 0]), sortColors([2, 0, 1]));
