// Return x if the array is special, otherwise, return -1

class Solution {
    public int specialArray(int[] nums) {
        int n = 0;

        int l = nums.length;

        for (int i = 0; i < l; i++) {
            int x = l - i;

            if (countElements(nums, x)) {
                return x;
            }
        }

        return -1;
    }

    public boolean countElements(int[] nums, int x) {
        int ele = 0;

        for (int n : nums) {
            if (n >= x) {
                ele++;
            }
        }

        return ele == x;
    }
}
