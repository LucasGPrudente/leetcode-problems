// Return the quotient after dividing dividend by divisor

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function (dividend, divisor) {
    if (divisor == 1) { return dividend; }

    if (divisor == -1) {
        if (dividend == -2147483648) { return 2147483647; }

        return dividend * -1;
    }

    let negative = (dividend < 0 != divisor < 0) ? true : false;

    if (dividend < 0) { dividend *= -1; }
    if (divisor < 0) { divisor *= -1; }

    let digits = dividend.toString().split("").map(Number);

    let quotient = 0;
    let current = 0;

    for (let i = 0; i < digits.length; i++) {
        current = (current * 10) + digits[i];

        let t = 0;

        if (current == divisor) {
            t = 1;
            current = 0;
        } else if (current > divisor) {
            while (current - divisor >= 0) {
                current -= divisor;
                t++;
            }
        }

        quotient = (quotient * 10) + t;
    }

    return (negative) ? quotient * -1 : quotient;
};