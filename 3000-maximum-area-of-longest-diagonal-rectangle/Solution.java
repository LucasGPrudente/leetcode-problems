class Solution {
    public int areaOfMaxDiagonal(int[][] dim) {
        double longDiag = 0;
        double maxArea = 0;

        for (int i = 0; i < dim.length; i++) {
            double diag = Math.sqrt((dim[i][0] * dim[i][0]) + (dim[i][1] * dim[i][1]));
            double area = dim[i][0] * dim[i][1];

            if (diag > longDiag) {
                longDiag = diag;
                maxArea = area;
            } else if (diag == longDiag && area > maxArea) {
                maxArea = area;
            }
        }

        return (int) maxArea;
    }
}
