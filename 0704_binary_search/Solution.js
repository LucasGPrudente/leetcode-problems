var search = function (nums, target) {
    let s = 0, m = 0, e = nums.length;

    while (s <= e) {
        m = parseInt((e + s) / 2);

        if (nums[m] == target) return m;
        else if (nums[m] < target) s = m + 1;
        else e = m - 1;
    }

    return -1;
};
