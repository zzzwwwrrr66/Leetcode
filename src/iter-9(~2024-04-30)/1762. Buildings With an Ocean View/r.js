var findBuildings = function (heights) {
  const stack = [];
  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i];
    let stackIndex = heights[stack[stack.length - 1]];
    while (stack.length && currentHeight >= stackIndex) {
      stack.pop();
      stackIndex = heights[stack[stack.length - 1]];
    }
    stack.push(i);
  }
  return stack;
};
// console.log(findBuildings([4, 2, 3, 1]));
// console.log(findBuildings([1, 3, 2, 4]));
console.log(findBuildings([4, 3, 2, 1]));
