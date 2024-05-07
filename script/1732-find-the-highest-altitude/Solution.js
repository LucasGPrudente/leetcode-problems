// Return the highest altitude

/**
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function (gain) {
    let high = 0;
    let currAlt = 0;

    gain.forEach((x) => {
        currAlt += x;

        if (currAlt > high) {
            high = currAlt;
        }
    });

    return high;
};
