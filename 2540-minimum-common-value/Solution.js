// Return the minimum integer common to both arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var getCommon = function (nums1, nums2) {
    for (let x of nums1) {
        if (x < nums2[0] || x > nums2[nums2.length - 1]) { continue; }
        if (binarySearch(nums2, x) >= 0) { return x; }
    }

    return -1;
};

function binarySearch(arr, x) {
    let s = 0;
    let m = 0;
    let e = arr.length - 1;
    while (s <= e) {
        m = parseInt((s + e) / 2);

        if (arr[m] == x) { return m; }
        else if (arr[m] < x) { s = m + 1; }
        else { e = m - 1; }
    }

    return -1;
}
