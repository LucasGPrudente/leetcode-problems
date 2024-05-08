// Given two integer arrays nums1 and nums2, return an array of their intersection

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        int[] elem = new int[1000];

        for (int n : nums1) {
            elem[n]++;
        }

        int[] inter = new int[1000];

        int j = 0;
        for (int n : nums2) {
            if (elem[n] > 0) {
                elem[n] = 0;
                inter[j++] = n;
            }
        }

        return Arrays.copyOfRange(inter, 0, j);
    }
}
