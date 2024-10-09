// Return the maximum number of vowel letters in any substring of s with length k

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function (s, k) {
    let max = 0;
    let cnt = 0;

    let vow = ['a', 'e', 'i', 'o', 'u'];

    let i = 0;

    while (i < k) {
        if (vow.includes(s[i])) { cnt++; }

        i++;
    }

    max = cnt;

    while (i < s.length) {
        if (vow.includes(s[i])) { cnt++; }
        if (vow.includes(s[i - k])) { cnt--; }

        if (cnt > max) { max = cnt; }

        i++;
    }

    return max;
};