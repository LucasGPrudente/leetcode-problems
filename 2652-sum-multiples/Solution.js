// Return the sum of all numbers divisible by 3, 5 or 7 in the range [1, n]

/**
 * @param {number} n
 * @return {number}
 */

var sumOfMultiples = function (n) {
    let sum = 0;

    for (let i = 3; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) { sum += i; }
    }

    return sum;
};
