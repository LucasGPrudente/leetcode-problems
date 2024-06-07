// In a sorted array, find the starting and ending position of a given target value

class Solution {
    public int[] searchRange(int[] nums, int target) {
        int init = searchFirst(nums, target);

        int lgth = nums.length;

        if (lgth > 0 && init < lgth && nums[init] == target) {
            return new int[] { init, searchLast(nums, target) };
        }

        return new int[] { -1, -1 };
    }

    public int searchFirst(int[] arr, int x) {
        int lt = 0;
        int md = 0;
        int rt = arr.length - 1;

        while (lt <= rt) {
            md = (lt + rt) / 2;

            if (arr[md] >= x) {
                rt = md - 1;
            } else {
                lt = md + 1;
            }
        }

        return lt;
    }

    public int searchLast(int[] arr, int x) {
        int lt = 0;
        int md = 0;
        int rt = arr.length - 1;

        while (lt <= rt) {
            md = (lt + rt) / 2;

            if (arr[md] <= x) {
                lt = md + 1;
            } else {
                rt = md - 1;
            }
        }

        return rt;
    }
}
