/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const defaultColor = image[sr][sc];
  const m = image.length;
  const n = image[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const visited = Array.from(Array(m), () => Array(n).fill(false));
  // const temp = [...image]
  const handleFill = (image, r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n) {
      return;
    }
    if (image[r][c] === color) return;
    if (image[r][c] !== defaultColor) return;
    if (visited[r][c]) return;

    image[r][c] = color;
    visited[r][c] = true;

    for (let i = 0; i < 4; i++) {
      handleFill(image, r + dx[i], c + dy[i]);
    }
  };
  handleFill(image, sr, sc);

  return image;
};
console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  ),
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
);
