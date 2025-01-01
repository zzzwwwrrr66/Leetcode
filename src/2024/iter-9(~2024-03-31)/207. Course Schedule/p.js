/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * - point 1. numCourses는 필요없음?
 * - point 2. visiting 과 visited 의 차이
 * - point 3. 처음 dfs를 실행시키는 조건은 그냥 graph loop
 */
var canFinish = function (numCourses, prerequisites) {
  // build graph
  const graph = {};
  for (const pre of prerequisites) {
    const [a, b] = pre;
    if (!(a in graph)) {
      graph[a] = [];
    }
    graph[a].push(b);
  }
  console.log(graph);

  const visiting = new Set();
  const visited = new Set();
  const dfs = (node) => {
    const nodes = graph[node] ? graph[node] : null;
    visiting.add(node);
    // return case
    if (nodes) {
      for (const node of nodes) {
        if (visited.has(node)) {
          continue;
        }
        if (visiting.has(node)) {
          return true;
        }

        if (dfs(node)) {
          return true;
        }
      }
    }
    visiting.delete(node);
    visited.add(node);

    return false;
  };

  for (const node in graph) {
    console.log({ node });
    if (dfs(node)) {
      return false;
    }
  }

  return true;
};

console.log(
  canFinish(2, [[1, 0]]),
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
