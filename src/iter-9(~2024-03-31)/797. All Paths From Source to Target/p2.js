/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const target = graph.length - 1;

  const res = [];

  const DFS = (node, path) => {
    path.push(node);

    // if we've reached the target, we've found a path
    if (node === target) {
      res.push(path);
      return;
    }

    for (let edge of graph[node]) {
      DFS(edge, [...path]);
    }
  };

  DFS(0, []);

  return res;
};

allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]); // [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
