// Return a filtered array filteredArr

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
    let values = [];

    for (let x = 0; x < arr.length; x++) {
        if (fn(arr[x], x)) { values.push(arr[x]) }
    }

    return values;
};
