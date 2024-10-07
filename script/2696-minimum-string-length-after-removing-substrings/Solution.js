// Return the minimum possible length of the resulting string that you can obtain

/**
 * @param {string} s
 * @return {number}
 */

var minLength = function (s) {
    let str = s.split("");

    for (let i = 0; i < str.length - 1;) {
        let cur = str[i];
        let nxt = str[i + 1];

        if ((cur == 'A' && nxt == 'B') || (cur == 'C' && nxt == 'D')) {
            str.splice(i, 1);
            str.splice(i, 1);

            if (i > 0) { i--; }
        } else {
            i++;
        }
    }

    return str.length;
};