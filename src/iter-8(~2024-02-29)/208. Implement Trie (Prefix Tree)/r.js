class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      // 현재 단어의 {} 안에 들어감
      node = node[c];
    }
    node.isWord = true;

    console.log("this.root", JSON.stringify(this.root));
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}

const obj = new Trie();
console.log(obj.insert("apple"));
console.log(obj.insert("app"));
// console.log(obj.insert("cat"));
// console.log(obj.search("apple"));
console.log(obj.search("app"));
console.log(obj.startsWith("app"));
console.log(obj.startsWith("p"));
