// Rotate the array to the right by k steps

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
    let lgth = nums.length;

    k = k % lgth;

    if (lgth == k || k == 0) { return; }

    let copy = [...nums];

    for (let i = 0, j = k; i < lgth; i++, j++) {
        if (j >= lgth) { j = j - lgth; }

        nums[j] = copy[i];
    }
};
