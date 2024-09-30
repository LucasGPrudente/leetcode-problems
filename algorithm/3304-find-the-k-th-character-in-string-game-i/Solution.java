// Return the value of the k-th character in word, after enough operations have been done for word to have at least k characters

class Solution {
    public char kthCharacter(int k) {
        char[] alphabet = new char[27];

        for (int i = 0; i < 27; i++) {
            alphabet[i] = (char) ('a' + i);
        }

        alphabet[26] = 'a';

        StringBuilder word = new StringBuilder();

        word.append("a");

        while (word.length() < k) {
            for (char c : word.toString().toCharArray()) {
                word.append(alphabet[c - 'a' + 1]);
            }
        }

        return word.charAt(k - 1);
    }
}