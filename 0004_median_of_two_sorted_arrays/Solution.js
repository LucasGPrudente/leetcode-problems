var findMedianSortedArrays = function (nums1, nums2) {
    let lgth1 = nums1.length, lgth2 = nums2.length, lgth3 = lgth1 + lgth2;
    let mergedArr = [];
    let i = 0, j = 0;

    while (i < lgth1 && j < lgth2) {
        if (nums1[i] < nums2[j]) mergedArr.push(nums1[i++]);
        else mergedArr.push(nums2[j++]);
    }

    while (i < lgth1) {
        mergedArr.push(nums1[i++]);
    }

    while (j < lgth2) {
        mergedArr.push(nums2[j++]);
    }

    if (lgth3 % 2 != 0) return mergedArr[parseInt(lgth3 / 2)];

    return (mergedArr[parseInt(lgth3 / 2)] + mergedArr[parseInt((lgth3 / 2) - 1)]) / 2;
};
