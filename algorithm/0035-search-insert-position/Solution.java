// Return the index where it would be if it were inserted in order

class Solution {
    public int searchInsert(int[] nums, int target) {
        int x = 0;

        while (x < nums.length) {
            if (nums[x] == target || nums[x] > target) {
                return x;
            }
            
            x++;
        }

        return x;
    }
}
