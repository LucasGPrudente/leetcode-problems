// Return the first palindromic string in the array

/**
 * @param {string[]} words
 * @return {string}
 */

var firstPalindrome = function (words) {
    let i = 0;
    while (i < words.length) {
        if (isPalindrome(words[i])) { return words[i]; }
        i++;
    }

    return "";
};

function isPalindrome(str) {
    let s = 0;
    let e = str.length - 1;
    while (s < e) {
        if (str.charAt(s) !== str.charAt(e)) { return false; }
        s++;
        e--;
    }

    return true;
}
