/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function (nestedList) {
  let sum = 0;
  const node = nestedList[0];

  const dfs = (depth, node) => {
    if (node instanceof Array) {
      node.forEach((v) => {
        dfs(depth + 1, v);
      });
    } else {
      sum += depth * node;
    }
  };

  nestedList.forEach((node) => {
    if (node instanceof Array) {
      dfs(1, node);
    } else {
      sum += node;
    }
  });

  return sum;
};
console.log(depthSum([[1, 1], 2, [1, 1]]), depthSum([1, [4, [6]]]), depthSum([0]));
