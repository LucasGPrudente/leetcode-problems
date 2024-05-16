// Return all elements of the matrix in spiral order

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
    let spiral = [];

    // Quantity and number of elements covered
    let qty = matrix.length * matrix[0].length;
    let ele = 1;

    // Auxiliary variables to limit loops
    let a = matrix.length;
    let b = matrix[0].length;
    let c = 0;

    // Index in matrix
    let i = 0;
    let j = 0;

    for (; ele <= qty; i++, j++, a--, b--) {
        for (; j < b && ele <= qty; j++, ele++) {
            spiral.push(matrix[i][j]);
        }

        for (i++, j--; i < a && ele <= qty; i++, ele++) {
            spiral.push(matrix[i][j]);
        }

        for (i--, j--; j >= c && ele <= qty; j--, ele++) {
            spiral.push(matrix[i][j]);
        }

        for (i--, j++, c++; i >= c && ele <= qty; i--, ele++) {
            spiral.push(matrix[i][j]);
        }
    }

    return spiral;
};
