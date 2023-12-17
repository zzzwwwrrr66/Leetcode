class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.list = [];
  }

  insert(val) {
    if (this.map.has(val)) return false;
    // index
    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val);
    // 마지막으로 바꾸기 => invoke pop 을 위해서 -> pop 이 빠름
    this._swap(idx, this.list.length - 1);
    this.list.pop();
    // map
    this.map.set(this.list[idx], idx);
    this.map.delete(val);
    return true;
  }

  getRandom() {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }

  _swap(a, b) {
    const tmp = this.list[a];
    this.list[a] = this.list[b];
    this.list[b] = tmp;
  }
}

const test = new RandomizedSet();
test.insert(1);
test.insert(2);
test.remove(2);
test.insert(2);
