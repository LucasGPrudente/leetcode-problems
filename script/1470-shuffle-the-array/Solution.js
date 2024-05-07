// Return the array in the form [x1,y1,x2,y2,...,xn,yn]

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function (nums, n) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(nums[i]);
        newArr.push(nums[i + n]);
    }

    return newArr;
};
