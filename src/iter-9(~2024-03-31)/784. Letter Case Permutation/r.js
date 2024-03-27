var letterCasePermutation = function (S) {
  return dfs(S, 0);
};

function dfs(str, pos, out = [], curr = "") {
  if (pos === str.length || curr.length === str.length) {
    out.push(curr);
    return;
  }

  if (isAlphabet(str[pos])) {
    let up = curr + str[pos].toUpperCase();
    let low = curr + str[pos].toLowerCase();
    dfs(str, pos + 1, out, up);
    dfs(str, pos + 1, out, low);
  } else {
    dfs(str, pos + 1, out, curr + str[pos]);
  }

  return out;
}

function isAlphabet(ch) {
  return /[a-zA-Z]/i.test(ch);
}
console.log(letterCasePermutation("a1b2"));

/*
S = s
pos = 0
out = []
curr = ""
*/
