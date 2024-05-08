// Return a Pascal's Triangle up to the number of x lines

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
    let triangle = [];
    let lastRow = [];

    for (let i = 0; i < numRows; i++) {
        let currRow = [];

        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                currRow.push(1);
                continue;
            }

            currRow.push(lastRow[j] + lastRow[j - 1]);
        }

        lastRow = currRow;
        triangle.push(currRow);
    }

    return triangle;
};
