// Compress the string word

/**
 * @param {string} word
 * @return {string}
 */

var compressedString = function (word) {
    let comp = "";

    let i = 0;

    while (i < word.length) {
        let c = word.charAt(i);
        let ct = 0;

        while (i < word.length && word.charAt(i) == c && ct < 9) {
            ct++;
            i++;
        }

        comp += ct + c;
    }

    return comp;
};
