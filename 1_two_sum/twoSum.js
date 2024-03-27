var twoSum = function (nums, target) {
    let index = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (index.has(complement)) {
            return [index.get(complement), i];
        }

        index.set(nums[i], i);
    }
};
