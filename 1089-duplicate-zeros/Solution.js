// Duplicate each occurrence of zero, shifting the remaining elements to the right

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function (arr) {
    let length = arr.length;
    let newArr = new Array(length);

    newArr.fill(0);

    for (let i = 0, j = 0; j < length; i++, j++) {
        if (arr[i] == 0) { j++; }
        else { newArr[j] = arr[i]; }
    }

    for (let i = 0; i < length; i++) {
        arr[i] = newArr[i];
    }
};
