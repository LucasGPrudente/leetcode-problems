// Return the smallest positive integer that is not present in nums

/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function (nums) {
    nums = nums.filter(x => x >= 1);

    nums = [... new Set(nums)];

    nums.sort((a, b) => { return a - b; });
    
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] != i + 1) { return i + 1; }
    }
};
