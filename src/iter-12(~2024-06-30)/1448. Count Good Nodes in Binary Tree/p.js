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
var goodNodes = function (root) {
  // root.val 보다 크거나 같은 값들
  if (!root) {
    return 0;
  }

  let cnt = 0;
  // 전역값은 전체적인(left, right관계없이) 시점에서의 값들의 설정값

  function dfs(node, maxNum) {
    // 함수의 인수들은(지역값) 그 노드의 상태에서의 값들
    if (!node) {
      return;
    }

    if (node.val >= maxNum) {
      cnt += 1;
      maxNum = node.val;
    }

    if (node.left) {
      dfs(node.left, maxNum);
    }
    if (node.right) {
      dfs(node.right, maxNum);
    }
  }

  dfs(root, root.val);

  return cnt;
};
