class Solution {
    public int searchInsert(int[] nums, int target) {
        int x = 0;

        while (x < nums.length) {
            if (target == nums[x] || target < nums[x]) {
                return x;
            }

            x++;
        }

        return x;
    }
}
