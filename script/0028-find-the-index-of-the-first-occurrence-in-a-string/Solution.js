// If true, return the index of the first needle in the haystack occurrence

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
    return (haystack.includes(needle)) ? haystack.indexOf(needle) : -1;
};
