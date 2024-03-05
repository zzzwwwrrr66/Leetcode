/**
 * @param {string[][]} equations 단순한 2차배열 그래프 -> 오브젝트 기반 그래프를 만든다 {'a': { 'b': 2 }}
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  // Step 1: Build the graph
  let graph = {};

  for (let i = 0; i < equations.length; i++) {
    let [numerator, denominator] = equations[i];

    let value = values[i];

    if (!graph[numerator]) {
      graph[numerator] = {};
    }

    if (!graph[denominator]) {
      graph[denominator] = {};
    }

    graph[numerator][denominator] = value;
    graph[denominator][numerator] = 1 / value;
  }
  console.log({ graph });

  // Step 2: Evaluate queries using DFS
  let evaluateQuery = (numerator, denominator, visited) => {
    if (!(numerator in graph) || !(denominator in graph)) {
      return -1.0;
    }

    if (numerator === denominator) {
      return 1.0;
    }

    visited.add(numerator);
    let neighbors = graph[numerator];

    for (let neighbor in neighbors) {
      if (!visited.has(neighbor)) {
        let result = evaluateQuery(neighbor, denominator, visited);

        if (result !== -1.0) {
          return neighbors[neighbor] * result;
        }
      }
    }

    return -1.0;
  };

  // Step 3: Process queries
  let results = [];

  for (let query of queries) {
    let [numerator, denominator] = query;
    let visited = new Set();
    let result = evaluateQuery(numerator, denominator, visited);

    results.push(result);
  }

  return results;
};

calcEquation(
  [
    ["a", "b"],
    ["b", "c"],
  ],
  [2.0, 3.0],
  [
    ["a", "c"],
    ["b", "a"],
    ["a", "e"],
    ["a", "a"],
    ["x", "x"],
  ]
);
// equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]

// {
//   { a: { b: 2 }, b: { a: 0.5, c: 3 }, c: { b: 0.3333333333333333 } }
// }
