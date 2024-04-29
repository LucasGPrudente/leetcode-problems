// Return the maximum number of pairs that can be formed from the array words

class Solution {
    public int maximumNumberOfStringPairs(String[] words) {
        int pairs = 0;

        for (int x = 0; x < words.length; x++) {
            for (int z = x + 1; z < words.length; z++) {
                if (words[x].charAt(0) == words[z].charAt(1) && words[x].charAt(1) == words[z].charAt(0)) { pairs++; }
            }
        }

        return pairs;
    }
}
