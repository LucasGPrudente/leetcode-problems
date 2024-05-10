// Find the only number that does not repeat

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let single = 0;

    nums.forEach((num) => { single ^= num; });

    return single;
};
