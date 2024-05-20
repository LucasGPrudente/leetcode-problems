// Find a element that is strictly greater than its neighbors

class Solution {
    public int findPeakElement(int[] nums) {
        int lgth = nums.length;

        if (lgth == 1 || nums[0] > nums[1]) { return 0; }

        if (nums[lgth - 2] < nums[lgth - 1]) { return lgth - 1; }

        int s = 1;
        int m = 0;
        int e = lgth - 1;

        while (s <= e) {
            m = (e + s) / 2;

            if (nums[m] > nums[m + 1] && nums[m] > nums[m - 1]) { break; } 
            else if (nums[m] > nums[m - 1]) { s = m + 1; } 
            else { e = m - 1; }
        }

        return m;
    }
}
