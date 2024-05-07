// Return the score of s

class Solution {
    public int scoreOfString(String s) {
        int score = 0;

        for (int i = 0; i < s.length() - 1; i++) {
            int temp = s.charAt(i) - s.charAt(i + 1);

            score += (temp > 0) ? temp : temp * -1;
        }

        return score;
    }
}
