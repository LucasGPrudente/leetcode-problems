// Return the number of special letters in word (appears both in lowercase and uppercase)

/**
 * @param {string} word
 * @return {number}
 */

var numberOfSpecialChars = function (word) {
    let special = 0;

    for (let i = 97; i <= 122; i++) {
        let lower = String.fromCharCode(i);
        let upper = String.fromCharCode(i - 32);

        if (word.includes(lower) && word.includes(upper)) { special++; }
    }

    return special;
};
