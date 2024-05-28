// Return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int l = nums.length;

        int[] newNums = new int[l];

        int z = 0;
        int p = 1;

        for (int i = 0; i < l; i++) {
            if (nums[i] == 0) {
                z++;
            } else {
                p *= nums[i];
            }
        }

        if (z == 0) {
            return noZeros(nums, l, p);
        }

        if (z == 1) {
            return oneZero(nums, l, p);
        }

        return newNums;
    }

    public int[] noZeros(int[] nums, int l, int p) {
        int[] arr = new int[l];

        for (int i = 0; i < l; i++) {
            arr[i] = p / nums[i];
        }

        return arr;
    }

    public int[] oneZero(int[] nums, int l, int p) {
        int[] arr = new int[l];

        for (int i = 0; i < l; i++) {
            if (nums[i] == 0) {
                arr[i] = p;
            } else {
                arr[i] = 0;
            }
        }

        return arr;
    }
}
