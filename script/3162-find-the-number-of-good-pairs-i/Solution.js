// Return the total number of good pairs

// A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

var numberOfPairs = function (nums1, nums2, k) {
    let pair = 0;

    let n = nums1.length;
    let m = nums2.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if ((nums1[i] % (nums2[j] * k)) == 0) {
                pair++;
            }
        }
    }

    return pair;
};
