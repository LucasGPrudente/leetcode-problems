// Return the pivot integer x

/**
 * @param {number} n
 * @return {number}
 */

var pivotInteger = function (n) {
    let num = 0;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    for (let i = 1; i <= n; i++) {
        num += i;

        if (num == sum) { return i; }

        sum -= i;
    }

    return -1;
};
