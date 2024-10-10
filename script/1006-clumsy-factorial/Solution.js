// Return the clumsy factorial of n

/**
 * @param {number} n
 * @return {number}
 */

var clumsy = function (n) {
    if (n <= 2) { return n; }
    if (n == 3) { return 6; }

    let res = parseInt((n-- * n--) / n--);
    res += n--;

    while (n > 3) {
        res -= parseInt((n-- * n--) / n--);
        res += n--;
    }

    res -= (n <= 2) ? n : 6;

    return res;
};