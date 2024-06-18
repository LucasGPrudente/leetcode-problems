// Compress the string word 

class Solution {
    public String compressedString(String word) {
        StringBuilder comp = new StringBuilder();

        int i = 0;

        while (i < word.length()) {
            char c = word.charAt(i);
            int ct = 0;

            while (i < word.length() && word.charAt(i) == c && ct < 9) {
                ct++;
                i++;
            }

            comp.append(String.valueOf(ct)).append(c);
        }

        return comp.toString();
    }
}
