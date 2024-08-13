/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const nodesMap = new Map();
  const visited = new Set();
  for (let i = 0; i < n; i++) {
    nodesMap.set(i, []);
  }
  for (let i = 0; i < edges.length; i++) {
    const [ed1, ed2] = edges[i];
    nodesMap.set(ed1, [...nodesMap.get(ed1), ed2]);
    nodesMap.set(ed2, [...nodesMap.get(ed2), ed1]);
  }

  function dfs(curr, prev) {
    if (!nodesMap.has(curr)) {
      return;
    }
    if (visited.has(curr)) {
      return;
    }

    visited.add(curr);
    const currNodes = nodesMap.get(curr);
    for (let i = 0; i < currNodes.length; i++) {
      const nextNode = currNodes[i];
      if (nextNode === prev) {
        continue;
      }
      dfs(nextNode, curr);
    }
  }

  let res = 0;
  for (const node of nodesMap.keys()) {
    if (visited.has(node)) {
      continue;
    }
    res++;
    dfs(node, -1);
  }

  return res;
};

countComponents(5, [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
]);
