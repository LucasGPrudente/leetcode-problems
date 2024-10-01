// Return the sorted string

/**
 * @param {string} s
 * @return {string}
 */

var frequencySort = function (s) {
    let count = new Map();

    for (let c of s.split("")) {
        count.set(c, count.get(c) + 1 || 1);
    }

    count = new Map([...count.entries()].sort((a, b) => b[1] - a[1]));

    let result = "";

    for (let [key, val] of count) {
        result += key.repeat(val);
    }

    return result;
};