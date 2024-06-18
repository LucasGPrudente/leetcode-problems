// Return the number of arithmetic subarrays of nums

/**
 * @param {number[]} nums
 * @return {number}
 */

var numberOfArithmeticSlices = function(nums) {
    let sub = 0;
    let l = nums.length;

    if (l < 3) {
        return sub;
    }
    
    for (let i = 0; i < l - 2; i++) {
        for (let j = i + 2; j < l; j++) {
            if (isArithmetic(nums, i, j)) {
                sub++;
            } else {
                break;
            }
        }
    }

    return sub;

    function isArithmetic(arr, i, j) {
        let dif = arr[i] - arr[i + 1];

        for (; i < j; i++) {
            if (arr[i] - arr[i + 1] != dif) {
                return false;
            }
        }

        return true;
    }
};
