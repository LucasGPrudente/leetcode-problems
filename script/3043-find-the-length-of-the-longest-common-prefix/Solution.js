// Return the length of the longest common prefix among all pairs

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

var longestCommonPrefix = function (arr1, arr2) {
    let prefixes = new Set();

    for (let num of arr1) {
        let prefix = "";

        for (let c of num.toString().split("")) {
            prefix += c;

            prefixes.add(prefix);
        }
    }

    let maxLen = 0;

    for (let num of arr2) {
        let prefix = "";

        for (let c of num.toString().split("")) {
            prefix += c;

            if (prefixes.has(prefix) && prefix.length > maxLen) { maxLen = prefix.length; }
        }
    }

    return maxLen;
};