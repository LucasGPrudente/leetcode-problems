// Sort the vowels in string, return the resulting string

/**
 * @param {string} s
 * @return {string}
 */

var sortVowels = function (s) {
    s = s.split("");

    let vows = [];

    s.forEach((c, i) => {
        if (isVowel(c)) {
            vows.push(c);
            s[i] = "*";
        }
    });

    vows.sort();

    for (let i = 0, j = 0; i < s.length; i++) {
        if (s[i] == "*") {
            s[i] = vows[j++];
        }
    }

    return s.join("");

    function isVowel(c) {
        c = c.toLowerCase();

        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }
};
