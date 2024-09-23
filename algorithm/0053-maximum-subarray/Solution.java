// Find the subarray with the largest sum, and return its sum

class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = Integer.MIN_VALUE;
        int curSum = 0;

        for (int n : nums) {
            curSum += n;
            maxSum = Math.max(maxSum, curSum);

            if (curSum < 0) { curSum = 0; }
        }

        return maxSum;
    }
}