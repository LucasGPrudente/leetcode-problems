// Return the sum of all digits with their corresponding sign

/**
 * @param {number} n
 * @return {number}
 */

var alternateDigitSum = function (n) {
    let arr = n.toString().split("");
    let sum = 0;

    let i = 0;
    while (i < arr.length) {
        sum += arr[i++] - '0';

        if (i >= arr.length) { break; }

        sum -= arr[i++] - '0';
    }

    return sum;
};
