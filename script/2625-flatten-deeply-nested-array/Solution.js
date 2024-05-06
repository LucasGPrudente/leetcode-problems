// Return a flattened version of that array

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function (arr, n) {
    if (n == 0) { return arr; }

    let newArr = [];

    for (let elem of arr) {
        if (!Array.isArray(elem)) { newArr.push(elem); }
        else { newArr.push(...flat(elem, n - 1)); }
    }

    return newArr;
};
