// Return the most frequent word that is not banned

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

var mostCommonWord = function (paragraph, banned) {
    let count = new Map();

    for (let i = 0; i < paragraph.length; i++) {
        let k = i;

        while (i < paragraph.length) {
            if (nonLetters(paragraph[i])) { break; }

            i++;
        }

        if (k - i == 0) { continue; }

        let word = paragraph.substring(k, i).toLowerCase();

        if (!banned.includes(word)) { count.set(word, count.get(word) + 1 || 1); }
    }

    let answer = "";

    for (let [key, val] of count) {
        if (answer == "" || val > count.get(answer)) { answer = key; }
    }

    return answer;

    function nonLetters(c) {
        return c == ' ' || c == '!' || c == '?' || c == '\'' || c == ',' || c == ';' || c == '.';
    }
};