// Return all elements of the matrix in spiral order

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> spiral = new ArrayList<Integer>();

        // Quantity and number of elements covered
        int qty = matrix.length * matrix[0].length;
        int ele = 1;

        // Auxiliary variables to limit loops
        int a = matrix.length;
        int b = matrix[0].length;
        int c = 0;

        // Index in matrix
        int i = 0;
        int j = 0;

        for (; ele <= qty; i++, j++, a--, b--) {
            for (; j < b && ele <= qty; j++, ele++) {
                spiral.add(matrix[i][j]);
            }

            for (i++, j--; i < a && ele <= qty; i++, ele++) {
                spiral.add(matrix[i][j]);
            }

            for (i--, j--; j >= c && ele <= qty; j--, ele++) {
                spiral.add(matrix[i][j]);
            }

            for (i--, j++, c++; i >= c && ele <= qty; i--, ele++) {
                spiral.add(matrix[i][j]);
            }
        }

        return spiral;
    }
}
