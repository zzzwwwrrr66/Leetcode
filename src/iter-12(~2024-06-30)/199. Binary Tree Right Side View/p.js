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
var rightSideView = function (root) {
  const res = [];
  if (!root) return res;

  const queue = [root];
  while (queue.length > 0) {
    const levelSize = queue.length;
    let view = null;
    for (let i = 0; i < levelSize; i++) {
      const x = queue.shift();
      view = x;
      if (view.left) {
        queue.push(view.left);
      }
      if (view.right) {
        queue.push(view.right);
      }
    }
    if (view) {
      res.push(view.val);
    }
  }

  return res;
};
