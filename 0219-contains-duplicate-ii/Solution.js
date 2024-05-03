// Return true if there are two distinct indices in the array such that nums[i] == nums[j] and abs(i - j) <= k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
    let elements = new Set();
    let duplicate = new Set();

    for (let num of nums) {
        if (elements.has(num)) { duplicate.add(num); }

        elements.add(num);
    }

    for (let i = 0; i < nums.length; i++) {
        if (duplicate.has(nums[i]) == false) { continue; }

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && j - i <= k) { return true; }
        }
    }

    return false
};
