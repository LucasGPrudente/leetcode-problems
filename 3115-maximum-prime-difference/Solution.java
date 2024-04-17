class Solution {
    public int maximumPrimeDifference(int[] nums) {
        int diff = 0;

        for (int i = nums.length - 1; i >= 0; i--) {
            if (isPrime(nums[i])) {
                diff = i;
                break;
            }
        }

        for (int i = 0; i < nums.length; i++) {
            if (isPrime(nums[i])) {
                diff -= i;
                break;
            }
        }

        return diff;
    }

    public boolean isPrime(int n) {
        if (n == 2) {
            return true;
        }

        if (n <= 1 || n % 2 == 0) {
            return false;
        }

        for (int i = 3; i * i <= n; i += 2) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }
}
