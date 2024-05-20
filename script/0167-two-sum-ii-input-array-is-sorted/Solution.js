// Find two numbers such that they add up to a specific target number

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, tgt) {
    let s = 0;
    let e = nums.length - 1;

    while (s < e) {
        if (nums[s] + nums[e] == tgt) { return [s + 1, e + 1]; }
        else if (nums[s] + nums[e] > tgt) { e--; }
        else { s++; }
    }
};
