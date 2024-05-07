// Return the transpose of matrix
// TRANSPOSE of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices

class Solution {
    public int[][] transpose(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int[][] newMatrix = new int[n][m];

        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                newMatrix[i][j] = matrix[j][i];
            }
        }

        return newMatrix;
    }
}
