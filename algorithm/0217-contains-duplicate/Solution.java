// Return true if any value appears at least twice in the array

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> uniques = new HashSet<Integer>();

        for (int num : nums) {
            if (uniques.add(num) == false) { return true; }
        }

        return false;
    }
}
