// Return the number of times the ant returns to the boundary (starting point)

/**
 * @param {number[]} nums
 * @return {number}
 */

var returnToBoundaryCount = function (nums) {
    let times = 0;
    let curr = 0;

    for (let num of nums) {
        curr += num;

        times = (curr == 0) ? times + 1 : times;
    }

    return times;
};
