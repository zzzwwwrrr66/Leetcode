class WordDictionary {
  constructor() {
    this.root = {};
  }

  addWord(word) {
    let node = this.root;
    for (const currWord of word) {
      if (!node[currWord]) {
        node[currWord] = {};
      }
      node = node[currWord];
    }
    node.end = true;
  }

  search(word) {
    const path = { isFound: false };
    this.searchHelper(word, 0, this.root, path);
    return path.isFound;
  }

  searchHelper(word, idx, node, path) {
    if (!node) return;
    if (path.isFound) return;

    let char = word[idx];

    // if last index
    if (idx == word.length - 1) {
      // if last char is "." && last index
      if (char == ".") {
        let nodeKeys = Object.keys(node);
        // "." 는 pass 하니까 그다음이 end 인지 찾기
        for (let key of nodeKeys) {
          let n = node[key];
          if (n == "end") continue;
          if (n.end) {
            path.isFound = true;
            return;
          }
        }
      }

      if (char in node && node[char].end) {
        path.isFound = true;
        return;
      }

      return;
    }

    if (char == ".") {
      for (let c in node) {
        if (c == "end") continue;
        this.searchHelper(word, idx + 1, node[c], path);
      }
    } else {
      if (!(char in node)) return;
      this.searchHelper(word, idx + 1, node[char], path);
    }

    return;
  }
}

const wordDictionary = new WordDictionary();

// wordDictionary.addWord("a");
// wordDictionary.addWord("a");

// wordDictionary.search("a.");

// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");

// wordDictionary.search("pad");
// console.log(wordDictionary.search("bad"));
// wordDictionary.search(".ad");
