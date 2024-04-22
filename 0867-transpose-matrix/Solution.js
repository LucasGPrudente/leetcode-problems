// Return the transpose of matrix
// TRANSPOSE of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var transpose = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let newMatrix = [];

    for (let i = 0; i < n; i++) {
        let arr = [];

        for (let j = 0; j < m; j++) {
            arr.push(matrix[j][i]);
        }

        newMatrix.push(arr);
    }

    return newMatrix;
};
