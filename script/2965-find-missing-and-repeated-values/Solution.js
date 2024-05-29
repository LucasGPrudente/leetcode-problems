// Return the only multiplied number and missing number

/**
 * @param {number[][]} grid
 * @return {number[]}
 */

var findMissingAndRepeatedValues = function (grid) {
    let ans = Array(2);

    let n = grid.length;

    let nums = Array(n * n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            nums[grid[i][j]]++;
        }
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == 2) { ans[0] = i; }
        else if (nums[i] == 0) { ans[1] = i; }
    }

    return ans;
};
