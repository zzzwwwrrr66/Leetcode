/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (edges.length === 0) {
    return true;
  }

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

  // 유효한 Nodes 면 TRUE OR FALSE
  //[[0,1],[1,2],[2,3],[1,3],[1,4]

  function dfs(currNode, prevNode) {
    if (visited.has(currNode) || !nodesMap.get(currNode)) {
      return false;
    }

    visited.add(currNode);
    const nextNodes = nodesMap.get(currNode);
    for (let i = 0; i < nextNodes.length; i++) {
      const nextNode = nextNodes[i];
      if (nextNode === prevNode) {
        continue;
      }
      if (!dfs(nextNode, currNode)) {
        return false;
      }
    }
    return true;
  }

  const result = dfs(0, -1) && visited.size === n;
  return result;
};

validTree(5, [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
]);
/*
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true
*/
