/**
 * Return the following:
 * -> If version1 < version2, return -1
 * -> If version1 > version2, return 1
 * -> Otherwise, return 0
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

var compareVersion = function (version1, version2) {
    let values1 = version1.split(".").map((a) => parseInt(a));
    let values2 = version2.split(".").map((a) => parseInt(a));

    let i = 0;

    while (i < values1.length && i < values2.length) {
        if (values1[i] < values2[i]) { return -1; }
        if (values1[i] > values2[i]) { return 1; }

        i++;
    }

    while (i < values1.length) {
        if (values1[i] > 0) { return 1; }

        i++;
    }

    while (i < values2.length) {
        if (values2[i] > 0) { return -1; }

        i++;
    }

    return 0;
};