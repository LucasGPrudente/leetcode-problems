var islandPerimeter = function (grid) {
    let perim = 0;
    let row = grid.length;
    let col = grid[0].length;

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] == 0) {
                continue;
            }

            let connCells = 0;

            if (r > 0 && grid[r - 1][c] == 1) {
                connCells++;
            }

            if (r < row - 1 && grid[r + 1][c] == 1) {
                connCells++;
            }

            if (c > 0 && grid[r][c - 1] == 1) {
                connCells++;
            }

            if (c < col - 1 && grid[r][c + 1] == 1) {
                connCells++;
            }

            perim += 4 - connCells;
        }
    }

    return perim;
};
