// Rearrange the matrix so that each pair is a positive and a negative

class Solution {
    public int[] rearrangeArray(int[] nums) {
        int[] newNums = new int[nums.length];

        int pos = 0;
        int neg = 1;

        for (int num : nums) {
            if (num > 0) {
                newNums[pos] = num;
                pos += 2;
            } else {
                newNums[neg] = num;
                neg += 2;
            }
        }

        return newNums;
    }
}
