// Rotate the array to the right by k steps

class Solution {
    public void rotate(int[] nums, int k) {
        int l = nums.length;

        k = k % l;

        if (l == k || k == 0) {
            return;
        }

        int[] copy = nums.clone();

        for (int i = 0, j = k; i < l; i++, j++) {
            j = (j >= l) ? j - l : j;

            nums[j] = copy[i];
        }
    }
}
