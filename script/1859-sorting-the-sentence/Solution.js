// Reconstruct and return the original sentence

/**
 * @param {string} s
 * @return {string}
 */

var sortSentence = function (s) {
    let words = s.split(" ");
    let sentence = [];

    words.forEach((word) => {
        let i = word.charAt(word.length - 1);
        sentence[i - 1] = word.substring(0, word.length - 1);
    });

    return sentence.join(" ");
};
