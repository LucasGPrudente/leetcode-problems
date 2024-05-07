// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k

class Solution {
    public int minOperations(int[] nums, int k) {
        int min = 0;

        for (int n : nums) {
            if (n < k) {
                min++;
            }
        }

        return min;
    }
}
