// Return x with its digits reversed

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    let num = x;
    let reversedNum = 0;

    if (x < 0) { num = num * -1; }

    while (num > 0) {
        reversedNum = parseInt((reversedNum * 10) + (num % 10));
        num = parseInt(num / 10);
    }

    if (reversedNum >= Math.pow(-2, 31) && reversedNum <= Math.pow(2, 31) - 1) {
        return (x > 0) ? reversedNum : reversedNum * -1;
    }

    return 0;
};
