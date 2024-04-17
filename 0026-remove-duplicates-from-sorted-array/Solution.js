var removeDuplicates = function (nums) {
    let lastUnique = nums[0];
    let i = 1;

    for (let n of nums) {
        if (n != lastUnique) {
            nums[i] = n;
            lastUnique = n;
            i++;
        }
    }

    return i;
};
