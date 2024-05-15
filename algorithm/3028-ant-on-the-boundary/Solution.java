// Return the number of times the ant returns to the boundary (starting point)

class Solution {
    public int returnToBoundaryCount(int[] nums) {
        int times = 0;
        int curr = 0;

        for (int num : nums) {
            curr += num;

            times = (curr == 0) ? times + 1 : times;
        }

        return times;
    }
}
