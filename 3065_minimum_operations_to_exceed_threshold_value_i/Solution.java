class Solution {
    public int minOperations(int[] nums, int k) {
        int min = 0;

        for(int n : nums){
            if(n < k) min++;
        }

        return min;
    }
}
