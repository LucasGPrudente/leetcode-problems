var findDisappearedNumbers = function (nums) {
    let ans = [];
    let temp = new Array(nums.length + 1).fill(0);

    for (let n of nums) {
        temp[n]++;
    }

    for (let i = 1; i < temp.length; i++) {
        if (temp[i] == 0) ans.push(i);
    }

    return ans;
};
