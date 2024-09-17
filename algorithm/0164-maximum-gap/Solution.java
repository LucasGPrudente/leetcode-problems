// Return the maximum difference between two successive elements in its sorted form

class Solution {
    public int maximumGap(int[] nums) {
        int max = Integer.MIN_VALUE;

        for (int n : nums) {
            max = Math.max(max, n);
        }

        for (int exp = 1; max / exp > 0; exp *= 10) {
            countSort(nums, exp);
        }

        int maxDif = 0;

        for (int i = 1; i < nums.length; i++) {
            maxDif = Math.max(maxDif, nums[i] - nums[i - 1]);
        }

        return maxDif;
    }

    public void countSort(int[] nums, int exp) {
        int len = nums.length;

        int[] count = new int[10];

        for (int n : nums) {
            count[(n / exp) % 10]++;
        }

        for (int i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        int[] output = new int[len];

        for (int i = len - 1; i >= 0; i--) {
            output[count[(nums[i] / exp) % 10] - 1] = nums[i];
            count[(nums[i] / exp) % 10]--;
        }

        for (int i = 0; i < len; i++) {
            nums[i] = output[i];
        }
    }
}