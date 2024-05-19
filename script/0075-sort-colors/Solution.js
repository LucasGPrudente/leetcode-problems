// Sort the array without using the library's sort function

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
    let cur = 0;

    let pt1 = 0;
    let pt2 = nums.length - 1;

    let tmp = 0;

    while (cur <= pt2) {
        if (nums[cur] == 0) {
            tmp = nums[pt1];
            nums[pt1++] = nums[cur];
            nums[cur++] = tmp;
        }
        else if (nums[cur] == 2) {
            tmp = nums[pt2];
            nums[pt2--] = nums[cur];
            nums[cur] = tmp;
        }
        else { cur++; }
    }
};
