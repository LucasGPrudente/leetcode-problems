// Return the maximum number of pairs that can be formed from the array words

/**
 * @param {string[]} words
 * @return {number}
 */

var maximumNumberOfStringPairs = function (words) {
    let pairs = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i].charAt(0) == words[j].charAt(1) && words[j].charAt(0) == words[i].charAt(1)) { pairs++; }
        }
    }

    return pairs;
};
