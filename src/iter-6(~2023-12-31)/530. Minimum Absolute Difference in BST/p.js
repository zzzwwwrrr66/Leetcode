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
var getMinimumDifference = function (root) {
  // base case
  if (!root) return 0;

  let minDiff = Infinity;
  const list = [];

  const dfs = (node) => {
    if (node.left) {
      dfs(node.left);
    }
    list.push(node.val);
    if (node.right) {
      dfs(node.right);
    }
  };
  dfs(root);

  for (let i = 1; i < list.length; i++) {
    minDiff = Math.min(list[i] - list[i - 1], minDiff);
  }
  return minDiff;
};
