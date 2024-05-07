class Solution {
    public String findLatestTime(String s) {
        StringBuilder ans = new StringBuilder(s);

        if (ans.charAt(0) == 63) {
            ans.setCharAt(0, (ans.charAt(1) <= 49 || ans.charAt(1) == 63) ? '1' : '0');
        }

        if (ans.charAt(1) == 63) {
            ans.setCharAt(1, (ans.charAt(0) == 49) ? '1' : '9');
        }

        if (ans.charAt(3) == 63) {
            ans.setCharAt(3, '5');
        }

        if (ans.charAt(4) == 63) {
            ans.setCharAt(4, '9');
        }

        return ans.toString();
    }
}
