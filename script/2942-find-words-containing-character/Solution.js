// Return an array of indices representing the words that contain the character x

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

var findWordsContaining = function (words, x) {
    let ans = [];

    words.forEach((word, i) => {
        if (word.includes(x)) { ans.push(i); }
    });

    return ans;
};
