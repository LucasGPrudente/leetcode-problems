// Return if exist two subarrays of length 2 with equal sum

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var findSubarrays = function(nums) {
    let sums = new Set();

    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i] + nums[i + 1];

        if (sums.has(sum)) { return true; }

        sums.add(sum);
    }

    return false;
};