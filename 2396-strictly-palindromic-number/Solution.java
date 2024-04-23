// Return true if n is strictly palindromic and false otherwise

class Solution {
    public boolean isStrictlyPalindromic(int n) {
        for (int i = 2; i <= n - 2; i++) {
            StringBuilder num = new StringBuilder(Integer.toString(n, i));

            if (num.compareTo(num.reverse()) == 0) {
                return false;
            }
        }

        return true;
    }
}
