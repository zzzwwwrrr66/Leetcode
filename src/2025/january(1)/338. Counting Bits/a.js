function convert(n) {
  const str = String(n);
  const len = str.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push(str[i] * Math.pow(2, len - 1 - i));
  }
  console.log(
    "res",
    res.reduce((a, b) => a + b)
  );
}
convert(1011); // 11
convert(10110);
convert(1011110);
convert(100000010);
// 10110 = 22;
