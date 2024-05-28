// Compress the array by grouping consecutive repeated characters

/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function (chars) {
    let i = 0;
    let j = 0;

    while (i < chars.length) {
        let c = chars[i];
        let t = 0;

        while (i < chars.length && chars[i] == c) {
            t++;
            i++;
        }

        chars[j++] = c;

        if (t > 1 && j < chars.length) {
            for (let n of t.toString().split("")) {
                chars[j++] = n;
            }
        }
    }

    return j;
};
