class Solution {
    public int islandPerimeter(int[][] grid) {
        int perim = 0;
        int row = grid.length;
        int col = grid[0].length;

        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (grid[i][j] == 0) {
                    continue;
                }

                int connCells = 0;

                if (i > 0 && grid[i - 1][j] == 1) {
                    connCells++;
                }

                if (i < row - 1 && grid[i + 1][j] == 1) {
                    connCells++;
                }

                if (j > 0 && grid[i][j - 1] == 1) {
                    connCells++;
                }
                
                if (j < col - 1 && grid[i][j + 1] == 1) {
                    connCells++;
                }

                perim += 4 - connCells;
            }
        }

        return perim;
    }
}
