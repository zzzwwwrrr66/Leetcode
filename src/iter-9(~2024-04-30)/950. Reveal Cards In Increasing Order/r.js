/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const n = deck.length;
  // 오름정렬
  deck.sort((a, b) => a - b);
  const revealed = [];
  revealed.unshift(deck[n - 1]);

  // 5, 4, 3, 2, 1, 0
  for (let i = n - 2; i >= 0; i--) {
    // 맨위의 숫자를 까서 빼고 앞으로 박는다
    revealed.unshift(revealed.pop());
    // 덱에 카드가 남아있으면 맨뒤로 뺀다
    revealed.unshift(deck[i]);
  }
  return revealed;
};

// 거꾸로 생각하기
console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]));
