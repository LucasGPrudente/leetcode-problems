// Return if every pair of its adjacent elements contains two numbers with different parity

class Solution {
    public boolean isArraySpecial(int[] nums) {
        nums[0] = nums[0] % 2;

        for (int i = 1; i < nums.length; i++) {
            nums[i] = nums[i] % 2;

            if (nums[i - 1] == nums[i]) {
                return false;
            }
        }

        return true;
    }
}
