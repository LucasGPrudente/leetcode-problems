// Return the number of islands

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
    let isl = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                mark(grid, i, j);
                isl++;
            }
        }
    }

    return isl;

    function mark(grid, i, j) {
        grid[i][j] = '*';

        if (i > 0 && grid[i - 1][j] == '1') { mark(grid, i - 1, j); }
        if (j > 0 && grid[i][j - 1] == '1') { mark(grid, i, j - 1); }
        if (i < grid.length - 1 && grid[i + 1][j] == '1') { mark(grid, i + 1, j); }
        if (j < grid[0].length - 1 && grid[i][j + 1] == '1') { mark(grid, i, j + 1); }
    }
};
