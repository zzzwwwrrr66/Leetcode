/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // 1. 내림순정렬
  /* 
  2. 
    1, 2, 3, 4, 5
    논문수보다 작아지는 앞수가 h-index(index 번호) 가 됨
    6, 5, 3, 1, 0
  */

  /*
  2번째의 1 부터 작아짐으로 그전순위의 index 가 h-index 가됨 => 1
  1 2 3
  3 1 1
   */
  // base case
  if (citations.length === 1) {
    return 1;
  }
  citations.sort((a, b) => b - a);
  let index = 0;
  let curr = citations[index];
  while (curr > index) {
    index++;
    curr = citations[index];
  }

  return index;
};
console.log(hIndex([1, 3, 1]));
