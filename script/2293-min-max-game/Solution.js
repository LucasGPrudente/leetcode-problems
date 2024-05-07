// Return the last number that remains in nums after applying the algorithm

/**
 * @param {number[]} nums
 * @return {number}
 */

var minMaxGame = function (nums) {
    this.nums = nums;

    if (this.nums.length == 1) { return this.nums[0]; }

    while (this.nums.length > 1) {
        let newNums = [];

        let i = 0;
        while (i < this.nums.length) {
            newNums.push(Math.min(this.nums[i++], this.nums[i++]));

            if (i >= this.nums.length) { break; }

            newNums.push(Math.max(this.nums[i++], this.nums[i++]));
        }

        this.nums = newNums;
    }

    return this.nums[0];
};
