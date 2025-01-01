/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = [];
  const target = graph.length - 1;

  const dfs = (node, path) => {
    path.push(node);

    if (node === target) {
      result.push(path);
      return;
    }

    for (const edge of graph[node]) {
      dfs(edge, [...path]);
    }
  };

  dfs(0, []);

  return result;
};

// allPathsSourceTarget([[1, 2], [3], [3], []]);
allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]); // [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
