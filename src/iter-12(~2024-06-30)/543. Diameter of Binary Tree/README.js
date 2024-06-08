/**
 * 가장먼 노드간의 거리를 구하시오
 * }
 */
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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  function dfs(root) {
    // 끝 노드 에서부터 탐색을 시작
    if (!root) {
      return 0;
    }
    // same level value in left and right
    let left = dfs(root.left);
    let right = dfs(root.right);

    // 지금까지의 MAX = maxDiameter 와 현재까지의 = let + right 를 비교
    maxDiameter = Math.max(maxDiameter, left + right);

    // left, right 간에 지름이 더높은것에 + 1(현재노드) return
    return Math.max(left, right) + 1;
  }

  dfs(root);
  return maxDiameter;
};
