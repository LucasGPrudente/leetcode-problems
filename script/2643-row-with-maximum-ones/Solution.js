// Return an array containing the index of the row, and the number of ones in it

/**
 * @param {number[][]} mat
 * @return {number[]}
 */

var rowAndMaximumOnes = function(mat) {
    let ans = [0, 0];

    let m = mat.length;
    let n = mat[0].length;

    for (let i = 0; i < m; i++) {
        let cnt = 0;

        for (let j = 0; j < n; j++) {
            cnt += mat[i][j];
        }

        if (ans[1] < cnt) {
            ans[0] = i;
            ans[1] = cnt;
        }
    }

    return ans;
};