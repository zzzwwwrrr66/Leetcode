const { MaxPriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * heap 의 size를 this.k 로 계속 유지
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.nums = new MinPriorityQueue();
    for (const n of nums) {
      this.add(n);
    }
  }

  add(val) {
    if (this.nums.size() < this.k) {
      this.nums.enqueue(val);
      return this.getTop();
    }
    if (this.nums.size() >= this.k) {
      if (this.nums.front().element < val) {
        this.nums.dequeue();
        this.nums.enqueue(val);
      }
    }
    return this.getTop();
  }

  getTop() {
    return this.nums.front().element || 0;
  }
}

// const k = new KthLargest(3, [4, 5, 8, 2]);
// k.add(3); // 4
// k.add(5); // 5
// k.add(10); // 5
// k.add(9); // 8
// k.add(4); // 8

const k = new KthLargest(1, []);
k.add(-3); // -3
k.add(-2); // -2
k.add(-4); // -2
k.add(0); // 0
k.add(4); // 4
