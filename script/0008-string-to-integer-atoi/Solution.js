// Converts a string to a 32-bit signed integer

/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
    let num = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') { continue; }

        if (s[i] == '.' || isLetter(s[i])) { break; }

        if (s[i] == '-' || s[i] == '+') { num += s[i++]; }

        while (i < s.length && s[i] == '0') {
            i++;
        }

        while (i < s.length && isDigit(s[i])) {
            num += s[i++];
        }

        break;
    }

    if (num.length == 0 || num == "+" || num == "-") { return 0; }

    if (num.length >= 10) {
        let cur = Number(num);
        let min = Math.pow(2, 31) * -1;
        let max = Math.pow(2, 31) - 1;

        if (cur < min) { return min; }

        if (cur > max) { return max; }
    }

    return parseInt(num);

    function isLetter(c) { return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z'; }

    function isDigit(c) { return c >= '0' && c <= '9'; }
};