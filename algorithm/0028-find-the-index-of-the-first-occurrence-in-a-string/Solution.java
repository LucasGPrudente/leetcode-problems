// If true, return the index of the first needle in the haystack occurrence

class Solution {
    public int strStr(String haystack, String needle) {
        if (haystack.contains(needle)) {
            return haystack.indexOf(needle);
        }

        return -1;
    }
}
