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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  function isEqual(root, subRoot) {
    if (!root || !subRoot) {
      if (!root && !subRoot) {
        return true;
      }
      return false;
    }

    if (root.val !== subRoot.val) {
      return false;
    }

    return isEqual(root.left, subRoot.left) && isEqual(root.right, subRoot.right);
  }

  function dfs(root) {
    if (!root) {
      return false;
    }

    if (isEqual(root, subRoot)) {
      return true;
    }

    return dfs(root.left) || dfs(root.right);
  }

  return dfs(root);
};
