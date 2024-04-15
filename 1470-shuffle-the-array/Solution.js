var shuffle = function (nums, n) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(nums[i]);
        newArr.push(nums[i + n]);
    }

    return newArr;
};
