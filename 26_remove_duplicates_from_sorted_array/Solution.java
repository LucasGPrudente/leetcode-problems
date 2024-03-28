class Solution {
    public int removeDuplicates(int[] nums) {
        int lastUniqueNum = nums[0], z = 1;

        for (int x : nums) {
            if (x != lastUniqueNum) {
                nums[z] = x;
                lastUniqueNum = nums[z];
                z++;
            }
        }

        return z;
    }
}
