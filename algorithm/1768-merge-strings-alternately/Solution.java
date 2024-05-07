// Merge the strings by adding letters in alternating order

class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder newStr = new StringBuilder();
        int length1 = word1.length();
        int length2 = word2.length();

        int i = 0;
        while (i < length1 && i < length2) {
            newStr.append(word1.charAt(i)).append(word2.charAt(i));
            i++;
        }

        while (i < length1) {
            newStr.append(word1.charAt(i));
            i++;
        }

        while (i < length2) {
            newStr.append(word2.charAt(i));
            i++;
        }

        return newStr.toString();
    }
}
