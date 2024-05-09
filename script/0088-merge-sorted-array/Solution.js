// Merge nums1 and nums2 into a single array sorted in non-decreasing order

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    if (n > 0) {
        for (let x = 0; x < n; x++) {
            nums1[x + m] = nums2[x];
        }
    }

    nums1.sort(function (a, b) { return a - b });
};
