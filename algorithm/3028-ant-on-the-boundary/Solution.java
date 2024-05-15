// Return the number of times the ant returns to the boundary (starting point)

class Solution {
    public int returnToBoundaryCount(int[] nums) {
        int times = 0;

        for (int i = 1; i < nums.length; i++) {
            nums[i] += nums[i - 1];

            if (nums[i] == 0) { times++; }
        }

        return times;
    }
}
