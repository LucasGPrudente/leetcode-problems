// Return the minimum integer common to both arrays

class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        for (int n : nums1) {
            if (binarySearch(nums2, n) >= 0) { return n; }
        }

        return -1;
    }

    public int binarySearch(int[] arr, int x) {
        int s = 0;
        int m = 0;
        int e = arr.length - 1;
        while (s <= e) {
            m = (s + e) / 2;

            if (arr[m] == x) { return m; } 
            else if (arr[m] < x) { s = m + 1; } 
            else { e = m - 1; }
        }

        return -1;
    }
}
