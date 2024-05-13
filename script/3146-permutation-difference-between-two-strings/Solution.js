// Return the permutation difference between s and t

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

var findPermutationDifference = function (s, t) {
    let diff = 0;

    s.split("").forEach((c, i) => {
        diff += Math.abs(i - t.indexOf(c));
    });

    return diff;
};
