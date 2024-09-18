// Returns if the tree has a path from root-to-leaf such that the sum of all values ​​is equal to targetSum

/**
 * Definition for a binary tree node.
 *
 * public class TreeNode {
 *      int val;
 *      TreeNode left;
 *      TreeNode right;
 *      TreeNode() {}
 *      TreeNode(int val) { this.val = val; }
 *      TreeNode(int val, TreeNode left, TreeNode right) {
 *          this.val = val;
 *          this.left = left;
 *          this.right = right;
 *      }
 * }
 */

class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) {
            return false;
        }

        return pathSum(root, targetSum, 0);
    }

    public boolean pathSum(TreeNode root, int target, int sum) {
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
}