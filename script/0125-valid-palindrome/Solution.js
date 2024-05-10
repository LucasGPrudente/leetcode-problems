// Return true if it is a palindrome

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (str) {
    let phase = [];

    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i).toLowerCase();

        if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) { phase.push(c); }
    }

    return phase.join("") == phase.reverse().join("");
};
