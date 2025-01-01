/**
 * @param {number[]} N
 * @return {number}
 */
const jump = (N) => {
  let len = N.length - 1
  let curr = -1
  let next = 0
  let result = 0

  for (let i = 0; next < len; i++) {
      if (i > curr) {
          result += 1,
          curr = next
      }
      next = Math.max(next, N[i] + i)
  }
  return result
};
