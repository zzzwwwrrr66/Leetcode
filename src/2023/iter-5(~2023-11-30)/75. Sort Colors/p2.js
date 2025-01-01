/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  // number bucket red = 0, white = 1, blue = 2
  // while white <= blue
  let red = 0;
  let white = 0;
  let blue = nums.length - 1;

  while (white <= blue) {
    /*  
      0 => red + 1, white + 1
      1 => white + 1
      2 => blue - 1, 
    */
    switch (nums[white]) {
      case 0:
        [nums[white], nums[red]] = [nums[red], nums[white]];
        red += 1;
        white += 1;
        break;
      case 1:
        [nums[red], nums[white]] = [nums[white], nums[red]];
        white += 1;
        break;
      case 2:
        [nums[white], nums[blue]] = [nums[blue], nums[white]];
        blue -= 1;
        break;
    }
  }
};
sortColors([2, 0, 2, 1, 1, 0]);
// sortColors([2, 0, 1]);
