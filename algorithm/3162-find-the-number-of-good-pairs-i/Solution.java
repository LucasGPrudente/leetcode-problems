// Return the total number of good pairs

// A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k

class Solution {
    public int numberOfPairs(int[] nums1, int[] nums2, int k) {
        int n = nums1.length;
        int m = nums2.length;

        int pair = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if ((nums1[i] % (nums2[j] * k)) == 0) {
                    pair++;
                }
            }
        }

        return pair;
    }
}
