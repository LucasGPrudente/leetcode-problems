// Return the sum of the digits of x

/**
 * @param {number} x
 * @return {number}
 */

var sumOfTheDigitsOfHarshadNumber = function (x) {
    let num = x;
    let sum = 0;

    while (num > 0) {
        sum = parseInt(sum + num % 10);
        num = parseInt(num / 10);
    }

    if (x % sum == 0) { return sum; }

    return -1;
};
