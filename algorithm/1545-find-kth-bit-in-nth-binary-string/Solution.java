// Return the k-th bit in Sn

class Solution {
    public char findKthBit(int n, int k) {
        StringBuilder str = new StringBuilder("0");

        while (n > 1) {
            String tmp = reverse(invert(str.toString().toCharArray()));
            str.append("1").append(tmp);
            n--;
        }

        return str.charAt(k - 1);
    }

    public char[] invert(char[] chr) {
        for (int i = 0; i < chr.length; i++) {
            chr[i] = (chr[i] == '0') ? '1' : '0';
        }

        return chr;
    }

    public String reverse(char[] chr) {
        for (int i = 0, j = chr.length - 1; i < j; i++, j--) {
            char tmp = chr[i];
            chr[i] = chr[j];
            chr[j] = tmp;
        }

        return String.valueOf(chr);
    }
}