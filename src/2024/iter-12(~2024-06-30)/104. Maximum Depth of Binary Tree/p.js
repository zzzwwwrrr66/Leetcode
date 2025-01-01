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
 * @return {number}
 */
var maxDepth = function (root) {
  let maxDepth = 0;
  function dfs(root, depth) {
    if (!root) return true;
    maxDepth = Math.max(maxDepth, depth);

    const left = dfs(root.left, depth + 1, maxDepth);
    const right = dfs(root.right, depth + 1, maxDepth);
  }
  dfs(root, 1);

  return maxDepth;
};
