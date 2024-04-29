// Return the last number that remains in nums after applying the algorithm

class Solution {
    public int minMaxGame(int[] nums) {
        while (nums.length > 1) {
            int[] temp = new int[nums.length / 2];

            int i = 0;
            int j = 0;
            while (i < temp.length) {
                temp[i++] = Math.min(nums[j++], nums[j++]);

                if (i >= temp.length) { break; }

                temp[i++] = Math.max(nums[j++], nums[j++]);
            }

            nums = temp;
        }

        return nums[0];
    }

}
