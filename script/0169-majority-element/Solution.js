// Return the majority element

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    const counts = {};

    for (const num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;

        if (counts[num] > nums.length / 2) { return num; }
    }
};
