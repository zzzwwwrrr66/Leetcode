/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class WordDictionary {
  constructor() {
    this.dic = {};
  }
  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this.dic;
    for (const currWord of word) {
      if (!node[currWord]) {
        node[currWord] = {};
      }
      node = node[currWord];
    }
    node.isWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.dic;
    for (const key in this.dic) {
      if (word[0] === "." || word[0] === key) {
        for (let i = 0; i < word.length; i++) {
          if (i === 0 && word[i] === ".") {
            node = node[key];
            continue;
          }
          if (word[i] === ".") {
            if (Object.keys(node).length === 1 && node.isWord) {
              return false;
            }
            for (const currKey in node) {
              if (currKey !== "isWord") {
                node = node[currKey];
              }
            }
            continue;
          }
          node = node[word[i]];
        }
      }
      if (node && node.isWord) return true;
    }

    return false;
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("a");
wordDictionary.addWord("a");

wordDictionary.search("a.");
// wordDictionary.search("b.d");
