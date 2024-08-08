/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (n !== edges.length + 1) return false;

  const nodesMap = new Map();
  for (let [from, to] of edges) {
    if (!nodesMap.has(from)) nodesMap.set(from, []);
    if (!nodesMap.has(to)) nodesMap.set(to, []);
    const arrFrom = nodesMap.get(from);
    const arrTo = nodesMap.get(to);
    arrFrom.push(to);
    arrTo.push(from);
  }

  const visited = new Set();
  const dfs = function (node) {
    if (node === null) return;
    if (visited.has(node)) return;

    visited.add(node);
    const children = nodesMap.get(node);
    if (!children) return;

    for (let child of children) {
      dfs(child);
    }
  };

  dfs(0);
  return visited.size === n;
};

validTree(5, [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
]);
