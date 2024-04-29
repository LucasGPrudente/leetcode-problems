var isMonotonic = function (nums) {
    let length = nums.length;
    let lastNum = nums[0];

    if (nums[0] <= nums[length - 1]) {
        for (let i = 1; i < length; i++) {
            if (lastNum > nums[i]) return false;
            lastNum = nums[i];
        }
    } else {
        for (let i = 1; i < length; i++) {
            if (lastNum < nums[i]) return false;
            lastNum = nums[i];
        }
    }

    return true;
};
