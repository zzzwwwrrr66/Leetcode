/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  if (s.length === 0) {
    return [0];
  }
  //
  const lastIndexMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const currChr = s[i];
    lastIndexMap.set(currChr, i);
  }

  const res = [];
  let [size, end] = [0, 0];
  for (let i = 0; i < s.length; i++) {
    const currChr = s[i];
    size += 1;
    end = Math.max(end, lastIndexMap.get(currChr));

    // able to push to res what lastIndexMap has alphabet
    if (i === end) {
      res.push(size);
      size = 0;
    }
  }
  return res;
};

partitionLabels("ababcbacadefegdehijhklij");
partitionLabels("eccbbbbdec");
