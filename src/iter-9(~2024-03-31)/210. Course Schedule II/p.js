/**
## 위상정렬 (Topology Sort)

- 순서가 정해져있는 작업을 차례로 수행해야 할때 순서를 정하기위한 알고리즘
  - 큐와 스텍으로 구현이 가능
    1. 진입차수가 0 인 노드를 Queue에 삽입
    2. Queue에서 shift후 연결된 간선을 모두 제거
    3. 제거후 0이 된 노드를 Queue에 삽입
    4. Queue가 빌때 까지 2,3 을 반복
    5. 모든원소를 방문했으면 큐에서 꺼낸 순서가 위상정렬, 모든원소를 방문하기전에 queue가 빈다면 사이클이 가능한 그래프이다
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // make graph
  const cntGraph = Array(numCourses).fill(0);

  // fill graph
  for (const [course] of prerequisites) {
    cntGraph[course]++;
  }

  const q = [];
  cntGraph.forEach((value, node) => {
    if (value === 0) {
      q.push(node);
    }
  });

  const result = [];
  // sort from Queue
  while (q.length) {
    const x = q.shift();
    numCourses--;
    result.push(x);

    for (const [targetCourse, requiredCourse] of prerequisites) {
      if (x === requiredCourse) {
        cntGraph[targetCourse]--;
        if (cntGraph[targetCourse] === 0) {
          q.push(targetCourse);
        }
      }
    }
  }

  return numCourses === 0 ? result : [];
};

findOrder(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
]);
console.log(findOrder(2, [[1, 0]]));
