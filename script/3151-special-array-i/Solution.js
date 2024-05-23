// Return if every pair of its adjacent elements contains two numbers with different parity

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isArraySpecial = function (nums) {
    nums[0] %= 2;

    for (let i = 0; i < nums.length; i++) {
        nums[i] %= 2;

        if (nums[i - 1] == nums[i]) { return false; }
    }

    return true;
};
