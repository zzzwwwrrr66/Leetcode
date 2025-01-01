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

// input : [1,2,3,4]
// input : [1,2,3,null,4]
var tree2str = function (root) {
  const result = [];
  // "1(2(4))(3)"
  // "1(2()(4))(3)"
  const rootNode = root;
  function dfs(node) {
    if (node === null) return;
    if (node !== rootNode) {
      result.push("(");
    }

    result.push(node.val);

    // left 에서 먼저 가니까 !node.left && node.right가 나와야 한다
    if (!node.left && node.right) {
      result.push("(");
      result.push(")");
    }

    if (node.left) {
      dfs(node.left);
    }
    if (node.right) {
      dfs(node.right);
    }

    if (node !== rootNode) {
      result.push(")");
    }
  }

  dfs(root);

  return result.join("");
};
