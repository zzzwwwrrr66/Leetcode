/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  // n : 나무길이
  // 1loop당 1개씩 움직일수있음
  // left : left 로 움직이는 개미 -> index 거꾸로
  // right : right 로 움직이는 개미 -> index 앞으로
  // 1초는 loop 1바퀴
  // 슬라이딩 윈도우??? left right
  // 개미가 없어지는 마지막 순간(loop)

  const wood = Array(n + 1).fill(0);
  // minNum in right
  let leftPos = Math.min(...right);
  // maxNum in left
  let rightPos = Math.max(...left);

  let time = 0;
  while (leftPos < wood.length - 1 || rightPos > 0) {
    leftPos++;
    rightPos--;

    time++;
  }

  return time;
};

// getLastMoment(4, [4, 3], [0, 1]);
getLastMoment(7, [], [0, 1, 2, 3, 4, 5, 6, 7]);

/**
Input: n = 4, left = [4,3], right = [0,1]
Output: 4
Explanation: In the image above:
-The ant at index 0 is named A and going to the right.
-The ant at index 1 is named B and going to the right.
-The ant at index 3 is named C and going to the left.
-The ant at index 4 is named D and going to the left.
The last moment when an ant was on the plank is t = 4 seconds. 
After that, it falls immediately out of the plank. 
(i.e., We can say that at t = 4.0000000001, there are no ants on the plank).
 */
