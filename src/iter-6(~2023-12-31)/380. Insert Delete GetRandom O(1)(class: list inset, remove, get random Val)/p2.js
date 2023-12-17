/**
 * @param {number} val
 * @return {boolean}
 */
class RandomizedSet {
  constructor() {
    this.list = new Set();
  }

  insert(val) {
    if (this.list.has(val)) {
      return false;
    }
    this.list.add(val);
    return true;
  }

  remove(val) {
    console.log(val);
    if (!this.list.has(val)) {
      return false;
    }
    return this.list.delete(val);
  }

  getRandom() {
    console.log();
    const randomIdx = parseInt(Math.random() * this.list.size, 10);
    return [...this.list][randomIdx];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
