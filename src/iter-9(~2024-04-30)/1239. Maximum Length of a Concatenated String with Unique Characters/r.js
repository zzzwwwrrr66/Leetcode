/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let res = 0;

  let solve = (start, curr) => {
    if (curr.length !== new Set(curr.split("")).size) {
      return;
    }

    res = Math.max(res, curr.length);

    for (let i = start; i < arr.length; i++) {
      const currString = arr[i];
      solve(i + 1, `${curr}${currString}`);
    }
  };

  solve(0, "");

  return res;
};
// 글자를 합쳐서 유니크한 max length 를 return
maxLength(["un", "iq", "ue"]);
