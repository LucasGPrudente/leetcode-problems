// Return if the array message is spam

/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */

var reportSpam = function (message, bannedWords) {
    let banned = new Set(bannedWords);

    let count = 0;

    for (let word of message) {
        if (banned.has(word)) { count++; }
        if (count > 1) { return true; }
    }

    return false;
};