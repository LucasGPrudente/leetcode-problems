// Implement pow(x, n), which calculates x raised to the power n

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function (x, n) {
    if (x == 0 || x == 1 || x == 0.00001 || n == 1) { return x; }
    if (n == 0) { return 1; }

    let pow = 1;
    let exp = (n > 0) ? n : n * -1;

    while (exp > 0) {
        if (exp % 2 == 0) {
            x *= x;
            exp = exp / 2;
        } else {
            pow *= x;
            exp--;
        }
    }

    return (n > 0) ? pow : 1 / pow;
};

// return Math.pow(x, n);
