// Return how many of the stones are also jewels

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var numJewelsInStones = function (jewels, stones) {
    let count = 0;

    for (let x of stones) {
        if (jewels.indexOf(x) > -1) { count++; }
    }

    return count;
};
