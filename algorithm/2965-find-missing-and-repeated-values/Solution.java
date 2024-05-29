// Return the only multiplied number and missing number

class Solution {
    public int[] findMissingAndRepeatedValues(int[][] grid) {
        int[] ans = new int[2];

        int n = grid.length;

        int[] nums = new int[n * n + 1];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                nums[grid[i][j]]++;
            }
        }

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == 2) {
                ans[0] = i;
            } else if (nums[i] == 0) {
                ans[1] = i;
            }
        }

        return ans;
    }
}
