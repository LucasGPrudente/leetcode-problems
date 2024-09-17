// Return the sum of the three integers such that the sum is closest to target

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);

    let sum = 0;
    let minDif = Number.MAX_VALUE;

    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let tmp = nums[i] + nums[j] + nums[k];
            let dif = Math.abs(target - tmp);

            if (dif == 0) {
                return tmp;
            } else if (tmp < target) {
                j++;
            } else {
                k--;
            }

            if (dif < minDif) {
                minDif = dif;
                sum = tmp;
            }
        }
    }

    return sum;
};