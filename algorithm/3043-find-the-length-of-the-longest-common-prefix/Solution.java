// Return the length of the longest common prefix among all pairs

class Solution {
    public int longestCommonPrefix(int[] arr1, int[] arr2) {
        Set<Integer> prefixes = new HashSet<>();

        for (int num : arr1) {
            int cur = 0;

            for (char c : String.valueOf(num).toCharArray()) {
                cur = (cur * 10) + (c - '0');

                prefixes.add(cur);
            }
        }

        int maxLen = 0;

        for (int num : arr2) {
            int cur = 0;
            int len = 0;

            for (char c : String.valueOf(num).toCharArray()) {
                cur = (cur * 10) + (c - '0');
                len++;

                if (prefixes.contains(cur) && len > maxLen) {
                    maxLen = len;
                }
            }
        }

        return maxLen;
    }
}