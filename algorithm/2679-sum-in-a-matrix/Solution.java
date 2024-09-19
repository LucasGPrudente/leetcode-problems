// Return the final score

class Solution {
    public int matrixSum(int[][] nums) {
        int m = nums.length;
        int n = nums[0].length;

        for (int i = 0; i < m; i++) {
            Arrays.sort(nums[i]);
        }

        int scr = 0;

        for (int j = 0; j < n; j++) {
            int max = 0;

            for (int i = 0; i < m; i++) {
                if (nums[i][j] > max) {
                    max = nums[i][j];
                }
            }

            scr += max;
        }

        return scr;
    }
}