/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const n = deck.length;
  deck.sort((a, b) => a - b);

  console.log(deck);
  const result = [];
  result.unshift(deck[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    console.log({ result, i });
    result.unshift(result.pop());
    result.unshift(deck[i]);
  }

  return result;
};

// 거꾸로 생각하기
console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]));

/**
 * Input: deck = [17,13,11,2,3,5,7]
 * Output: [2,13,3,11,5,17,7]
 */
/*
    1. deck 오름차순으로 정렬 
    2. 맨위의 숫자를 까서 뺀다 
    3. 덱에 카드가 남아있으면 맨뒤로 뺀다 
    4. 2~3 반복 
  */
