var TimeMap = function () {
  this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  const map = this.map;
  if (!map.has(key)) map.set(key, []);
  map.get(key).push([value, timestamp]);
};

TimeMap.prototype.get = function (key, timestamp) {
  const arr = this.map.get(key) || [];

  let [left, right] = [0, arr.length - 1];
  let res = "";
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const [v, t] = arr[mid];
    if (timestamp === t) return v;
    if (timestamp >= t) {
      left = mid + 1;
      res = v;
    } else {
      right = mid - 1;
    }
  }
  return res;
};
