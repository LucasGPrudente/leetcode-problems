// Return true if target is in matrix

class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int columns = matrix.length;
        int rows = matrix[0].length;

        for (int i = 0; i < columns; i++) {
            for (int j = 0; j < rows; j++) {
                if (matrix[i][j] == target) {
                    return true;
                }
            }
        }

        return false;
    }
}
