// Find a element that is strictly greater than its neighbors

/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function (nums) {
    let lgth = nums.length;

    if (lgth == 1 || nums[0] > nums[1]) { return 0; }

    if (nums[lgth - 2] < nums[lgth - 1]) { return lgth - 1; }

    let s = 0;
    let m = 0;
    let e = lgth - 1;

    while (s <= e) {
        m = parseInt((s + e) / 2);

        if (nums[m] > nums[m - 1] && nums[m] > nums[m + 1]) { return m; }
        else if (nums[m] < nums[m + 1]) { s = m + 1; }
        else { e = m - 1; }
    }
};
