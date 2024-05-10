// Return true if it is a palindrome

class Solution {
    public boolean isPalindrome(String str) {
        StringBuilder phase = new StringBuilder();

        for (char c : str.toCharArray()) {
            if (c >= 'a' && c <= 'z' || c >= '0' && c <= '9') { phase.append(c); } 
            else if (c >= 'A' && c <= 'Z') { phase.append((char) (c + 32)); }
        }

        return phase.toString().equals(phase.reverse().toString());
    }
}
