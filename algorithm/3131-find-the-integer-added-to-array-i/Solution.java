// Return the integer x

class Solution {
    public int addedInteger(int[] nums1, int[] nums2) {
        int min1 = nums1[0];
        int min2 = nums2[0];

        for (int i = 0; i < nums1.length; i++) {
            min1 = Math.min(min1, nums1[i]);
            min2 = Math.min(min2, nums2[i]);
        }

        return min2 - min1;
    }
}
