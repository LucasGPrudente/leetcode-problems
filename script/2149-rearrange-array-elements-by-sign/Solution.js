// Rearrange the matrix so that each pair is a positive and a negative

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var rearrangeArray = function (nums) {
    let newNums = Array(nums.length);

    let pos = 0;
    let neg = 1;

    for (let num of nums) {
        if (num > 0) {
            newNums[pos] = num;
            pos += 2;
        } else {
            newNums[neg] = num;
            neg += 2;
        }
    }

    return newNums;
};
