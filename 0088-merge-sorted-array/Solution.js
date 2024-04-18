var merge = function (nums1, m, nums2, n) {
    if (n > 0) {
        for (let x = 0; x < n; x++) {
            nums1[x + m] = nums2[x];
        }
    }

    nums1.sort(function (a, b) { return a - b });
};
