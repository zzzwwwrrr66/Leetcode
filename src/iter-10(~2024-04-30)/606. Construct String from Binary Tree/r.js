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
 * @return {string}
 */
var tree2str = function (root) {
  let result = "";
  const rootNode = root;
  dfs(root);
  function dfs(root) {
    if (root === null) return;
    if (root !== rootNode) result += "("; // to avoid () for root node

    result += root.val;

    if (!root.left && root.right) result += "()";

    dfs(root.left);
    dfs(root.right);

    if (root !== rootNode) result += ")";
  }
  return result;
};
