// Return the rowIndex-th row of the Pascal's triangle

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
    let row = [];

    row.push(1);

    for (let t = 1; t <= rowIndex; t++) {
        let cur = [];

        cur.push(1);

        for (let i = 1; i < row.length; i++) {
            cur.push(row[i] + row[i - 1]);
        }

        cur.push(1);

        row = cur;
    }

    return row;
};