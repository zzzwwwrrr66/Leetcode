/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class WordDictionary {
  constructor() {
    this.root = {};
  }
  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this.root;
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
    let node = this.root;
    const path = { isSearched: false };
    this.searchHelper(word, 0, node, path);

    return path.isSearched;
  }

  /**
   *
   * @param {string} word
   * @param {number} idx
   * @param {{}} node
   * @param {{isSearched: boolean}} path
   * @returns
   */
  searchHelper(word, idx, node, path) {
    if (!node) return;
    if (path.isSearched) return;

    const currWord = word[idx];

    // if last index
    if (word.length - 1 === idx) {
      if (currWord === ".") {
        for (const key in node) {
          let n = node[key];
          if (n === "isWord") continue;
          if (n.isWord) {
            path.isSearched = true;
            return;
          }
        }
      }

      if (currWord in node && node[currWord].isSearched) {
        path.isSearched = true;
        return;
      }

      return;
    }

    // else
    if (currWord === ".") {
      for (const key in node) {
        if (key === "isWord") continue;
        node = node[key];
        this.searchHelper(word, idx + 1, node, path);
      }
    } else {
      if (!(currWord in node)) return;
      node = node[currWord];
      this.searchHelper(word, idx + 1, node, path);
    }
    return;
  }
}

const wordDictionary = new WordDictionary();
// wordDictionary.addWord("ba");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");

console.log(
  wordDictionary.search("pad")
  // wordDictionary.search("bad"),
  // wordDictionary.search("a")
);
