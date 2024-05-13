// Return true if word is valid

/**
 * @param {string} word
 * @return {boolean}
 */

var isValid = function (word) {
    let vows = 0;
    let cons = 0;

    for (let c of word.split("")) {
        if (c == '@' || c == '#' || c == '$') { return false; }

        if (c >= '0' && c <= '9') { continue; }

        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') { vows++; }
        else { cons++; }
    }

    return word.length >= 3 && vows > 0 && cons > 0;
};
