// Return the length of the last word in the string

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
    let str = s.trim();
    let l = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        if (str.charAt(i) == ' ') {
            break;
        }

        l++;
    }

    return l;
};
