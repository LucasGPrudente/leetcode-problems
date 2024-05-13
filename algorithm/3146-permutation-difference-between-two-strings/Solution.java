// Return the permutation difference between s and t

class Solution {
    public int findPermutationDifference(String s, String t) {
        int diff = 0;

        for (int i = 0; i < s.length(); i++) {
            diff += Math.abs(i - t.indexOf(s.charAt(i)));
        }

        return diff;
    }
}
