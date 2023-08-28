/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
  const numbers = Array.from({length: n}, (v,i)=>i+1);
  const visited = Array.from({length: n + 1}, ()=>0);
  
  visited[1] = 1;
  let i = 1;
  let turn = i * k;
  while(true) {
    const x = numbers.shift();
    if(turn === 0) {
      visited[x] += 1;
      i += 1;
      turn = i * k;
    }
    if(visited[x] === 2) break;

    numbers.push(x);
    turn -= 1;
  }
  
  const result = [];
  visited.forEach((v, i)=>{
    if(i !== 0 && visited[i] === 0) {
      result.push(i)
    }
  })
  
  return result;
};

circularGameLosers(5,2);