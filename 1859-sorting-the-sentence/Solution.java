// Reconstruct and return the original sentence

class Solution {
    public String sortSentence(String s) {
        String[] words = s.split(" ");
        String[] sentence = new String[words.length];

        for (String word : words) {
            int i = word.charAt(word.length() - 1) - '0';
            sentence[i - 1] = word.substring(0, word.length() - 1);
        }

        return String.join(" ", sentence);
    }
}
