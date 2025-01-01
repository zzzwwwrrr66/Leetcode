/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const [NOT_CHECKED, CHECKING, COMPLETE] = [0, 1, 2];

  // courseMap, visited
  const courseMap = new Map();
  const visited = new Map();

  for (let i = 0; i < numCourses; i++) {
    courseMap.set(i, new Set());
    visited.set(i, NOT_CHECKED);
  }
  for (const [c1, c2] of prerequisites) {
    if (courseMap.has(c1)) {
      courseMap.get(c1).add(c2);
    }
  }

  function dfs(currCourse) {
    // base case
    if (courseMap.get(currCourse) && courseMap.get(currCourse).size === 0) {
      visited.set(currCourse, COMPLETE);
      return false;
    }
    const currVisitedStatus = visited.get(currCourse);
    if (currVisitedStatus !== NOT_CHECKED) {
      return currVisitedStatus === CHECKING;
    }

    visited.set(currCourse, CHECKING);

    const currSet = courseMap.get(currCourse);
    for (const course of currSet) {
      if (dfs(course)) {
        return true;
      }
    }

    visited.set(currCourse, COMPLETE);
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) {
      return false;
    }
  }

  return true;
};

canFinish(2, [[1, 0]]);
// canFinish(2, [
//   [1, 0],
//   [0, 1],
// ]);
