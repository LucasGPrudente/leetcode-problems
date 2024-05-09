// Return the length of the last word in the string

class Solution {
    public int lengthOfLastWord(String s) {
        String str = s.trim();
        int l = 0;

        for (int i = str.length() - 1; i >= 0; i--) {
            if (str.charAt(i) == ' ') {
                break;
            }

            l++;
        }

        return l;
    }
}
