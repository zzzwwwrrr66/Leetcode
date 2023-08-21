function numWaterBottles(numBottles, numExchange) {
  console.log("parseInt(numBottles / numExchange)", parseInt(numBottles / numExchange))
  let result = numBottles;
  if(numBottles < numExchange) return result
  while(true){
    if(numBottles < numExchange) break;
    result += parseInt(numBottles / numExchange);
    numBottles = parseInt(numBottles / numExchange) + (numBottles % numExchange)
    
  }
  return result;
};

console.log(numWaterBottles(2, 3)); // 18 X => 17 O