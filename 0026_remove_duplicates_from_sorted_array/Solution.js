var removeDuplicates = function (nums) {
    let i = 1;
    let lastUnique = nums[0];

    for (let n of nums) {
        if (n != lastUnique) {
            nums[i] = n;
            i++;
            lastUnique = n;
        }
    }

    return i;
};
