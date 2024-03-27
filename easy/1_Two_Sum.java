class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] indexOfNums = new int[2];

        outerloop: 
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    indexOfNums[0] = i;
                    indexOfNums[1] = j;
                    
                    break outerloop;
                }
            }
        }

        return indexOfNums;
    }
}
