// Return an array containing the index of the row, and the number of ones in it

class Solution {
    public int[] rowAndMaximumOnes(int[][] mat) {
        int[] ans = new int[2];

        int m = mat.length;
        int n = mat[0].length;

        for (int i = 0; i < m; i++) {
            int cnt = 0;

            for (int j = 0; j < n; j++) {
                cnt += mat[i][j];
            }

            if (ans[1] < cnt) {
                ans[0] = i;
                ans[1] = cnt;
            }
        }

        return ans;
    }
}