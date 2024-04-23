// Return true if n is strictly palindromic and false otherwise

/**
 * @param {number} n
 * @return {boolean}
 */

var isStrictlyPalindromic = function (n) {
    for (let b = 2; b <= n - 2; b++) {
        let orig = n.toString(b);
        let rev = orig.split("").reverse().join("");

        if (orig != rev) {
            return false;
        }
    }

    return true;
};
