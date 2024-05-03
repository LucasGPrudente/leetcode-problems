// Return the largest positive integer k such that -k also exists in the array

class Solution {
    public int findMaxK(int[] nums) {
        Arrays.sort(nums);

        List<Integer> negatives = new ArrayList<Integer>();

        int i = 0;
        while (i < nums.length) {
            if (nums[i] > 0) { break; }
            negatives.add(nums[i]);
            i++;
        }

        int j = nums.length - 1;
        while (j >= i) {
            if (negatives.contains(nums[j] * -1)) { return nums[j]; }
            j--;
        }

        return -1;
    }
}
