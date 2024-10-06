// Return the total number of laser beams in the bank

/**
 * @param {string[]} bank
 * @return {number}
 */

var numberOfBeams = function (bank) {
    let count = 0;
    let previous = 0;

    for (let floor of bank) {
        let one = floor.split("").filter((x) => x == '1').length;

        if (one > 0) {
            count += one * previous;
            previous = one;
        }
    }

    return count;
};