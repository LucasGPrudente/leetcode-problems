// Return the sum of the three integers such that the sum is closest to target

class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);

        int sum = 0;
        int minDif = Integer.MAX_VALUE;

        for (int i = 0; i < nums.length - 2; i++) {
            int j = i + 1;
            int k = nums.length - 1;

            while (j < k) {
                int tmp = nums[i] + nums[j] + nums[k];
                int dif = Math.abs(target - tmp);

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
    }
}