// Return the largest positive integer k such that -k also exists in the array

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxK = function (nums) {
    nums.sort((a, b) => { return a - b; });

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < 0) { break; }
        if (nums.includes(nums[i] * -1)) { return nums[i]; }
    }

    return -1;
};
