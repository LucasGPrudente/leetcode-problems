// Return the minimum possible sum of the cost of these subarrays

/**
 * @param {number[]} nums
 * @return {number}
 */

var minimumCost = function (nums) {
    let min1 = nums[1];
    let min2 = nums[2];

    if (nums[1] > nums[2]) {
        min1 = nums[2];
        min2 = nums[1];
    }

    for (let i = 3; i < nums.length; i++) {
        if (nums[i] < min1) {
            min2 = min1;
            min1 = nums[i];
        } else if (nums[i] < min2) {
            min2 = nums[i];
        }
    }

    return nums[0] + min1 + min2;
};