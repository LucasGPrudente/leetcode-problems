// Increment the large integer by one and return the resulting array of digits

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
    let length = digits.length;

    for (let i = length - 1; i >= 0; i--) {
        digits[i]++;

        if (digits[i] > 9) { digits[i] = 0; }
        else { return digits; }
    }

    let newDigits = Array(length + 1).fill(0);

    newDigits[0] = 1;

    return newDigits;
};
