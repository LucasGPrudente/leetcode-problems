// Return the length of the largest subarray of nums that is increasing or decreasing

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestMonotonicSubarray = function (nums) {
    let l = nums.length;

    let ans = 0;

    let i = 0;
    let j = 0;

    while (i < l - 1) {
        j = i;

        if (nums[i] < nums[i + 1]) {
            while (j < l - 1 && nums[j] < nums[j + 1]) {
                j++;
            }
        } else {
            while (j < l - 1 && nums[j] > nums[j + 1]) {
                j++;
            }
        }

        ans = Math.max(j - i + 1, ans);

        i++;
    }

    return Math.max(ans, 1);
};
