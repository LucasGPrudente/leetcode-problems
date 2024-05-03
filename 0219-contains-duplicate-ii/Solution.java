// Return true if there are two distinct indices in the array such that nums[i] == nums[j] and abs(i - j) <= k

class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Set<Integer> elements = new HashSet<Integer>();
        Set<Integer> duplicate = new HashSet<Integer>();

        for (int num : nums) {
            if (elements.add(num) == false) { duplicate.add(num); }

            elements.add(num);
        }

        for (int i = 0; i < nums.length; i++) {
            if (duplicate.contains(nums[i]) == false) { continue; }

            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j] && j - i <= k) { return true; }
            }
        }

        return false;
    }
}
