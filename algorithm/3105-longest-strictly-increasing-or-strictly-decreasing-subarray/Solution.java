// Return the length of the largest subarray of nums that is increasing or decreasing

class Solution {
    public int longestMonotonicSubarray(int[] nums) {
        int ans = 0;

        int l = nums.length;

        int i = 0;
        int j = 0;

        while (i < l - 1) {
            if (i < l - 1 && nums[i] < nums[i + 1]) {
                j = i;

                while (j < l - 1 && nums[j] < nums[j + 1]) {
                    j++;
                }

                ans = Math.max(j - i + 1, ans);
            }

            i++;
        }

        i = 0;
        j = 0;

        while (i < l - 1) {
            if (i < l - 1 && nums[i] > nums[i + 1]) {
                j = i;

                while (j < l - 1 && nums[j] > nums[j + 1]) {
                    j++;
                }

                ans = Math.max(j - i + 1, ans);
            }

            i++;
        }

        return Math.max(ans, 1);
    }
}
