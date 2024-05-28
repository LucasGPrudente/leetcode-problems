// Return the smallest positive integer that is not present in nums

class Solution {
    public int firstMissingPositive(int[] nums) {
        int min = 1;

        Set<Integer> set = new HashSet<Integer>();

        for (int x : nums) {
            if (x > 0) {
                set.add(x);
            }
        }

        while (min <= set.size()) {
            if (set.add(min)) {
                return min;
            }

            min++;
        }

        return min;
    }
}
