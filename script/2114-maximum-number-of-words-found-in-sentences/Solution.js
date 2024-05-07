// Return the maximum number of words that appear in a single sentence

/**
 * @param {string[]} sentences
 * @return {number}
 */

var mostWordsFound = function (sentences) {
    let maxWords = 0;

    sentences.forEach((sentence) => {
        let numWords = sentence.split(" ").length;

        maxWords = (numWords > maxWords) ? numWords : maxWords;
    });

    return maxWords;
};
