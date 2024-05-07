// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var minOperations = function (nums, k) {
    let min = 0;

    for (let n of nums) {
        if (n < k) { min++; }
    }

    return min;
};
