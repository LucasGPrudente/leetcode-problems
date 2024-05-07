// Return the number of good pairs

class Solution {
    public int numIdenticalPairs(int[] nums) {
        int goodPairs = 0;

        for (int x = 0; x < nums.length; x++) {
            for (int z = x + 1; z < nums.length; z++) {
                if (nums[x] == nums[z] && x < z) {
                    goodPairs++;
                }
            }
        }

        return goodPairs;
    }
}
