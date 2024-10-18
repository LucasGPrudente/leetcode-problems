// Return if exist two subarrays of length 2 with equal sum

class Solution {
    public boolean findSubarrays(int[] nums) {
        Set<Integer> sums = new HashSet<>();

        for (int i = 0; i < nums.length - 1; i++) {
            if (!sums.add(nums[i] + nums[i + 1])) { return true; }
        }

        return false;
    }
}