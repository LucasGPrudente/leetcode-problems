// Return the maximum distance between the indices of two prime numbers in nums

/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumPrimeDifference = function (nums) {
    let diff = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (isPrime(nums[i])) {
            diff = i;
            break;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i])) {
            diff -= i;
            break;
        }
    }

    return diff;
};

function isPrime(n) {
    if (n == 2) { return true; }

    if (n <= 1 || n % 2 == 0) { return false; }

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i == 0) { return false; }
    }

    return true;
}
