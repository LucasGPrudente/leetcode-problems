// Return the smallest positive integer that is a multiple of both 2 and n

/**
 * @param {number} n
 * @return {number}
 */

var smallestEvenMultiple = function (n) {
    return (n % 2 == 0) ? n : n * 2;
};
