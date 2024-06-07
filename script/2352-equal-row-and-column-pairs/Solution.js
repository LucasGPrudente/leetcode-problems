// Return the number of pairs such that row and column are equal

/**
 * @param {number[][]} grid
 * @return {number}
 */

var equalPairs = function (grid) {
    let pr = 0;

    let n = grid.length;

    let rows = new Map();

    for (let i = 0; i < n; i++) {
        let row = grid[i].join(" ");

        rows.set(row, (rows.has(row)) ? rows.get(row) + 1 : 1);
    }

    for (let i = 0; i < n; i++) {
        let col = [];

        for (let j = 0; j < n; j++) {
            col.push(grid[j][i]);
        }

        col = col.join(" ");

        pr = (rows.has(col)) ? pr + rows.get(col) : pr;
    }

    return pr;
};
