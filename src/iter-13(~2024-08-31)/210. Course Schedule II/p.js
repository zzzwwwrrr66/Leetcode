/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // If it is impossible to finish all courses, return an empty array.
  const [NOT_CHECKED, CHECKING, COMPLETE] = [0, 1, 2];

  const coursesMap = new Map();
  const visited = new Map();
  for (let i = 0; i < numCourses; i++) {
    coursesMap.set(i, new Set());
    visited.set(i, NOT_CHECKED);
  }
  for (const [c1, c2] of prerequisites) {
    const currCourse = coursesMap.get(c1);
    if (currCourse) {
      currCourse.add(c2);
    }
  }

  const result = [];
  function dfs(currCourse) {
    // visited check
    const currVisitedStatus = visited.get(currCourse);
    if (currVisitedStatus !== NOT_CHECKED) {
      return currVisitedStatus === CHECKING;
    }

    visited.set(currCourse, CHECKING);

    const currCoursesMap = coursesMap.get(currCourse);
    for (const c of currCoursesMap) {
      if (dfs(c)) {
        return true;
      }
    }

    result.push(currCourse);
    visited.set(currCourse, COMPLETE);
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) {
      return [];
    }
  }

  return result;
};

// findOrder(2, [[1, 0]]);
findOrder(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
]);
