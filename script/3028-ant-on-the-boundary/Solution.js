// Return the number of times the ant returns to the boundary (starting point)

/**
 * @param {number[]} nums
 * @return {number}
 */

var returnToBoundaryCount = function (nums) {
    let times = 0;

    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]; 

        if (nums[i] == 0) { times++; }
    }

    return times;
};
