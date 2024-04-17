var searchInsert = function (nums, target) {
    let i = 0;

    for (i = 0; i < nums.length; i++) {
        if (target == nums[i] || target < nums[i]) {
            return i;
        }
    }

    return i;
};
