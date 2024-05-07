// Return an integer num in  string of its base 7 representation

class Solution {
    public String convertToBase7(int num) {
        if (num == 0) { return "0"; }

        StringBuilder base7 = new StringBuilder();
        
        for (int n = (num < 0) ? num * -1 : num; n > 0; n /= 7) {
            base7.append((char) (n % 7 + '0'));
        }

        base7.reverse();

        if (num < 0) { return "-" + base7.toString(); }

        return base7.toString();
    }
}

// return Integer.toString(num, 7);
