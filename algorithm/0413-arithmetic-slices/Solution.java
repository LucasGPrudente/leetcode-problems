// Return the number of arithmetic subarrays of nums

class Solution {
    public int numberOfArithmeticSlices(int[] nums) {
        int sub = 0;
        int l = nums.length;

        if (l < 3) {
            return sub;
        }

        for (int i = 0; i < l - 2; i++) {
            for (int j = i + 2; j < l; j++) {
                if (isArithmetic(nums, i, j)) {
                    sub++;
                } else {
                    break;
                }
            }
        }

        return sub;
    }

    public boolean isArithmetic(int[] arr, int i, int j) {
        int dif = arr[i] - arr[i + 1];
        
        for (; i < j; i++) {
            if (arr[i] - arr[i + 1] != dif) {
                return false;
            }
        }

        return true;
    }
}
