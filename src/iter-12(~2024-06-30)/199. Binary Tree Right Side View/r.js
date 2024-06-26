/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// BFS method
var rightSideView = function (root) {
  if (!root) return [];
  let results = [];
  // Add 's' or any letter after each level
  let stack = [root, "s"];
  while (stack.length > 1) {
    let node = stack.shift();

    if (node === "s") {
      stack.push("s");
    } else {
      if (node.val !== undefined) {
        // if the first element is 's' in stack you are at the right most node.
        if (stack[0] === "s") results.push(node.val);
      }
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }

  return results;
};
