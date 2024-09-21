// Converts a string to a 32-bit signed integer

class Solution {
    public int myAtoi(String s) {
        StringBuilder num = new StringBuilder();

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == ' ') { continue; }

            if (s.charAt(i) == '.' || Character.isLetter(s.charAt(i))) { break; }

            if (s.charAt(i) == '-' || s.charAt(i) == '+') { num.append(s.charAt(i++)); }

            while (i < s.length() && s.charAt(i) == '0') {
                i++;
            }

            while (i < s.length() && Character.isDigit(s.charAt(i))) {
                num.append(s.charAt(i++));
            }

            break;
        }

        if (num.length() == 0 || num.toString().equals("+") || num.toString().equals("-")) { return 0; }

        if (num.length() > 11) {
            if (num.charAt(0) == '-') { return Integer.MIN_VALUE; }

            return Integer.MAX_VALUE;
        }

        if (num.length() >= 10) {
            long temp = Long.parseLong(num.toString());

            if (temp > Integer.MAX_VALUE) { return Integer.MAX_VALUE; }

            if (temp < Integer.MIN_VALUE) { return Integer.MIN_VALUE; }
        }

        return Integer.parseInt(num.toString());
    }
}