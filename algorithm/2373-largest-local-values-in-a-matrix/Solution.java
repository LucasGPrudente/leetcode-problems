// Return the generated matrix

class Solution {
    public int[][] largestLocal(int[][] grid) {
        return traverseMatrix(grid, grid.length - 2);
    }

    public int[][] traverseMatrix(int[][] grid, int l) {
        int[][] maxLocal = new int[l][l];

        for (int i = 0; i < l; i++) {
            for (int j = 0; j < l; j++) {
                maxLocal[i][j] = findMax(grid, i, j);
            }
        }

        return maxLocal;
    }

    public int findMax(int[][] grid, int row, int col) {
        int max = 1;

        for (int i = row; i < row + 3; i++) {
            for (int j = col; j < col + 3; j++) {
                max = (grid[i][j] > max) ? grid[i][j] : max;
            }
        }

        return max;
    }
}
