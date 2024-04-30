// Write a function to search target in nums

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
    let s = 0;
    let m = 0;
    let e = nums.length;
    while (s <= e) {
        m = parseInt((e + s) / 2);

        if (nums[m] == target) { return m; }
        else if (nums[m] < target) { s = m + 1; }
        else { e = m - 1; }
    }

    return -1;
};
