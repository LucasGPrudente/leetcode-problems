// Check if grid satisfies conditions

/**
 * @param {number[][]} grid
 * @return {boolean}
 */

var satisfiesConditions = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    for (let j = 0; j < n; j++) {
        if (j < n - 1 && grid[0][j] == grid[0][j + 1]) { return false; }

        for (let i = 0; i < m; i++) {
            if (grid[i][j] != grid[0][j]) { return false; }
        }
    }

    return true;
};
