// Return the number of unique elements in nums

class Solution {
    public int removeDuplicates(int[] nums) {
        int lastUniqueNum = nums[0];
        int j = 1;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != lastUniqueNum) {
                nums[j] = nums[i];
                lastUniqueNum = nums[j];
                j++;
            }
        }

        return j;
    }
}
