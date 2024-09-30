// Return the value of the k-th character in word, after enough operations have been done for word to have at least k characters

/**
 * @param {number} k
 * @return {character}
 */

var kthCharacter = function (k) {
    let alphabet = [];

    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
        alphabet.push(String.fromCharCode(i));
    }

    alphabet.push("a");

    let word = "a";

    while (word.length < k) {
        for (let c of word.split("")) {
            word += alphabet[c.charCodeAt(0) - 96];
        }
    }

    return word.charAt(k - 1);
};