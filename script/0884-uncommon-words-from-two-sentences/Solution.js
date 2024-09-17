// Returns a list of all uncommon words, i.e. words that appear only once

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

var uncommonFromSentences = function (s1, s2) {
    let words = new Map();

    for (let str of s1.split(" ").concat(s2.split(" "))) {
        words.set(str, (words.get(str) || 0) + 1);
    }

    let uncommon = [];

    for (const [key, value] of words) {
        if (value == 1) {
            uncommon.push(key);
        }
    }

    return uncommon;
};