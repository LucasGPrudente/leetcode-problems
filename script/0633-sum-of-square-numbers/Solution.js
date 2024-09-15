// Return whether there are two integers a and b such that a2 + b2 = c

/**
 * @param {number} c
 * @return {boolean}
 */

var judgeSquareSum = function (c) {
    let a = 0;
    let b = 0;

    let s = 1;
    let e = c;

    while (s <= e) {
        b = parseInt(s + (e - s) / 2);

        if (b * b == c) {
            return true;
        } else if (b * b > c) {
            e = b - 1;
        } else {
            s = b + 1;
        }
    }

    let sum = 0;

    while (a <= b) {
        sum = parseInt((a * a) + (b * b));

        if (sum == c) {
            return true;
        } else if (sum > c) {
            b--;
        } else {
            a++;
        }
    }

    return false;
};
