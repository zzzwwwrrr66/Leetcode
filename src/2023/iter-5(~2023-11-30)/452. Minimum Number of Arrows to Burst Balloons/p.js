// DP ? BinarySearch ?
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 그리디인듯?! 헤쉬맵과 그리디 면 어떨까?
  // 최소 수부터 최대 수까지 loop
  // 차례로 돌면서 그 index 구할수 있는 가장 큰수 and 작은수(value) 를 구한다
  /*
    작업을 보상이 큰 것부터 차례로 정렬한다;
    S = {};	
    while(답을 구하지 못했음) {
      다음 작업을 선택;    //선택 절차
      if(이 작업을 추가하면 S가 적절하다)    //적절성 검사
          이 작업을 S에 추가;
      if(더 이상 작업이 없다)    //해답점검
          답을 구했음;
    }
   */

  // base case
  if (points.length === 1) {
    return 1;
  }

  points.sort((a, b) => a[0] - b[0]);
  let result = 0;
  let prev = null;
  for (let i = 0; i < points.length; i++) {
    const start = points[i][0];
    const end = points[i][1];
    if (prev === null || prev < start) {
      result++;
      prev = end;
    } else {
      prev = Math.min(prev, end);
    }
  }
};

findMinArrowShots([
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
]);
