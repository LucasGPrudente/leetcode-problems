class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if (n > 0) {
            for (int x = 0; x < n; x++) {
                nums1[x + m] = nums2[x];
            }
        }
        
        Arrays.sort(nums1);
    }
}
