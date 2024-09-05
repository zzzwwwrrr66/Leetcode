/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  return JSON.stringify(strs);
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  return JSON.parse(s);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

decode(encode(["Hello", "World"]));
