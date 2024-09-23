// Find the subarray with the largest sum, and return its sum

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let curSum = 0;

    for (let n of nums) {
        curSum += n;
        maxSum = Math.max(maxSum, curSum);

        if (curSum < 0) { curSum = 0; }
    }

    return maxSum;
};