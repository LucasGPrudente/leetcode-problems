// Return the sum of all digits with their corresponding sign

class Solution {
    public int alternateDigitSum(int n) {
        String num = String.valueOf(n);
        int ans = 0;

        int x = 0;
        while (x < num.length()) {
            ans += num.charAt(x++) - '0';

            if (x >= num.length()) { break; }

            ans -= num.charAt(x++) - '0';
        }

        return ans;
    }
}
