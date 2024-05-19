// Sort the array without using the library's sort function

class Solution {
    public void sortColors(int[] nums) {
        int cur = 0;

        int pt1 = 0;
        int pt2 = nums.length - 1;

        int tmp = 0;

        while (cur <= pt2) {
            if (nums[cur] == 0) {
                tmp = nums[pt1];
                nums[pt1] = nums[cur];
                nums[cur] = tmp;

                pt1++;
                cur++;
            } else if (nums[cur] == 2) {
                tmp = nums[pt2];
                nums[pt2] = nums[cur];
                nums[cur] = tmp;

                pt2--;
            } else {
                cur++;
            }
        }
    }
}
