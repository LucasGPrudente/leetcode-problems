// Return true if it is possible to create a 2 x 2 square of the same color

/**
 * @param {character[][]} grid
 * @return {boolean}
 */

var canMakeSquare = function (grid) {

    function countColor(row, col) {
        let b = 0;
        let w = 0;

        for (let i = row; i <= row + 1; i++) {
            for (let j = col; j <= col + 1; j++) {
                if (grid[i][j] == 'B') { b++; }
                else { w++; }
            }
        }

        return b >= 3 || w >= 3;
    }

    if (countColor(0, 0) || countColor(0, 1) || countColor(1, 0) || countColor(1, 1)) { return true; }
    
    return false;
};
