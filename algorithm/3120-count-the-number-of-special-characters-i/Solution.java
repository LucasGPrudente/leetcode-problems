// Return the number of special letters in word (appears both in lowercase and uppercase)

class Solution {
    public int numberOfSpecialChars(String word) {
        int special = 0;

        boolean[] letters = new boolean[123];

        for (char c : word.toCharArray()) {
            letters[c] = true;
        }

        for (int i = 0; i <= 25; i++) {
            if (letters['a' + i] && letters['A' + i]) { special++; }
        }

        return special;
    }
}
