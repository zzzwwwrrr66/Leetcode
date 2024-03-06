/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  console.log({ equations, values, queries });

  // 1. build key graph
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    // {'a': {'b': 3} }
    if (!(a in graph)) {
      graph[a] = {};
    }
    if (!(b in graph)) {
      graph[b] = {};
    }
    if (!(b in graph[a])) {
      graph[a][b] = values[i];
    }
    if (!(a in graph[b])) {
      graph[b][a] = 1 / values[i];
    }
  }
  console.log({ graph });

  // 2. graph bfs neighbor
  const dfs = (a, b, visited) => {
    // return case
    if (!(a in graph) || !(b in graph)) {
      return -1.0;
    }

    if (a === b) {
      return 1;
    }
    visited.add(a);
    // run recurtion
    const neighbors = graph[a];
    for (const neighbor in neighbors) {
      if (!visited.has(neighbor)) {
        let result = dfs(neighbor, b, visited);
        if (result !== -1.0) {
          return neighbors[neighbor] * result;
        }
      }
    }

    return -1.0;
  };

  // 3. loop queries and dfs
  const result = [];
  for (const querie of queries) {
    console.log({ querie });
    const [a, b] = querie;
    const visited = new Set();

    const res = dfs(a, b, visited);
    result.push(res);
  }

  return result;
};

calcEquation(
  [
    ["a", "b"],
    ["b", "c"],
  ],
  [2.0, 3.0],
  [
    // ["a", "c"],
    ["b", "a"],
    ["a", "e"],
    ["a", "a"],
    ["x", "x"],
  ]
);


{ a: { b: 2 }, b: { a: 0.5, c: 3 }, c: { b: 0.3333333333333333 } }