// Return the number of islands

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
    let isl = 0;

    let m = grid.length;
    let n = grid[0].length;

    const mark = (grid, i, j) => {
        if (grid[i][j] == 0 || grid[i][j] == '*') { return; }

        grid[i][j] = '*';

        if (i > 0) { mark(grid, i - 1, j); }
        if (j > 0) { mark(grid, i, j - 1); }
        if (i < m - 1) { mark(grid, i + 1, j); }
        if (j < n - 1) { mark(grid, i, j + 1); }
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == '1') {
                isl++;
                mark(grid, i, j);
            }
        }
    }

    return isl;
};
