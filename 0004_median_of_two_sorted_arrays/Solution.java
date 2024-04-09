// Return the median of the two sorted arrays
// Completed on 05/02/2024 (Last update on 24/02/2024)

class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int sz1 = nums1.length, sz2 = nums2.length, sz3 = sz1 + sz2;
        int[] mergedArr = new int[sz3];
        int i = 0, j = 0, k = 0;

        while (i < sz1 && j < sz2) {
            if (nums1[i] < nums2[j]) mergedArr[k++] = nums1[i++];
            else mergedArr[k++] = nums2[j++];
        }

        while (i < sz1) {
            mergedArr[k++] = nums1[i++];
        }

        while (j < sz2) {
            mergedArr[k++] = nums2[j++];
        }

        if (sz3 % 2 != 0) return (double) mergedArr[sz3 / 2];

        return (double) (mergedArr[(sz3 / 2) - 1] + mergedArr[sz3 / 2]) / 2;
    }
}
