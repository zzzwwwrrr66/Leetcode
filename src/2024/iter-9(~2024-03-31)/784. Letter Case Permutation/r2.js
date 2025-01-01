var letterCasePermutation = function (S) {
  return permut(S);
};

function permut(str, out = []) {
  str = str.split("");
  let till = "";
  for (let i of str) {
    if (out.length === 0) {
      if (isAlpha(i)) {
        out.push(i.toUpperCase());
        out.push(i.toLowerCase());
      } else {
        out.push(i);
      }
    } else {
      let alpha = isAlpha(i);
      if (alpha) {
        let up = i.toUpperCase();
        let low = i.toLowerCase();
        out = attach(out, up).concat(attach(out, low));
        out.push(till + up);
        out.push(till + low);
      } else {
        out = attach(out, i);
        out.push(till + i);
      }
    }
    till += i;
  }
  let set = new Set(out);
  return Array.from(set);
}

function attach(out, ch) {
  let newOut = [...out];
  for (let i = 0; i < out.length; i++) {
    newOut[i] += ch;
  }
  return newOut;
}

function isAlpha(ch) {
  return /[a-zA-Z]/i.test(ch);
}

console.log(letterCasePermutation("a1b2")); // return [("a1b2", "a1B2", "A1b2", "A1B2")];
