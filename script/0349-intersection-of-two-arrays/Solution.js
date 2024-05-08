// Given two integer arrays nums1 and nums2, return an array of their intersection

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 
var intersection = function(nums1, nums2) {
    let inter = [];

    let setNums1 = new Set(nums1);

    for (let n of nums2) {
        if (setNums1.has(n) && !inter.includes(n)) { inter.push(n); }
    }

    return inter;
};
