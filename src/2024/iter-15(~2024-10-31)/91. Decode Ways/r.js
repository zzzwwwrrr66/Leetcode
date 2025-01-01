var numDecodings = function (s) {
  const hash = new Map();
  function rec(s) {
    if (hash.has(s)) return hash.get(s);
    if (s[0] === "0") return 0;
    if (s.length === 1) return 1;
    if (s.length === 0) return 1;

    console.log(s.substring(1), "---> ", rec(s.substring(1)));
    console.log(s.substring(2), "---> ", rec(s.substring(2)));

    let res = rec(s.substring(1));

    if (parseInt(s.substring(0, 2)) <= 26) {
      res += rec(s.substring(2));
    }
    hash.set(s, res);
    console.log("result", res);
    console.log({ hash });

    return res;
  }

  return rec(s);
};
numDecodings("11106"); // return 2
// numDecodings("12");
// numDecodings("226");
// numDecodings("06");
