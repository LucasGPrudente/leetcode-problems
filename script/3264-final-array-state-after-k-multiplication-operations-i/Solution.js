// Return an integer array denoting the final state of nums after performing all k operations

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */

var getFinalState = function (nums, k, multiplier) {
    let heap = [];

    for (let i = 0; i < nums.length; i++) {
        heap.push([nums[i], i]);
    }

    while (k > 0) {
        heap.sort((a, b) => (a[0] == b[0]) ? a[1] - b[1] : a[0] - b[0]);

        let temp = heap.shift();

        let num = temp[0];
        let idx = temp[1];

        nums[idx] *= multiplier;

        heap.push([nums[idx], idx]);

        k--;
    }

    return nums;
};