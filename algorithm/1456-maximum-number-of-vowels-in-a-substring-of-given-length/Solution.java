// Return the maximum number of vowel letters in any substring of s with length k

class Solution {
    public int maxVowels(String s, int k) {
        int max = 0;
        int vow = 0;
        int len = s.length();

        boolean[] isVowel = new boolean[len];

        for (int i = 0; i < len; i++) {
            isVowel[i] = charIsVowel(s.charAt(i));
        }

        int i = 0;

        while (i < k) {
            if (isVowel[i]) { vow++; }

            i++;
        }

        max = vow;

        while (i < len) {
            if (isVowel[i]) { vow++; }
            if (isVowel[i - k]) { vow--; }

            if (vow > max) { max = vow; }

            i++;
        }

        return max;
    }

    public boolean charIsVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }
}