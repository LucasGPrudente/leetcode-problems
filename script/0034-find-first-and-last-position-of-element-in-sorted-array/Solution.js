// In a sorted array, find the starting and ending position of a given target value

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, targ) {
    let init = searchFirst(nums, targ);

    let lgth = nums.length;

    if (lgth > 0 && init < lgth && nums[init] == targ) {
        return [init, searchLast(nums, targ)];
    }

    return [-1, -1];

    function searchFirst(arr, x) {
        let lt = 0;
        let md = 0;
        let rt = arr.length - 1;

        while (lt <= rt) {
            md = parseInt((lt + rt) / 2);

            if (arr[md] >= x) {
                rt = md - 1;
            } else {
                lt = md + 1;
            }
        }

        return lt;
    }

    function searchLast(arr, x) {
        let lt = 0;
        let md = 0;
        let rt = arr.length - 1;

        while (lt <= rt) {
            md = parseInt((lt + rt) / 2);

            if (arr[md] <= x) {
                lt = md + 1;
            } else {
                rt = md - 1;
            }
        }

        return rt;
    }
};
