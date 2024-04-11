var findDuplicates = function (nums) {
    let duplicatedNums = [];
    let freq = new Array(nums.length + 1);
    freq.fill(0);

    nums.forEach((n) => {
        freq[n]++;
    });

    freq.forEach((n, i) => {
        if (n > 1) duplicatedNums.push(i);
    });

    return duplicatedNums;
};
