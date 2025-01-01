/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  // 들어야하는 강의 ++
  const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    inDegrees[v]++;
  }
  console.log({ inDegrees });

  const q = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const currentNode = inDegrees[i];
    if (currentNode === 0) q.push(i);
  }
  console.log({ q });

  const res = [];
  while (q.length) {
    const x = q.shift();
    numCourses--;
    res.push(x);
    for (const [targetCourse, requiredCourse] of prerequisites) {
      if (requiredCourse === x) {
        inDegrees[targetCourse]--;
        if (inDegrees[targetCourse] === 0) q.push(targetCourse);
      }
    }
  }
  return numCourses === 0 ? res : [];
};
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
