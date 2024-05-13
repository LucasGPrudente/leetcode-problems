// Return the generated matrix

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

var largestLocal = function (grid) {
    let l = grid.length - 2;

    let maxLocal = new Array(l).fill(Array(l));

    for (let i = 0; i < l; i++) {
        let row = [l];

        for (let j = 0; j < l; j++) {
            let max = 1;

            for (let x = i; x < i + 3; x++) {
                for (let z = j; z < j + 3; z++) {
                    max = (grid[x][z] > max) ? grid[x][z] : max;
                }
            }

            row[j] = max;
        }

        maxLocal[i] = row;
    }

    return maxLocal;
};
