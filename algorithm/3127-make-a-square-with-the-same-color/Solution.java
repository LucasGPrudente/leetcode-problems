// Return true if it is possible to create a 2 x 2 square of the same color

class Solution {
    public boolean canMakeSquare(char[][] grid) {
        if (countColor(grid, 0, 0) || countColor(grid, 0, 1) || countColor(grid, 1, 0) || countColor(grid, 1, 1)) { return true; }

        return false;
    }

    public boolean countColor(char[][] grid, int row, int col) {
        int b = 0;
        int w = 0;

        for (int i = row; i <= row + 1; i++) {
            for (int j = col; j <= col + 1; j++) {
                if (grid[i][j] == 'B') { b++; } 
                else { w++; }
            }
        }

        return b >= 3 || w >= 3;
    }
}
