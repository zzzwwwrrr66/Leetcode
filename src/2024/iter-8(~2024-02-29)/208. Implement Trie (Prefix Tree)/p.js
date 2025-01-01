class Trie {
  constructor() {
    this.list = new Set();
  }
  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    this.list.add(word);
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return [...this.list.values()].some((v) => v === word);
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return [...this.list.values()].some((v) => v.startsWith(prefix));
  }
}

const obj = new Trie();
console.log(obj.insert("apple"));
console.log(obj.search("apple"));
console.log(obj.startsWith("app"));
console.log(obj.startsWith("p"));

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
