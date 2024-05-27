// Return x if the array is special, otherwise, return -1

/**
 * @param {number[]} nums
 * @return {number}
 */

var specialArray = function (nums) {
    let x = 0;

    let l = nums.length;

    for (let i = 0; i < l; i++) {
        x = l - i;

        if (nums.filter(e => e >= x).length == x) { return x; }
    }

    return -1;
};
