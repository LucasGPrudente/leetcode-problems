// Return true if sentence is a pangram, or false otherwise
// PANGRAM is a sentence that contains all the letters of the alphabet

/**
 * @param {string} sentence
 * @return {boolean}
 */

var checkIfPangram = function (sentence) {
    let letters = new Set();

    sentence.split("").forEach((letter) => {
        letters.add(letter);
    });

    return letters.size == 26;
};
