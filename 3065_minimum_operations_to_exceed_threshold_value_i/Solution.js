var minOperations = function (nums, k) {
    let min = 0;

    for (let n of nums) {
        if (n < k) min++;
    }

    return min;
};
