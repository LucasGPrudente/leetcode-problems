// Return the final score

/**
 * @param {number[][]} nums
 * @return {number}
 */

var matrixSum = function (nums) {
    let m = nums.length;
    let n = nums[0].length;

    for (let i = 0; i < m; i++) {
        nums[i].sort((a, b) => a - b);
    }

    let scr = 0;

    for (let j = 0; j < n; j++) {
        let max = 0;

        for (let i = 0; i < m; i++) {
            if (nums[i][j] > max) {
                max = nums[i][j];
            }
        }

        scr += max;
    }

    return scr;
};