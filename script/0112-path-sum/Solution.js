// Returns if the tree has a path from root-to-leaf such that the sum of all values ​​is equal to targetSum

/**
 * Definition for a binary tree node.
 *
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function (root, targetSum) {
    if (root == null) {
        return false;
    }

    return pathSum(root, targetSum, 0);

    function pathSum(root, target, sum) {
        sum += root.val;

        if (root.left == null && root.right == null) {
            return sum == target;
        }

        if (root.left != null) {
            if (root.right != null) {
                return pathSum(root.left, target, sum) || pathSum(root.right, target, sum);
            }

            return pathSum(root.left, target, sum);
        }

        return pathSum(root.right, target, sum);
    }
};