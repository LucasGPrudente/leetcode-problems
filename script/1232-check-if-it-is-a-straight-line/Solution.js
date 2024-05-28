// Check that these points form a straight line in the XY plane

/**
 * @param {number[][]} coord
 * @return {boolean}
 */

var checkStraightLine = function (coord) {
    let y = coord[1][1] - coord[0][1];
    let x = coord[1][0] - coord[0][0];

    for (let i = 2; i < coord.length; i++) {
        if (y * (coord[i][0] - coord[0][0]) != (coord[i][1] - coord[0][1]) * x) {
            return false;
        }
    }

    return true;
};
