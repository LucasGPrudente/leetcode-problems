// Merge the strings by adding letters in alternating order

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
    let length1 = word1.length;
    let length2 = word2.length;
    let mergedStr = "";

    for (let i = 0; i < length1 || i < length2; i++) {
        if (i < length1) {
            mergedStr += word1.charAt(i);
        }
        if (i < length2) {
            mergedStr += word2.charAt(i);
        }
    }

    return mergedStr;
};
