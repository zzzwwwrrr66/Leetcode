class Trie {
  constructor() {
    this.root = {};
  }
  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (const currWord of word) {
      if (!node[currWord]) {
        node[currWord] = {};
        // 현재의 depth의 키값에 참조가 가능
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
    const node = this.wordSearch(word);
    return node && node.isWord ? true : false;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const result = this.wordSearch(prefix);
    return result !== null ? true : false;
  }

  wordSearch(word) {
    let node = this.root;
    for (const currWord of word) {
      if (!node[currWord]) return null;
      node = node[currWord];
    }
    return node;
  }
}
