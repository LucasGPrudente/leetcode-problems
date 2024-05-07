// Return the resulting array arr from the game

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var numberGame = function (nums) {
    nums.sort((a, b) => { return a - b });

    let arr = [];

    for (let i = 0; i < nums.length; i += 2) {
        arr.push(nums[i + 1]);
        arr.push(nums[i]);
    }

    return arr;
};
