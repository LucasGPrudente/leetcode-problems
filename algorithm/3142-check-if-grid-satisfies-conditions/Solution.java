// Check if grid satisfies conditions

class Solution {
    public boolean satisfiesConditions(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
 
        for (int j = 0; j < n; j++) {
            if (j < n - 1 && grid[0][j] == grid[0][j + 1]) { return false; }

            for (int i = 0; i < m; i++) {
                if (grid[i][j] != grid[0][j]) { return false; }
            }
        }

        return true;
    }
}
