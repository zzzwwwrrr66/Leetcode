/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const splitPath = path.split("/").filter(Boolean);
  let result = [];
  while (splitPath.length > 0) {
    const x = splitPath.shift();
    if (x === "..") {
      result.pop();
    } else if (x !== ".") {
      result.push(x);
    }
  }
  return "/" + result.join("/");
};

simplifyPath("/../");
simplifyPath("/home/");
simplifyPath("/home//foo/");
simplifyPath("/a/./b/../../c/");
