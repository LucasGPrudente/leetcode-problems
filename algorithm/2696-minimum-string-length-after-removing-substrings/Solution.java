// Return the minimum possible length of the resulting string that you can obtain

class Solution {
    public int minLength(String s) {
        StringBuilder str = new StringBuilder(s);

        for (int i = 0; i < str.length() - 1;) {
            char cur = str.charAt(i);
            char nxt = str.charAt(i + 1);

            if ((cur == 'A' && nxt == 'B') || (cur == 'C' && nxt == 'D')) {
                str.deleteCharAt(i);
                str.deleteCharAt(i);

                if (i > 0) { i--; }
            } else {
                i++;
            }
        }

        return str.length();
    }
}