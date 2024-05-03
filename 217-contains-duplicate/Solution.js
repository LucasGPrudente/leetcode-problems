// Return true if any value appears at least twice in the array

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
    return (nums.length == new Set(nums).size) == false;
};
